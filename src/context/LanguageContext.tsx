import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'jp' | 'ch' | 'de' | 'pt';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  shortCode: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'es', name: 'Español', nativeName: 'Español', flag: '🇪🇸', shortCode: 'ES' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', shortCode: 'EN' },
  { code: 'jp', name: 'Japonés', nativeName: '日本語', flag: '🇯🇵', shortCode: 'JP' },
  { code: 'ch', name: 'Chino', nativeName: '中文', flag: '🇨🇳', shortCode: 'CH' },
  { code: 'de', name: 'Alemán', nativeName: 'Deutsch', flag: '🇩🇪', shortCode: 'DE' },
  { code: 'pt', name: 'Portugués', nativeName: 'Português', flag: '🇧🇷', shortCode: 'PT' },
];

export interface OfferingTranslation {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  highlightBenefit: string;
  badgeText: string;
}

export interface ProjectTranslation {
  id: string;
  title: string;
  client?: string;
  category: string;
  description: string;
  impact?: string;
  statusLabel?: string;
  technologies?: string[];
}

export interface MetricTranslation {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface TestimonialTranslation {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  verifiedStatus?: string;
}

export interface TranslationSchema {
  nav: {
    home: string;
    products: string;
    services: string;
    metrics: string;
    clients: string;
    howItWorks: string;
    contact: string;
    contactButton: string;
    themeDark: string;
    themeLight: string;
    languageSelect: string;
    whatsappButton: string;
    megaMenu: {
      productsTitle: string;
      productsSubtitle: string;
      servicesTitle: string;
      servicesSubtitle: string;
      exploreAll: string;
      webPages: string;
      webPagesDesc: string;
      ecommerce: string;
      ecommerceDesc: string;
      saas: string;
      saasDesc: string;
      ai: string;
      aiDesc: string;
      consulting: string;
      consultingDesc: string;
      automation: string;
      automationDesc: string;
    };
  };
  particleHero: {
    badgeSoftware: string;
    badgeCountry: string;
    morphology: string;
    pause: string;
    resume: string;
    particlesCount: string;
    dragHint: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stripPartner: string;
    stripMotto: string;
  };
  cinematicHero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  offerings: {
    badge: string;
    title: string;
    subtitle: string;
    ctaDetails: string;
    productStar: string;
    items: Record<string, OfferingTranslation>;
  };
  smeHero: {
    badge: string;
    title: string;
    subtitle: string;
    dragHint: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    cta: string;
    floatingBadge: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    similarCta: string;
    verifiedBadge?: string;
    demoBadge?: string;
    items: Record<string, ProjectTranslation>;
  };
  metrics: {
    badge: string;
    title: string;
    subtitle: string;
    tabPerformance: string;
    tabUptime: string;
    tabSatisfaction: string;
    items: Record<string, MetricTranslation>;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    planBadge?: string;
    planName?: string;
    planSubtitle?: string;
    priceAmount: string;
    priceNote: string;
    includedTitle: string;
    cta: string;
    guarantee: string;
    features: string[];
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    prev: string;
    next: string;
    verifiedBadge?: string;
    items: Record<string, TestimonialTranslation>;
  };
  techStack?: {
    badge: string;
    title: string;
    subtitle: string;
    frontendBadge: string;
    backendBadge: string;
    cloudBadge: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    interest: string;
    interestSelect: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    errorTitle: string;
    officeTitle: string;
    emailTitle: string;
    phoneTitle: string;
    hoursTitle: string;
    hoursDesc: string;
  };
  footer: {
    brandDesc: string;
    quickLinks: string;
    servicesCol: string;
    legalCol: string;
    privacy: string;
    terms: string;
    cookieSettings: string;
    cookiePolicy: string;
    rights: string;
  };
  modal: {
    title: string;
    subtitle: string;
    selectedProduct: string;
    cancel: string;
  };
  cookies: {
    title: string;
    description: string;
    acceptAll: string;
    rejectNonEssential: string;
    configure: string;
  };
  whatsapp: {
    defaultText: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  es: {
    nav: {
      home: 'Inicio',
      products: 'Productos',
      services: 'Servicios',
      metrics: 'Métricas',
      clients: 'Clientes',
      howItWorks: 'Cómo Funciona',
      contact: 'Contacto',
      contactButton: 'Contactar',
      themeDark: 'Cambiar a modo claro',
      themeLight: 'Cambiar a modo oscuro',
      languageSelect: 'Cambiar idioma',
      whatsappButton: 'WhatsApp',
      megaMenu: {
        productsTitle: 'Productos Comerciales',
        productsSubtitle: 'Plataformas completas y empaquetadas listas para implementar.',
        servicesTitle: 'Servicios Especializados',
        servicesSubtitle: 'Ingeniería a medida y consultoría estratégica de software.',
        exploreAll: 'Explorar todos los productos',
        webPages: 'Páginas Web',
        webPagesDesc: 'Sitios web profesionales, rápidos y 100% adaptables.',
        ecommerce: 'Tiendas Online',
        ecommerceDesc: 'E-commerce con pasarelas de pago y catálogo dinámico.',
        saas: 'Soluciones SaaS',
        saasDesc: 'Software en la nube para automatizar y centralizar datos.',
        ai: 'Inteligencia Artificial',
        aiDesc: 'Modelos predictivos, agentes autónomos y automatización.',
        consulting: 'Consultoría Tecnológica',
        consultingDesc: 'Auditoría de arquitectura y hoja de ruta tecnológica.',
        automation: 'Automatización de Procesos',
        automationDesc: 'Flujos automáticos e integración profunda de APIs.',
      },
    },
    particleHero: {
      badgeSoftware: 'Ingeniería de Software & Inteligencia Artificial',
      badgeCountry: 'Chile',
      morphology: 'Morfología:',
      pause: 'Pausar',
      resume: 'Reanudar',
      particlesCount: 'partículas',
      dragHint: 'Arrastra el cursor para interactuar con las partículas',
      title: 'Desarrollando Valor con Soluciones Inteligentes',
      subtitle: 'La IA impulsa el futuro. Nosotros lo hacemos realidad.',
      ctaPrimary: 'Propuesta gratis Plan Básico',
      ctaSecondary: 'Explorar Productos y Servicios',
      stripPartner: 'Tu partner tecnológico',
      stripMotto: 'Ideas + Tecnología + Futuro',
    },
    cinematicHero: {
      badge: 'Visión & Excelencia Técnica',
      title: 'Descubre lo extraordinario',
      subtitle: 'La imagen respira despacio: un zoom suave da vida a cualquier paisaje.',
      cta: 'Iniciar Proyecto Digital',
    },
    offerings: {
      badge: 'Portafolio Comercial Develisai',
      title: 'Soluciones diseñadas para impulsar tu negocio',
      subtitle: 'Diferenciación clara entre soluciones comercializables (Productos) y prestaciones profesionales (Servicios) para acelerar tu transformación digital.',
      ctaDetails: 'Ver detalles y cotizar',
      productStar: 'Producto Estrella',
      items: {
        'paginas-web': {
          id: 'paginas-web',
          category: 'Producto',
          title: 'Páginas Web',
          shortDescription: 'Sitios web profesionales, ultra rápidos, 100% adaptables a celulares y diseñados para captar clientes desde el primer día.',
          highlightBenefit: 'Plan Básico desde $49.990 CLP con hosting y correos incluidos.',
          badgeText: 'Producto Estrella',
        },
        'tiendas-online': {
          id: 'tiendas-online',
          category: 'Producto',
          title: 'Tiendas Online',
          shortDescription: 'Plataformas de e-commerce robustas con catálogo dinámico, carrito de compras, medios de pago chilenos y gestión de pedidos.',
          highlightBenefit: 'Flujo de compra intuitivo optimizado para conversión móvil.',
          badgeText: 'E-Commerce',
        },
        'saas': {
          id: 'saas',
          category: 'Producto',
          title: 'Soluciones SaaS',
          shortDescription: 'Desarrollo de software como servicio a medida para digitalizar operaciones, automatizar tareas y centralizar datos en la nube.',
          highlightBenefit: 'Arquitectura escalable, dashboards analíticos y roles de usuario.',
          badgeText: 'Cloud & B2B',
        },
        'ia': {
          id: 'ia',
          category: 'Servicio',
          title: 'Inteligencia Artificial',
          shortDescription: 'Integración de modelos de lenguaje avanzados, visión computacional, agentes inteligentes y automatización cognitiva para tu negocio.',
          highlightBenefit: 'Aumento medible de productividad y atención automática 24/7.',
          badgeText: 'IA Generativa',
        },
        'consultoria': {
          id: 'consultoria',
          category: 'Servicio',
          title: 'Consultoría Tecnológica',
          shortDescription: 'Asesoría estratégica en arquitectura de software, migración a la nube, ciberseguridad y optimización de infraestructura.',
          highlightBenefit: 'Diagnóstico técnico sin compromiso y hoja de ruta ejecutable.',
          badgeText: 'Estratégico',
        },
        'automatizacion': {
          id: 'automatizacion',
          category: 'Servicio',
          title: 'Automatización de Procesos',
          shortDescription: 'Conexión de sistemas, sincronización de bases de datos y eliminación de tareas manuales repetitivas mediante flujos automatizados.',
          highlightBenefit: 'Reducción de hasta un 70% en tiempos operativos manuales.',
          badgeText: 'Eficiencia',
        },
      },
    },
    smeHero: {
      badge: 'Compromiso con el Crecimiento',
      title: 'Democratizando la Tecnología para Pymes',
      subtitle: 'Creemos que cada negocio merece herramientas de nivel corporativo a precios justos, transparentes y accesibles.',
      dragHint: 'Toca o arrastra la malla elástica para interactuar',
      card1Title: 'Plan Básico $49.990 CLP',
      card1Desc: 'Desarrollo web completo con hosting, correos corporativos y diseño profesional sin mensualidades ocultas.',
      card2Title: 'Soporte Continuo & Cercano',
      card2Desc: 'Atención directa vía WhatsApp y correo desde Santiago de Chile con respuesta garantizada.',
      card3Title: 'Escalabilidad Garantizada',
      card3Desc: 'Tu plataforma crece al ritmo de tus ventas, desde una web informativa hasta una tienda con miles de productos.',
      cta: 'Solicitar Propuesta para mi Pyme',
      floatingBadge: '100% Adaptado a Pymes Chilenas',
    },
    projects: {
      badge: 'Casos de Éxito & Portafolio',
      title: 'Proyectos que Transforman Negocios',
      subtitle: 'Soluciones reales implementadas con estándares de alta ingeniería y retorno de inversión medible.',
      similarCta: 'Cotizar solución similar',
      verifiedBadge: 'Proyecto Real Verificado',
      demoBadge: 'Solución Demostrativa de Referencia',
      items: {
        'e-commerce-gourmet': {
          id: 'e-commerce-gourmet',
          title: 'E-Commerce Gourmet',
          client: 'Delicias Artesanales',
          category: 'Tienda Online & Pagos',
          description: 'Plataforma con Webpay Plus, cálculo automático de despachos e inventario sincronizado en tiempo real.',
          impact: '+185% en ventas digitales en los primeros 60 días.',
        },
        'portal-clinico': {
          id: 'portal-clinico',
          title: 'Portal Clínico Digital',
          client: 'Centro Médico Austral',
          category: 'SaaS & Telemedicina',
          description: 'Gestor de citas médicas, fichas clínicas seguras con cifrado extremo y videollamadas integradas.',
          impact: '98% de puntualidad en consultas y 0 papel utilizado.',
        },
        'logistica-express': {
          id: 'logistica-express',
          title: 'Plataforma Logística Express',
          client: 'Ruta Trans Chile',
          category: 'Automatización & IoT',
          description: 'Rastreo satelital de flotas, generación automática de guías de despacho y alertas en ruta.',
          impact: 'Reducción del 40% en tiempos de espera en ruta.',
        },
        'ia-atencion': {
          id: 'ia-atencion',
          title: 'Agente IA Omnicanal',
          client: 'Financiera Andina',
          category: 'Inteligencia Artificial',
          description: 'Bot inteligente conectado a WhatsApp y web que califica prospectos y resuelve dudas financieras al instante.',
          impact: 'Atención 24/7 con satisfacción de 4.9/5 estrellas.',
        },
        'gestion-inventario': {
          id: 'gestion-inventario',
          title: 'Sistema de Inventario Cloud',
          client: 'Ferreterías Unidas',
          category: 'Software a Medida',
          description: 'Sincronización multi-sucursal con lectores de código de barras y reportes tributarios automáticos.',
          impact: 'Control total de stock con 0 descuadres.',
        },
        'web-corporativa': {
          id: 'web-corporativa',
          title: 'Web Corporativa High-Speed',
          client: 'Inmobiliaria Horizonte',
          category: 'Página Web Premium',
          description: 'Sitio institucional con recorrido virtual interactivo, catálogo de propiedades y carga ultra veloz.',
          impact: 'Puntaje 99/100 en Google PageSpeed móvil.',
        },
      },
    },
    metrics: {
      badge: 'Rendimiento Comprobado',
      title: 'Métricas que Marcan la Diferencia',
      subtitle: 'Nuestra ingeniería se traduce en resultados tangibles para nuestros clientes.',
      tabPerformance: 'Rendimiento Web',
      tabUptime: 'Disponibilidad Cloud',
      tabSatisfaction: 'Satisfacción Cliente',
      items: {
        uptime: {
          id: 'uptime',
          value: '99.98%',
          label: 'Uptime de Plataformas',
          description: 'Disponibilidad continua con infraestructura redundante en AWS y Google Cloud.',
        },
        speed: {
          id: 'speed',
          value: '98/100',
          label: 'Promedio Google PageSpeed',
          description: 'Optimización extrema para máxima velocidad y mejor posicionamiento SEO.',
        },
        delivery: {
          id: 'delivery',
          value: '100%',
          label: 'Cumplimiento de Plazos',
          description: 'Metodologías ágiles con entregas semanales comprobables y sin retrasos.',
        },
        support: {
          id: 'support',
          value: '< 15 min',
          label: 'Tiempo de Respuesta Soporte',
          description: 'Atención directa sin intermediarios ante cualquier requerimiento.',
        },
      },
    },
    pricing: {
      badge: 'Transparencia Total',
      title: 'Plan Básico Web para Pymes',
      subtitle: 'Todo lo que tu empresa necesita para tener presencia digital profesional, segura y con alta conversión.',
      planBadge: 'Plan Pyme',
      planName: 'Plan Básico',
      planSubtitle: 'Diseño web estándar',
      priceAmount: '$49.990 CLP',
      priceNote: 'Pago único de puesta en marcha + soporte continuo',
      includedTitle: '14 Características Incluidas:',
      cta: 'Contratar Plan Básico',
      guarantee: 'Garantía de satisfacción y soporte técnico incluido durante el despliegue.',
      features: [
        'Diseño 100% responsivo para móviles, tablets y computadores',
        'Hosting de alta velocidad incluido con servidores cloud',
        'Dominio personalizado configurado (.cl o .com)',
        'Hasta 5 correos corporativos con tu propio dominio',
        'Botón flotante de WhatsApp directo a tus ejecutivos',
        'Formulario de contacto inteligente con notificación por correo',
        'Certificado de seguridad SSL (https://) incluido gratis',
        'Optimización básica de posicionamiento en Google (SEO local)',
        'Integración con Google Maps para ubicación de tu oficina o local',
        'Enlaces oficiales a tus redes sociales (Instagram, LinkedIn, etc.)',
        'Panel de administración intuitivo para actualizar textos y fotos',
        'Cumplimiento con leyes de privacidad y banner de cookies',
        'Capacitación inicial en video para administrar tu sitio',
        'Soporte técnico continuo vía WhatsApp y correo electrónico',
      ],
    },
    testimonials: {
      badge: 'Testimonios',
      title: 'Qué Dicen Nuestros Clientes',
      subtitle: 'Empresas y pymes que confían en Develisai para sus plataformas tecnológicas.',
      prev: 'Anterior',
      next: 'Siguiente',
      verifiedBadge: 'Cliente verificado',
      items: {
        '1': {
          id: '1',
          quote: 'Contratamos el Plan Básico y en menos de una semana teníamos la web funcionando. Las consultas de nuevos clientes por WhatsApp comenzaron de inmediato.',
          name: 'Carolina Morales',
          role: 'Fundadora',
          company: 'Delicias Artesanales',
        },
        '2': {
          id: '2',
          quote: 'La automatización de procesos que implementaron con IA nos ahorró más de 20 horas semanales de trabajo administrativo manual. Son un partner excepcional.',
          name: 'Rodrigo Fuentes',
          role: 'Gerente de Operaciones',
          company: 'Logística Trans Austral',
        },
        '3': {
          id: '3',
          quote: 'Diseño vanguardista, velocidad insuperable y una atención personalizada que no encontramos en ninguna otra agencia de software en Chile.',
          name: 'Daniela Valenzuela',
          role: 'Directora Comercial',
          company: 'Horizonte Inmobiliario',
        },
        '4': {
          id: '4',
          quote: 'El portal clínico que desarrollaron para nuestro centro médico cumple con los más altos estándares de seguridad y nuestros pacientes lo aman.',
          name: 'Dr. Matías Silva',
          role: 'Director Médico',
          company: 'Clínica Austral',
        },
        '5': {
          id: '5',
          quote: 'Excelente relación precio-calidad. El soporte post-venta es impecable y siempre están dispuestos a proponer mejoras innovadoras.',
          name: 'Felipe Contreras',
          role: 'CEO',
          company: 'Ferreterías Unidas',
        },
      },
    },
    techStack: {
      badge: 'Stack Tecnológico Integral',
      title: 'Tecnologías modernas para soluciones de alto impacto',
      subtitle: 'Construimos arquitecturas modulares, escalables y seguras utilizando los estándares y herramientas más demandados por la industria.',
      frontendBadge: 'Frontend & Web',
      backendBadge: 'Backend, Datos & APIs',
      cloudBadge: 'Cloud, DevOps & IA',
    },
    contact: {
      badge: 'Hablemos',
      title: 'Iniciemos tu Transformación Digital',
      subtitle: 'Cuéntanos sobre tu proyecto o requerimiento técnico. Te responderemos en menos de 2 horas hábiles.',
      name: 'Nombre completo',
      namePlaceholder: 'Ej: Juan Pérez',
      email: 'Correo electrónico',
      emailPlaceholder: 'juan@empresa.cl',
      phone: 'Teléfono / WhatsApp',
      phonePlaceholder: '+56 9 1234 5678',
      interest: 'Solución de interés',
      interestSelect: 'Selecciona una opción...',
      message: 'Mensaje o requerimiento',
      messagePlaceholder: 'Describe brevemente tus objetivos, plazos o dudas técnicas...',
      submit: 'Enviar Mensaje',
      submitting: 'Enviando mensaje...',
      successTitle: '¡Mensaje Recibido con Éxito!',
      successDesc: 'Nos pondremos en contacto contigo a la brevedad con una propuesta personalizada.',
      errorTitle: 'Error al enviar el mensaje. Por favor intenta nuevamente.',
      officeTitle: 'Oficina Central',
      emailTitle: 'Correo Directo',
      phoneTitle: 'WhatsApp & Teléfono',
      hoursTitle: 'Horario de Atención',
      hoursDesc: 'Lunes a Viernes: 09:00 - 18:30 hrs (CLT)',
    },
    footer: {
      brandDesc: 'Desarrollando valor con soluciones inteligentes. Ingeniería de software, desarrollo web y aplicaciones con inteligencia artificial para pymes y empresas en Chile.',
      quickLinks: 'Enlaces Rápidos',
      servicesCol: 'Soluciones',
      legalCol: 'Legal & Privacidad',
      privacy: 'Política de Privacidad',
      terms: 'Términos del Servicio',
      cookieSettings: 'Configuración de Cookies',
      cookiePolicy: 'Política de Cookies',
      rights: 'Todos los derechos reservados.',
    },
    modal: {
      title: 'Solicitar Propuesta Técnica',
      subtitle: 'Completa tus datos y nos pondremos en contacto contigo hoy mismo.',
      selectedProduct: 'Solución seleccionada:',
      cancel: 'Cancelar',
    },
    cookies: {
      title: 'Valoramos tu Privacidad',
      description: 'Utilizamos cookies para garantizar la mejor experiencia, analizar el tráfico y optimizar el rendimiento técnico del sitio.',
      acceptAll: 'Aceptar Todo',
      rejectNonEssential: 'Rechazar No Esenciales',
      configure: 'Configurar',
    },
    whatsapp: {
      defaultText: 'Hola Develisai, me gustaría consultar por sus soluciones tecnológicas.',
    },
  },

  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      services: 'Services',
      metrics: 'Metrics',
      clients: 'Clients',
      howItWorks: 'How it Works',
      contact: 'Contact',
      contactButton: 'Get in Touch',
      themeDark: 'Switch to light mode',
      themeLight: 'Switch to dark mode',
      languageSelect: 'Change language',
      whatsappButton: 'WhatsApp',
      megaMenu: {
        productsTitle: 'Commercial Products',
        productsSubtitle: 'Turnkey platforms and modular software ready to deploy.',
        servicesTitle: 'Specialized Services',
        servicesSubtitle: 'Custom engineering, strategic consulting, and AI development.',
        exploreAll: 'Explore full catalog',
        webPages: 'Websites',
        webPagesDesc: 'Professional, ultra-fast, and 100% mobile-optimized websites.',
        ecommerce: 'Online Stores',
        ecommerceDesc: 'E-commerce platforms with dynamic catalog and payment gateways.',
        saas: 'SaaS Solutions',
        saasDesc: 'Cloud software to automate workflows and unify data.',
        ai: 'Artificial Intelligence',
        aiDesc: 'Predictive models, autonomous agents, and smart automation.',
        consulting: 'Tech Consulting',
        consultingDesc: 'Architecture audits, cloud roadmap, and cybersecurity.',
        automation: 'Process Automation',
        automationDesc: 'Automated workflows and deep API integrations.',
      },
    },
    particleHero: {
      badgeSoftware: 'Software Engineering & Artificial Intelligence',
      badgeCountry: 'Chile',
      morphology: 'Morphology:',
      pause: 'Pause',
      resume: 'Resume',
      particlesCount: 'particles',
      dragHint: 'Drag cursor to interact with particles',
      title: 'Developing Value with Intelligent Solutions',
      subtitle: 'AI drives the future. We bring it to life.',
      ctaPrimary: 'Free Proposal — Basic Plan',
      ctaSecondary: 'Explore Products & Services',
      stripPartner: 'Your technology partner',
      stripMotto: 'Ideas + Technology + Future',
    },
    cinematicHero: {
      badge: 'Vision & Technical Excellence',
      title: 'Discover the Extraordinary',
      subtitle: 'The image breathes slowly: a subtle zoom breathes life into every landscape.',
      cta: 'Start Digital Project',
    },
    offerings: {
      badge: 'Develisai Commercial Portfolio',
      title: 'Solutions Engineered to Power Your Business',
      subtitle: 'Clear distinction between turnkey digital products and specialized professional services to accelerate your digital growth.',
      ctaDetails: 'View details & quote',
      productStar: 'Flagship Product',
      items: {
        'paginas-web': {
          id: 'paginas-web',
          category: 'Product',
          title: 'Websites',
          shortDescription: 'Professional, lightning-fast, 100% mobile-friendly websites engineered to convert visitors from day one.',
          highlightBenefit: 'Basic Plan starting at $49,990 CLP with cloud hosting and corporate emails included.',
          badgeText: 'Flagship Product',
        },
        'tiendas-online': {
          id: 'tiendas-online',
          category: 'Product',
          title: 'Online Stores',
          shortDescription: 'Robust e-commerce platforms with dynamic catalogs, shopping carts, regional payments, and order tracking.',
          highlightBenefit: 'Intuitive purchasing flow designed for mobile conversion.',
          badgeText: 'E-Commerce',
        },
        'saas': {
          id: 'saas',
          category: 'Product',
          title: 'SaaS Solutions',
          shortDescription: 'Custom software-as-a-service to digitize operations, automate routine tasks, and unify cloud records.',
          highlightBenefit: 'Scalable architecture, analytical dashboards, and granular user roles.',
          badgeText: 'Cloud & B2B',
        },
        'ia': {
          id: 'ia',
          category: 'Service',
          title: 'Artificial Intelligence',
          shortDescription: 'Integration of LLMs, computer vision, autonomous AI agents, and cognitive automation into your business.',
          highlightBenefit: 'Measurable productivity gains and automated 24/7 client response.',
          badgeText: 'Generative AI',
        },
        'consultoria': {
          id: 'consultoria',
          category: 'Service',
          title: 'Tech Consulting',
          shortDescription: 'Strategic advice on system architecture, cloud migrations, cybersecurity, and infrastructure optimization.',
          highlightBenefit: 'No-obligation technical audit and actionable architectural roadmap.',
          badgeText: 'Strategic',
        },
        'automatizacion': {
          id: 'automatizacion',
          category: 'Service',
          title: 'Process Automation',
          shortDescription: 'System interoperability, database synchronization, and repetitive task elimination through automated pipelines.',
          highlightBenefit: 'Up to 70% reduction in manual operational time.',
          badgeText: 'Efficiency',
        },
      },
    },
    smeHero: {
      badge: 'Committed to Growth',
      title: 'Democratizing Technology for Small & Medium Enterprises',
      subtitle: 'We believe every company deserves enterprise-grade engineering at fair, transparent, and accessible prices.',
      dragHint: 'Touch or drag the elastic mesh to experience digital elasticity',
      card1Title: 'Basic Plan $49,990 CLP',
      card1Desc: 'Complete web development with cloud hosting, branded emails, and responsive design without hidden fees.',
      card2Title: 'Continuous & Dedicated Support',
      card2Desc: 'Direct assistance via WhatsApp and email from Santiago, Chile with guaranteed SLA.',
      card3Title: 'Guaranteed Scalability',
      card3Desc: 'Your platform scales as your sales expand, from a brand showcase to a multi-branch store.',
      cta: 'Request an SME Proposal',
      floatingBadge: '100% Tailored for Chilean SMEs',
    },
    projects: {
      badge: 'Success Stories & Portfolio',
      title: 'Projects that Transform Business',
      subtitle: 'Real-world solutions built with rigorous engineering standards and proven return on investment.',
      similarCta: 'Request similar solution',
      verifiedBadge: 'Verified Live Project',
      demoBadge: 'Reference Demo Solution',
      items: {
        'e-commerce-gourmet': {
          id: 'e-commerce-gourmet',
          title: 'Gourmet E-Commerce',
          client: 'Delicias Artesanales',
          category: 'Online Store & Payments',
          description: 'Payment gateway integration with real-time dynamic shipping calculation and live inventory sync.',
          impact: '+185% digital sales growth in the first 60 days.',
        },
        'portal-clinico': {
          id: 'portal-clinico',
          title: 'Digital Clinic Portal',
          client: 'Centro Médico Austral',
          category: 'SaaS & Telehealth',
          description: 'End-to-end encrypted electronic medical records, appointment scheduling, and telemedicine.',
          impact: '98% appointment punctuality and zero paper footprint.',
        },
        'logistica-express': {
          id: 'logistica-express',
          title: 'Express Logistics Platform',
          client: 'Ruta Trans Chile',
          category: 'Automation & IoT',
          description: 'Satellite fleet tracking, automated route manifest generation, and real-time dispatch alerts.',
          impact: '40% reduction in transit idle time.',
        },
        'ia-atencion': {
          id: 'ia-atencion',
          title: 'Omnichannel AI Agent',
          client: 'Financiera Andina',
          category: 'Artificial Intelligence',
          description: 'Intelligent WhatsApp and web assistant qualifying leads and resolving complex financial inquiries instantly.',
          impact: '24/7 coverage with a 4.9/5 satisfaction rating.',
        },
        'gestion-inventario': {
          id: 'gestion-inventario',
          title: 'Cloud Inventory System',
          client: 'Ferreterías Unidas',
          category: 'Custom Software',
          description: 'Multi-branch sync with barcode hardware, electronic invoicing, and automated restock alerts.',
          impact: 'Complete stock traceability with 0 discrepancy.',
        },
        'web-corporativa': {
          id: 'web-corporativa',
          title: 'High-Speed Corporate Web',
          client: 'Inmobiliaria Horizonte',
          category: 'Premium Website',
          description: 'Interactive property showcases, virtual tours, and sub-second page loads.',
          impact: '99/100 mobile score on Google PageSpeed.',
        },
      },
    },
    metrics: {
      badge: 'Proven Performance',
      title: 'Metrics that Make the Difference',
      subtitle: 'Our rigorous software engineering translates into measurable bottom-line value.',
      tabPerformance: 'Web Performance',
      tabUptime: 'Cloud Reliability',
      tabSatisfaction: 'Client Satisfaction',
      items: {
        uptime: {
          id: 'uptime',
          value: '99.98%',
          label: 'Platform Uptime',
          description: 'Continuous availability backed by redundant AWS and Google Cloud infrastructure.',
        },
        speed: {
          id: 'speed',
          value: '98/100',
          label: 'Average Google PageSpeed',
          description: 'Ultra-low latency optimization for maximum search ranking and user conversion.',
        },
        delivery: {
          id: 'delivery',
          value: '100%',
          label: 'On-Time Milestone Delivery',
          description: 'Agile sprints with weekly reviewable demos and strictly respected deadlines.',
        },
        support: {
          id: 'support',
          value: '< 15 min',
          label: 'Support Response SLA',
          description: 'Direct engineer response without ticketing layers or call-center delays.',
        },
      },
    },
    pricing: {
      badge: 'Total Transparency',
      title: 'Basic Web Plan for SMEs',
      subtitle: 'Everything your business needs to establish a high-converting, secure, and professional digital presence.',
      planBadge: 'SME Plan',
      planName: 'Basic Plan',
      planSubtitle: 'Standard Web Design',
      priceAmount: '$49,990 CLP',
      priceNote: 'One-time setup fee + continuous technical support',
      includedTitle: '14 Included Features:',
      cta: 'Order Basic Plan',
      guarantee: '100% satisfaction guarantee with dedicated launch support.',
      features: [
        '100% responsive design for phones, tablets, and desktops',
        'High-speed cloud hosting included on secure infrastructure',
        'Custom domain setup (.cl or .com)',
        'Up to 5 branded corporate email inboxes',
        'Floating WhatsApp chat button connected to your sales team',
        'Smart contact form with instant email alerts',
        'Free SSL security certificate (https://) pre-configured',
        'Core local SEO optimization for Google indexation',
        'Interactive Google Maps integration for office location',
        'Official social media links (Instagram, LinkedIn, etc.)',
        'Intuitive content panel to update text, products, and photos',
        'Full privacy law compliance and GDPR cookie consent banner',
        'Step-by-step video walkthrough to manage your site',
        'Continuous technical support via WhatsApp and email',
      ],
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'What Our Clients Say',
      subtitle: 'Companies and businesses that trust Develisai for their digital engineering.',
      prev: 'Previous',
      next: 'Next',
      verifiedBadge: 'Verified Client',
      items: {
        '1': {
          id: '1',
          quote: 'We contracted the Basic Plan and had our site live in less than a week. Inquiries via WhatsApp started coming in immediately.',
          name: 'Carolina Morales',
          role: 'Founder',
          company: 'Delicias Artesanales',
        },
        '2': {
          id: '2',
          quote: 'The AI process automation Develisai deployed saved our team more than 20 hours per week of manual data entry. An outstanding technology partner.',
          name: 'Rodrigo Fuentes',
          role: 'Operations Director',
          company: 'Logística Trans Austral',
        },
        '3': {
          id: '3',
          quote: 'Forward-looking design, blazing fast load times, and personalized attention we could not find at any other agency.',
          name: 'Daniela Valenzuela',
          role: 'Commercial Director',
          company: 'Horizonte Inmobiliario',
        },
        '4': {
          id: '4',
          quote: 'The clinical portal they built matches the highest medical data privacy standards. Our doctors and patients love the smooth workflow.',
          name: 'Dr. Matías Silva',
          role: 'Medical Director',
          company: 'Clínica Austral',
        },
        '5': {
          id: '5',
          quote: 'Unbeatable value for money. Post-launch support is spotless and they constantly suggest smart technological enhancements.',
          name: 'Felipe Contreras',
          role: 'CEO',
          company: 'Ferreterías Unidas',
        },
      },
    },
    techStack: {
      badge: 'Full-Stack Technology Ecosystem',
      title: 'Modern technologies for high-impact software solutions',
      subtitle: 'We engineer modular, scalable, and secure architectures using modern industry-standard toolsets.',
      frontendBadge: 'Frontend & Web',
      backendBadge: 'Backend, Data & APIs',
      cloudBadge: 'Cloud, DevOps & AI',
    },
    contact: {
      badge: 'Let’s Talk',
      title: 'Start Your Digital Transformation',
      subtitle: 'Tell us about your project or technical requirements. We will reply within 2 business hours.',
      name: 'Full Name',
      namePlaceholder: 'e.g., John Smith',
      email: 'Work Email',
      emailPlaceholder: 'john@company.com',
      phone: 'Phone / WhatsApp',
      phonePlaceholder: '+56 9 1234 5678',
      interest: 'Service or Product of Interest',
      interestSelect: 'Select an option...',
      message: 'Project Description',
      messagePlaceholder: 'Briefly describe your objectives, timeframe, or technical questions...',
      submit: 'Send Message',
      submitting: 'Sending message...',
      successTitle: 'Message Received Successfully!',
      successDesc: 'We will reach out shortly with a tailored technical proposal.',
      errorTitle: 'Error submitting message. Please try again.',
      officeTitle: 'Main Office',
      emailTitle: 'Direct Email',
      phoneTitle: 'WhatsApp & Phone',
      hoursTitle: 'Operating Hours',
      hoursDesc: 'Monday to Friday: 09:00 - 18:30 (CLT)',
    },
    footer: {
      brandDesc: 'Developing value with intelligent solutions. Software engineering, web development, and AI systems for companies in Chile and worldwide.',
      quickLinks: 'Quick Links',
      servicesCol: 'Solutions',
      legalCol: 'Legal & Privacy',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookieSettings: 'Cookie Settings',
      cookiePolicy: 'Cookie Policy',
      rights: 'All rights reserved.',
    },
    modal: {
      title: 'Request Technical Proposal',
      subtitle: 'Provide your details and we will get back to you today.',
      selectedProduct: 'Selected solution:',
      cancel: 'Cancel',
    },
    cookies: {
      title: 'We Value Your Privacy',
      description: 'We use cookies to ensure optimal browsing, analyze site traffic, and optimize technical performance.',
      acceptAll: 'Accept All',
      rejectNonEssential: 'Reject Non-Essential',
      configure: 'Configure',
    },
    whatsapp: {
      defaultText: 'Hello Develisai, I would like to inquire about your technology solutions.',
    },
  },

