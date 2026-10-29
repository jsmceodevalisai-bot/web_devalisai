import React, { useState, useRef, useEffect } from 'react';
import { useContactModal } from '../../context/ContactModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { Bot, Send, X, MessageSquare, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actionOption?: {
    label: string;
    product: string;
  };
}

export const InternalChat: React.FC = () => {
  const { openModal } = useContactModal();
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const defaultWelcome = t.chat?.welcome || '¡Hola! Bienvenido a Develisai. Soy el asistente virtual para ayudarte a conocer nuestras soluciones de software, páginas web, SaaS y servicios de IA en Chile. ¿En qué podemos ayudarte hoy?';

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: defaultWelcome,
      timestamp: t.chat?.now || 'Ahora',
    },
  ]);

  // Update initial message if language changes and only welcome was shown
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === '1') {
        return [
          {
            id: '1',
            sender: 'bot',
            text: t.chat?.welcome || defaultWelcome,
            timestamp: t.chat?.now || 'Ahora',
          },
        ];
      }
      return prev;
    });
  }, [language, t.chat]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickQuestions = [
    t.chat?.quick1 || '¿Qué incluye el Plan Básico ($49.990)?',
    t.chat?.quick2 || '¿Cómo cotizar una Tienda Online?',
    t.chat?.quick3 || '¿Qué desarrollo SaaS realizan?',
    t.chat?.quick4 || '¿Dónde están ubicadas sus oficinas?',
  ];

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = '';
      let action: { label: string; product: string } | undefined = undefined;

      const lower = query.toLowerCase();

      if (lower.includes('básico') || lower.includes('basic') || lower.includes('49.990') || lower.includes('49,990') || lower.includes('precio') || lower.includes('price') || lower.includes('web')) {
        botResponse = t.chat?.ansBasic || 'Nuestro Plan Básico parte en $49.990 CLP e incluye: diseño web estándar, hasta 5 pestañas, 5GB de hosting, 5 correos corporativos, certificado SSL, versión móvil, botón WhatsApp y desarrollo ágil en 3 días hábiles.';
        action = { label: t.chat?.ansBasicAction || 'Solicitar Propuesta Gratis Plan Básico', product: t.pricing.planName || 'Plan Básico' };
      } else if (lower.includes('tienda') || lower.includes('store') || lower.includes('ecommerce') || lower.includes('pago') || lower.includes('shop')) {
        botResponse = t.chat?.ansStore || 'Desarrollamos Tiendas Online a medida con catálogo, carrito intuitivo, pasarelas de pago chilenas (Webpay, Mercado Pago) y panel de administración de productos y pedidos.';
        action = { label: t.chat?.ansStoreAction || 'Cotizar Tienda Online', product: 'Tiendas Online' };
      } else if (lower.includes('saas') || lower.includes('software') || lower.includes('plataforma') || lower.includes('platform') || lower.includes('erp')) {
        botResponse = t.chat?.ansSaas || 'Creamos soluciones SaaS empresariales para automatizar procesos manuales, con accesos por rol, dashboards en tiempo real y arquitectura en la nube de alta disponibilidad.';
        action = { label: t.chat?.ansSaasAction || 'Cotizar Solución SaaS', product: 'Soluciones SaaS' };
      } else if (lower.includes('app') || lower.includes('móvil') || lower.includes('mobile') || lower.includes('ios') || lower.includes('android')) {
        botResponse = t.chat?.ansApp || 'Diseñamos aplicaciones móviles para iOS y Android orientadas a simplicidad de uso, notificaciones inteligentes e integración directa con bases de datos y APIs.';
        action = { label: t.chat?.ansAppAction || 'Cotizar Aplicación Móvil', product: 'Aplicaciones Móviles' };
      } else if (lower.includes('seo') || lower.includes('google') || lower.includes('posicionamiento') || lower.includes('search')) {
        botResponse = t.chat?.ansSeo || 'Nuestro servicio de Posicionamiento SEO optimiza la arquitectura técnica, palabras clave y señales locales de tu negocio para ganar visibilidad orgánica honesta y duradera.';
        action = { label: t.chat?.ansSeoAction || 'Solicitar Auditoría SEO', product: 'Posicionamiento SEO' };
      } else if (lower.includes('oficina') || lower.includes('office') || lower.includes('ubicación') || lower.includes('location') || lower.includes('donde') || lower.includes('where') || lower.includes('dirección')) {
        botResponse = t.chat?.ansOffice || 'Nuestras oficinas centrales están en Av. Providencia 1208, Oficina 702, Providencia, Santiago de Chile. Puedes ver nuestro mapa interactivo en la sección de Contacto.';
      } else {
        botResponse = t.chat?.ansFallback || 'Gracias por tu consulta. En Develisai diseñamos cada propuesta según las necesidades específicas de tu empresa o pyme. Puedes solicitar una propuesta gratuita formal en un minuto.';
        action = { label: t.chat?.ansFallbackAction || 'Completar Formulario de Contacto', product: 'Consulta General' };
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionOption: action,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Button positioned on the bottom-left corner */}
      <aside aria-label={t.chat?.title || "Asistente virtual de Develisai"} className="fixed bottom-6 left-6 z-30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar chat' : (t.chat?.launcherAria || 'Abrir chat corporativo Develisai')}
          className="btn-interactive group flex h-14 w-14 items-center justify-center rounded-full border border-[#00f0ff]/40 bg-[#0C1527] text-[#00f0ff] shadow-[0_4px_25px_rgba(0,240,255,0.3)] hover:bg-[#162343] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00f0ff]/50 cursor-pointer"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}

          {/* Tooltip on right side of launcher button */}
          <span className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-[#2A3F66] bg-[#0C1527] px-3 py-1.5 text-xs font-semibold text-[#F8FAFC] shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
            {isOpen ? 'Minimizar chat' : (t.chat?.tooltip || 'Asistente Develisai')}
          </span>
        </button>
      </aside>

      {/* Chat Window anchored to bottom-left */}
      {isOpen && (
        <section
          aria-label={t.chat?.title || "Ventana de chat corporativo"}
          className="fixed bottom-24 left-4 sm:left-6 z-40 w-[calc(100vw-2rem)] sm:w-96 max-h-[540px] flex flex-col rounded-2xl border border-[#2A3F66] bg-[#0C1527] shadow-2xl shadow-[#000]/80 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#1E2D4A] bg-[#111C35] px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00f0ff]/15 text-[#00f0ff]">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#F8FAFC]">{t.chat?.title || 'Asistente Virtual Develisai'}</h3>
                <div className="flex items-center gap-1.5 text-[10px] text-[#10B981]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]"></span>
                  <span>{t.chat?.status || 'En línea · Santiago, Chile'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar ventana de chat"
              className="rounded-lg p-1 text-[#94A3B8] hover:bg-[#162343] hover:text-[#F8FAFC] transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#00838f] dark:bg-[#00f0ff] text-white dark:text-[#060e20] font-medium rounded-tr-xs'
                      : 'border border-[#CBD5E1] dark:border-[#1E2D4A] bg-[#F8FAFC] dark:bg-[#111C35] text-[#1E293B] dark:text-[#dae2fd] rounded-tl-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-[#64748B] mt-1 px-1">{m.timestamp}</span>

                {/* Direct Action Trigger */}
                {m.actionOption && (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      openModal({ product: m.actionOption?.product });
                    }}
                    className="btn-interactive mt-2 flex items-center gap-1.5 rounded-lg border border-[#00f0ff]/50 bg-[#00f0ff]/10 px-3 py-1.5 text-[11px] font-bold text-[#00f0ff] hover:bg-[#00f0ff]/20 text-left"
                  >
                    <Sparkles className="h-3 w-3" />
                    <span>{m.actionOption.label}</span>
                  </button>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-[#64748B] text-[11px] py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff] animate-ping"></span>
                <span>Develisai...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="border-t border-[#1E2D4A] bg-[#060A12]/80 px-3 py-2">
            <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="rounded-md border border-[#1E2D4A] bg-[#111C35] px-2 py-1 text-[10px] text-[#94A3B8] hover:border-[#00f0ff]/40 hover:text-[#00f0ff] text-left transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2 border-t border-[#1E2D4A] bg-[#0C1527] p-2.5"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t.chat?.placeholder || 'Escribe tu consulta...'}
              className="flex-1 rounded-lg border border-[#1E2D4A] bg-[#060A12] px-3 py-2 text-xs text-[#F8FAFC] placeholder-[#64748B] focus:border-[#00f0ff] focus:outline-none"
            />
            <button
              type="submit"
              aria-label={t.chat?.sendAria || 'Enviar mensaje'}
              className="btn-interactive flex h-8 w-8 items-center justify-center rounded-lg bg-[#00838f] dark:bg-[#00f0ff] text-white dark:text-[#060e20] hover:bg-[#006b75] dark:hover:bg-[#7df4ff] cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </section>
      )}
    </>
  );
};
