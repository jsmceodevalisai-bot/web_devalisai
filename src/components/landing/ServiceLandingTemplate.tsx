import React, { useState } from 'react';
import { LandingPageContent } from '../../types';
import { useContactModal } from '../../context/ContactModalContext';
import { COMPANY_INFO } from '../../data/landingData';
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  HelpCircle,
  FlaskConical,
  Palette,
  Building2,
  Smartphone,
  Briefcase,
  BadgeDollarSign,
  LayoutGrid,
  ShoppingCart,
  CreditCard,
  PackageCheck,
  TrendingUp,
  PanelsTopLeft,
  UsersRound,
  Workflow,
  ChartNoAxesCombined,
  Blocks,
  LockKeyhole,
  MousePointerClick,
  Bell,
  PlugZap,
  Gauge,
  RefreshCw,
  ScanSearch,
  ListFilter,
  FileSearch,
  BookOpenText,
  MapPin,
  ChartLine,
  Target,
  Search,
  Megaphone,
  MousePointer2,
  Wallet,
  SlidersHorizontal,
  CalendarDays,
  CalendarCheck,
  MailCheck,
  Clock,
  ClipboardCheck,
  Plug,
} from 'lucide-react';

interface Props {
  content: LandingPageContent;
}

// Icon dictionary for 6-benefit grids
const ICON_COMPONENT_MAP: Record<string, React.ReactNode> = {
  Palette: <Palette className="h-5 w-5 text-[#00f0ff]" />,
  Building2: <Building2 className="h-5 w-5 text-[#00f0ff]" />,
  Smartphone: <Smartphone className="h-5 w-5 text-[#00f0ff]" />,
  ShieldCheck: <ShieldCheck className="h-5 w-5 text-[#00f0ff]" />,
  Briefcase: <Briefcase className="h-5 w-5 text-[#00f0ff]" />,
  BadgeDollarSign: <BadgeDollarSign className="h-5 w-5 text-[#00f0ff]" />,
  LayoutGrid: <LayoutGrid className="h-5 w-5 text-[#00f0ff]" />,
  ShoppingCart: <ShoppingCart className="h-5 w-5 text-[#00f0ff]" />,
  CreditCard: <CreditCard className="h-5 w-5 text-[#00f0ff]" />,
  PackageCheck: <PackageCheck className="h-5 w-5 text-[#00f0ff]" />,
  TrendingUp: <TrendingUp className="h-5 w-5 text-[#00f0ff]" />,
  PanelsTopLeft: <PanelsTopLeft className="h-5 w-5 text-[#00f0ff]" />,
  UsersRound: <UsersRound className="h-5 w-5 text-[#00f0ff]" />,
  Workflow: <Workflow className="h-5 w-5 text-[#00f0ff]" />,
  ChartNoAxesCombined: <ChartNoAxesCombined className="h-5 w-5 text-[#00f0ff]" />,
  Blocks: <Blocks className="h-5 w-5 text-[#00f0ff]" />,
  LockKeyhole: <LockKeyhole className="h-5 w-5 text-[#00f0ff]" />,
  MousePointerClick: <MousePointerClick className="h-5 w-5 text-[#00f0ff]" />,
  Bell: <Bell className="h-5 w-5 text-[#00f0ff]" />,
  PlugZap: <PlugZap className="h-5 w-5 text-[#00f0ff]" />,
  Gauge: <Gauge className="h-5 w-5 text-[#00f0ff]" />,
  RefreshCw: <RefreshCw className="h-5 w-5 text-[#00f0ff]" />,
  ScanSearch: <ScanSearch className="h-5 w-5 text-[#00f0ff]" />,
  ListFilter: <ListFilter className="h-5 w-5 text-[#00f0ff]" />,
  FileSearch: <FileSearch className="h-5 w-5 text-[#00f0ff]" />,
  BookOpenText: <BookOpenText className="h-5 w-5 text-[#00f0ff]" />,
  MapPin: <MapPin className="h-5 w-5 text-[#00f0ff]" />,
  ChartLine: <ChartLine className="h-5 w-5 text-[#00f0ff]" />,
  Target: <Target className="h-5 w-5 text-[#00f0ff]" />,
  Search: <Search className="h-5 w-5 text-[#00f0ff]" />,
  Megaphone: <Megaphone className="h-5 w-5 text-[#00f0ff]" />,
  MousePointer2: <MousePointer2 className="h-5 w-5 text-[#00f0ff]" />,
  Wallet: <Wallet className="h-5 w-5 text-[#00f0ff]" />,
  SlidersHorizontal: <SlidersHorizontal className="h-5 w-5 text-[#00f0ff]" />,
  CalendarDays: <CalendarDays className="h-5 w-5 text-[#00f0ff]" />,
  CalendarCheck: <CalendarCheck className="h-5 w-5 text-[#00f0ff]" />,
  MailCheck: <MailCheck className="h-5 w-5 text-[#00f0ff]" />,
  Clock: <Clock className="h-5 w-5 text-[#00f0ff]" />,
  ClipboardCheck: <ClipboardCheck className="h-5 w-5 text-[#00f0ff]" />,
  Plug: <Plug className="h-5 w-5 text-[#00f0ff]" />,
};