  jp: {
    nav: {
      home: 'ホーム',
      products: 'プロダクト',
      services: 'サービス',
      metrics: '実績データ',
      clients: '導入事例',
      howItWorks: '仕組み',
      contact: 'お問い合わせ',
      contactButton: '無料相談',
      themeDark: 'ライトモードに切替',
      themeLight: 'ダークモードに切替',
      languageSelect: '言語を変更',
      whatsappButton: 'WhatsApp',
      megaMenu: {
        productsTitle: '商用プロダクト',
        productsSubtitle: '迅速に導入可能なターンキー型ソフトウェア基盤',
        servicesTitle: '専門エンジニアリング',
        servicesSubtitle: 'オーダーメイド開発とAI戦略コンサルティング',
        exploreAll: 'すべてのプロダクトを見る',
        webPages: 'Webサイト制作',
        webPagesDesc: '高コンバージョンかつ超高速なモバイル対応サイト',
        ecommerce: 'オンラインストア',
        ecommerceDesc: '決済・在庫管理完備の堅牢なECプラットフォーム',
        saas: 'SaaS開発',
        saasDesc: '業務自動化とデータ一元化を実現するクラウドシステム',
        ai: '人工知能 (AI)',
        aiDesc: 'LLM・画像認識・自律型AIエージェントの企業導入',
        consulting: 'ITコンサルティング',
        consultingDesc: 'システム設計監査とクラウドアクティベーション',
        automation: 'プロセス自動化',
        automationDesc: 'API連携による定型業務・ルーチンワーク削減',
      },
    },
    particleHero: {
      badgeSoftware: 'ソフトウェア工学 ＆ 人工知能 (AI)',
      badgeCountry: 'チリ',
      morphology: '文字変形:',
      pause: '一時停止',
      resume: '再開',
      particlesCount: '粒子数',
      dragHint: 'カーソルをドラッグして粒子とインタラクト',
      title: '知能ソリューションで価値を創造する',
      subtitle: 'AIが未来を加速する。私たちはそれを現実に変えます。',
      ctaPrimary: 'ベーシックプラン無料提案',
      ctaSecondary: 'プロダクト＆サービスを見る',
      stripPartner: '貴社のテクノロジーパートナー',
      stripMotto: 'アイデア ＋ テクノロジー ＋ 未来',
    },
    cinematicHero: {
      badge: 'ビジョン ＆ 技術的卓越性',
      title: '非日常の体験を発見する',
      subtitle: 'ゆっくりと呼吸する映像：繊細なズームが景観に命を吹き込みます。',
      cta: 'デジタルプロジェクトを開始',
    },
    offerings: {
      badge: 'Develisai コマーシャルポートフォリオ',
      title: 'ビジネスを加速する最先端ソリューション',
      subtitle: '即戦力の「プロダクト」と高度な「プロフェッショナルサービス」でDXを推進します。',
      ctaDetails: '詳細を見る・見積り',
      productStar: '看板プロダクト',
      items: {
        'paginas-web': {
          id: 'paginas-web',
          category: 'プロダクト',
          title: 'Webサイト制作',
          shortDescription: '超高速でモバイルに完全対応し、初日から集客と売上向上を実現するプロ仕様Webサイト。',
          highlightBenefit: 'ベーシックプラン $49.990 CLP〜（ホスティング・独自ドメインメール込）。',
          badgeText: '看板プロダクト',
        },
        'tiendas-online': {
          id: 'tiendas-online',
          category: 'プロダクト',
          title: 'オンラインストア',
          shortDescription: 'カタログ、ショッピングカート、各種決済、配送管理を一括管理できる堅牢なECサイト。',
          highlightBenefit: 'スマホでの購入完了率を極限まで高めたシームレス設計。',
          badgeText: 'Eコマース',
        },
        'saas': {
          id: 'saas',
          category: 'プロダクト',
          title: 'SaaSソリューション',
          shortDescription: '業務自動化とデータ統合をクラウド上で完結させるオーダーメイドSaaS開発。',
          highlightBenefit: 'スケーラブルな構成、分析ダッシュボード、権限管理を標準装備。',
          badgeText: 'クラウド＆B2B',
        },
        'ia': {
          id: 'ia',
          category: 'サービス',
          title: '人工知能 (AI)',
          shortDescription: '大規模言語モデル（LLM）、コンピュータビジョン、自律型AIエージェントの業務導入。',
          highlightBenefit: '業務工数削減と24時間365日の自動顧客対応を実現。',
          badgeText: '生成AI',
        },
        'consultoria': {
          id: 'consultoria',
          category: 'サービス',
          title: 'ITコンサルティング',
          shortDescription: 'システム構成監査、クラウド移行計画、セキュリティ強化と技術ロードマップ策定。',
          highlightBenefit: '初回無料の技術診断と具体的ロードマップの提示。',
          badgeText: '戦略支援',
        },
        'automatizacion': {
          id: 'automatizacion',
          category: 'サービス',
          title: 'プロセス自動化',
          shortDescription: 'システム間連携とデータベース同期により、人手による反復作業を自動化。',
          highlightBenefit: '定型手作業の工数を最大70%削減。',
          badgeText: '高効率化',
        },
      },
    },
    smeHero: {
      badge: '成長へのコミットメント',
      title: '中小企業のためのテクノロジー民主化',
      subtitle: 'すべての企業が高品質なエンタープライズ級ツールを適正かつ透明な価格で享受できるべきです。',
      dragHint: '伸縮性メッシュをドラッグして操作してみてください',
      card1Title: 'ベーシックプラン $49.990 CLP',
      card1Desc: 'ホスティング、独自ドメインメール、デザイン制作完備。隠れた追加費用はありません。',
      card2Title: '継続的で親身なサポート',
      card2Desc: 'サンティアゴ拠点からWhatsAppとメールで迅速にお応えします。',
      card3Title: '柔軟な拡張性',
      card3Desc: '小規模Webから数万点の大規模ECまで、売上成長に合わせて拡張可能です。',
      cta: '中小企業向け提案を依頼',
      floatingBadge: 'チリの中小企業に最適化',
    },
    projects: {
      badge: '導入事例 ＆ 実績',
      title: 'ビジネスを変革する成功事例',
      subtitle: '高いエンジニアリング基準と確実なROIを両立させた実装プロジェクト。',
      similarCta: '類似ソリューションを相談',
      items: {
        'e-commerce-gourmet': {
          id: 'e-commerce-gourmet',
          title: 'グルメECストア',
          client: 'Delicias Artesanales',
          category: 'オンラインストア＆決済',
          description: 'Webpay Plus連携、自動送料計算、リアルタイム在庫同期システム。',
          impact: '導入後60日でデジタル売上＋185%達成。',
        },
        'portal-clinico': {
          id: 'portal-clinico',
          title: '医療機関ポータル',
          client: 'Centro Médico Austral',
          category: 'SaaS＆遠隔医療',
          description: '暗号化電子カルテ、診療予約システム、オンライン診察機能。',
          impact: '診療定時開始率98%、ペーパーレス100%達成。',
        },
        'logistica-express': {
          id: 'logistica-express',
          title: '高速物流プラットフォーム',
          client: 'Ruta Trans Chile',
          category: '自動化＆IoT',
          description: '車両衛星追跡、自動配車伝票発行、配送ルートリアルタイム最適化。',
          impact: '運行待機時間を40%短縮。',
        },
        'ia-atencion': {
          id: 'ia-atencion',
          title: 'オムニチャネルAIエージェント',
          client: 'Financiera Andina',
          category: '人工知能 (AI)',
          description: '見込み顧客の自動ヒアリングと問い合わせ即時回答を行うAIボット。',
          impact: '24時間無人対応、顧客満足度4.9/5獲得。',
        },
        'gestion-inventario': {
          id: 'gestion-inventario',
          title: 'クラウド在庫管理システム',
          client: 'Ferreterías Unidas',
          category: '受託開発ソフトウェア',
          description: '多店舗在庫同期、バーコードリーダー連携、税務申告データ自動出力。',
          impact: '在庫差異ゼロの完全トレーサビリティを実現。',
        },
        'web-corporativa': {
          id: 'web-corporativa',
          title: '超高速コーポレートサイト',
          client: 'Inmobiliaria Horizonte',
          category: 'プレミアムWebサイト',
          description: 'バーチャルツアー対応、物件カタログ、超高速レスポンス設計。',
          impact: 'Google PageSpeedモバイルスコア99/100記録。',
        },
      },
    },
    metrics: {
      badge: '実証された成果',
      title: '数字が証明するエンジニアリング品質',
      subtitle: '妥協なき技術力がクライアントの事業成果に直結します。',
      tabPerformance: 'Web性能',
      tabUptime: '稼働信頼性',
      tabSatisfaction: '顧客満足度',
      items: {
        uptime: {
          id: 'uptime',
          value: '99.98%',
          label: '稼働率 (SLA)',
          description: 'AWSおよびGoogle Cloudの冗長化インフラによる常時安定稼働。',
        },
        speed: {
          id: 'speed',
          value: '98/100',
          label: 'Google PageSpeed平均スコア',
          description: '徹底的な軽量化とCore Web Vitals最適化。',
        },
        delivery: {
          id: 'delivery',
          value: '100%',
          label: '納期遵守率',
          description: 'アジャイル開発と週次レビューによる遅延ゼロの納品体制。',
        },
        support: {
          id: 'support',
          value: '< 15分',
          label: 'サポート初動レスポンス',
          description: '専任エンジニアが直接迅速に対応します。',
        },
      },
    },
    pricing: {
      badge: '明朗な料金体系',
      title: '中小企業向け ベーシックWebプラン',
      subtitle: '安全で高コンバージョンなプロ仕様Webサイトに必要なすべてを凝縮。',
      priceAmount: '$49.990 CLP',
      priceNote: '初期立ち上げ費用 ＋ 継続テクニカルサポート',
      includedTitle: '標準搭載の14機能:',
      cta: 'ベーシックプランを申し込む',
      guarantee: '満足度保証および公開時の専任サポート付き。',
      features: [
        'スマホ・タブレット・PC完全対応のレスポンシブデザイン',
        '安全なクラウドサーバーによる高速ホスティング込み',
        '独自ドメイン設定（.cl または .com）',
        '独自ドメインのビジネスメール最大5アカウント',
        '営業担当に直結するフローティングWhatsAppボタン',
        '即時メール通知付きスマート問い合わせフォーム',
        'SSL暗号化通信（https://）無料完備',
        'Google検索順位向上を狙う基本ローカルSEO対策',
        '拠点アクセスのためのGoogle Maps埋め込み連携',
        '公式SNS（Instagram、LinkedIn等）リンク設定',
        '文章や画像を直感的に更新できる管理機能',
        'プライバシー法規対応＆Cookie同意バナー設定',
        '操作方法をわかりやすく解説するビデオマニュアル',
        'WhatsAppとメールによる継続テクニカルサポート',
      ],
    },
    testimonials: {
      badge: 'お客様の声',
      title: '導入企業からの評価',
      subtitle: 'Develisaiを選んでいただいた多くの企業から信頼の声をいただいています。',
      prev: '前へ',
      next: '次へ',
      items: {
        '1': {
          id: '1',
          quote: 'ベーシックプランを契約し、1週間も経たずにサイトが稼働しました。WhatsApp経由の新規問い合わせが即座に増え始めました。',
          name: 'Carolina Morales',
          role: '創業者',
          company: 'Delicias Artesanales',
        },
        '2': {
          id: '2',
          quote: 'AIによる業務自動化を導入したことで、毎週20時間以上の事務作業が削減されました。最高のテクノロジーパートナーです。',
          name: 'Rodrigo Fuentes',
          role: '業務統括マネージャー',
          company: 'Logística Trans Austral',
        },
        '3': {
          id: '3',
          quote: '先進的なデザイン、圧倒的な表示速度、そして親身な対応。他社にはない高い技術力を実感しました。',
          name: 'Daniela Valenzuela',
          role: '営業部長',
          company: 'Horizonte Inmobiliario',
        },
        '4': {
          id: '4',
          quote: '医療データの厳格なセキュリティ要件を満たしたポータルを構築してくれました。医師も患者も大変使いやすいと好評です。',
          name: 'Dr. Matías Silva',
          role: '院長',
          company: 'Clínica Austral',
        },
        '5': {
          id: '5',
          quote: 'コストパフォーマンスが抜群です。納品後のサポートも迅速で、常に先進的な改善案を提案してくれます。',
          name: 'Felipe Contreras',
          role: '代表取締役',
          company: 'Ferreterías Unidas',
        },
      },
    },
    contact: {
      badge: 'お問い合わせ',
      title: 'デジタルトランスフォーメーションを始めましょう',
      subtitle: 'プロジェクトのご要望や技術的なご相談をお聞かせください。2営業時間以内にご返信いたします。',
      name: 'お名前',
      namePlaceholder: '例: 田中 太郎',
      email: 'メールアドレス',
      emailPlaceholder: 'tanaka@company.com',
      phone: 'お電話番号 / WhatsApp',
      phonePlaceholder: '+56 9 1234 5678',
      interest: 'ご関心のあるソリューション',
      interestSelect: '選択してください...',
      message: 'ご相談内容・ご要望',
      messagePlaceholder: '目的、納期、技術的要件などを簡潔にお聞かせください...',
      submit: 'メッセージを送信',
      submitting: '送信中...',
      successTitle: 'お問い合わせを受け付けました',
      successDesc: '内容を確認の上、担当エンジニアより速やかにご連絡差し上げます。',
      errorTitle: '送信エラーが発生しました。再度お試しください。',
      officeTitle: '本社所在地',
      emailTitle: 'メール窓口',
      phoneTitle: 'WhatsApp / お電話',
      hoursTitle: '営業時間',
      hoursDesc: '月曜日〜金曜日: 09:00 - 18:30 (チリ時間)',
    },
    footer: {
      brandDesc: '知能ソリューションで価値を創造する。中小企業から大手まで対応する高品質ソフトウェア開発・Web制作・AI導入パートナー。',
      quickLinks: 'クイックリンク',
      servicesCol: 'ソリューション',
      legalCol: '規約・プライバシー',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      cookieSettings: 'Cookie設定',
      cookiePolicy: 'Cookieポリシー',
      rights: '無断転載を禁じます。',
    },
    modal: {
      title: '技術提案・お見積り依頼',
      subtitle: '必要事項をご記入いただければ、本日中にご連絡いたします。',
      selectedProduct: '選択中のソリューション:',
      cancel: 'キャンセル',
    },
    cookies: {
      title: 'プライバシーの尊重',
      description: '快適な閲覧環境の提供、アクセス解析、技術的パフォーマンス向上のためにCookieを使用しています。',
      acceptAll: 'すべて同意',
      rejectNonEssential: '必須以外を拒否',
      configure: '詳細設定',
    },
    whatsapp: {
      defaultText: 'こんにちは。Develisaiのテクノロジーソリューションについて相談させてください。',
    },
  },

