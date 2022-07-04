'use strict';

let pagesIndex, searchIndex;

// Maximum length (in words) of each text blurb. You can change this
// value if you find that 100 is too short or too long for your taste.
const MAX_SUMMARY_LENGTH = 100;

// Since the blurb is comprised of full sentences containing any search
// term, we need a way to identify where each sentence begins/ends. This
// regex will be used to produce a list of all sentences from the page
// content.
const SENTENCE_BOUNDARY_REGEX = /\b\.\s/gm;

// This is a simple regex that produces a list of words from the text
// it is applied to. This will be used to check the number of total words
// in the blurb as it is being built.
const WORD_REGEX = /\b(\w*)[\W|\s|\b]?/gm;

async function initSearchIndex() {
  try {
    const response = await fetch('/index.json');
    pagesIndex = await response.json();
    searchIndex = lunr(function () { // eslint-disable-line no-undef
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

  const query = $('#search').val().trim().toLowerCase();
  if (!query) {
    displayErrorMessage('Please enter a search term.');
    return;
  }

  const results = searchSite(query);
  if (!results.length) {
    displayErrorMessage('No results found.');
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
  $('.search-container').addClass('form-item-error');
  $('.search-error-message').html(message);
  $('.search-container').removeClass('focused');
  $('.search-error').removeClass('hide-element');
}

function hideErrorMessage() {
  $('.search-container').removeClass('form-item-error');
  $('.search-error-message').empty();
  $('.search-container').addClass('focused');
  $('.search-error').addClass('hide-element');
}

function handleClearSearchButtonClicked() {
  hideSearchResults();
  hideErrorMessage();
  clearSearchResults();
  clearAndFocusSearchInput();
}

function hideSearchResults() {
  $('#clear-search-results').addClass('hide-element');
  $('#site-search').removeClass('expanded');
  $('#search-results').addClass('hide-element');
}

function renderSearchResults(query, results) {
  clearSearchResults();
  updateSearchResults(query, results);
  showSearchResults();
  scrollToTop();
}

function clearSearchResults() {
  $('#query').empty();
  $('#search-results-body').empty();
  $('#results-count').empty();
  $('#results-count-text').empty();
}

function clearAndFocusSearchInput() {
  $('.search-form-input').val('').focus();
}

function updateSearchResults(query, results) {
  $('#query').html(query);
  $('#search-results-body').html(results.map((hit) => `
  <article class="post" data-score="${hit.score.toFixed(2)}">
    <header>
      <h2 class="post-title">
      <a href="${hit.href}?utm_source=search" class="search-result-page-title">${hit.title}</a>
      </h2>
    </header>
    <p class="post-content">${createSearchResultBlurb(query, hit.content)}</p>
  </article>
  `
  ).join(''));

  const searchResultListItems = $('#search-results-body article');
  $('#results-count').html(searchResultListItems.length);
  $('#results-count-text').html(searchResultListItems.length > 1 ? 'results' : 'result');
}

function createSearchResultBlurb(query, pageContent) {
  const searchQueryRegex = new RegExp(createQueryStringRegex(query), 'gmi');
  const searchQueryHits = Array.from(
    pageContent.matchAll(searchQueryRegex),
    (m) => m.index
  );
  const sentenceBoundaries = Array.from(
    pageContent.matchAll(SENTENCE_BOUNDARY_REGEX),
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
    if (searchResultWords.length >= MAX_SUMMARY_LENGTH) break;
  }
  return ellipsize(searchResultText, MAX_SUMMARY_LENGTH).replace(
    searchQueryRegex,
    '<span class="search-item">$&</span>'
  );
}

function createQueryStringRegex(query) {
  const searchTerms = query.split(' ');
  if (searchTerms.length === 1) {
    return query;
  }
  query = '';
  for (const term of searchTerms) {
    query += `${term}|`;
  }
  query = query.slice(0, -1);
  return `(${query})`;
}

function tokenize(input) {
  const wordMatches = Array.from(input.matchAll(WORD_REGEX), (m) => m);
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
  $('#search-results').removeClass('hide-element');
  $('#site-search').removeClass('expanded');
  $('#clear-search-results').removeClass('hide-element');
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

$(function() {
  const searchForm = $('#search-form');
  const searchInput = $('#search');

  if (searchForm.length === 0 || searchInput.length === 0) {
    return;
  }

  initSearchIndex();

  searchForm.submit((e) => {
    e.preventDefault();
  });

  searchInput.on('keypress', (e) => {
    if (e.which === 13) {
      handleSearchQuery(e);
    }
  });

  $('#clear-search-results').on('click', () => handleClearSearchButtonClicked());
});
