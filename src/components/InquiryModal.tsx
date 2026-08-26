import React, { useState, useId } from 'react';
import { InquiryFormData } from '../types';
import { X, Send, CheckCircle2, MessageCircle, Mail, Building2, Calendar, ShieldCheck } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle?: string;
  initialTopic?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  propertyTitle = '',
  initialTopic = '',
}) => {
  const currentTopic = propertyTitle || initialTopic;
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState<InquiryFormData>({
    propertyTitle: currentTopic,
    name: '',
    email: '',
    phone: '',
    preferredChannel: 'WhatsApp',
    inquiryType: currentTopic ? 'Schedule Private Viewing' : 'Request Investor Pack & Floorplans',
    budgetRange: '€500k - €1.5M',
    timeline: 'Immediate (1-3 months)',
    notes: '',
  });

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const inqTypeId = useId();
  const budgetId = useId();
  const timelineId = useId();
  const notesId = useId();

  if (!isOpen) return null;

  const targetEmail = '547469@gmail.com';

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`[Direct Property Inquiry] ${formData.propertyTitle || 'Limassol Flagship Portfolio'} - ${formData.name}`);
    const body = encodeURIComponent(
      `Direct Property Request Details:\n` +
      `----------------------------------------\n` +
      `Property / Interest: ${formData.propertyTitle || 'Direct Limassol Portfolio'}\n` +
      `Full Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone / WhatsApp: ${formData.phone}\n` +
      `Preferred Contact: ${formData.preferredChannel}\n` +
      `Inquiry Purpose: ${formData.inquiryType}\n` +
      `Budget Range: ${formData.budgetRange}\n` +
      `Timeline: ${formData.timeline}\n` +
      `Commission: 0% Direct Developer Terms\n` +
      `Questions / Notes: ${formData.notes || 'None specified'}\n` +
      `----------------------------------------\n` +
      `Sent via Another Cyprus Direct Developer Portal`
    );
    return `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Trigger direct mail client in background if supported
    try {
      const link = document.createElement('a');
      link.href = generateMailtoLink();
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
    } catch {
      // Handled gracefully in UI
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-xl shadow-2xl border border-[#E5E5DC] overflow-hidden my-auto max-h-[94vh] flex flex-col text-[#2C2C2C]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1A365D] text-white px-6 py-5 flex items-center justify-between border-b border-[#132A4B]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center text-[#C29B61]">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif italic text-white font-bold">
                Direct Developer Request
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-[#C29B61] font-mono font-medium">
                0% Commission • Direct Confidential Transmission
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#FBF8F2] border border-[#C29B61] text-[#1A365D] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#C29B61]" />
              </div>
              <h4 className="text-2xl font-serif italic text-[#1A365D] font-bold">
                Inquiry Successfully Prepared
              </h4>
              <p className="text-[#555555] text-sm max-w-md mx-auto leading-relaxed font-light">
                Thank you, <strong className="text-[#1A365D] font-bold">{formData.name || 'Valued Investor'}</strong>. Your request for <strong className="text-[#1A365D] font-bold">{formData.propertyTitle || 'the development portfolio'}</strong> has been generated for direct submission to the master building team with <strong>0% buyer commission</strong>.
              </p>

              <div className="p-4 bg-[#F9F9F6] border border-[#E5E5DC] text-left text-xs font-mono space-y-1.5 text-[#2C2C2C]">
                <div className="flex items-center justify-between border-b border-[#E5E5DC] pb-1.5">
                  <span className="text-[#8A8A8A]">Channel:</span>
                  <span className="text-[#1A365D] font-bold">Direct Developer Desk</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[#8A8A8A]">Subject:</span>
                  <span className="text-[#2C2C2C]">{formData.propertyTitle || 'Limassol Properties'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8A8A8A]">Preferred Channel:</span>
                  <span className="text-[#1A365D] font-bold">{formData.preferredChannel}</span>
                </div>
              </div>

              <div className="pt-3 flex flex-col gap-2.5 max-w-sm mx-auto">
                <a
                  href={generateMailtoLink()}
                  className="w-full py-3.5 bg-[#1A365D] hover:bg-[#132A4B] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#C29B61]" />
                  <span>Transmit Direct Email</span>
                </a>

                <a
                  href={`https://wa.me/35796373089?text=Hello%2C%20I%20have%20submitted%20a%20direct%20inquiry%20for%20${encodeURIComponent(
                    formData.propertyTitle || 'the Limassol Portfolio'
                  )}%20(Contact%3A%20${encodeURIComponent(formData.name)}%2C%20Phone%3A%20${encodeURIComponent(formData.phone)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#FBF8F2] hover:bg-[#f3ebe0] text-[#1A365D] border border-[#C29B61] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#C29B61]" />
                  <span>Connect on WhatsApp (+357 96 373089)</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="w-full py-2.5 text-[#8A8A8A] hover:text-[#2C2C2C] text-xs uppercase tracking-wider font-medium transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {currentTopic && (
                <div className="p-3 bg-[#F9F9F6] border border-[#E5E5DC] text-xs text-[#2C2C2C] flex items-center justify-between gap-2 font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#C29B61] flex-shrink-0" />
                    <span>
                      Selected Asset: <strong className="text-[#1A365D] font-bold">{currentTopic}</strong>
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#C29B61] font-bold uppercase">0% Commission</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor={nameId} className="text-[10px] uppercase tracking-wider font-bold text-[#555555]">Full Name *</label>
                  <input
                    id={nameId}
                    type="text"
                    required
                    placeholder="e.g. David Ross"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F9F9F6] border border-[#D4D4C8] px-3.5 py-2.5 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1A365D] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor={phoneId} className="text-[10px] uppercase tracking-wider font-bold text-[#555555]">Phone / WhatsApp *</label>
                  <input
                    id={phoneId}
                    type="tel"
                    required
                    placeholder="+357 / +44 / +971..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F9F9F6] border border-[#D4D4C8] px-3.5 py-2.5 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1A365D] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor={emailId} className="text-[10px] uppercase tracking-wider font-bold text-[#555555]">Email Address *</label>
                  <input
                    id={emailId}
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F9F9F6] border border-[#D4D4C8] px-3.5 py-2.5 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1A365D] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor={inqTypeId} className="text-[10px] uppercase tracking-wider font-bold text-[#555555]">Request Type</label>
                  <select
                    id={inqTypeId}
                    value={formData.inquiryType}
                    onChange={(e) =>
                      setFormData({ ...formData, inquiryType: e.target.value as InquiryFormData['inquiryType'] })
                    }
                    className="w-full bg-[#F9F9F6] border border-[#D4D4C8] px-3.5 py-2.5 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1A365D] transition-colors cursor-pointer"
                  >
                    <option value="Schedule Private Viewing">Schedule On-Site Private Viewing</option>
                    <option value="Request Investor Pack & Floorplans">Request CAD Floorplans & ROI Dossier</option>
                    <option value="Permanent Residency Consultation">Cyprus PR 6.2 & Tax Consultation</option>
                    <option value="General Inquiry">Direct Developer Acquisition Terms</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor={budgetId} className="text-[10px] uppercase tracking-wider font-bold text-[#555555]">Investment Budget</label>
                  <select
                    id={budgetId}
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-[#F9F9F6] border border-[#D4D4C8] px-3.5 py-2.5 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1A365D] transition-colors cursor-pointer"
                  >
                    <option value="€480k - €1M">€480k - €1M (Sea-View Suites / PR 6.2)</option>
                    <option value="€1.43M - €2M">€1.43M - €2M (Sanctuary Luxury Villas)</option>
                    <option value="€8.7M+">€8.7M+ (Prime Commercial Office Hub)</option>
                    <option value="Multi-Unit Portfolio">Multi-Unit Institutional Portfolio</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor={timelineId} className="text-[10px] uppercase tracking-wider font-bold text-[#555555]">Acquisition Timeline</label>
                  <select
                    id={timelineId}
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#F9F9F6] border border-[#D4D4C8] px-3.5 py-2.5 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1A365D] transition-colors cursor-pointer"
                  >
                    <option value="Immediate (1-3 months)">Immediate (1-3 months)</option>
                    <option value="Next 3-6 months">Next 3-6 months</option>
                    <option value="Completion 2026/2027">Matching 2026/2027 Handover</option>
                    <option value="Exploring Options">Market Exploration</option>
                  </select>
                </div>
              </div>

              {/* Preferred Contact Channel */}
              <div className="space-y-1.5 pt-1">
                <label className="text-[10px] uppercase tracking-wider font-bold text-[#555555] block">Preferred Response Channel</label>
                <div className="grid grid-cols-4 gap-2">
                  {(['WhatsApp', 'Phone Call', 'Email', 'Telegram'] as const).map((channel) => (
                    <button
                      key={channel}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredChannel: channel })}
                      className={`py-2 px-2 text-xs transition-all cursor-pointer ${
                        formData.preferredChannel === channel
                          ? 'bg-[#1A365D] text-white font-bold'
                          : 'bg-[#F9F9F6] text-[#555555] border border-[#E5E5DC] hover:text-[#1A365D]'
                      }`}
                    >
                      {channel}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label htmlFor={notesId} className="text-[10px] uppercase tracking-wider font-bold text-[#555555]">Specific Requirements / Inquiries</label>
                <textarea
                  id={notesId}
                  rows={2}
                  placeholder="e.g. Request full architectural drawings, payment milestones, VAT details..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#F9F9F6] border border-[#D4D4C8] px-3.5 py-2 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1A365D] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#1A365D] hover:bg-[#132A4B] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#C29B61]" />
                  <span>Prepare Direct Request</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-[11px] text-[#8A8A8A] font-light border-t border-[#E5E5DC]">
                <div className="flex items-center gap-1.5 text-[#1A365D] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C29B61]" />
                  <span>0% Buyer Commission • Direct from Developer</span>
                </div>
                <div className="text-[#8A8A8A] font-mono text-[10px]">
                  Opens your email app for final sending
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
