import {gtmCode, respectDoNotTrack} from '@params';

/**
 * Check if the Do Not Track setting is enabled.
 *
 * @returns {boolean}
 */
function isDoNotTrackEnabled() {
  if (typeof window === 'undefined') {
    return false;
  }
  const {doNotTrack, navigator} = window;

  // Do Not Track Settings across browsers
  const dnt = (doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack);

  if (!dnt) {
    return false;
  }

  return dnt === true ||
    dnt === 1 ||
    dnt === 'yes' ||
    (typeof dnt === 'string' && dnt.charAt(0) === '1');
}

if (respectDoNotTrack && isDoNotTrackEnabled()) {
  // Skip analytics for users with Do Not Track enabled
  console.info('[TRACKING]: Respecting DNT with respect to analytics...'); // eslint-disable-line no-console
} else {
  // Known DNT values not set, so we will assume it's off.
  if (gtmCode) {
    (function () {
      const baseUrl = 'https://www.googletagmanager.com';
      const params = new URLSearchParams({
        id: gtmCode,
        l: 'dataLayer'
      });

      const script = document.createElement('script');
      script.src = `${baseUrl}/gtm.js?${params.toString()}`;
      script.type = 'text/javascript';
      script.async = true;

      document.getElementsByTagName('head')[0].appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
    }());
  }
}
