import {analyticsCode, anonymizeIp} from '@params';

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

if (isDoNotTrackEnabled()) {
  // Skip analytics for users with Do Not Track enabled
  console.info('[TRACKING]: Respecting DNT with respect to analytics...'); // eslint-disable-line no-console
} else {
  // Known DNT values not set, so we will assume it's off.
  if (analyticsCode) {
    (function () {
      // New Google Site Tag (gtag.js) tagging/analytics framework
      // See: https://developers.google.com/gtagjs
      const baseUrl = 'https://www.googletagmanager.com';
      const params = new URLSearchParams({
        id: analyticsCode
      });

      let script = document.createElement('script');
      script.src = baseUrl + '/gtag/js?' + params.toString();
      script.type = 'text/javascript';
      script.async = true;

      document.getElementsByTagName('head')[0].appendChild(script);
    }());

    let dataLayer = window.dataLayer = window.dataLayer || [];

    function gtag() { // eslint-disable-line no-inner-declarations
      dataLayer.push(arguments);
    }

    function trackOutboundLink(url, target) { // eslint-disable-line no-inner-declarations
      gtag('event', 'click', {
        'event_category': 'outbound',
        'event_label': url,
        'transport_type': 'beacon',
        'event_callback': function () {
          if (target !== '_blank') {
            document.location = url;
          }
        }
      });
    }

    function trackInternalEvent(label, category) { // eslint-disable-line no-inner-declarations
      gtag('event', 'click', {
        'event_label': label,
        'event_category': category
      });
    }

    function onClickCallback(event) { // eslint-disable-line no-inner-declarations
      const className = event.target.getAttribute('class');
      if (className === 'sidebar-toggle') {
        trackInternalEvent('Sidebar Toggle', 'navigation');
        return;
      }

      // Track only external URLs.
      if ((event.target.tagName !== 'A') || (event.target.host === window.location.host)) {
        return;
      }

      // Send GA event.
      trackOutboundLink(
        event.target,
        event.target.getAttribute('target')
      );
    }

    gtag('js', new Date());

    const month = 30 * 24 * 60 * 60; // 30 days, in seconds

    // Setup the project analytics code and send a pageview
    gtag('config', analyticsCode, {
      'anonymize_ip': anonymizeIp,
      'cookie_expires': month
    });

    gtag('set', {
      'cookie_flags': 'SameSite=None;Secure'
    });

    // Outbound link tracking.
    document.addEventListener('click', onClickCallback, false);
  }
}
