import React, { useEffect, useId, useState } from 'react';
import { X, MessageCircle, Building2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackLead } from '../utils/analytics';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle?: string;
  initialTopic?: string;
}

const getAttribution = () => {
  const params = new URLSearchParams(window.location.search);
  const values = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'gclid', 'fbclid']
    .map((key) => params.get(key) ? `${key}=${params.get(key)}` : '')
    .filter(Boolean);
  return values.join(' | ') || document.referrer || 'direct';
};

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, propertyTitle = '', initialTopic = '' }) => {
  const { language } = useLanguage();
  const isRussian = language === 'ru';
  const currentTopic = propertyTitle || initialTopic || 'Limassol property portfolio';
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [timeline, setTimeline] = useState('1–3 months');
  const [notes, setNotes] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const nameId = useId();
  const phoneId = useId();
  const timelineId = useId();
  const notesId = useId();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = [
      'Hello, I would like current availability, plans and purchase terms.',
      `Property: ${currentTopic}`,
      `Name: ${name}`,
      `Phone / WhatsApp: ${phone}`,
      `Purchase timeframe: ${timeline}`,
      notes ? `Question: ${notes}` : '',
      `Page: ${window.location.href}`,
      `Source: ${getAttribution()}`,
    ].filter(Boolean).join('\n');

    trackLead('whatsapp', currentTopic);
    window.open(`https://wa.me/35796373089?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6" onMouseDown={onClose}>
      <div className="relative bg-white w-full max-w-lg shadow-2xl border border-[#E5E5DC] overflow-hidden" onMouseDown={(e) => e.stopPropagation()}>
        <div className="bg-[#1A365D] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-[#C29B61]" />
            <div>
              <h3 className="text-lg font-serif italic font-bold">Get plans & current availability</h3>
              <p className="text-[10px] uppercase tracking-widest text-[#C29B61]">Direct property request</p>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close" className="p-2 text-white/70 hover:text-white cursor-pointer"><X className="w-5 h-5" /></button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="p-3 bg-[#F9F9F6] border border-[#E5E5DC] text-sm">Selected property: <strong className="text-[#1A365D]">{currentTopic}</strong></div>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="space-y-1.5 text-[10px] uppercase tracking-wider font-bold text-[#555]" htmlFor={nameId}>Name *
              <input id={nameId} required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className="block w-full bg-[#F9F9F6] border border-[#D4D4C8] px-3.5 py-3 text-sm normal-case font-normal tracking-normal focus:outline-none focus:border-[#1A365D]" />
            </label>
            <label className="space-y-1.5 text-[10px] uppercase tracking-wider font-bold text-[#555]" htmlFor={phoneId}>Phone / WhatsApp *
              <input id={phoneId} required type="tel" autoComplete="tel" placeholder="+357…" value={phone} onChange={(e) => setPhone(e.target.value)} className="block w-full bg-[#F9F9F6] border border-[#D4D4C8] px-3.5 py-3 text-sm normal-case font-normal tracking-normal focus:outline-none focus:border-[#1A365D]" />
            </label>
          </div>
          <label className="space-y-1.5 text-[10px] uppercase tracking-wider font-bold text-[#555]" htmlFor={timelineId}>Purchase timeframe
            <select id={timelineId} value={timeline} onChange={(e) => setTimeline(e.target.value)} className="block w-full bg-[#F9F9F6] border border-[#D4D4C8] px-3.5 py-3 text-sm normal-case font-normal tracking-normal focus:outline-none focus:border-[#1A365D]">
              <option>1–3 months</option><option>3–6 months</option><option>6–12 months</option><option>Researching options</option>
            </select>
          </label>
          <label className="space-y-1.5 text-[10px] uppercase tracking-wider font-bold text-[#555]" htmlFor={notesId}>Question (optional)
            <textarea id={notesId} rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} className="block w-full bg-[#F9F9F6] border border-[#D4D4C8] px-3.5 py-3 text-sm normal-case font-normal tracking-normal focus:outline-none focus:border-[#1A365D]" />
          </label>
          <label className="flex items-start gap-2 text-[11px] leading-relaxed text-[#666] cursor-pointer">
            <input type="checkbox" required checked={privacyAccepted} onChange={(event) => setPrivacyAccepted(event.target.checked)} className="mt-0.5 accent-[#1A365D]" />
            <span>{isRussian ? 'Я согласен на обработку моих данных для ответа по этому объекту согласно ' : 'I agree that my details may be used to answer this property request, as explained in the '}<a className="text-[#1A365D] underline" href={isRussian ? '/ru/privacy/' : '/privacy/'} target="_blank" rel="noopener noreferrer">{isRussian ? 'политике конфиденциальности' : 'privacy policy'}</a>.</span>
          </label>
          <button type="submit" className="w-full py-4 bg-[#0A9F62] hover:bg-[#078653] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"><MessageCircle className="w-5 h-5" /> Send request in WhatsApp</button>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#666]"><ShieldCheck className="w-4 h-4 text-[#C29B61]" /> Your details are used only to answer this property request.</div>
        </form>
      </div>
    </div>
  );
};
