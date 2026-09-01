export type LeadChannel = 'whatsapp' | 'phone' | 'email';

export function trackLead(channel: LeadChannel, propertyName = 'Limassol property portfolio') {
  window.gtag?.('event', 'generate_lead', {
    lead_channel: channel,
    property_name: propertyName,
  });
}
