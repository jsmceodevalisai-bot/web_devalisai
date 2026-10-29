import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/landingData';
import { useLanguage } from '../../context/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageCircle, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [reason, setReason] = useState('Plan Básico');
  const [message, setMessage] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage(t.contact.errorTitle);
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage(t.contact.errorTitle);
      return;
    }

    if (!acceptedPrivacy) {
      setStatus('error');
      setErrorMessage('Debes aceptar la política de privacidad y tratamiento de datos.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: fullName,
              from_email: email,
              phone: phone || 'No indicado',
              company: company || 'No indicada',
              reason: reason,
              message: message,
            },
          }),
        });

        if (res.ok) {
          setStatus('success');
        } else {
          setStatus('error');
          setErrorMessage(t.contact.errorTitle);
        }
      } catch {
        setStatus('error');
        setErrorMessage(t.contact.errorTitle);
      }
    } else {
      setTimeout(() => {
        setStatus('success');
      }, 600);
    }
  };

  const whatsappMessage = `${t.whatsapp.defaultText} Mi nombre es ${fullName || ''}. Consulta: ${reason}. ${message}`;

  // Map URL for Providencia, Santiago, Chile
  const mapEmbedUrl = `https://maps.google.com/maps?q=-33.4285,-70.6189&hl=es&z=15&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=-33.4285,-70.6189`;

  return (
    <section id="contacto" className="py-20 bg-[#0B1326] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/30 bg-[#0C1527] px-4 py-1.5 text-xs font-semibold text-[#00f0ff]">
            <Mail className="h-3.5 w-3.5" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F8FAFC]">
            {t.contact.title}
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8]">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* COLUMN 1 (LEFT): Contact Form (7 cols on desktop) */}
          <div className="lg:col-span-7 rounded-2xl border border-[#2A3F66] bg-[#0C1527] p-6 sm:p-9 shadow-xl">
            <h3 className="font-display text-xl font-bold text-[#F8FAFC] mb-1">
              Envíanos los detalles de tu requerimiento
            </h3>
            <p className="text-xs text-[#94A3B8] mb-6">
              Te responderemos en un plazo máximo de 24 horas hábiles.
            </p>

            {status === 'success' ? (
              <div className="py-10 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#10B981]/20 text-[#10B981]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="font-display text-xl font-bold text-[#F8FAFC]">
                  ¡Mensaje enviado con éxito!
                </h4>
                <p className="text-xs text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                  Hemos registrado tu solicitud para <strong>{reason}</strong>. Te enviaremos una propuesta formal al correo <strong>{email}</strong>.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive flex items-center gap-2 rounded-lg bg-[#10B981] px-5 py-2.5 text-xs font-bold text-[#060e20]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Hablar por WhatsApp ahora</span>
                  </a>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setMessage('');
                    }}
                    className="btn-interactive rounded-lg border border-[#1E2D4A] bg-[#111C35] px-5 py-2.5 text-xs font-semibold text-[#dae2fd]"
                  >
                    Enviar otra consulta
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                      {t.contact.name} <span className="text-[#00f0ff]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full rounded-lg border border-[#1E2D4A] bg-[#060A12] px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:border-[#00f0ff] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                      {t.contact.email} <span className="text-[#00f0ff]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full rounded-lg border border-[#1E2D4A] bg-[#060A12] px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:border-[#00f0ff] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                      {t.contact.phone} <span className="text-[#64748B] font-normal">({t.pricing.guarantee ? 'WhatsApp' : 'Opcional'})</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full rounded-lg border border-[#1E2D4A] bg-[#060A12] px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:border-[#00f0ff] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                      {t.contact.interest} <span className="text-[#00f0ff]">*</span>
                    </label>
                    <select
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="w-full rounded-lg border border-[#1E2D4A] bg-[#060A12] px-3.5 py-2.5 text-xs text-[#F8FAFC] focus:border-[#00f0ff] focus:outline-none"
                    >
                      <option value="Plan Básico">{t.pricing.title} ({t.pricing.priceAmount})</option>
                      <option value="Página Web">{t.offerings.items['paginas-web']?.title || 'Páginas Web'}</option>
                      <option value="Tienda Online">{t.offerings.items['tiendas-online']?.title || 'Tiendas Online'}</option>
                      <option value="SaaS">{t.offerings.items['saas']?.title || 'SaaS'}</option>
                      <option value="IA">{t.offerings.items['ia']?.title || 'Inteligencia Artificial'}</option>
                      <option value="Consultoría">{t.offerings.items['consultoria']?.title || 'Consultoría'}</option>
                      <option value="Automatización">{t.offerings.items['automatizacion']?.title || 'Automatización'}</option>
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-xs font-semibold text-[#dae2fd] mb-1.5">
                    {t.contact.message} <span className="text-[#00f0ff]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full rounded-lg border border-[#1E2D4A] bg-[#060A12] p-3 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:border-[#00f0ff] focus:outline-none"
                  />
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="contact-privacy-check"
                    checked={acceptedPrivacy}
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-[#1E2D4A] bg-[#060A12] text-[#00f0ff] focus:ring-[#00f0ff]"
                  />
                  <label htmlFor="contact-privacy-check" className="text-[11px] leading-tight text-[#94A3B8]">
                    {t.footer.privacy} & {t.footer.terms}
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-interactive w-full flex items-center justify-center gap-2 rounded-xl bg-[#00838f] dark:bg-[#00f0ff] py-3.5 px-6 text-xs font-bold text-white dark:text-[#060e20] shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:bg-[#006b75] dark:hover:bg-[#7df4ff] disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>{status === 'sending' ? t.contact.submitting : t.contact.submit}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* COLUMN 2 (RIGHT): Corporate Info Card + Real Location Map (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Corporate Info Card */}
            <div className="rounded-2xl border border-[#1E2D4A] bg-[#0C1527] p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#006970] text-[#060e20] font-black text-lg">
                  D
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-[#F8FAFC]">
                    Develisai Chile
                  </h4>
                  <div className="text-xs text-[#00f0ff]">{t.contact.partnerTag || 'Partner Tecnológico & IA'}</div>
                </div>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {t.contact.companyBio || 'Empresa de software y consultoría tecnológica radicada en Santiago de Chile. Acompañamos a organizaciones en su diseño web, desarrollo a medida y adopción de inteligencia artificial.'}
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-3 text-[#dae2fd]">
                  <MapPin className="h-4 w-4 text-[#00f0ff] shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.address}</span>
                </div>

                <div className="flex items-center gap-3 text-[#dae2fd]">
                  <Mail className="h-4 w-4 text-[#00f0ff] shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#00f0ff] transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-[#dae2fd]">
                  <Phone className="h-4 w-4 text-[#00f0ff] shrink-0" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-interactive flex items-center justify-center gap-2 rounded-lg border border-[#10B981]/50 bg-[#10B981]/10 py-2.5 px-4 text-xs font-semibold text-[#10B981] hover:bg-[#10B981]/20 w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.contact.directWhatsApp || 'Atención directa vía WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Real Interactive Location Map (Document 01 Section 4.9) */}
            <div className="rounded-2xl border border-[#1E2D4A] bg-[#0C1527] p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F8FAFC]">
                  <Navigation className="h-4 w-4 text-[#00f0ff]" />
                  <span>{t.contact.mapTitle || 'Ubicación de nuestras oficinas'}</span>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#00f0ff] hover:underline"
                >
                  <span>{t.contact.directions || 'Cómo llegar'}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Responsive Iframe with Lazy Loading */}
              <div className="relative h-56 w-full rounded-xl overflow-hidden border border-[#1E2D4A] bg-[#060A12]">
                <iframe
                  title="Ubicación oficial de Develisai en Providencia, Santiago de Chile"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen={false}
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-1">
                <span>{t.contact.region || 'Providencia, Región Metropolitana'}</span>
                <span className="flex items-center gap-1 text-[#10B981]">
                  <ShieldCheck className="h-3 w-3" />
                  <span>{t.contact.verifiedAddress || 'Dirección corporativa verificada'}</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
