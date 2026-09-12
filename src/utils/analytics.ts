export type ContactChannel = 'whatsapp' | 'phone' | 'email';

function hasAnalyticsConsent() {
  try {
    if (localStorage.getItem('anothercyprus_analytics_consent') === 'accepted') return true;
  } catch {
    // Fall through to session storage.
  }

  try {
    return sessionStorage.getItem('anothercyprus_analytics_consent') === 'accepted';
  } catch {
    return false;
  }
}

export function trackContactClick(channel: ContactChannel, projectId = 'portfolio') {
  if (!hasAnalyticsConsent()) return;

  try {
    window.gtag?.('event', 'contact_click', {
      contact_channel: channel,
      project_id: projectId,
      page_type: 'portfolio',
    });
  } catch {
    // Analytics must never interrupt a visitor's contact action.
  }
}
