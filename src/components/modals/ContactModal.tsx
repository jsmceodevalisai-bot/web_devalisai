import React, { useState, useEffect, useRef } from 'react';
import { useContactModal } from '../../context/ContactModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_INFO } from '../../data/landingData';
import { X, Send, CheckCircle2, AlertCircle, MessageCircle, Building2, User, Mail, Phone, FileText } from 'lucide-react';

export const ContactModal: React.FC = () => {
  const { isOpen, closeModal, preselectedProduct, preselectedPlan, preselectedPrice, originPage } = useContactModal();
  const { t } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [reason, setReason] = useState(preselectedProduct || 'Plan Básico');
  const [message, setMessage] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);

  // Sync reason when preselected changes
  useEffect(() => {
    if (preselectedProduct) {
      setReason(preselectedProduct);
    }
  }, [preselectedProduct]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage(t.modal.errorRequired);
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage(t.modal.errorEmail);
      return;
    }

    if (!acceptedPrivacy) {
      setStatus('error');
      setErrorMessage(t.modal.errorPrivacy);
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    // Check for EmailJS environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: fullName,
              from_email: email,
              phone: phone || 'No especificado',
              company: company || 'No especificada',
              reason: reason,
              plan_reference: preselectedPlan || reason,
              price_reference: preselectedPrice || 'A cotizar',
              origin_page: originPage || 'Web Develisai',
              message: message,
            },
          }),
        });

        if (response.ok) {
          setStatus('success');
        } else {
          setStatus('error');
          setErrorMessage(t.modal.errorServer);
        }
      } catch {
        setStatus('error');
        setErrorMessage(t.modal.errorNetwork);
      }
    } else {
      setTimeout(() => {
        setStatus('success');
      }, 700);
    }
  };

  const whatsappMessage = `${t.modal.whatsappGreeting || 'Hola Develisai, me gustaría solicitar una propuesta formal para'} ${reason}${
    preselectedPrice ? ` (${preselectedPrice})` : ''
  }. ${t.modal.fullName || 'Nombre'}: ${fullName || ''}. ${t.modal.company || 'Empresa'}: ${company || ''}. ${t.modal.message || 'Mensaje'}: ${message || ''}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#000]/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#2A3F66] bg-[#0C1527] p-6 sm:p-8 text-[#dae2fd] shadow-2xl shadow-[#00f0ff]/10"
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          aria-label={t.modal.closeAria}
          className="absolute right-5 top-5 rounded-lg p-2 text-[#94A3B8] hover:bg-[#162343] hover:text-[#F8FAFC] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00f0ff]">
            <span>{t.modal.title}</span>
          </div>
          <h2 id="contact-modal-title" className="font-display text-2xl font-bold text-[#F8FAFC] mt-1">
            {t.modal.title}
          </h2>
          <p className="text-xs text-[#94A3B8] mt-1.5">
            {t.modal.subtitle}
          </p>

          {/* Context Banner */}
          {(preselectedProduct || preselectedPlan) && (
            <div className="mt-4 flex items-center justify-between rounded-lg border border-[#1E2D4A] bg-[#111C35] px-4 py-2.5 text-xs">
              <div>
                <span className="text-[#64748B]">{t.modal.selectedProduct} </span>
                <span className="font-semibold text-[#00f0ff]">{preselectedProduct || preselectedPlan}</span>
              </div>
              {preselectedPrice && (
                <div className="font-mono font-bold text-[#F8FAFC] bg-[#1E2D4A] px-2 py-0.5 rounded text-[11px]">
                  {preselectedPrice}
                </div>
              )}
            </div>
          )}
        </div>

        {status === 'success' ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#10B981]/20 text-[#10B981]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-[#F8FAFC]">
              {t.modal.successTitle}
            </h3>
            <p className="text-xs text-[#94A3B8] max-w-md mx-auto leading-relaxed">
              {t.modal.successSubtitle}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive flex items-center gap-2 rounded-lg bg-[#10B981] px-5 py-2.5 text-xs font-bold text-[#060e20]"
              >
                <MessageCircle className="h-4 w-4" />
                {t.modal.whatsappContinue}
              </a>
              <button
                onClick={closeModal}
                className="btn-interactive rounded-lg border border-[#1E2D4A] bg-[#111C35] px-5 py-2.5 text-xs font-semibold text-[#dae2fd] hover:bg-[#162343]"
              >
                {t.modal.backToWeb}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {status === 'error' && (
              <div className="flex items-center gap-2 rounded-lg border border-[#EF4444]/40 bg-[#EF4444]/10 p-3 text-xs text-[#ffb4ab]">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Nombre y Correo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                  {t.modal.fullName} <span className="text-[#00f0ff]">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-[#64748B]" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t.modal.fullNamePlaceholder}
                    className="w-full rounded-lg border border-[#1E2D4A] bg-[#060A12] pl-9 pr-3 py-2.5 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                  {t.modal.email} <span className="text-[#00f0ff]">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-[#64748B]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.modal.emailPlaceholder}
                    className="w-full rounded-lg border border-[#1E2D4A] bg-[#060A12] pl-9 pr-3 py-2.5 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                  />
                </div>
              </div>
            </div>

            {/* Teléfono y Empresa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                  {t.modal.phone} <span className="text-[#64748B] font-normal">({t.modal.optional})</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-[#64748B]" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.modal.phonePlaceholder}
                    className="w-full rounded-lg border border-[#1E2D4A] bg-[#060A12] pl-9 pr-3 py-2.5 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                  {t.modal.company} <span className="text-[#64748B] font-normal">({t.modal.optional})</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 h-4 w-4 text-[#64748B]" />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={t.modal.companyPlaceholder}
                    className="w-full rounded-lg border border-[#1E2D4A] bg-[#060A12] pl-9 pr-3 py-2.5 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                  />
                </div>
              </div>
            </div>

            {/* Motivo dropdown */}
            <div>
              <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                {t.modal.reason} <span className="text-[#00f0ff]">*</span>
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-4 w-4 text-[#64748B]" />
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full rounded-lg border border-[#1E2D4A] bg-[#060A12] pl-9 pr-8 py-2.5 text-xs text-[#F8FAFC] focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                >
                  <option value="Plan Básico">{t.modal.reasons.basicPlan}</option>
                  <option value="Páginas Web">{t.modal.reasons.webPages}</option>
                  <option value="Tiendas Online">{t.modal.reasons.ecommerce}</option>
                  <option value="Soluciones SaaS">{t.modal.reasons.saas}</option>
                  <option value="Aplicaciones Móviles">{t.modal.reasons.mobile}</option>
                  <option value="Posicionamiento SEO">{t.modal.reasons.seo}</option>
                  <option value="Google Ads">{t.modal.reasons.googleAds}</option>
                  <option value="Agenda Online">{t.modal.reasons.booking}</option>
                  <option value="Otra consulta">{t.modal.reasons.other}</option>
                </select>
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                {t.modal.message} <span className="text-[#00f0ff]">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.modal.messagePlaceholder}
                className="w-full rounded-lg border border-[#1E2D4A] bg-[#060A12] p-3 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:border-[#00f0ff] focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
              />
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id="modal-privacy-agree"
                checked={acceptedPrivacy}
                onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-[#1E2D4A] bg-[#060A12] text-[#00f0ff] focus:ring-[#00f0ff]"
              />
              <label htmlFor="modal-privacy-agree" className="text-[11px] leading-tight text-[#94A3B8]">
                {t.modal.privacyNotice}
              </label>
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-interactive w-full sm:w-auto flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#00838f] dark:bg-[#00f0ff] py-3 px-5 text-xs font-bold text-white dark:text-[#060e20] shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:bg-[#006b75] dark:hover:bg-[#7df4ff] disabled:opacity-50 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>{status === 'sending' ? t.modal.submitting : t.modal.submit}</span>
              </button>

              <a
                href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-interactive w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-[#10B981]/50 bg-[#10B981]/10 py-3 px-4 text-xs font-semibold text-[#10B981] hover:bg-[#10B981]/20"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{t.modal.whatsappDirect}</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
