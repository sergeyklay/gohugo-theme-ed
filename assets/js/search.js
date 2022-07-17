import {searchConfig, i18n} from '@params';

let pagesIndex, searchIndex;

async function initSearchIndex() {
  try {
    const response = await fetch(searchConfig.indexURI);

    if (response.status !== 200) return;

    pagesIndex = await response.json();

    // Create the lunr index for the search
    searchIndex = lunr(function () { // eslint-disable-line no-undef
      // Set up the pipeline for indexing content in multiple languages
      if (Array.isArray(searchConfig.lunrLanguages)) {
        let langs = new Set();
        searchConfig.lunrLanguages.forEach(item => langs.add(item));
        langs.add('en');
        const pipeline = lunr.multiLanguage( // eslint-disable-line no-undef
          ...langs
        );

        this.use(pipeline);
      }

      this.field('objectID');
      this.field('title');
      this.field('categories');
      this.field('tags');
      this.field('content');

      this.ref('href');

      pagesIndex.forEach((page) => this.add(page));
    });
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  }
}

function handleSearchQuery(event) {
  event.preventDefault();

  const query = document.getElementById('search').value.trim().toLowerCase();
  if (!query) {
    hideSearchResults();
    return;
  }

  const results = searchSite(query);
  if (!results.length) {
    displayErrorMessage(i18n.noResults);
    hideSearchResults();
    return;
  }

  hideErrorMessage();
  renderSearchResults(query, results);
}

function searchSite(query) {
  const originalQuery = query;
  query = getLunrSearchQuery(query);
  let results = getSearchResults(query);

  if (results.length > 0) {
    return results;
  }

  if (query !== originalQuery) {
    return getSearchResults(originalQuery);
  }

  return [];
}

function getSearchResults(query) {
  if (typeof searchIndex === 'undefined') return [];

  return searchIndex.search(query).flatMap((hit) => {
    if (hit.ref === 'undefined') return [];
    let pageMatch = pagesIndex.filter((page) => page.href === hit.ref)[0];
    pageMatch.score = hit.score;
    return [pageMatch];
  });
}

function getLunrSearchQuery(query) {
  const searchTerms = query.split(' ');
  if (searchTerms.length === 1) {
    return query;
  }
  query = '';
  for (const term of searchTerms) {
    query += `+${term} `;
  }
  return query.trim();
}

function displayErrorMessage(message) {
  const searchContainer = document.querySelector('.search-container');
  searchContainer.classList.add('form-item-error');
  searchContainer.classList.remove('focused');
  document.querySelector('.search-error-message').innerHTML = message;
  document.querySelector('.search-error').classList.remove('hide-element');
}

function hideErrorMessage() {
  const searchContainer = document.querySelector('.search-container');
  searchContainer.classList.add('focused');
  searchContainer.classList.remove('form-item-error');
  document.querySelector('.search-error').classList.add('hide-element');
  document.querySelector('.search-error-message').innerHTML = '';
}

function hideSearchResults() {
  document.getElementById('site-search').classList.remove('expanded');
  document.getElementById('search-results').classList.add('hide-element');
}

function renderSearchResults(query, results) {
  clearSearchResults();
  updateSearchResults(query, results);
  showSearchResults();
  scrollToTop();
}

function clearSearchResults() {
  document.getElementById('search-results-body').innerHTML = '';
  document.getElementById('results-count').innerHTML = '';
}

function updateSearchResults(query, results) {
  document.getElementById('search-results-body').innerHTML = results
    .map((hit) => `
    <article class="post" data-score="${hit.score.toFixed(2)}">
      <header>
        <h2 class="post-title">
        <a href="${hit.href}?utm_source=search" class="search-result-page-title">${hit.title}</a>
        </h2>
      </header>
      <p class="post-content">${createSearchResultBlurb(query, hit.content)}</p>
    </article>
    `
    )
    .join('');

  const searchResultListItems = document.querySelectorAll('#search-results-body article');
  document.getElementById('results-count').innerHTML = searchResultListItems.length;
}

