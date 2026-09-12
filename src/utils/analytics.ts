export type ContactChannel = 'whatsapp' | 'phone' | 'email';

export function trackContactClick(channel: ContactChannel, projectId = 'portfolio') {
  if (localStorage.getItem('anothercyprus_analytics_consent') !== 'accepted') return;

  window.gtag?.('event', 'contact_click', {
    contact_channel: channel,
    project_id: projectId,
    page_type: 'portfolio',
  });
}
