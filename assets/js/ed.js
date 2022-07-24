document.addEventListener('DOMContentLoaded', function () {
  // 'Back to top' logic
  const intersectionObserver = new IntersectionObserver(function(entries) {
    const topBtn = document.querySelector('.top-of-site-link');
    if (topBtn === null) return;

    topBtn.dataset.visible = entries[0].boundingClientRect.y < 0;
  });

  const topAnchor = document.querySelector('#top-of-site-anchor');
  if (topAnchor !== null) {
    intersectionObserver.observe(topAnchor);
  }

  // Annotation support
  const hypothesisContainer = document.querySelector('.hypothesis-container');
  if (hypothesisContainer !== null) {
    hypothesisContainer.addEventListener('click', () => {
      let script = document.createElement('script');
      script.setAttribute('src', 'https://hypothes.is/embed.js');
      script.type = 'text/javascript';
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }
});