function createSearchResultBlurb(query, pageContent) {
  // g: Global search
  // m: Multi-line search
  // i: Case-insensitive search
  const searchQueryRegex = new RegExp(createQueryStringRegex(query), 'gmi');

  // Since the blurb is comprised of full sentences containing any search
  // term, we need a way to identify where each sentence begins/ends. This
  // regex will be used to produce a list of all sentences from the page
  // content.
  const sentenceBoundaryRegex = /\b\.\s/gm;

  const searchQueryHits = Array.from(
    pageContent.matchAll(searchQueryRegex),
    (m) => m.index
  );

  const sentenceBoundaries = Array.from(
    pageContent.matchAll(sentenceBoundaryRegex),
    (m) => m.index
  );

  let parsedSentence = '';
  let searchResultText = '';
  let lastEndOfSentence = 0;
  for (const hitLocation of searchQueryHits) {
    if (hitLocation > lastEndOfSentence) {
      for (let i = 0; i < sentenceBoundaries.length; i++) {
        if (sentenceBoundaries[i] > hitLocation) {
          const startOfSentence = i > 0 ? sentenceBoundaries[i - 1] + 1 : 0;
          const endOfSentence = sentenceBoundaries[i];
          lastEndOfSentence = endOfSentence;
          parsedSentence = pageContent.slice(startOfSentence, endOfSentence).trim();
          searchResultText += `${parsedSentence} ... `;
          break;
        }
      }
    }
    const searchResultWords = tokenize(searchResultText);
    const pageBreakers = searchResultWords.filter((word) => word.length > 50);
    if (pageBreakers.length > 0) {
      searchResultText = fixPageBreakers(searchResultText, pageBreakers);
    }
    if (searchResultWords.length >= searchConfig.maxSummaryLength) break;
  }
  return ellipsize(searchResultText, searchConfig.maxSummaryLength).replace(
    searchQueryRegex,
    '<span class="search-item">$&</span>'
  );
}

function createQueryStringRegex(query) {
  let escaped = RegExp.escape(query);
  return escaped.split(' ').length === 1 ? `(${escaped})` : `(${escaped.split(' ').join('|')})`;
}

function tokenize(input) {
  // This is a simple regex that produces a list of words from the text
  // it is applied to. This will be used to check the number of total words
  // in the blurb as it is being built.
  const wordRegex = /\b(\w*)[\W|\s|\b]?/gm;

  const wordMatches = Array.from(input.matchAll(wordRegex), (m) => m);
  return wordMatches.map((m) => ({
    word: m[0],
    start: m.index,
    end: m.index + m[0].length,
    length: m[0].length
  }));
}

function fixPageBreakers(input, largeWords) {
  largeWords.forEach((word) => {
    const chunked = chunkify(word.word, 20);
    input = input.replace(word.word, chunked);
  });
  return input;
}

function chunkify(input, chunkSize) {
  let output = '';
  let totalChunks = (input.length / chunkSize) | 0;
  let lastChunkIsUneven = input.length % chunkSize > 0;
  if (lastChunkIsUneven) {
    totalChunks += 1;
  }
  for (let i = 0; i < totalChunks; i++) {
    let start = i * chunkSize;
    let end = start + chunkSize;
    if (lastChunkIsUneven && i === totalChunks - 1) {
      end = input.length;
    }
    output += input.slice(start, end) + ' ';
  }
  return output;
}

function showSearchResults() {
  document.getElementById('search-results').classList.remove('hide-element');
  document.getElementById('site-search').classList.remove('expanded');
}

function scrollToTop() {
  const toTopInterval = setInterval(function () {
    const supportedScrollTop = document.body.scrollTop > 0 ? document.body : document.documentElement;
    if (supportedScrollTop.scrollTop > 0) {
      supportedScrollTop.scrollTop = supportedScrollTop.scrollTop - 50;
    }
    if (supportedScrollTop.scrollTop < 1) {
      clearInterval(toTopInterval);
    }
  }, 10);
}

function ellipsize(input, maxLength) {
  const words = tokenize(input);
  if (words.length <= maxLength) {
    return input;
  }
  return input.slice(0, words[maxLength].end) + '...';
}

// RegExp.escape() polyfill
//
// For more see:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
// - https://github.com/benjamingr/RegExp.escape/issues/37
if (!Object.prototype.hasOwnProperty.call(RegExp, 'escape')) {
  RegExp.escape = function(str) {
    // $& means the whole matched string
    return str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
  };
}

// 'string'.matchAll(str, regex) polyfill
if (!String.prototype.matchAll) {
  String.prototype.matchAll = function (regex) {
    function ensureFlag(flags, flag) {
      return flags.includes(flag) ? flags : flags + flag;
    }
    function* matchAll(str, regex) {
      const localCopy = new RegExp(regex, ensureFlag(regex.flags, 'g'));
      let match;
      while ((match = localCopy.exec(str))) {
        match.index = localCopy.lastIndex - match[0].length;
        yield match;
      }
    }
    return matchAll(this, regex);
  };
}

initSearchIndex();
document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search');

  if (searchForm === null || searchInput === null) {
    return;
  }

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  searchInput.addEventListener('keyup', (e) => handleSearchQuery(e));
  searchInput.addEventListener('input', (e) => {
    if (!e.currentTarget.value) {
      hideSearchResults();
    }
  });
});
