import {analyticsCode, anonymizeIp} from '@params';

let dataLayer;

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

function gtag() {
  dataLayer.push(arguments);
}

/**
 * Function that tracks a click on an outbound link in Analytics.
 *
 * This function takes a valid URL string as an argument, optional
 * 'isBlank' argument, and uses that URL string as the event label.
 *
 * Setting the transport method to 'beacon' lets the hit be sent using
 * navigator.sendBeacon() in browser that support it. The navigator.sendBeacon()
 * method asynchronously sends an HTTP POST request containing a small amount of
 * data to a web server.
 */
function trackOutboundLink(url, isBlank = false) {
  gtag('event', 'click', {
    'event_label': url,
    'event_category': 'outbound',
    'transport_type': 'beacon',
    'event_callback': () => {
      if (!isBlank) {
        document.location = url;
      }
    }
  });
}

function trackInternalEvent(label, category) {
  gtag('event', 'click', {
    'event_label': label,
    'event_category': category
  });
}

function onClickCallback(event) {
  const element = event.target;
  const className = element.getAttribute('class');

  // Track 'Back to top' click
  if (className === 'top-of-site-link') {
    trackInternalEvent('Back to top', 'navigation');
    return;
  }

  // Track menu show
  if (className === 'sidebar-toggle') {
    trackInternalEvent('Sidebar Toggle', 'navigation');
    return;
  }

  // Track annotation usage
  if (className === 'hypothesis-container') {
    trackInternalEvent('Annotation open', 'navigation');
    return;
  }

  // Track feeds click
  if (className === 'menu-feeds-item') {
    const feedType = element.dataset.feedType;
    trackInternalEvent(`Get ${feedType}`, 'feed');
    return;
  }

  // Track only external URLs.
  if ((element.tagName !== 'A') || (element.host === window.location.host)) {
    return;
  }

  // Track outbound link click
  trackOutboundLink(
    event.target,
    event.target.getAttribute('target') === '_blank'
  );
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

    dataLayer = window.dataLayer = window.dataLayer || [];
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