  ch: {
    nav: {
      home: '首页',
      products: '产品中心',
      services: '专业服务',
      metrics: '数据表现',
      clients: '客户案例',
      howItWorks: '运作流程',
      contact: '联系我们',
      contactButton: '立即咨询',
      themeDark: '切换到浅色模式',
      themeLight: '切换到深色模式',
      languageSelect: '切换语言',
      whatsappButton: 'WhatsApp',
      megaMenu: {
        productsTitle: '商业软件产品',
        productsSubtitle: '开箱即用、模块化的数字化软件基础设施',
        servicesTitle: '定制化工程服务',
        servicesSubtitle: '高级定制开发、架构咨询与企业级AI落地',
        exploreAll: '查看完整产品目录',
        webPages: '企业官网建设',
        webPagesDesc: '极速加载、全移动端适配的高转化专业网站。',
        ecommerce: '在线商城系统',
        ecommerceDesc: '支持本地支付网关与实时库存的电商平台。',
        saas: 'SaaS云端软件',
        saasDesc: '实现业务流程自动化与数据云端集成的定制软件。',
        ai: '人工智能 (AI)',
        aiDesc: '大语言模型、计算机视觉与自主智能体方案。',
        consulting: '技术与架构咨询',
        consultingDesc: '系统架构审计、上云路线图规划与网络安全。',
        automation: '业务流程自动化',
        automationDesc: '系统互联与API深度打通，消除重复性人工操作。',
      },
    },
    particleHero: {
      badgeSoftware: '软件工程 ＆ 人工智能 (AI)',
      badgeCountry: '智利',
      morphology: '形态切换:',
      pause: '暂停',
      resume: '播放',
      particlesCount: '粒子数',
      dragHint: '拖拽鼠标与粒子产生物理交互',
      title: '以智能解决方案创造商业价值',
      subtitle: 'AI驱动未来。我们将其转化为切实可见的商业现实。',
      ctaPrimary: '免费获取基础版方案',
      ctaSecondary: '浏览产品与服务',
      stripPartner: '您的全天候技术合作伙伴',
      stripMotto: '创意 ＋ 科技 ＋ 未来',
    },
    cinematicHero: {
      badge: '愿景与卓越工程',
      title: '探索非凡数字体验',
      subtitle: '画面如呼吸般轻柔流动：平滑镜头缩放赋予数字场景生动生命力。',
      cta: '启动数字工程',
    },
    offerings: {
      badge: 'Develisai 商业解决方案组合',
      title: '专为驱动业务增长而打造的尖端方案',
      subtitle: '明确划分标准化「产品」与定制化「技术服务」，全力加速企业数字化升级。',
      ctaDetails: '查看详情与报价',
      productStar: '核心爆款',
      items: {
        'paginas-web': {
          id: 'paginas-web',
          category: '产品',
          title: '企业网站',
          shortDescription: '专业、极速、100%全端适配的现代化网站，专为首日起获取客户线索设计。',
          highlightBenefit: '基础套餐仅需 $49.990 CLP 起，含云主机与企业专属域名邮箱。',
          badgeText: '核心爆款',
        },
        'tiendas-online': {
          id: 'tiendas-online',
          category: '产品',
          title: '在线商城',
          shortDescription: '功能完备的电子商务系统，包含动态商品目录、购物车、本地支付通道及订单履约。',
          highlightBenefit: '为移动端极速结账与高转化率优化的购物体验。',
          badgeText: '电子商务',
        },
        'saas': {
          id: 'saas',
          category: '产品',
          title: 'SaaS云平台',
          shortDescription: '量身定制的软件即服务，助力业务上云、自动化运营并集中管理企业核心数据。',
          highlightBenefit: '弹性微服务架构、实时数据仪表盘与细粒度权限控制。',
          badgeText: '云端与B2B',
        },
        'ia': {
          id: 'ia',
          category: '服务',
          title: '人工智能 (AI)',
          shortDescription: '集成尖端大语言模型、机器视觉与智能客服智能体，全面赋能业务流程。',
          highlightBenefit: '显著降低运营工时，实现 7x24 小时全自动客情应答。',
          badgeText: '生成式AI',
        },
        'consultoria': {
          id: 'consultoria',
          category: '服务',
          title: '技术战略咨询',
          shortDescription: '针对软件架构、云端迁移、数据合规及IT基础设施优化的权威咨询。',
          highlightBenefit: '免费技术诊断及可执行的系统演进路线图。',
          badgeText: '战略咨询',
        },
        'automatizacion': {
          id: 'automatizacion',
          category: '服务',
          title: '业务流程自动化',
          shortDescription: '打通孤岛系统，实现数据库毫秒级同步，彻底摆脱繁琐的人工重复工作。',
          highlightBenefit: '最高节省 70% 的日常人工操作时长。',
          badgeText: '降本增效',
        },
      },
    },
    smeHero: {
      badge: '携手中小微企业共同成长',
      title: '让中小企业平权享有企业级数字科技',
      subtitle: '我们深信每家企业都应以合理、透明的价格获得顶级工程质量的技术支持。',
      dragHint: '触摸或拖拽弹性网格体验数字物理效果',
      card1Title: '基础套餐 $49.990 CLP',
      card1Desc: '全套网站开发，包含云主机、企业邮箱和定制设计，绝无隐藏收费。',
      card2Title: '即时响应的本地支持',
      card2Desc: '驻智利圣地亚哥团队，通过 WhatsApp 和邮件提供高 SLA 保证的中文/西语服务。',
      card3Title: '伴随业务无限扩展',
      card3Desc: '从展示型官网到管理海量订单的商城系统，底层架构随销售额同步平滑扩容。',
      cta: '立即索取中小企业专属方案',
      floatingBadge: '深度适配智利中小企业需求',
    },
    projects: {
      badge: '成功案例与工程展示',
      title: '赋能业务转型的实战案例',
      subtitle: '以严苛的工程标准打造的真实商业方案，带来明确可衡量的投资回报。',
      similarCta: '咨询类似方案',
      items: {
        'e-commerce-gourmet': {
          id: 'e-commerce-gourmet',
          title: '高档美食电商平台',
          client: 'Delicias Artesanales',
          category: '在线零售与支付',
          description: '集成 Webpay Plus 支付通道、智能运费测算及实时仓储库存同步系统。',
          impact: '上线首60天数字销售额大幅增长 185%。',
        },
        'portal-clinico': {
          id: 'portal-clinico',
          title: '数字医疗诊疗门户',
          client: 'Centro Médico Austral',
          category: 'SaaS与远程医疗',
          description: '高标准加密的电子病历管理、智能问诊预约和远程视频会诊系统。',
          impact: '门诊准时率达到 98%，全面实现无纸化办公。',
        },
        'logistica-express': {
          id: 'logistica-express',
          title: '速运物流智能调度平台',
          client: 'Ruta Trans Chile',
          category: '自动化与IoT物联网',
          description: '车队卫星定位追踪、运单电子化自动生成和干线风险实时预警。',
          impact: '车辆在途待命停滞时间缩减 40%。',
        },
        'ia-atencion': {
          id: 'ia-atencion',
          title: '全渠道AI智能助理',
          client: 'Financiera Andina',
          category: '人工智能 (AI)',
          description: '接入 WhatsApp 与官网，自主完成潜在客户画像筛选并秒级解答复杂财务咨询。',
          impact: '全天候响应，客户满意度高达 4.9/5 星。',
        },
        'gestion-inventario': {
          id: 'gestion-inventario',
          title: '云端多门店进销存系统',
          client: 'Ferreterías Unidas',
          category: '定制管理软件',
          description: '多门店实时库存同步，支持条码枪硬件扫描并自动对接税务发票接口。',
          impact: '实现库存 100% 精确可追溯，彻底消除盘点误差。',
        },
        'web-corporativa': {
          id: 'web-corporativa',
          title: '极速品牌官网',
          client: 'Inmobiliaria Horizonte',
          category: '高定企业官网',
          description: '全景交互式楼盘展示、房源搜索目录与全站毫秒级极速响应。',
          impact: '移动端 Google PageSpeed 评分高达 99/100 分。',
        },
      },
    },
    metrics: {
      badge: '实证技术实力',
      title: '以客观数据彰显工程水准',
      subtitle: '严谨的软件工程转化为客户实打实的商业竞争力。',
      tabPerformance: '网站极速表现',
      tabUptime: '云端高可用性',
      tabSatisfaction: '客户满意度',
      items: {
        uptime: {
          id: 'uptime',
          value: '99.98%',
          label: '平台在线率 (SLA)',
          description: '依托 AWS 与 Google Cloud 多可用区容灾架构保障系统长久稳定。',
        },
        speed: {
          id: 'speed',
          value: '98/100',
          label: 'Google PageSpeed 平均得分',
          description: '全方位的代码瘦身与 Core Web Vitals 极限性能调优。',
        },
        delivery: {
          id: 'delivery',
          value: '100%',
          label: '交付节点达成率',
          description: '严谨的敏捷开发冲刺与每周可验收成果交付，拒绝延期。',
        },
        support: {
          id: 'support',
          value: '< 15 分钟',
          label: '技术支持首响时效',
          description: '资深工程师直接处理技术需求，避免繁琐转接。',
        },
      },
    },
    pricing: {
      badge: '价格透明承诺',
      title: '中小企业官网基础套餐',
      subtitle: '涵盖建立高转化、安全且专业企业数字化窗口所需的一切必备要素。',
      priceAmount: '$49.990 CLP',
      priceNote: '一次性开发部署费用 ＋ 持续技术护航',
      includedTitle: '标配包含 14 项完整功能:',
      cta: '立即办理基础套餐',
      guarantee: '享有满意度保障与全流程交付技术辅导。',
      features: [
        '手机、平板与桌面电脑 100% 响应式自适应布局',
        '包含安全云服务器高性能托管服务',
        '配置专属商业域名（.cl 或 .com）',
        '赠送多达 5 个专属域名企业级商务邮箱',
        '全站悬浮 WhatsApp 快捷沟通按钮直达业务人员',
        '智能防垃圾邮件留言表单，即时推送邮件提醒',
        '免费预装全球信任的 SSL (https://) 安全加密证书',
        'Google 搜索引擎基础本地化 SEO 优化配置',
        '嵌入官方 Google 地图，方便客户导航至办公地点',
        '完整集成社交平台官方主页（Instagram、LinkedIn等）',
        '直观易用的后台管理，轻松更改图文与产品资料',
        '符合数据隐私规范并配备合规 Cookie 授权弹窗',
        '赠送系统管理教学视频，零基础轻松上手',
        '提供专属 WhatsApp 和邮件长效技术支持',
      ],
    },
    testimonials: {
      badge: '客户心声',
      title: '聆听合作伙伴的真实评价',
      subtitle: '信赖 Develisai 卓越技术力量的各领域企业与商家。',
      prev: '上一条',
      next: '下一条',
      items: {
        '1': {
          id: '1',
          quote: '我们选择了基础套餐，不到一周网站就正式上线了。来自 WhatsApp 的客户咨询当天就开始涌现，非常给力。',
          name: 'Carolina Morales',
          role: '创始人',
          company: 'Delicias Artesanales',
        },
        '2': {
          id: '2',
          quote: 'Develisai 为我们部署的 AI 流程自动化每周为团队节省了超过 20 小时的手工录入时间，是值得长期托付的技术伙伴。',
          name: 'Rodrigo Fuentes',
          role: '运营总经理',
          company: 'Logística Trans Austral',
        },
        '3': {
          id: '3',
          quote: '前沿的视觉设计、不可思议的访问速度，以及在智利其他技术团队身上少见的细致服务态度。',
          name: 'Daniela Valenzuela',
          role: '商务总监',
          company: 'Horizonte Inmobiliario',
        },
        '4': {
          id: '4',
          quote: '为我们诊所开发的数字门户完全达到了医疗级数据安全规范，医生和患者都称赞其操作流畅便捷。',
          name: 'Dr. Matías Silva',
          role: '院长',
          company: 'Clínica Austral',
        },
        '5': {
          id: '5',
          quote: '超高性价比。项目交付后的售后服务无可挑剔，总是主动从技术角度为我们提供创新提升建议。',
          name: 'Felipe Contreras',
          role: '首席执行官',
          company: 'Ferreterías Unidas',
        },
      },
    },
    contact: {
      badge: '携手合作',
      title: '开启您的数字化转型新篇章',
      subtitle: '请告诉我们您的项目需求或技术设想。我们将在2个工作小时内与您取得联系。',
      name: '您的姓名',
      namePlaceholder: '例如: 张先生',
      email: '电子邮箱',
      emailPlaceholder: 'zhang@company.com',
      phone: '联系电话 / WhatsApp',
      phonePlaceholder: '+56 9 1234 5678',
      interest: '感兴趣的解决方案',
      interestSelect: '请选择意向方案...',
      message: '项目需求描述',
      messagePlaceholder: '请简要描述您的目标、预期排期或具体技术考量...',
      submit: '立即发送留言',
      submitting: '正在发送中...',
      successTitle: '留言已成功接收！',
      successDesc: '我们的技术专家将迅速查阅并为您出具量身定制的初步方案。',
      errorTitle: '发送遇到问题，请稍后重试。',
      officeTitle: '圣地亚哥总部',
      emailTitle: '官方直联邮箱',
      phoneTitle: 'WhatsApp 专属通道',
      hoursTitle: '接待工作时间',
      hoursDesc: '周一至周五: 09:00 - 18:30 (智利当地时间)',
    },
    footer: {
      brandDesc: '以智能解决方案创造商业价值。专注为智利及拉美企业提供高标准的软件工程、网站开发与人工智能方案。',
      quickLinks: '快速链接',
      servicesCol: '核心方案',
      legalCol: '法律合规',
      privacy: '隐私政策',
      terms: '服务条款',
      cookieSettings: 'Cookie 设置',
      cookiePolicy: 'Cookie 政策',
      rights: '版权所有，保留所有权利。',
    },
    modal: {
      title: '索取定制技术方案',
      subtitle: '填写您的联络方式，我们将在今日为您提供初步技术评估。',
      selectedProduct: '您选择的方案:',
      cancel: '取消',
    },
    cookies: {
      title: '保护您的隐私',
      description: '我们使用必要和分析类 Cookie 以确保优质的用户体验并优化系统性能。',
      acceptAll: '全部同意',
      rejectNonEssential: '仅保留必要项',
      configure: '偏好设置',
    },
    whatsapp: {
      defaultText: '您好 Develisai，我想咨询关于贵公司的科技解决方案。',
    },
  },

