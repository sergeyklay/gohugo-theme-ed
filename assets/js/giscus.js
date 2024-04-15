import {
  category,
  categoryId,
  emitMetadata,
  inputPosition,
  lang,
  mapping,
  reactionsEnabled,
  repo,
  repoId,
  strict,
  theme
} from '@params';

// The article I found interesting and might be used as a reference
// for comments theming in the future: https://www.brycewray.com/posts/2023/08/making-giscus-less-gabby/
document.addEventListener('DOMContentLoaded', function () {
  const giscusAttributes = {
    'src': 'https://giscus.app/client.js',
    'data-repo': repo,
    'data-repo-id': repoId,
    'data-category': category,
    'data-category-id': categoryId,
    'data-mapping': mapping,
    'data-strict': strict,
    'data-reactions-enabled': reactionsEnabled,
    'data-emit-metadata': emitMetadata,
    'data-input-position': inputPosition,
    'data-theme': theme,
    'data-lang': lang,
    'crossorigin': 'anonymous',
    'async': ''
  };

  // Dynamically create script tag
  const giscusScript = document.createElement('script');
  Object.entries(giscusAttributes).forEach(([key, value]) => giscusScript.setAttribute(key, value));
  document.getElementById('giscus').appendChild(giscusScript);
});