export const ServiceLandingTemplate: React.FC<Props> = ({ content }) => {
  const { openModal } = useContactModal();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const whatsappMessage = `Hola Develisai, deseo cotizar el servicio de ${content.serviceName}. Me gustaría coordinar una propuesta técnica.`;

  const handleOpenProposal = () => {
    openModal({
      product: content.serviceName,
      plan: content.pricingSection.highlightPlan?.name || content.serviceName,
      price: content.pricingSection.highlightPlan?.price || 'A convenir',
      origin: content.slug,
    });
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-[#0b1326] text-[#dae2fd]">
      
      {/* 2. HERO PRINCIPAL */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#060e20] via-[#0b1326] to-[#0C1527] py-20 border-b border-[#1E2D4A]">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[650px] h-[300px] bg-[#00f0ff]/10 blur-[130px] rounded-full" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1E2D4A] bg-[#0C1527] px-4 py-1.5 text-xs font-semibold text-[#00f0ff]">
                <span>{content.tagline}</span>
              </div>

              {/* Exact H1 */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F8FAFC] leading-tight">
                {content.headlineH1}
              </h1>

              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl">
                {content.heroParagraph}
              </p>

              {/* CTA 1 (Primary) & CTA 2 (WhatsApp) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={handleOpenProposal}
                  className="btn-interactive w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-[#00838f] dark:bg-[#00f0ff] px-7 py-3.5 text-xs font-bold text-white dark:text-[#060e20] shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-[#006b75] dark:hover:bg-[#7df4ff] cursor-pointer"
                >
                  <span>Solicitar propuesta gratis</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-interactive w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-[#10B981]/50 bg-[#10B981]/10 px-6 py-3.5 text-xs font-bold text-[#10B981] hover:bg-[#10B981]/20 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Cotizar por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image Slot */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#2A3F66] bg-[#0C1527] shadow-2xl shadow-[#00f0ff]/10">
                <img
                  src={content.heroImage}
                  alt={content.headlineH1}
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1527] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#1E2D4A] bg-[#0C1527]/90 p-3 backdrop-blur-md">
                  <div className="text-[11px] font-mono text-[#00f0ff] font-semibold">
                    {content.serviceName} · Develisai
                  </div>
                  <div className="text-[11px] text-[#94A3B8]">
                    Arquitectura y desarrollo con entrega profesional
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FRANJA DE CONFIANZA Y PROPUESTA DE VALOR */}
      <section className="py-8 bg-[#0C1527] border-b border-[#1E2D4A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.trustPillars.map((p, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="rounded-lg bg-[#00f0ff]/10 p-2 text-[#00f0ff] shrink-0 mt-0.5">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#F8FAFC]">{p.title}</h4>
                  <p className="text-xs text-[#94A3B8] mt-0.5 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BLOQUE EDITORIAL CON IMAGEN: IMPORTANCIA Y CÓMO TRABAJAMOS */}
      <section className="py-20 bg-[#0B1326] border-b border-[#1E2D4A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual on Left */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#1E2D4A] bg-[#0C1527]">
                <img
                  src={content.editorialImage}
                  alt={content.editorialTitle}
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1527]/80 to-transparent" />
              </div>
            </div>

            {/* Editorial Copy on Right */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#00f0ff]">
                Metodología y Compromiso
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F8FAFC]">
                {content.editorialTitle}
              </h2>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {content.editorialText}
              </p>
              <div className="pt-2">
                <button
                  onClick={handleOpenProposal}
                  className="btn-interactive inline-flex items-center gap-2 rounded-lg border border-[#2A3F66] bg-[#0C1527] px-5 py-2.5 text-xs font-semibold text-[#00f0ff] hover:bg-[#162343]"
                >
                  <span>Conversemos sobre tu proyecto</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. GRILLA DE SEIS BENEFICIOS CON ICONOS SVG INDIVIDUALES */}
      <section className="py-20 bg-[#060A12] border-b border-[#1E2D4A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00f0ff]">
              Beneficios Clave
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              ¿Por qué elegir nuestra solución de {content.serviceName}?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.benefits.map((b, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#1E2D4A] bg-[#0C1527] p-6 hover:border-[#2A3F66] transition-colors"
              >
                <div className="rounded-lg bg-[#111C35] p-2.5 w-fit border border-[#1E2D4A] mb-4">
                  {ICON_COMPONENT_MAP[b.icon] || <Sparkles className="h-5 w-5 text-[#00f0ff]" />}
                </div>
                <h3 className="font-display text-base font-bold text-[#F8FAFC] mb-1.5">
                  {b.title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SECCIÓN DE PLANES O PROPUESTA COMERCIAL CON ALCANCES TRANSPARENTES */}
      <section className="py-20 bg-[#0B1326] border-b border-[#1E2D4A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              {content.pricingSection.title}
            </h2>
            <p className="text-xs text-[#94A3B8]">
              {content.pricingSection.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl border border-[#2A3F66] bg-[#0C1527] p-6 sm:p-10 shadow-xl">
            {content.pricingSection.highlightPlan ? (
              <div className="mb-8 p-6 rounded-xl border border-[#00f0ff]/40 bg-[#111C35] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-semibold text-[#00f0ff] uppercase">Plan Destacado</span>
                  <h3 className="font-display text-2xl font-bold text-[#F8FAFC] mt-0.5">
                    {content.pricingSection.highlightPlan.name}
                  </h3>
                  <div className="font-display text-3xl font-extrabold text-[#00f0ff] mt-2">
                    {content.pricingSection.highlightPlan.price}
                  </div>
                </div>
                <button
                  onClick={handleOpenProposal}
                  className="btn-interactive rounded-xl bg-[#00838f] dark:bg-[#00f0ff] px-6 py-3.5 text-xs font-bold text-white dark:text-[#060e20] shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:bg-[#006b75] dark:hover:bg-[#7df4ff]"
                >
                  Solicitar propuesta gratis
                </button>
              </div>
            ) : null}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="space-y-2.5">
                <h4 className="font-bold text-[#00666e] dark:text-[#00f0ff] uppercase tracking-wider text-[11px]">
                  Qué evaluamos
                </h4>
                <ul className="space-y-1.5 text-[#334155] dark:text-[#94A3B8]">
                  {content.pricingSection.scopeEvaluation.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#00666e] dark:text-[#00f0ff]">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-bold text-[#0284c7] dark:text-[#38BDF8] uppercase tracking-wider text-[11px]">
                  Qué puede incluir
                </h4>
                <ul className="space-y-1.5 text-[#334155] dark:text-[#94A3B8]">
                  {content.pricingSection.scopeInclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#0284c7] dark:text-[#38BDF8]">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-bold text-[#047857] dark:text-[#10B981] uppercase tracking-wider text-[11px]">
                  Qué se define en la propuesta
                </h4>
                <ul className="space-y-1.5 text-[#334155] dark:text-[#94A3B8]">
                  {content.pricingSection.scopeProposals.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#047857] dark:text-[#10B981]">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1E2D4A] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-[#64748B]">
                Sin compromiso de compra · Cotización formal personalizada en 24 horas
              </span>
              <button
                onClick={handleOpenProposal}
                className="btn-interactive rounded-lg bg-[#00838f] dark:bg-[#00f0ff] px-6 py-2.5 text-xs font-bold text-white dark:text-[#060e20]"
              >
                Solicitar cotización
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. ASÍ TRABAJAMOS — PROCESO EN CINCO PASOS */}
      <section className="py-20 bg-[#060A12] border-b border-[#1E2D4A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00f0ff]">
              Metodología de Trabajo
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              Así trabajamos: cinco etapas para tu éxito
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {content.processSteps.map((s, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#1E2D4A] bg-[#0C1527] p-5 relative space-y-2"
              >
                <div className="font-mono text-2xl font-black text-[#00f0ff]/40">
                  {s.number}
                </div>
                <h3 className="font-display text-sm font-bold text-[#F8FAFC]">
                  {s.step}
                </h3>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CARRUSEL / GRILLA DE PROYECTOS O DEMOSTRACIONES */}
      <section className="py-20 bg-[#0B1326] border-b border-[#1E2D4A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#00f0ff]">
                Portafolio de Especialidad
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC] mt-1">
                Demostraciones y proyectos de {content.serviceName}
              </h2>
            </div>
            <p className="text-xs text-[#94A3B8] max-w-sm">
              Casos reales y modelos de referencia tecnológica creados por nuestro equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.portfolioItems.map((p, idx) => (
              <article
                key={idx}
                className="rounded-2xl border border-[#1E2D4A] bg-[#0C1527] overflow-hidden hover:border-[#2A3F66] transition-colors"
              >
                <div className="relative h-48 w-full bg-[#111C35]">
                  <img
                    src={p.imageSrc}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 rounded-md bg-[#0C1527]/90 px-2.5 py-1 text-[10px] font-bold text-[#00f0ff] border border-[#2A3F66] backdrop-blur-md">
                      {p.isDemo ? <FlaskConical className="h-3 w-3" /> : <CheckCircle2 className="h-3 w-3" />}
                      <span>{p.isDemo ? 'Solución Demostrativa' : 'Caso Real'}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-[10px] font-mono text-[#64748B] uppercase">{p.category}</span>
                    <h3 className="font-display text-lg font-bold text-[#F8FAFC] mt-0.5">{p.title}</h3>
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {p.summary}
                  </p>
                  <div className="text-[11px] font-mono text-[#00f0ff]">
                    Stack: {p.technologies}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 9. BLOQUE DE LLAMADA A LA ACCIÓN Y CONTACTO ESPECÍFICO */}
      <section className="py-20 bg-[#060A12] border-b border-[#1E2D4A] relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/30 bg-[#0C1527] px-4 py-1.5 text-xs font-semibold text-[#00f0ff]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Contacto Especializado</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F8FAFC]">
            ¿Conversamos sobre {content.serviceName}?
          </h2>

          <p className="text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            Cuéntanos qué necesitas y te ayudamos a definir los próximos pasos técnicos y comerciales sin costo.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleOpenProposal}
              className="btn-interactive flex items-center justify-center gap-2 rounded-lg bg-[#00838f] dark:bg-[#00f0ff] px-7 py-3.5 text-xs font-bold text-white dark:text-[#060e20] shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-[#006b75] dark:hover:bg-[#7df4ff] cursor-pointer"
            >
              <span>Solicitar propuesta gratis</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive flex items-center justify-center gap-2 rounded-lg border border-[#10B981]/50 bg-[#10B981]/10 px-6 py-3.5 text-xs font-bold text-[#10B981] hover:bg-[#10B981]/20"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. PREGUNTAS FRECUENTES EN FORMATO ACORDEÓN */}
      <section className="py-20 bg-[#0B1326]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00f0ff]">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Preguntas Frecuentes</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              Resolvemos tus dudas sobre {content.serviceName}
            </h2>
          </div>

          <div className="space-y-3">
            {content.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#1E2D4A] bg-[#0C1527] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={activeFaq === idx}
                  className="w-full flex items-center justify-between p-5 text-left text-xs font-bold text-[#F8FAFC] hover:text-[#00f0ff] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#00f0ff] transition-transform duration-200 shrink-0 ml-4 ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-[#94A3B8] leading-relaxed border-t border-[#1E2D4A]/60 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