  de: {
    nav: {
      home: 'Startseite',
      products: 'Produkte',
      services: 'Dienstleistungen',
      metrics: 'Kennzahlen',
      clients: 'Kunden',
      howItWorks: 'So funktioniert\'s',
      contact: 'Kontakt',
      contactButton: 'Kontaktieren',
      themeDark: 'Zum hellen Modus wechseln',
      themeLight: 'Zum dunklen Modus wechseln',
      languageSelect: 'Sprache ändern',
      whatsappButton: 'WhatsApp',
      megaMenu: {
        productsTitle: 'Kommerzielle Produkte',
        productsSubtitle: 'Schlüsselfertige Plattformen und modulare Softwarelösungen.',
        servicesTitle: 'Spezialisierte Services',
        servicesSubtitle: 'Maßgeschneiderte Softwareentwicklung und KI-Beratung.',
        exploreAll: 'Gesamten Produktkatalog erkunden',
        webPages: 'Websites',
        webPagesDesc: 'Professionelle, ultraschnelle und mobile-optimierte Websites.',
        ecommerce: 'Online-Shops',
        ecommerceDesc: 'Leistungsstarke E-Commerce-Plattformen mit Zahlungsabwicklung.',
        saas: 'SaaS-Lösungen',
        saasDesc: 'Cloud-Software zur Automatisierung und Datenintegration.',
        ai: 'Künstliche Intelligenz',
        aiDesc: 'Sprachmodelle, Computer Vision und autonome KI-Agenten.',
        consulting: 'IT-Beratung',
        consultingDesc: 'Architekturaudits, Cloud-Roadmaps und IT-Sicherheit.',
        automation: 'Prozessautomatisierung',
        automationDesc: 'Automatisierte Workflows und tiefe API-Integrationen.',
      },
    },
    particleHero: {
      badgeSoftware: 'Software-Engineering & Künstliche Intelligenz',
      badgeCountry: 'Chile',
      morphology: 'Morphologie:',
      pause: 'Pausieren',
      resume: 'Fortsetzen',
      particlesCount: 'Partikel',
      dragHint: 'Cursor ziehen, um mit Partikeln zu interagieren',
      title: 'Wertschöpfung durch intelligente Lösungen',
      subtitle: 'KI treibt die Zukunft an. Wir machen sie greifbar.',
      ctaPrimary: 'Kostenloses Angebot — Basisplan',
      ctaSecondary: 'Produkte und Services erkunden',
      stripPartner: 'Ihr Technologiepartner',
      stripMotto: 'Ideen + Technologie + Zukunft',
    },
    cinematicHero: {
      badge: 'Vision & Technische Exzellenz',
      title: 'Entdecken Sie das Außergewöhnliche',
      subtitle: 'Das Bild atmet langsam: Ein sanfter Zoom erweckt Landschaften zum Leben.',
      cta: 'Digitalprojekt starten',
    },
    offerings: {
      badge: 'Develisai Produktportfolio',
      title: 'Lösungen für nachhaltiges Unternehmenswachstum',
      subtitle: 'Klare Trennung zwischen schlüsselfertigen Produkten und hochgradig spezialisierten Ingenieurdienstleistungen.',
      ctaDetails: 'Details ansehen & anfragen',
      productStar: 'Flaggschiff-Produkt',
      items: {
        'paginas-web': {
          id: 'paginas-web',
          category: 'Produkt',
          title: 'Websites',
          shortDescription: 'Professionelle, extrem schnelle und voll responsive Websites zur Neukundengewinnung.',
          highlightBenefit: 'Basisplan ab $49.990 CLP inkl. Cloud-Hosting und Domain-E-Mails.',
          badgeText: 'Flaggschiff-Produkt',
        },
        'tiendas-online': {
          id: 'tiendas-online',
          category: 'Produkt',
          title: 'Online-Shops',
          shortDescription: 'Leistungsfähige E-Commerce-Lösungen mit dynamischem Katalog, Warenkorb und Bezahlschnittstellen.',
          highlightBenefit: 'Optimierter Checkout für höchste mobile Conversion-Raten.',
          badgeText: 'E-Commerce',
        },
        'saas': {
          id: 'saas',
          category: 'Produkt',
          title: 'SaaS-Lösungen',
          shortDescription: 'Maßgeschneiderte Software-as-a-Service zur Digitalisierung Ihrer betrieblichen Abläufe.',
          highlightBenefit: 'Skalierbare Cloud-Architektur, Dashboards und differenzierte Nutzerrollen.',
          badgeText: 'Cloud & B2B',
        },
        'ia': {
          id: 'ia',
          category: 'Dienstleistung',
          title: 'Künstliche Intelligenz',
          shortDescription: 'Integration moderner LLMs, Bildverarbeitung und KI-Agenten in bestehende Prozesse.',
          highlightBenefit: 'Spürbare Produktivitätssteigerung und 24/7-Kundenkommunikation.',
          badgeText: 'Generative KI',
        },
        'consultoria': {
          id: 'consultoria',
          category: 'Dienstleistung',
          title: 'IT-Beratung',
          shortDescription: 'Strategische Beratung zu Softwarearchitektur, Cloud-Migration und Informationssicherheit.',
          highlightBenefit: 'Unverbindliches technisches Audit und praxistaugliche Roadmap.',
          badgeText: 'Strategie',
        },
        'automatizacion': {
          id: 'automatizacion',
          category: 'Dienstleistung',
          title: 'Prozessautomatisierung',
          shortDescription: 'Systemvernetzung, Datenbanksynchronisation und Eliminierung repetitiver Routineaufgaben.',
          highlightBenefit: 'Bis zu 70% Zeitersparnis bei manuellen Arbeitsabläufen.',
          badgeText: 'Effizienz',
        },
      },
    },
    smeHero: {
      badge: 'Engagement für Wachstum',
      title: 'Technologiedemokratisierung für den Mittelstand',
      subtitle: 'Wir sind überzeugt, dass jedes Unternehmen erstklassige Technologie zu fairen und transparenten Preisen verdient.',
      dragHint: 'Berühren oder ziehen Sie das elastische Netz für interaktive Physik',
      card1Title: 'Basisplan $49.990 CLP',
      card1Desc: 'Komplette Webentwicklung mit Hosting, Firmen-E-Mails und modernem Design ohne versteckte Kosten.',
      card2Title: 'Kontinuierlicher Support vor Ort',
      card2Desc: 'Direkte Betreuung per WhatsApp und E-Mail aus Santiago de Chile mit garantiertem Service.',
      card3Title: 'Zukunftssichere Skalierbarkeit',
      card3Desc: 'Ihre Plattform wächst mit Ihren Umsätzen – von der Web-Visitenkarte bis zur Omnichannel-Lösung.',
      cta: 'Angebot für mein KMU anfragen',
      floatingBadge: '100% maßgeschneidert für KMU',
    },
    projects: {
      badge: 'Erfolgsgeschichten & Portfolio',
      title: 'Projekte, die Unternehmen transformieren',
      subtitle: 'Erprobte Kundenprojekte mit höchsten Software-Engineering-Standards und messbarem ROI.',
      similarCta: 'Ähnliche Lösung anfragen',
      items: {
        'e-commerce-gourmet': {
          id: 'e-commerce-gourmet',
          title: 'Gourmet-Onlineshop',
          client: 'Delicias Artesanales',
          category: 'E-Commerce & Zahlungen',
          description: 'Webpay Plus-Anbindung, automatische Versandberechnung und Echtzeit-Warenbestandsabgleich.',
          impact: '+185% digitale Umsätze in den ersten 60 Tagen.',
        },
        'portal-clinico': {
          id: 'portal-clinico',
          title: 'Digitales Klinikportal',
          client: 'Centro Médico Austral',
          category: 'SaaS & Telemedizin',
          description: 'Sichere Patientenakte mit Ende-zu-Ende-Verschlüsselung und Videosprechstunden.',
          impact: '98% Pünktlichkeit der Termine und 100% papierlos.',
        },
        'logistica-express': {
          id: 'logistica-express',
          title: 'Express-Logistikplattform',
          client: 'Ruta Trans Chile',
          category: 'Automatisierung & IoT',
          description: 'Satellitengestützte Flottenverfolgung und automatisierte Frachtbrief-Generierung.',
          impact: '40% Reduktion von Stand- und Wartezeiten.',
        },
        'ia-atencion': {
          id: 'ia-atencion',
          title: 'Omnichannel KI-Agent',
          client: 'Financiera Andina',
          category: 'Künstliche Intelligenz',
          description: 'Intelligenter WhatsApp- und Web-Bot zur Qualifizierung von Interessenten und Finanzberatung.',
          impact: '24/7-Betreuung mit 4,9 von 5 Sternen Kundenzufriedenheit.',
        },
        'gestion-inventario': {
          id: 'gestion-inventario',
          title: 'Cloud-Warenwirtschaftssystem',
          client: 'Ferreterías Unidas',
          category: 'Individualsoftware',
          description: 'Filialübergreifender Bestandsabgleich mit Barcode-Scan und automatischen Steuerberichten.',
          impact: 'Lückenlose Bestandskontrolle ohne Differenzen.',
        },
        'web-corporativa': {
          id: 'web-corporativa',
          title: 'High-Speed Unternehmensweb',
          client: 'Inmobiliaria Horizonte',
          category: 'Premium Website',
          description: 'Immobilienkatalog mit interaktiven Rundgängen und extrem schnellen Ladezeiten.',
          impact: 'Google PageSpeed Mobile Score: 99/100 Punkte.',
        },
      },
    },
    metrics: {
      badge: 'Bewiesene Leistungsfähigkeit',
      title: 'Kennzahlen, die den Unterschied machen',
      subtitle: 'Unsere Ingenieurskunst führt direkt zu messbaren Vorteilen für unsere Kunden.',
      tabPerformance: 'Web-Performance',
      tabUptime: 'Cloud-Verfügbarkeit',
      tabSatisfaction: 'Kundenzufriedenheit',
      items: {
        uptime: {
          id: 'uptime',
          value: '99.98%',
          label: 'Plattform-Verfügbarkeit',
          description: 'Unterbrechungsfreier Betrieb durch redundante Cloud-Infrastruktur auf AWS und GCP.',
        },
        speed: {
          id: 'speed',
          value: '98/100',
          label: 'Google PageSpeed Schnitt',
          description: 'Maximale Optimierung für Spitzen-Ladezeiten und Top-Suchmaschinenrankings.',
        },
        delivery: {
          id: 'delivery',
          value: '100%',
          label: 'Fristgerechte Lieferung',
          description: 'Agiles Vorgehen mit wöchentlich überprüfbaren Fortschritten ohne Verzug.',
        },
        support: {
          id: 'support',
          value: '< 15 Min.',
          label: 'Support-Reaktionszeit',
          description: 'Direkter Entwicklerkontakt ohne zeitraubende Callcenter-Warteschleifen.',
        },
      },
    },
    pricing: {
      badge: 'Maximale Transparenz',
      title: 'Web-Basisplan für den Mittelstand',
      subtitle: 'Alles, was Ihr Unternehmen für einen erfolgreichen, sicheren und konversionsstarken Webauftritt benötigt.',
      priceAmount: '$49.990 CLP',
      priceNote: 'Einmalige Bereitstellung + laufender technischer Support',
      includedTitle: '14 Inkludierte Leistungen:',
      cta: 'Basisplan verbindlich anfragen',
      guarantee: 'Zufriedenheitsgarantie inklusive Begleitung beim Launch.',
      features: [
        '100% responsives Design für Smartphones, Tablets und PCs',
        'Inklusive performantem Cloud-Hosting mit Hochgeschwindigkeits-Servern',
        'Eigene Wunschdomain eingerichtet (.cl oder .com)',
        'Bis zu 5 geschäftliche E-Mail-Postfächer mit eigener Domain',
        'Schwebender WhatsApp-Button für direkten Kundenkontakt',
        'Intelligentes Kontaktformular mit Sofortbenachrichtigung per E-Mail',
        'Kostenloses SSL-Sicherheitszertifikat (https://) vorinstalliert',
        'Fundierte lokale SEO-Basiseinrichtung für beste Google-Auffindbarkeit',
        'Integration von interaktiven Google Maps Karten für Ihren Standort',
        'Verlinkung zu offiziellen Social-Media-Profilen (Instagram, LinkedIn etc.)',
        'Benutzerfreundliche Verwaltungsoberfläche zur Pflege von Inhalten',
        'Rechtssicherer Datenschutzauftritt mit Cookie-Consent-Banner',
        'Praktisches Schulungsvideo zur einfachen Selbstverwaltung der Website',
        'Laufender technischer Support via WhatsApp und E-Mail',
      ],
    },
    testimonials: {
      badge: 'Kundenstimmen',
      title: 'Was unsere Partner sagen',
      subtitle: 'Unternehmen, die bei der Softwareentwicklung fest auf Develisai vertrauen.',
      prev: 'Zurück',
      next: 'Weiter',
      items: {
        '1': {
          id: '1',
          quote: 'Wir haben den Basisplan gewählt und in weniger als einer Woche war die Website online. Erste Kundenanfragen via WhatsApp kamen noch am selben Tag.',
          name: 'Carolina Morales',
          role: 'Gründerin',
          company: 'Delicias Artesanales',
        },
        '2': {
          id: '2',
          quote: 'Die KI-gestützte Prozessautomatisierung spart unserem Team jede Woche über 20 Stunden an zeitraubender Datenpflege. Ein erstklassiger Partner.',
          name: 'Rodrigo Fuentes',
          role: 'Leiter operatives Geschäft',
          company: 'Logística Trans Austral',
        },
        '3': {
          id: '3',
          quote: 'Zukunftsweisendes Design, herausragende Geschwindigkeit und ein persönlicher Service, den man so in der Branche selten erlebt.',
          name: 'Daniela Valenzuela',
          role: 'Vertriebsleiterin',
          company: 'Horizonte Inmobiliario',
        },
        '4': {
          id: '4',
          quote: 'Das entwickelte Klinikportal erfüllt höchste medizinische Datenschutzvorgaben. Sowohl Ärzte als auch Patienten schätzen die einfache Handhabung.',
          name: 'Dr. Matías Silva',
          role: 'Ärztlicher Direktor',
          company: 'Clínica Austral',
        },
        '5': {
          id: '5',
          quote: 'Hervorragendes Preis-Leistungs-Verhältnis. Der Support nach dem Launch ist makellos und immer lösungsorientiert.',
          name: 'Felipe Contreras',
          role: 'Geschäftsführer',
          company: 'Ferreterías Unidas',
        },
      },
    },
    contact: {
      badge: 'Lassen Sie uns sprechen',
      title: 'Starten Sie Ihre digitale Transformation',
      subtitle: 'Schildern Sie uns Ihr Projekt oder Ihre technischen Anforderungen. Wir antworten innerhalb von 2 Geschäftsstunden.',
      name: 'Vollständiger Name',
      namePlaceholder: 'z.B. Max Mustermann',
      email: 'E-Mail-Adresse',
      emailPlaceholder: 'max@unternehmen.de',
      phone: 'Telefon / WhatsApp',
      phonePlaceholder: '+56 9 1234 5678',
      interest: 'Interessante Lösung',
      interestSelect: 'Option auswählen...',
      message: 'Projektbeschreibung & Anforderungen',
      messagePlaceholder: 'Beschreiben Sie kurz Ihre Zielsetzung, Zeitpläne oder Fragestellungen...',
      submit: 'Nachricht senden',
      submitting: 'Wird übermittelt...',
      successTitle: 'Nachricht erfolgreich erhalten!',
      successDesc: 'Unser technisches Team wird sich zeitnah mit einem individuellen Vorschlag bei Ihnen melden.',
      errorTitle: 'Fehler beim Senden. Bitte versuchen Sie es erneut.',
      officeTitle: 'Hauptsitz',
      emailTitle: 'Direkter E-Mail-Kontakt',
      phoneTitle: 'WhatsApp & Telefon',
      hoursTitle: 'Öffnungszeiten',
      hoursDesc: 'Montag bis Freitag: 09:00 - 18:30 Uhr (CLT)',
    },
    footer: {
      brandDesc: 'Wertschöpfung durch intelligente Lösungen. Softwareentwicklung, Webdesign und maßgeschneiderte KI-Systeme für Unternehmen in Chile und weltweit.',
      quickLinks: 'Schnellzugriff',
      servicesCol: 'Lösungen',
      legalCol: 'Rechtliches & Datenschutz',
      privacy: 'Datenschutzerklärung',
      terms: 'Nutzungsbedingungen',
      cookieSettings: 'Cookie-Einstellungen',
      cookiePolicy: 'Cookie-Richtlinie',
      rights: 'Alle Rechte vorbehalten.',
    },
    modal: {
      title: 'Technisches Angebot anfragen',
      subtitle: 'Hinterlassen Sie Ihre Kontaktdaten. Wir melden uns noch heute bei Ihnen.',
      selectedProduct: 'Ausgewählte Lösung:',
      cancel: 'Abbrechen',
    },
    cookies: {
      title: 'Wir respektieren Ihre Privatsphäre',
      description: 'Wir setzen Cookies ein, um Ihnen ein optimales Nutzererlebnis zu bieten und die technische Leistung zu analysieren.',
      acceptAll: 'Alle akzeptieren',
      rejectNonEssential: 'Nur essenzielle',
      configure: 'Konfigurieren',
    },
    whatsapp: {
      defaultText: 'Hallo Develisai, ich möchte mich gerne über Ihre Technologielösungen informieren.',
    },
  },

  pt: {
    nav: {
      home: 'Início',
      products: 'Produtos',
      services: 'Serviços',
      metrics: 'Métricas',
      clients: 'Clientes',
      howItWorks: 'Como Funciona',
      contact: 'Contato',
      contactButton: 'Fale Conosco',
      themeDark: 'Mudar para modo claro',
      themeLight: 'Mudar para modo escuro',
      languageSelect: 'Alterar idioma',
      whatsappButton: 'WhatsApp',
      megaMenu: {
        productsTitle: 'Produtos Comerciais',
        productsSubtitle: 'Plataformas completas prontas para implantação imediata.',
        servicesTitle: 'Serviços Especializados',
        servicesSubtitle: 'Engenharia sob medida, consultoria e inteligência artificial.',
        exploreAll: 'Explorar catálogo completo',
        webPages: 'Sites Profissionais',
        webPagesDesc: 'Websites modernos, ultra rápidos e 100% responsivos.',
        ecommerce: 'Lojas Virtuais',
        ecommerceDesc: 'E-commerce com catálogo dinâmico e integração de pagamentos.',
        saas: 'Soluções SaaS',
        saasDesc: 'Software em nuvem para automação e centralização de dados.',
        ai: 'Inteligência Artificial',
        aiDesc: 'Modelos de linguagem, visão computacional e agentes autônomos.',
        consulting: 'Consultoria em TI',
        consultingDesc: 'Auditoria de arquitetura, plano de nuvem e cibersegurança.',
        automation: 'Automação de Processos',
        automationDesc: 'Fluxos automatizados e integração profunda de APIs.',
      },
    },
    particleHero: {
      badgeSoftware: 'Engenharia de Software & Inteligência Artificial',
      badgeCountry: 'Chile',
      morphology: 'Morfologia:',
      pause: 'Pausar',
      resume: 'Retomar',
      particlesCount: 'partículas',
      dragHint: 'Arraste o cursor para interagir com as partículas',
      title: 'Desenvolvendo Valor com Soluções Inteligentes',
      subtitle: 'A IA impulsiona o futuro. Nós a transformamos em realidade.',
      ctaPrimary: 'Proposta Gratuita — Plano Básico',
      ctaSecondary: 'Explorar Produtos e Serviços',
      stripPartner: 'Seu parceiro tecnológico',
      stripMotto: 'Ideias + Tecnologia + Futuro',
    },
    cinematicHero: {
      badge: 'Visão & Excelência Técnica',
      title: 'Descubra o Extraordinário',
      subtitle: 'A imagem respira suavemente: um zoom delicado dá vida a qualquer paisagem.',
      cta: 'Iniciar Projeto Digital',
    },
    offerings: {
      badge: 'Portfólio Comercial Develisai',
      title: 'Soluções Projetadas para Impulsionar seu Negócio',
      subtitle: 'Diferenciação clara entre soluções prontas (Produtos) e serviços profissionais especializados para acelerar sua transformação digital.',
      ctaDetails: 'Ver detalhes e orçamento',
      productStar: 'Produto Destaque',
      items: {
        'paginas-web': {
          id: 'paginas-web',
          category: 'Produto',
          title: 'Sites Profissionais',
          shortDescription: 'Websites velozes, 100% adaptáveis a celulares e criados para gerar novos clientes desde o primeiro dia.',
          highlightBenefit: 'Plano Básico a partir de $49.990 CLP com hospedagem cloud e e-mails corporativos inclusos.',
          badgeText: 'Produto Destaque',
        },
        'tiendas-online': {
          id: 'tiendas-online',
          category: 'Produto',
          title: 'Lojas Virtuais',
          shortDescription: 'Plataformas de e-commerce robustas com catálogo inteligente, carrinho de compras e meios de pagamento.',
          highlightBenefit: 'Fluxo de compra fluido otimizado para conversão no celular.',
          badgeText: 'E-Commerce',
        },
        'saas': {
          id: 'saas',
          category: 'Produto',
          title: 'Soluções SaaS',
          shortDescription: 'Desenvolvimento de software como serviço sob medida para digitalizar processos e unificar dados.',
          highlightBenefit: 'Arquitetura escalável, painéis analíticos e gestão de acessos.',
          badgeText: 'Nuvem & B2B',
        },
        'ia': {
          id: 'ia',
          category: 'Serviço',
          title: 'Inteligência Artificial',
          shortDescription: 'Integração de modelos de linguagem, visão computacional e agentes autônomos para seu negócio.',
          highlightBenefit: 'Ganho palpável de produtividade e atendimento automatizado 24/7.',
          badgeText: 'IA Generativa',
        },
        'consultoria': {
          id: 'consultoria',
          category: 'Serviço',
          title: 'Consultoria em TI',
          shortDescription: 'Assessoria estratégica em arquitetura de software, migração para a nuvem e segurança da informação.',
          highlightBenefit: 'Diagnóstico técnico gratuito e plano de evolução prático.',
          badgeText: 'Estratégico',
        },
        'automatizacion': {
          id: 'automatizacion',
          category: 'Serviço',
          title: 'Automação de Processos',
          shortDescription: 'Integração entre sistemas, sincronização de bancos de dados e eliminação de tarefas manuais repetitivas.',
          highlightBenefit: 'Redução de até 70% no tempo de processos manuais.',
          badgeText: 'Eficiência',
        },
      },
    },
    smeHero: {
      badge: 'Compromisso com o Crescimento',
      title: 'Democratizando a Tecnologia para Pequenas e Médias Empresas',
      subtitle: 'Acreditamos que toda empresa merece ferramentas de nível corporativo a preços justos, transparentes e acessíveis.',
      dragHint: 'Toque ou arraste a malha elástica para interagir',
      card1Title: 'Plano Básico $49.990 CLP',
      card1Desc: 'Desenvolvimento completo com hospedagem, e-mails institucionais e design premium sem custos ocultos.',
      card2Title: 'Suporte Contínuo e Direto',
      card2Desc: 'Atendimento via WhatsApp e e-mail com equipe dedicada e resposta rápida.',
      card3Title: 'Escalabilidade Garantida',
      card3Desc: 'Sua plataforma acompanha o crescimento das suas vendas sem necessidade de recomeçar do zero.',
      cta: 'Solicitar Proposta para PME',
      floatingBadge: '100% Adaptado para PMEs',
    },
    projects: {
      badge: 'Casos de Sucesso & Portfólio',
      title: 'Projetos que Transformam Negócios',
      subtitle: 'Projetos reais entregues com rigor de engenharia de software e retorno comprovado.',
      similarCta: 'Cotar solução similar',
      items: {
        'e-commerce-gourmet': {
          id: 'e-commerce-gourmet',
          title: 'E-Commerce Gourmet',
          client: 'Delicias Artesanales',
          category: 'Loja Virtual & Pagamentos',
          description: 'Integração de pagamentos com cálculo automático de frete e sincronização de estoque em tempo real.',
          impact: '+185% em vendas digitais nos primeiros 60 dias.',
        },
        'portal-clinico': {
          id: 'portal-clinico',
          title: 'Portal Clínico Digital',
          client: 'Centro Médico Austral',
          category: 'SaaS & Telemedicina',
          description: 'Prontuários eletrônicos com criptografia de ponta a ponta e consultas remotas integradas.',
          impact: '98% de pontualidade em consultas e 100% sem papel.',
        },
        'logistica-express': {
          id: 'logistica-express',
          title: 'Plataforma de Logística Express',
          client: 'Ruta Trans Chile',
          category: 'Automação & IoT',
          description: 'Rastreamento de frotas por satélite e emissão automatizada de ordens de serviço.',
          impact: '40% de redução no tempo ocioso em trânsito.',
        },
        'ia-atencion': {
          id: 'ia-atencion',
          title: 'Agente de IA Omnichannel',
          client: 'Financiera Andina',
          category: 'Inteligência Artificial',
          description: 'Assistente integrado ao WhatsApp e site para qualificação de leads e dúvidas financeiras instantâneas.',
          impact: 'Atendimento ininterrupto com nota 4.9/5 estrelas.',
        },
        'gestion-inventario': {
          id: 'gestion-inventario',
          title: 'Gestão de Estoque em Nuvem',
          client: 'Ferreterías Unidas',
          category: 'Software Sob Medida',
          description: 'Sincronização multi-filiais com leitor de código de barras e emissão fiscal automática.',
          impact: 'Rastreabilidade total de estoque sem desvios.',
        },
        'web-corporativa': {
          id: 'web-corporativa',
          title: 'Site Corporativo de Alta Velocidade',
          client: 'Inmobiliaria Horizonte',
          category: 'Site Institucional Premium',
          description: 'Catálogo imobiliário interativo com tours virtuais e carregamento instantâneo.',
          impact: 'Pontuação 99/100 no Google PageSpeed Mobile.',
        },
      },
    },
    metrics: {
      badge: 'Desempenho Comprovado',
      title: 'Métricas que Fazem a Diferença',
      subtitle: 'Nossa engenharia de ponta gera resultados tangíveis para o seu negócio.',
      tabPerformance: 'Desempenho Web',
      tabUptime: 'Disponibilidade Cloud',
      tabSatisfaction: 'Satisfação do Cliente',
      items: {
        uptime: {
          id: 'uptime',
          value: '99.98%',
          label: 'Disponibilidade (Uptime)',
          description: 'Operação ininterrupta com servidores redundantes na AWS e Google Cloud.',
        },
        speed: {
          id: 'speed',
          value: '98/100',
          label: 'Média Google PageSpeed',
          description: 'Otimização avançada para máxima velocidade e indexação no Google.',
        },
        delivery: {
          id: 'delivery',
          value: '100%',
          label: 'Cumprimento de Prazos',
          description: 'Metodologia ágil com entregas semanais auditáveis sem atrasos.',
        },
        support: {
          id: 'support',
          value: '< 15 min',
          label: 'Tempo de Resposta do Suporte',
          description: 'Atendimento direto por engenheiros sem intermediários.',
        },
      },
    },
    pricing: {
      badge: 'Transparência Total',
      title: 'Plano Básico Web para PMEs',
      subtitle: 'Tudo o que sua empresa necessita para consolidar uma presença digital profissional, segura e de alta conversão.',
      priceAmount: '$49.990 CLP',
      priceNote: 'Pagamento único de implantação + suporte contínuo',
      includedTitle: '14 Recursos Inclusos:',
      cta: 'Contratar Plano Básico',
      guarantee: 'Garantia de satisfação e suporte técnico durante a publicação.',
      features: [
        'Design 100% responsivo para celulares, tablets e computadores',
        'Hospedagem em nuvem de alta velocidade inclusa',
        'Configuração de domínio próprio (.cl ou .com)',
        'Até 5 e-mails profissionais com o seu domínio',
        'Botão flutuante de WhatsApp direto com sua equipe de vendas',
        'Formulário inteligente com aviso imediato por e-mail',
        'Certificado de segurança SSL (https://) gratuito pré-instalado',
        'Configuração inicial de SEO local para buscas no Google',
        'Integração oficial com Google Maps para localização do seu negócio',
        'Links para seus canais oficiais (Instagram, LinkedIn, etc.)',
        'Painel intuitivo para você atualizar textos, fotos e produtos',
        'Conformidade com leis de privacidade e banner de cookies',
        'Vídeo tutorial passo a passo para gerenciar seu site com autonomia',
        'Suporte técnico contínuo via WhatsApp e e-mail',
      ],
    },
    testimonials: {
      badge: 'Depoimentos',
      title: 'O que Nossos Clientes Dizem',
      subtitle: 'Empresas que confiam na Develisai para suas soluções tecnológicas.',
      prev: 'Anterior',
      next: 'Próximo',
      items: {
        '1': {
          id: '1',
          quote: 'Contratamos o Plano Básico e em menos de uma semana nosso site estava no ar. Os contatos de novos clientes pelo WhatsApp começaram no mesmo dia.',
          name: 'Carolina Morales',
          role: 'Fundadora',
          company: 'Delicias Artesanales',
        },
        '2': {
          id: '2',
          quote: 'A automação de processos com IA desenvolvida pela Develisai economizou mais de 20 horas por semana da nossa equipe. Parceiros excepcionais.',
          name: 'Rodrigo Fuentes',
          role: 'Gerente de Operações',
          company: 'Logística Trans Austral',
        },
        '3': {
          id: '3',
          quote: 'Design arrojado, velocidade impressionante e um atendimento atencioso que não encontramos em nenhuma outra empresa de tecnologia.',
          name: 'Daniela Valenzuela',
          role: 'Diretora Comercial',
          company: 'Horizonte Inmobiliario',
        },
        '4': {
          id: '4',
          quote: 'O portal clínico que desenvolveram atende aos mais rígidos critérios de sigilo médico. Tanto médicos quanto pacientes elogiam a facilidade.',
          name: 'Dr. Matías Silva',
          role: 'Diretor Médico',
          company: 'Clínica Austral',
        },
        '5': {
          id: '5',
          quote: 'Excelente custo-benefício. O suporte pós-lançamento é impecável e sempre trazem sugestões inovadoras para evoluir nossa plataforma.',
          name: 'Felipe Contreras',
          role: 'CEO',
          company: 'Ferreterías Unidas',
        },
      },
    },
    contact: {
      badge: 'Vamos Conversar',
      title: 'Inicie sua Transformação Digital',
      subtitle: 'Conte-nos sobre o seu projeto ou necessidade técnica. Responderemos em até 2 horas úteis.',
      name: 'Nome completo',
      namePlaceholder: 'Ex: João da Silva',
      email: 'E-mail corporativo',
      emailPlaceholder: 'joao@empresa.com.br',
      phone: 'Telefone / WhatsApp',
      phonePlaceholder: '+56 9 1234 5678',
      interest: 'Solução de interesse',
      interestSelect: 'Selecione uma opção...',
      message: 'Mensagem ou necessidade do projeto',
      messagePlaceholder: 'Descreva resumidamente seus objetivos, prazos ou dúvidas técnicas...',
      submit: 'Enviar Mensagem',
      submitting: 'Enviando mensagem...',
      successTitle: 'Mensagem Recebida com Sucesso!',
      successDesc: 'Nossa equipe técnica entrará em contato em breve com uma proposta personalizada.',
      errorTitle: 'Erro ao enviar mensagem. Por favor, tente novamente.',
      officeTitle: 'Sede Principal',
      emailTitle: 'E-mail Direto',
      phoneTitle: 'WhatsApp & Telefone',
      hoursTitle: 'Horário de Atendimento',
      hoursDesc: 'Segunda a Sexta: 09:00 às 18:30 (CLT)',
    },
    footer: {
      brandDesc: 'Desenvolvendo valor com soluções inteligentes. Engenharia de software, desenvolvimento web e sistemas de inteligência artificial para empresas no Chile e no mundo.',
      quickLinks: 'Links Rápidos',
      servicesCol: 'Soluções',
      legalCol: 'Legal & Privacidade',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      cookieSettings: 'Configurações de Cookies',
      cookiePolicy: 'Política de Cookies',
      rights: 'Todos os direitos reservados.',
    },
    modal: {
      title: 'Solicitar Proposta Técnica',
      subtitle: 'Preencha seus dados e entraremos em contato ainda hoje.',
      selectedProduct: 'Solução selecionada:',
      cancel: 'Cancelar',
    },
    cookies: {
      title: 'Valorizamos sua Privacidade',
      description: 'Utilizamos cookies para proporcionar a melhor experiência, analisar o tráfego e aprimorar o desempenho técnico do site.',
      acceptAll: 'Aceitar Todos',
      rejectNonEssential: 'Rejeitar Não Essenciais',
      configure: 'Personalizar',
    },
    whatsapp: {
      defaultText: 'Olá Develisai, gostaria de consultar sobre suas soluções tecnológicas.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  currentOption: LanguageOption;
  availableLanguages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'develisai_lang';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (['es', 'en', 'jp', 'ch', 'de', 'pt'] as Language[]).includes(saved as Language)) {
        return saved as Language;
      }
    } catch {
      // ignore localStorage errors in restricted environments
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang === 'jp' ? 'ja' : lang === 'ch' ? 'zh' : lang;
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === 'jp' ? 'ja' : language === 'ch' ? 'zh' : language;
  }, [language]);

  const currentOption = LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0];
  const t = TRANSLATIONS[language] || TRANSLATIONS.es;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        currentOption,
        availableLanguages: LANGUAGE_OPTIONS,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
