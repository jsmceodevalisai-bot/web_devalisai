import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { useContactModal } from '../../context/ContactModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_INFO } from '../../data/landingData';
import {
  ArrowRight,
  MessageCircle,
  Clock,
  CheckCircle2,
  LockKeyholeOpen,
  Sparkles,
  ChevronRight,
  Plus,
  Minus,
  Check,
  ShieldCheck,
  Laptop,
  Smartphone,
  Gauge,
  ExternalLink,
  ThumbsUp,
} from 'lucide-react';

// Multilingual dictionary for How It Works page
const HOW_IT_WORKS_TRANSLATIONS: Record<
  string,
  {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaWhatsApp: string;
    trust1Title: string;
    trust1Sub: string;
    trust2Title: string;
    trust2Sub: string;
    trust3Title: string;
    trust3Sub: string;
    overviewEyebrow: string;
    overviewTitle: string;
    overviewSubtitle: string;
    step1CardBadge: string;
    step1CardTime: string;
    step1CardTitle: string;
    step1CardSub: string;
    step1CardDesc: string;
    step1CardFooter: string;
    step2CardBadge: string;
    step2CardTime: string;
    step2CardTitle: string;
    step2CardSub: string;
    step2CardDesc: string;
    step2CardFooter: string;
    step3CardBadge: string;
    step3CardTime: string;
    step3CardTitle: string;
    step3CardSub: string;
    step3CardDesc: string;
    step3CardFooter: string;
    step1Eyebrow: string;
    step1Title: string;
    step1Desc: string;
    step1Bullets: { bold: string; text: string }[];
    step1BoxTitle: string;
    step1BoxDesc: string;
    step1ImageOverlay: string;
    step1ImageBadge: string;
    step2Eyebrow: string;
    step2Title: string;
    step2Desc: string;
    step2Bullets: { bold: string; text: string }[];
    step2SprintBadge: string;
    step3Eyebrow: string;
    step3Title: string;
    step3Desc: string;
    step3Bullets: { bold: string; text: string }[];
    step3CtaLink: string;
    step3DemoTitle: string;
    step3DemoSub: string;
    compareCol1Eyebrow: string;
    compareCol1Title: string;
    compareCol1Desc: string;
    compareCol2Eyebrow: string;
    compareCol2Title: string;
    compareCol2Desc: string;
    compareCol3Eyebrow: string;
    compareCol3Title: string;
    compareCol3Desc: string;
    faqEyebrow: string;
    faqTitle: string;
    faqSubtitle: string;
    faqs: { q: string; a: string }[];
    finalEyebrow: string;
    finalTitle: string;
    finalSubtitle: string;
    finalCtaPrimary: string;
    finalCtaWhatsApp: string;
    finalFootnotes: string[];
  }
> = {
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Cómo funciona',
    heroEyebrow: 'Transparencia y Proceso Sin Riesgo',
    heroTitle: 'Cómo funciona',
    heroSubtitle:
      'Eliges tu plan, diseñamos tu web completa y pagas solo cuando la ves lista y la apruebas. Sin contratos forzados ni anticipos.',
    ctaPrimary: 'Solicitar propuesta gratis',
    ctaWhatsApp: 'Cotizar por WhatsApp',
    trust1Title: 'Sin pago adelantado',
    trust1Sub: 'Cero riesgo financiero',
    trust2Title: '3 días hábiles',
    trust2Sub: 'Entrega ágil y precisa',
    trust3Title: '100% a tu medida',
    trust3Sub: 'Aprobación garantizada',
    overviewEyebrow: 'Proceso Transparente',
    overviewTitle: 'Tu web en 3 pasos',
    overviewSubtitle:
      'Diseñado para que dediques el menor tiempo posible y obtengas resultados de nivel corporativo.',
    step1CardBadge: 'Paso 1',
    step1CardTime: '5 minutos',
    step1CardTitle: '1. Elige tu plan y envía tu material',
    step1CardSub: 'Un solo formulario',
    step1CardDesc:
      'Eliges el plan que te acomoda y completas un formulario interactivo con los datos, logo e ideas de tu negocio.',
    step1CardFooter: 'Fase inicial sin costo',
    step2CardBadge: 'Paso 2',
    step2CardTime: '3 días hábiles',
    step2CardTitle: '2. Nosotros diseñamos todo',
    step2CardSub: 'Desarrollo integral',
    step2CardDesc:
      'Mientras tú sigues atendiendo tu negocio, nuestro equipo crea tu web completa: no es un boceto, es tu sitio real y terminado.',
    step2CardFooter: 'Ingeniería visual activa',
    step3CardBadge: 'Paso 3',
    step3CardTime: 'Cuando apruebes',
    step3CardTitle: '3. La ves lista y recién pagas',
    step3CardSub: 'Control total en tus manos',
    step3CardDesc:
      'Revisas tu web funcionando en un enlace privado real, pides ajustes y solo pagas al final si estás completamente satisfecho.',
    step3CardFooter: 'Garantía de satisfacción total',
    step1Eyebrow: '01 / RECOLECCIÓN EFICIENTE',
    step1Title: 'Paso 1: eliges tu plan y nos envías tu material',
    step1Desc:
      'No hay reunión ni cotización previa obligatoria: eliges el plan que te acomoda y completas un formulario con los datos de tu negocio y tu material. Con eso partimos inmediatamente.',
    step1Bullets: [
      {
        bold: 'Tres planes claros,',
        text: ' con precio a la vista y sin sorpresas ocultas.',
      },
      {
        bold: 'Logo, fotos y datos',
        text: ' en el mismo formulario; si te falta algo, nuestro equipo lo resuelve contigo.',
      },
      {
        bold: 'Cero desembolso inicial:',
        text: ' el plan se abona solo cuando revises y apruebes el sitio en vivo.',
      },
    ],
    step1BoxTitle: 'Tiempo estimado de llenado: 5 minutos',
    step1BoxDesc:
      'Puedes adjuntar archivos de Google Drive, enlaces a redes sociales o simplemente una breve descripción.',
    step1ImageOverlay: 'Toma fotos desde tu móvil o dinos qué buscas',
    step1ImageBadge: 'Asistencia incluida',
    step2Eyebrow: '02 / INGENIERÍA Y DISEÑO COMPLETO',
    step2Title: 'Paso 2: nosotros diseñamos todo',
    step2Desc:
      'Mientras tú sigues atendiendo tu negocio, nuestro equipo diseña la web completa: no es un boceto estático ni una maqueta en PDF, es tu sitio real funcionando con código optimizado.',
    step2Bullets: [
      {
        bold: 'Diseño a la medida de tu rubro:',
        text: ' adaptado a tu identidad, colores corporativos y logotipo.',
      },
      {
        bold: 'Montaje integral:',
        text: ' textos, catálogo visual, mapa de ubicación, botón flotante de WhatsApp y formularios funcionales.',
      },
      {
        bold: 'Redacción y copy asistido:',
        text: ' si te faltan descripciones, nosotros creamos textos convincentes y persuasivos.',
      },
      {
        bold: 'Optimización total:',
        text: ' versión móvil ultrarrápida y arquitectura SEO lista para motores de búsqueda.',
      },
      {
        bold: 'En 3 días hábiles:',
        text: ' te notificamos con el enlace de acceso privado para tu revisión.',
      },
    ],
    step2SprintBadge: 'Sprint de 72 hrs en curso',
    step3Eyebrow: '03 / VALIDACIÓN Y PUBLICACIÓN FINAL',
    step3Title: 'Paso 3: la ves funcionando y recién ahí pagas',
    step3Desc:
      'Te enviamos un enlace real con tu web terminada. La navegas desde tu computador y el celular, pides los ajustes que quieras y, cuando te convence al 100%, recién ahí realizas el pago. Sin letra chica.',
    step3Bullets: [
      {
        bold: 'Tu web en un enlace real activo:',
        text: ' prueba formularios, enlaces, botones y animaciones como un usuario más.',
      },
      {
        bold: 'Ronda de ajustes incluida:',
        text: ' cambiamos textos, ajustamos fotos o paleta de color antes del cierre.',
      },
      {
        bold: 'Pagas solo si la apruebas:',
        text: ' si el resultado no se alinea con lo esperado, no te cobramos ni un solo peso.',
      },
      {
        bold: 'Lanzamiento en tu propio dominio:',
        text: ' una vez confirmada, migramos el sitio a tu dominio oficial con correos corporativos y certificado SSL.',
      },
    ],
    step3CtaLink: 'Comenzar ahora sin riesgo',
    step3DemoTitle: 'Enlace interactivo de previsualización',
    step3DemoSub: 'demo.develisai.com/tu-empresa',
    compareCol1Eyebrow: 'Agencias Tradicionales',
    compareCol1Title: '50% por adelantado',
    compareCol1Desc:
      'Pagas la mitad antes de ver nada. Plazos de 4 a 8 semanas, reuniones interminables y cobros extras por cada cambio.',
    compareCol2Eyebrow: 'Constructores Hágalo-Usted-Mismo',
    compareCol2Title: 'Tu tiempo vale dinero',
    compareCol2Desc:
      'Horas perdidas luchando con plantillas genéricas, sin soporte técnico real y con resultados poco profesionales.',
    compareCol3Eyebrow: 'El Modelo Develisai',
    compareCol3Title: 'Pagas solo al aprobar',
    compareCol3Desc:
      'Nosotros hacemos el trabajo pesado. Ves tu sitio listo en 3 días hábiles y pagas únicamente si te encanta.',
    faqEyebrow: 'Claridad Total',
    faqTitle: 'Preguntas frecuentes sobre cómo funciona',
    faqSubtitle: 'Todo lo que necesitas saber antes de solicitar tu propuesta.',
    faqs: [
      {
        q: '¿Cuándo pago exactamente?',
        a: 'Pagas únicamente cuando tu sitio web está completamente terminado en un enlace privado funcional de prueba, lo has navegado desde tu computador y celular, solicitado los ajustes correspondientes y estás 100% satisfecho con el resultado final.',
      },
      {
        q: '¿Qué pasa si no me gusta?',
        a: 'Si el diseño no cumple tus expectativas tras las rondas de ajustes, simplemente no pagas nada. Sin penalizaciones, sin letras chicas ni compromisos forzados. Asumimos el riesgo nosotros.',
      },
      {
        q: '¿Solicitar la propuesta me compromete a algo?',
        a: 'En lo absoluto. El envío del formulario inicial para preparar tu propuesta y comenzar el diseño es 100% gratuito y sin compromiso de compra.',
      },
      {
        q: '¿Y el dominio?',
        a: 'Podemos vincular un dominio que ya tengas comprado (.cl, .com, .lat, etc.) o guiarte paso a paso para inscribirlo a tu nombre en NIC Chile o el registrador de tu preferencia, garantizando que tú seas el dueño legal exclusivo de tu dirección.',
      },
      {
        q: '¿Cuánto demora el proceso?',
        a: 'El desarrollo y primer enlace funcional está listo en aproximadamente 3 días hábiles una vez recibido el material base. Luego coordinamos los ajustes puntuales en menos de 24-48 horas.',
      },
      {
        q: '¿Sirve para una tienda online?',
        a: 'Sí, también desarrollamos tiendas online completas con catálogo interactivo, cálculo de envíos y pasarelas de pago locales e internacionales integradas (Webpay, Mercado Pago, Stripe). Consulta en nuestra sección de Tiendas Online para conocer planes y alcances.',
      },
    ],
    finalEyebrow: 'Garantía de Satisfacción 100%',
    finalTitle: 'Sin pago adelantado. Eliges, la recibes lista y recién ahí pagas.',
    finalSubtitle:
      'Más de 1.500 proyectos publicados. Elige tu plan, envíanos tu material y en tres días hábiles ves tu web terminada en vivo.',
    finalCtaPrimary: 'Solicitar propuesta gratis',
    finalCtaWhatsApp: 'Conversar por WhatsApp',
    finalFootnotes: ['Sin letra chica', 'Hosting y SSL incluidos', 'Soporte prioritario'],
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'How it works',
    heroEyebrow: 'Transparency and Risk-Free Delivery',
    heroTitle: 'How it works',
    heroSubtitle:
      'Choose your plan, we design your entire website, and you only pay once you see it live and approve it. No upfront fees or lock-in contracts.',
    ctaPrimary: 'Request free proposal',
    ctaWhatsApp: 'Quote on WhatsApp',
    trust1Title: 'No upfront payment',
    trust1Sub: 'Zero financial risk',
    trust2Title: '3 business days',
    trust2Sub: 'Agile & accurate delivery',
    trust3Title: '100% customized',
    trust3Sub: 'Guaranteed approval',
    overviewEyebrow: 'Transparent Process',
    overviewTitle: 'Your website in 3 steps',
    overviewSubtitle:
      'Designed to save your time while delivering enterprise-grade digital performance.',
    step1CardBadge: 'Step 1',
    step1CardTime: '5 minutes',
    step1CardTitle: '1. Select your plan & send materials',
    step1CardSub: 'One single form',
    step1CardDesc:
      'Pick the best plan for your needs and complete an interactive form with your business details, logo, and ideas.',
    step1CardFooter: 'Initial phase free of charge',
    step2CardBadge: 'Step 2',
    step2CardTime: '3 business days',
    step2CardTitle: '2. We design & develop everything',
    step2CardSub: 'End-to-end engineering',
    step2CardDesc:
      'While you run your daily operations, our team builds your complete site: not a static sketch, but your live website.',
    step2CardFooter: 'Active visual engineering',
    step3CardBadge: 'Step 3',
    step3CardTime: 'Upon your approval',
    step3CardTitle: '3. Inspect live & only then pay',
    step3CardSub: 'Complete control in your hands',
    step3CardDesc:
      'Review your working website on a private preview link, request changes, and only pay once you are 100% satisfied.',
    step3CardFooter: '100% satisfaction guarantee',
    step1Eyebrow: '01 / EFFICIENT ONBOARDING',
    step1Title: 'Step 1: choose your plan and send your materials',
    step1Desc:
      'No mandatory preliminary meetings: choose the plan that suits your goals and complete our simple questionnaire. We start working immediately.',
    step1Bullets: [
      {
        bold: 'Three clear plans,',
        text: ' with upfront transparent pricing and zero hidden fees.',
      },
      {
        bold: 'Logo, photos, and info',
        text: ' in one place; if you lack assets, our creative team assists you.',
      },
      {
        bold: 'Zero initial payment:',
        text: ' you only pay after you test and approve the live staging site.',
      },
    ],
    step1BoxTitle: 'Estimated form completion: 5 minutes',
    step1BoxDesc:
      'Attach Google Drive links, social media handles, or simply write a short summary.',
    step1ImageOverlay: 'Shoot photos on your phone or let us assist you',
    step1ImageBadge: 'Assistance included',
    step2Eyebrow: '02 / COMPLETE ENGINEERING & DESIGN',
    step2Title: 'Step 2: we design and build everything',
    step2Desc:
      'While you focus on your clients, our team crafts your full digital presence: fully coded, responsive, and performance-tuned.',
    step2Bullets: [
      {
        bold: 'Tailor-made for your industry:',
        text: ' aligned with your brand palette, fonts, and identity.',
      },
      {
        bold: 'Comprehensive build:',
        text: ' copy, visual catalog, maps, WhatsApp widget, and working forms.',
      },
      {
        bold: 'Copywriting support:',
        text: ' we craft clear, high-converting copy if you do not have text ready.',
      },
      {
        bold: 'Full optimization:',
        text: ' ultra-fast mobile loading and search-engine-ready SEO architecture.',
      },
      {
        bold: 'In 3 business days:',
        text: ' we deliver your private staging preview link for review.',
      },
    ],
    step2SprintBadge: '72-hr sprint in progress',
    step3Eyebrow: '03 / VALIDATION & OFFICIAL LAUNCH',
    step3Title: 'Step 3: test it live and only pay when approved',
    step3Desc:
      'We deliver a live staging URL. Test it across desktops and mobile devices, request adjustments, and pay only when delighted.',
    step3Bullets: [
      {
        bold: 'Your website on an active live URL:',
        text: ' test forms, links, buttons, and animations like a real visitor.',
      },
      {
        bold: 'Revisions included:',
        text: ' adjust typography, copy, images, or colors before closing.',
      },
      {
        bold: 'Pay only upon approval:',
        text: ' if the outcome does not match your expectations, you pay $0.',
      },
      {
        bold: 'Official domain launch:',
        text: ' once approved, we migrate to your custom domain with corporate email and SSL.',
      },
    ],
    step3CtaLink: 'Start now risk-free',
    step3DemoTitle: 'Interactive preview link',
    step3DemoSub: 'demo.develisai.com/your-brand',
    compareCol1Eyebrow: 'Traditional Agencies',
    compareCol1Title: '50% upfront deposit',
    compareCol1Desc:
      'Pay half before seeing anything. 4 to 8 weeks turnaround, endless meetings, and extra fees for every revision.',
    compareCol2Eyebrow: 'Do-It-Yourself Builders',
    compareCol2Title: 'Your time is valuable',
    compareCol2Desc:
      'Hours lost wrestling with generic templates, lack of real support, and amateur results that hurt credibility.',
    compareCol3Eyebrow: 'The Develisai Model',
    compareCol3Title: 'Pay only upon approval',
    compareCol3Desc:
      'We do all the heavy lifting. Inspect your complete website in 3 business days and only pay if you love it.',
    faqEyebrow: 'Total Clarity',
    faqTitle: 'Frequently asked questions',
    faqSubtitle: 'Everything you need to know before requesting your proposal.',
    faqs: [
      {
        q: 'When exactly do I pay?',
        a: 'You only pay when your website is fully completed on a live private testing link, you have navigated it on desktop and mobile, requested adjustments, and are 100% satisfied with the result.',
      },
      {
        q: 'What happens if I don’t like the design?',
        a: 'If after revision rounds the website does not meet your expectations, you simply pay nothing. No penalties, no fine print, no contracts. We take all the risk.',
      },
      {
        q: 'Does requesting a proposal commit me to anything?',
        a: 'Not at all. Submitting the onboarding questionnaire to kick off your project is 100% free and without purchase commitment.',
      },
      {
        q: 'What about my domain name?',
        a: 'We can connect a domain you already own or guide you step by step to register it under your legal name, ensuring you remain the sole owner of your web address.',
      },
      {
        q: 'How long does the process take?',
        a: 'The full build and first functional staging link are ready in approximately 3 business days after receiving your materials. Minor revisions are completed within 24-48 hours.',
      },
      {
        q: 'Can this work for an online store?',
        a: 'Yes, we also develop full e-commerce stores with cart systems, shipping calculators, and payment gateway integrations (Stripe, Webpay, PayPal). Check our E-Commerce page for details.',
      },
    ],
    finalEyebrow: '100% Satisfaction Guarantee',
    finalTitle: 'No upfront payment. Choose, receive it ready, and pay only then.',
    finalSubtitle:
      'Over 1,500 projects delivered. Choose your plan, submit your info, and inspect your live website in 3 business days.',
    finalCtaPrimary: 'Request free proposal',
    finalCtaWhatsApp: 'Chat on WhatsApp',
    finalFootnotes: ['No fine print', 'Hosting and SSL included', 'Priority technical support'],
  },
  jp: {
    breadcrumbHome: 'ホーム',
    breadcrumbCurrent: '仕組み',
    heroEyebrow: '透明性とリスクゼロの開発プロセス',
    heroTitle: 'サービスの仕組み',
    heroSubtitle:
      'プランを選択し、完全なウェブサイトを制作。実際のサイトを確認して承認した後にのみお支払いいただきます。前払い金や縛り契約はありません。',
    ctaPrimary: '無料の提案を依頼する',
    ctaWhatsApp: 'WhatsAppで問い合わせる',
    trust1Title: '前払い金なし',
    trust1Sub: '金銭的リスクゼロ',
    trust2Title: '3営業日',
    trust2Sub: '迅速で正確な納品',
    trust3Title: '100%オーダーメイド',
    trust3Sub: '安心の満足保証',
    overviewEyebrow: '明瞭なプロセス',
    overviewTitle: '3ステップで完成するWebサイト',
    overviewSubtitle: 'お客様の手間を最小限に抑え、高品質な成果をお届けします。',
    step1CardBadge: 'ステップ 1',
    step1CardTime: '5分',
    step1CardTitle: '1. プランを選んで素材を送る',
    step1CardSub: 'シンプルなフォーム',
    step1CardDesc: 'ご希望のプランを選択し、会社の情報やロゴ、イメージを簡単に入力します。',
    step1CardFooter: '初期段階の費用はゼロ',
    step2CardBadge: 'ステップ 2',
    step2CardTime: '3営業日',
    step2CardTitle: '2. 当社が全てをデザイン・実装',
    step2CardSub: '包括的な開発',
    step2CardDesc: 'お客様が本業に専念している間に、完成された実稼働Webサイトを構築します。',
    step2CardFooter: 'アクティブなビジュアル設計',
    step3CardBadge: 'ステップ 3',
    step3CardTime: '承認時',
    step3CardTitle: '3. 完成サイトを確認してお支払い',
    step3CardSub: 'すべてはお客様の手に',
    step3CardDesc: '限定リンクで動作を確認し、調整を指示。100%ご納得いただいた場合のみお支払い。',
    step3CardFooter: '完全満足保証付き',
    step1Eyebrow: '01 / 効率的な素材収集',
    step1Title: 'ステップ 1: プラン選択と情報送付',
    step1Desc: '事前の長い打ち合わせは不要です。プランを選んでフォームを送信するだけで制作が始まります。',
    step1Bullets: [
      { bold: '3つの明瞭なプラン：', text: ' 明確な価格表示で隠れた費用はありません。' },
      { bold: 'ロゴ・写真・情報：', text: ' 1つのフォームで完結。素材が不足していても当社がサポートします。' },
      { bold: '初期費用ゼロ：', text: ' 実際のサイトを確認・承認するまで一切請求はありません。' },
    ],
    step1BoxTitle: '入力目安時間: 5分',
    step1BoxDesc: 'GoogleドライブのリンクやSNSリンク、簡単な概要文を記入するだけで十分です。',
    step1ImageOverlay: 'スマホで撮影した写真やご要望をお送りください',
    step1ImageBadge: 'サポート込み',
    step2Eyebrow: '02 / 完全な設計と実装',
    step2Title: 'ステップ 2: 当社がすべてを制作',
    step2Desc: '静的なPDFモックアップではなく、最適化された実稼働コードでWebサイトを構築します。',
    step2Bullets: [
      { bold: '業界に合わせた特注デザイン：', text: ' ブランドカラーやロゴに調和。' },
      { bold: '完全な実装：', text: ' 文章、写真、地図、WhatsApp連携、問い合わせフォーム。' },
      { bold: 'ライティング支援：', text: ' 説得力のあるコピーを代行作成。' },
      { bold: '徹底した最適化：', text: ' 高速なスマホ表示とSEO対応。' },
      { bold: '3営業日以内：', text: ' 確認用プライベートリンクをお送りします。' },
    ],
    step2SprintBadge: '72時間スプリント進行中',
    step3Eyebrow: '03 / 検証と正式公開',
    step3Title: 'ステップ 3: 動作を確認し、納得してから支払い',
    step3Desc: 'PCやスマートフォンから実際のWebサイトをテストできます。100%満足するまでお支払いは不要です。',
    step3Bullets: [
      { bold: '実稼働プレビュー：', text: ' ボタン、フォーム、アニメーションを実際に操作できます。' },
      { bold: '修正対応込み：', text: ' テキストや色味、画像の微調整を承ります。' },
      { bold: '承認時のみ支払い：', text: ' 期待に沿わない場合は費用は1円もいただきません。' },
      { bold: '独自ドメイン公開：', text: ' 承認後、SSLや独自メールを設定して公開します。' },
    ],
    step3CtaLink: 'リスクゼロで今すぐ始める',
    step3DemoTitle: 'インタラクティブなプレビューリンク',
    step3DemoSub: 'demo.develisai.com/your-company',
    compareCol1Eyebrow: '従来の制作会社',
    compareCol1Title: '50%の前払い',
    compareCol1Desc: '完成前に費用の半分を支払い、4〜8週間の長い待ち時間と追加修正費が発生。',
    compareCol2Eyebrow: 'ノーコードDIYツール',
    compareCol2Title: '貴重な時間を浪費',
    compareCol2Desc: 'テンプレートの調整に何時間も取られ、サポートも弱くプロ品質になりにくい。',
    compareCol3Eyebrow: 'Develisaiモデル',
    compareCol3Title: '承認時のみ支払い',
    compareCol3Desc: '面倒な作業はすべてお任せ。3営業日で完成し、気に入った場合のみお支払い。',
    faqEyebrow: '明確な安心',
    faqTitle: 'よくあるご質問',
    faqSubtitle: 'ご相談前に知っておきたいすべての疑問にお答えします。',
    faqs: [
      {
        q: '支払いはいつ発生しますか？',
        a: 'Webサイトが完成し、実際のプレビューリンクで確認・修正を終え、100%満足いただいた段階でのみお支払いいただきます。',
      },
      {
        q: '気に入らなかった場合はどうなりますか？',
        a: '修正を行ってもご満足いただけない場合、費用は一切いただきません。解約金や違約金もありません。',
      },
      {
        q: '提案の申し込みで契約義務は生じますか？',
        a: '一切生じません。初期フォームの送信および制作提案は完全無料です。',
      },
      {
        q: 'ドメインはどうなりますか？',
        a: 'すでにお持ちのドメインを連携することも、お客様名義での新規取得をサポートすることも可能です。',
      },
      {
        q: '納期はどのくらいですか？',
        a: '素材受領後、約3営業日で初回の実稼働リンクをご案内します。修正は通常24〜48時間以内に完了します。',
      },
      {
        q: 'オンラインショップにも対応していますか？',
        a: 'はい、決済機能や在庫管理を備えたECサイトにも対応しています。詳細はオンラインショップのページをご覧ください。',
      },
    ],
    finalEyebrow: '100% 満足保証',
    finalTitle: '前払い金なし。完成したサイトを確認してからお支払い。',
    finalSubtitle: '1,500件以上の納品実績。プランを選んで、3営業日で完成サイトをご覧ください。',
    finalCtaPrimary: '無料の提案を依頼する',
    finalCtaWhatsApp: 'WhatsAppで相談する',
    finalFootnotes: ['隠れた費用なし', 'ホスティング＆SSL付属', '優先サポート付き'],
  },
  ch: {
    breadcrumbHome: '首页',
    breadcrumbCurrent: '运作流程',
    heroEyebrow: '透明且零风险的交付流程',
    heroTitle: '运作流程',
    heroSubtitle: '选择您的方案，我们制作完整的网站，只有在您在线查看满意并批准后才付款。无预付定金，无强制合同。',
    ctaPrimary: '申请免费方案',
    ctaWhatsApp: '通过 WhatsApp 咨询',
    trust1Title: '无需预付资金',
    trust1Sub: '零财务风险',
    trust2Title: '3个工作日',
    trust2Sub: '快速精准交付',
    trust3Title: '100%定制量身打造',
    trust3Sub: '满意保证',
    overviewEyebrow: '透明流程',
    overviewTitle: '3步拥有您的网站',
    overviewSubtitle: '为您节省宝贵时间，同时交付企业级的高质量数字产品。',
    step1CardBadge: '步骤 1',
    step1CardTime: '5分钟',
    step1CardTitle: '1. 选择方案并提交素材',
    step1CardSub: '单张表单',
    step1CardDesc: '选择适合您业务的方案，填写表单并提交企业信息、品牌Logo与创意想法。',
    step1CardFooter: '初期阶段完全免费',
    step2CardBadge: '步骤 2',
    step2CardTime: '3个工作日',
    step2CardTitle: '2. 我们负责全案设计与开发',
    step2CardSub: '全流程开发',
    step2CardDesc: '在您专注日常业务的同时，我们的团队打造完整网站：不是简单的静态草图，而是真实可用的完整站点。',
    step2CardFooter: '全套视觉工程',
    step3CardBadge: '步骤 3',
    step3CardTime: '审核批准后',
    step3CardTitle: '3. 在线验收满意后再付款',
    step3CardSub: '全权由您把控',
    step3CardDesc: '通过专属链接在线浏览测试，提出修改意见，仅在您100%满意后进行结算。',
    step3CardFooter: '100%满意度保障',
    step1Eyebrow: '01 / 高效素材收集',
    step1Title: '第1步：选择方案并发送材料',
    step1Desc: '无需冗长会议：选择方案并在线填写资料，我们立刻开始工作。',
    step1Bullets: [
      { bold: '三种清晰方案：', text: ' 明码标价，无任何隐藏收费。' },
      { bold: 'Logo、图片与文字：', text: ' 集中在一个表单；如缺少素材，我们协助补全。' },
      { bold: '零预付定金：', text: ' 只有在您亲自验收测试站点并满意后才付款。' },
    ],
    step1BoxTitle: '预计填写时间：5分钟',
    step1BoxDesc: '可直接附上网盘链接、社交媒体账号或简短文字说明。',
    step1ImageOverlay: '手机拍摄照片或说明需求即可',
    step1ImageBadge: '包含协助',
    step2Eyebrow: '02 / 完整工程与设计',
    step2Title: '第2步：我们设计并构建一切',
    step2Desc: '我们直接使用现代代码构建高性能网站，兼顾桌面端与移动端流畅体验。',
    step2Bullets: [
      { bold: '量身定制：', text: ' 深度适配您的行业特性、品牌色彩与标志。' },
      { bold: '全功能整合：', text: ' 包含文案、图片图库、地图、WhatsApp浮窗与表单。' },
      { bold: '文案润色支持：', text: ' 协助撰写吸引客户的高转化营销文案。' },
      { bold: '极致性能：', text: ' 秒开的手机加载速度与标准SEO架构。' },
      { bold: '3个工作日交付：', text: ' 发送私密测试链接供您审核。' },
    ],
    step2SprintBadge: '72小时开发冲刺进行中',
    step3Eyebrow: '03 / 验收与正式上线',
    step3Title: '第3步：测试满意后再结算',
    step3Desc: '用电脑与手机随意测试各个功能。不满意可修改，满意后再支付。',
    step3Bullets: [
      { bold: '真实在线链接：', text: ' 亲自测试表单、按钮与动效。' },
      { bold: '包含多轮调整：', text: ' 细节文字、色调与图片均可微调。' },
      { bold: '满意后付款：', text: ' 若效果不符合预期，您无需支付任何费用。' },
      { bold: '独立域名上线：', text: ' 批准后帮您部署至独立域名并配置企业邮箱与SSL。' },
    ],
    step3CtaLink: '立即零风险启航',
    step3DemoTitle: '交互式测试预览链接',
    step3DemoSub: 'demo.develisai.com/your-brand',
    compareCol1Eyebrow: '传统外包公司',
    compareCol1Title: '预收50%定金',
    compareCol1Desc: '未见成效先付一半，耗时4至8周，沟通冗长且改动额外收费。',
    compareCol2Eyebrow: '自主搭建工具 (DIY)',
    compareCol2Title: '耗费大量精力',
    compareCol2Desc: '受困于死板模板，缺乏专业技术支持，效果往往差强人意。',
    compareCol3Eyebrow: 'Develisai 模式',
    compareCol3Title: '满意才付款',
    compareCol3Desc: '技术重活交给我们。3天内交付完整网站，满意后才支付。',
    faqEyebrow: '完全清晰',
    faqTitle: '常见问题解答',
    faqSubtitle: '申请方案前您需要了解的所有事项。',
    faqs: [
      {
        q: '我什么时候需要付款？',
        a: '仅在网站完全开发完毕，您在测试链接上实际操作并满意确认后才支付。',
      },
      {
        q: '如果我不喜欢效果怎么办？',
        a: '如果调整后仍无法满足您的期望，您无需支付任何款项，无违约金或隐形条件。',
      },
      {
        q: '提交表单是否有强制购买义务？',
        a: '完全没有。初始表单提交与项目方案策划完全免费。',
      },
      {
        q: '域名如何处理？',
        a: '可以使用您已有的域名，或由我们指导您在正规注册商处以您的名义购买绑定。',
      },
      {
        q: '整个流程需要多长时间？',
        a: '收到基础材料后约3个工作日交付测试链接，后续细节微调通常在24-48小时内完成。',
      },
      {
        q: '是否支持在线商城电商功能？',
        a: '支持，我们提供包含购物车、运费计算与在线支付集成的完整电商方案。',
      },
    ],
    finalEyebrow: '100% 满意度保障',
    finalTitle: '无需提前付款。确认方案，验收成品，满意后再结算。',
    finalSubtitle: '超过1500个成功案例。选择您的方案，提交材料，3天内见证网站上线。',
    finalCtaPrimary: '申请免费方案',
    finalCtaWhatsApp: '通过 WhatsApp 沟通',
    finalFootnotes: ['无隐藏条款', '包含主机与SSL安全证书', '优先技术支持'],
  },
  de: {
    breadcrumbHome: 'Startseite',
    breadcrumbCurrent: 'Wie es funktioniert',
    heroEyebrow: 'Transparenz und risikofreier Ablauf',
    heroTitle: 'Wie es funktioniert',
    heroSubtitle:
      'Wählen Sie Ihr Paket, wir gestalten Ihre komplette Website und Sie zahlen erst, wenn Sie das fertige Ergebnis freigeben. Keine Vorauszahlung, keine Knebelverträge.',
    ctaPrimary: 'Kostenloses Angebot anfordern',
    ctaWhatsApp: 'Über WhatsApp anfragen',
    trust1Title: 'Keine Anzahlung',
    trust1Sub: 'Null finanzielles Risiko',
    trust2Title: '3 Werktage',
    trust2Sub: 'Schnelle & präzise Lieferung',
    trust3Title: '100% maßgeschneidert',
    trust3Sub: 'Zufriedenheit garantiert',
    overviewEyebrow: 'Transparenter Prozess',
    overviewTitle: 'Ihre Website in 3 Schritten',
    overviewSubtitle: 'Sparen Sie wertvolle Zeit und erhalten Sie Unternehmensqualität auf höchstem Niveau.',
    step1CardBadge: 'Schritt 1',
    step1CardTime: '5 Minuten',
    step1CardTitle: '1. Plan wählen & Material senden',
    step1CardSub: 'Ein einziges Formular',
    step1CardDesc:
      'Wählen Sie den passenden Plan und übermitteln Sie Logo, Texte und Wünsche über unser interaktives Formular.',
    step1CardFooter: 'Startphase vollkommen kostenlos',
    step2CardBadge: 'Schritt 2',
    step2CardTime: '3 Werktage',
    step2CardTitle: '2. Wir gestalten und entwickeln alles',
    step2CardSub: 'Ganzheitliche Umsetzung',
    step2CardDesc:
      'Während Sie sich um Ihr Geschäft kümmern, erstellt unser Team Ihre schlüsselfertige Website.',
    step2CardFooter: 'Aktives Visual Engineering',
    step3CardBadge: 'Schritt 3',
    step3CardTime: 'Nach Freigabe',
    step3CardTitle: '3. Fertig prüfen und erst dann zahlen',
    step3CardSub: 'Volle Kontrolle in Ihrer Hand',
    step3CardDesc:
      'Prüfen Sie Ihre Website über einen privaten Live-Link und zahlen Sie erst nach vollständiger Zufriedenheit.',
    step3CardFooter: '100% Zufriedenheitsgarantie',
    step1Eyebrow: '01 / EFFIZIENTE DATENERFASSUNG',
    step1Title: 'Schritt 1: Plan wählen und Material senden',
    step1Desc:
      'Keine zeitraubenden Pflichttermine: Plan aussuchen, kurzes Formular ausfüllen und wir legen direkt los.',
    step1Bullets: [
      { bold: 'Drei klare Pläne,', text: ' transparente Festpreise ohne Überraschungen.' },
      { bold: 'Logo, Fotos & Infos', text: ' an einem Ort; bei Bedarf unterstützen wir Sie bei den Inhalten.' },
      { bold: 'Keine Anzahlung:', text: ' Sie zahlen erst nach der Abnahme der Live-Vorschau.' },
    ],
    step1BoxTitle: 'Geschätzte Dauer: ca. 5 Minuten',
    step1BoxDesc: 'Fügen Sie Google-Drive-Links, Social-Media-Profile oder eine kurze Notiz bei.',
    step1ImageOverlay: 'Fotos mit dem Smartphone machen oder Wünsche mitteilen',
    step1ImageBadge: 'Hilfe inklusive',
    step2Eyebrow: '02 / INGENIEURKUNST & DESIGN',
    step2Title: 'Schritt 2: Wir entwickeln alles schlüsselfertig',
    step2Desc:
      'Kein statisches PDF, sondern eine echte, mit modernstem Code optimierte Website mit hoher Ladegeschwindigkeit.',
    step2Bullets: [
      { bold: 'Branchengerechtes Design:', text: ' abgestimmt auf Ihre Corporate Identity und Logo.' },
      { bold: 'Komplett montiert:', text: ' Texte, Bildkatalog, Karte, WhatsApp-Button und Kontaktformulare.' },
      { bold: 'Texterstellung inklusive:', text: ' wir formulieren überzeugende und kaufstarke Texte.' },
      { bold: 'Optimiert für Mobilgeräte:', text: ' blitzschnell und fit für Google-Suchmaschinen.' },
      { bold: 'In 3 Werktagen:', text: ' erhalten Sie Ihren privaten Prüflink zur Ansicht.' },
    ],
    step2SprintBadge: '72h-Sprint aktiv',
    step3Eyebrow: '03 / PRÜFUNG & VERÖFFENTLICHUNG',
    step3Title: 'Schritt 3: Live testen und erst dann bezahlen',
    step3Desc:
      'Navigieren Sie auf Smartphone und Desktop durch Ihre fertige Seite. Erst wenn alles perfekt ist, erfolgt die Zahlung.',
    step3Bullets: [
      { bold: 'Echte Live-Website:', text: ' testen Sie Formulare, Links und Buttons wie ein echter Besucher.' },
      { bold: 'Korrekturschleife inklusive:', text: ' wir passen Farben, Texte oder Bilder vorab an.' },
      { bold: 'Zahlung nur bei Gefallen:', text: ' entspricht das Ergebnis nicht Ihren Vorstellungen, zahlen Sie nichts.' },
      { bold: 'Domain-Livegang:', text: ' nach Freigabe schalten wir Ihre Domain mit SSL und Firmen-E-Mails scharf.' },
    ],
    step3CtaLink: 'Jetzt risikolos starten',
    step3DemoTitle: 'Interaktiver Vorschaulink',
    step3DemoSub: 'demo.develisai.com/ihre-firma',
    compareCol1Eyebrow: 'Traditionelle Agenturen',
    compareCol1Title: '50% Anzahlung',
    compareCol1Desc: 'Zahlen Sie die Hälfte blind im Voraus, 4-8 Wochen Wartezeit und teure Zusatzkosten.',
    compareCol2Eyebrow: 'Baukasten-Systeme (DIY)',
    compareCol2Title: 'Ihre Zeit ist wertvoll',
    compareCol2Desc: 'Verlorene Stunden mit Standard-Templates, ohne echten Support und mit unprofessionellem Look.',
    compareCol3Eyebrow: 'Das Develisai-Modell',
    compareCol3Title: 'Zahlung erst nach Freigabe',
    compareCol3Desc: 'Wir übernehmen die Arbeit. In 3 Tagen steht Ihre Seite – und Sie zahlen nur, wenn Sie begeistert sind.',
    faqEyebrow: 'Volle Klarheit',
    faqTitle: 'Häufig gestellte Fragen',
    faqSubtitle: 'Alles, was Sie vor Ihrer Anfrage wissen müssen.',
    faqs: [
      {
        q: 'Wann genau bezahle ich?',
        a: 'Erst dann, wenn Ihre Website komplett fertig über einen privaten Testlink erreichbar ist, Sie alles geprüft haben und vollkommen zufrieden sind.',
      },
      {
        q: 'Was passiert, wenn es mir nicht gefällt?',
        a: 'Sollte das Ergebnis trotz Anpassungen nicht Ihren Vorstellungen entsprechen, zahlen Sie 0 €. Kein Risiko, kein Kleingedrucktes.',
      },
      {
        q: 'Gehe ich mit der Anfrage eine Verpflichtung ein?',
        a: 'Nein, keineswegs. Das Ausfüllen des Formulars und die Angebotserstellung sind unverbindlich und kostenfrei.',
      },
      {
        q: 'Wie läuft das mit der Domain?',
        a: 'Wir binden eine bestehende Domain an oder unterstützen Sie bei der Registrierung auf Ihren eigenen Namen.',
      },
      {
        q: 'Wie lange dauert die Fertigstellung?',
        a: 'Nach Erhalt der Unterlagen steht der erste voll funktionale Link in circa 3 Werktagen bereit.',
      },
      {
        q: 'Ist das auch für Onlineshops geeignet?',
        a: 'Ja, wir entwickeln auch komplette E-Commerce-Plattformen mit Warenkorb, Versandberechnung und Zahlungssystemen.',
      },
    ],
    finalEyebrow: '100% Zufriedenheitsgarantie',
    finalTitle: 'Keine Vorkasse. Auswählen, fertig erhalten und erst dann zahlen.',
    finalSubtitle:
      'Über 1.500 veröffentlichte Projekte. Plan wählen, Material senden und in drei Werktagen Ihre fertige Website live erleben.',
    finalCtaPrimary: 'Kostenloses Angebot anfordern',
    finalCtaWhatsApp: 'Über WhatsApp austauschen',
    finalFootnotes: ['Kein Kleingedrucktes', 'Hosting & SSL inklusive', 'Priorisierter Support'],
  },
  pt: {
    breadcrumbHome: 'Início',
    breadcrumbCurrent: 'Como funciona',
    heroEyebrow: 'Transparência e Processo Sem Risco',
    heroTitle: 'Como funciona',
    heroSubtitle:
      'Você escolhe o plano, nós criamos o site completo e você só paga quando vê tudo pronto e aprovado. Sem adiantamentos nem contratos forçados.',
    ctaPrimary: 'Solicitar proposta grátis',
    ctaWhatsApp: 'Cotar via WhatsApp',
    trust1Title: 'Sem pagamento antecipado',
    trust1Sub: 'Zero risco financeiro',
    trust2Title: '3 dias úteis',
    trust2Sub: 'Entrega ágil e precisa',
    trust3Title: '100% sob medida',
    trust3Sub: 'Aprovação garantida',
    overviewEyebrow: 'Processo Transparente',
    overviewTitle: 'Seu site em 3 passos',
    overviewSubtitle:
      'Projetado para você dedicar o mínimo de tempo e obter resultados de padrão corporativo.',
    step1CardBadge: 'Passo 1',
    step1CardTime: '5 minutos',
    step1CardTitle: '1. Escolha o plano e envie seu material',
    step1CardSub: 'Apenas um formulário',
    step1CardDesc:
      'Escolha o plano que atende ao seu negócio e preencha um formulário interativo com dados, logo e ideias.',
    step1CardFooter: 'Fase inicial sem custos',
    step2CardBadge: 'Passo 2',
    step2CardTime: '3 dias úteis',
    step2CardTitle: '2. Nós desenvolvemos tudo',
    step2CardSub: 'Desenvolvimento integral',
    step2CardDesc:
      'Enquanto você cuida da sua empresa, nossa equipe cria seu site completo: não é um rascunho, é o site real funcionando.',
    step2CardFooter: 'Engenharia visual ativa',
    step3CardBadge: 'Passo 3',
    step3CardTime: 'Ao aprovar',
    step3CardTitle: '3. Veja pronto e só então pague',
    step3CardSub: 'Controle total em suas mãos',
    step3CardDesc:
      'Navegue pelo site em um link privado real, solicite ajustes e só pague no final se estiver 100% satisfeito.',
    step3CardFooter: 'Garantia de satisfação total',
    step1Eyebrow: '01 / COLETA EFICIENTE',
    step1Title: 'Passo 1: escolha seu plano e envie o material',
    step1Desc:
      'Sem reuniões obrigatórias: selecione o plano e preencha o formulário com dados e logotipo. Começamos na hora.',
    step1Bullets: [
      { bold: 'Três planos claros,', text: ' com preços transparentes e sem surpresas.' },
      { bold: 'Logo, fotos e dados', text: ' no mesmo formulário; se faltar algo, nossa equipe resolve com você.' },
      { bold: 'Zero adiantamento:', text: ' o pagamento só ocorre após você aprovar o site no ar.' },
    ],
    step1BoxTitle: 'Tempo estimado de preenchimento: 5 minutos',
    step1BoxDesc: 'Envie links do Google Drive, redes sociais ou apenas uma breve descrição.',
    step1ImageOverlay: 'Tire fotos pelo celular ou diga o que precisa',
    step1ImageBadge: 'Assistência incluída',
    step2Eyebrow: '02 / ENGENHARIA E DESIGN COMPLETO',
    step2Title: 'Passo 2: nós projetamos tudo',
    step2Desc:
      'Não é um protótipo estático em PDF: é o seu site de verdade com código otimizado e alta performance.',
    step2Bullets: [
      { bold: 'Design sob medida:', text: ' alinhado às cores, logotipo e identidade da sua empresa.' },
      { bold: 'Montagem completa:', text: ' textos persuasivos, fotos, mapa, botão de WhatsApp e formulários.' },
      { bold: 'Redação inclusa:', text: ' nós criamos textos atraentes para seus clientes.' },
      { bold: 'Otimização móvel total:', text: ' carregamento ultrarrápido e pronto para o Google (SEO).' },
      { bold: 'Em 3 dias úteis:', text: ' você recebe o link de acesso exclusivo para conferir.' },
    ],
    step2SprintBadge: 'Sprint de 72h em andamento',
    step3Eyebrow: '03 / VALIDAÇÃO E PUBLICAÇÃO',
    step3Title: 'Passo 3: navegue ao vivo e só pague depois',
    step3Desc:
      'Você testa o site no computador e no celular. Pede os ajustes que desejar e só paga quando estiver 100% encantado.',
    step3Bullets: [
      { bold: 'Site ativo em link real:', text: ' teste botões, formulários e animações como um cliente real.' },
      { bold: 'Rodada de ajustes inclusa:', text: ' mudamos textos, fotos e cores antes do fechamento.' },
      { bold: 'Só pague se aprovar:', text: ' se o resultado não agradar, você não paga absolutamente nada.' },
      { bold: 'Lançamento no seu domínio:', text: ' após aprovação, migramos para seu domínio com SSL e e-mails.' },
    ],
    step3CtaLink: 'Começar agora sem risco',
    step3DemoTitle: 'Link interativo de pré-visualização',
    step3DemoSub: 'demo.develisai.com/sua-empresa',
    compareCol1Eyebrow: 'Agências Tradicionais',
    compareCol1Title: '50% adiantado',
    compareCol1Desc: 'Pague metade antes de ver qualquer coisa, prazos de 4 a 8 semanas e cobranças extras por alteração.',
    compareCol2Eyebrow: 'Criadores Faça Você Mesmo',
    compareCol2Title: 'Seu tempo vale dinheiro',
    compareCol2Desc: 'Horas perdidas brigando com templates genéricos, sem suporte técnico e com visual amador.',
    compareCol3Eyebrow: 'O Modelo Develisai',
    compareCol3Title: 'Pague somente ao aprovar',
    compareCol3Desc: 'Nós fazemos todo o trabalho pesado. Veja seu site pronto em 3 dias úteis e pague apenas se amar.',
    faqEyebrow: 'Clareza Total',
    faqTitle: 'Perguntas frequentes sobre como funciona',
    faqSubtitle: 'Tudo o que você precisa saber antes de solicitar sua proposta.',
    faqs: [
      {
        q: 'Quando eu pago exatamente?',
        a: 'Você paga exclusivamente quando seu site estiver 100% pronto em um link de teste funcional, após você navegar pelo celular e computador, solicitar os ajustes e aprovar o resultado.',
      },
      {
        q: 'E se eu não gostar do resultado?',
        a: 'Se após as rodadas de ajustes o site não atender às suas expectativas, você simplesmente não paga nada. Sem multas nem letras miúdas.',
      },
      {
        q: 'Solicitar a proposta me obriga a algo?',
        a: 'De forma alguma. O envio do formulário inicial e a proposta são 100% gratuitos e sem compromisso de compra.',
      },
      {
        q: 'Como funciona o domínio?',
        a: 'Podemos conectar um domínio que você já tenha (.com.br, .com, etc.) ou orientá-lo no registro em seu nome.',
      },
      {
        q: 'Quanto tempo demora o processo?',
        a: 'O site fica pronto para testes em aproximadamente 3 dias úteis após o envio dos materiais. Ajustes pontuais levam de 24 a 48 horas.',
      },
      {
        q: 'Serve para uma loja virtual?',
        a: 'Sim, também desenvolvemos e-commerces completos com carrinho de compras, cálculo de frete e meios de pagamento integrados.',
      },
    ],
    finalEyebrow: 'Garantia de Satisfação 100%',
    finalTitle: 'Sem pagamento adiantado. Você escolhe, recebe pronto e só aí paga.',
    finalSubtitle:
      'Mais de 1.500 projetos publicados. Escolha seu plano, envie seu material e veja seu site pronto em três dias úteis.',
    finalCtaPrimary: 'Solicitar proposta grátis',
    finalCtaWhatsApp: 'Conversar via WhatsApp',
    finalFootnotes: ['Sem letras miúdas', 'Hospedagem e SSL incluídos', 'Suporte prioritário'],
  },
};

export const HowItWorksPage: React.FC = () => {
  const { language, t } = useLanguage();
  const { navigate } = useNavigation();
  const { openModal } = useContactModal();

  // Active language dictionary fallback to ES
  const langKey = HOW_IT_WORKS_TRANSLATIONS[language] ? language : 'es';
  const c = HOW_IT_WORKS_TRANSLATIONS[langKey];

  // Interactive accordion state: open item index (or null)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleOpenLeadModal = () => {
    openModal({
      origin: '/como-funciona',
      product: 'Cómo funciona - Proceso sin riesgo',
    });
  };

  const whatsappHref = `${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    'Hola Develisai, vi cómo funciona el servicio sin pago adelantado y me gustaría cotizar mi página web.'
  )}`;

  return (
    <div className="w-full bg-[#060A12] text-[#dae2fd] transition-colors duration-200">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 pb-20 sm:pb-28 bg-[#060A12]">
        {/* Ambient cyan glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[640px] h-[320px] bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb & Eyebrow Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-2 text-[#64748B] text-xs font-semibold">
              <button
                onClick={() => navigate('/')}
                className="hover:text-[#00f0ff] transition-colors cursor-pointer"
              >
                {c.breadcrumbHome}
              </button>
              <ChevronRight className="h-3.5 w-3.5 text-[#64748B]" />
              <span className="text-[#00f0ff] font-semibold">{c.breadcrumbCurrent}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
              <span>{c.heroEyebrow}</span>
            </div>
          </div>

          {/* Main Heading & Value Proposition */}
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight mb-5 leading-tight">
              {c.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl leading-relaxed mb-8">
              {c.heroSubtitle}
            </p>
          </div>

          {/* Action Cluster */}
          <div className="flex flex-wrap items-center gap-4 mb-12 sm:mb-16">
            <button
              onClick={handleOpenLeadModal}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-lg bg-[#00f0ff] text-[#00363a] text-sm font-bold transition-all hover:scale-105 hover:bg-[#7df4ff] shadow-[0_0_24px_rgba(0,240,255,0.35)] cursor-pointer"
            >
              <span>{c.ctaPrimary}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-lg bg-[#111C35] hover:bg-[#162343] text-[#F8FAFC] text-sm font-semibold transition-all hover:scale-102 border border-[#1E2D4A] hover:border-[#2A3F66] shadow-md"
            >
              <MessageCircle className="h-4 w-4 text-[#10B981]" />
              <span>{c.ctaWhatsApp}</span>
            </a>
          </div>

          {/* Micro Trust Badges Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#111C35]/70 border border-[#1E2D4A] backdrop-blur-md">
              <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] shrink-0">
                <LockKeyholeOpen className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#F8FAFC]">{c.trust1Title}</div>
                <div className="text-xs text-[#94A3B8]">{c.trust1Sub}</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#111C35]/70 border border-[#1E2D4A] backdrop-blur-md">
              <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#F8FAFC]">{c.trust2Title}</div>
                <div className="text-xs text-[#94A3B8]">{c.trust2Sub}</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#111C35]/70 border border-[#1E2D4A] backdrop-blur-md">
              <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 flex items-center justify-center text-[#00f0ff] shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#F8FAFC]">{c.trust3Title}</div>
                <div className="text-xs text-[#94A3B8]">{c.trust3Sub}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. 3-STEP OVERVIEW CARDS (SYNTHESIS)                                      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0C1527] relative border-t border-b border-[#1E2D4A]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] font-bold text-[#00f0ff] uppercase tracking-widest">
              {c.overviewEyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F8FAFC] mt-2">
              {c.overviewTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2 leading-relaxed">
              {c.overviewSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 Card */}
            <div className="group relative rounded-xl bg-[#111C35] border border-[#1E2D4A] p-6 hover:bg-[#162343] hover:border-[#2A3F66] transition-all duration-300 flex flex-col justify-between shadow-xl overflow-hidden">
              <div>
                <div className="relative h-48 rounded-lg overflow-hidden mb-5 bg-[#171f33]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUfWJd-4Li9tfG7j3gscebM5dkiA1pnDsmljkIUYtmWC-qelOOKUFckojPhYCne9KKqQbnSkCD7Xe-MwJ1hMQaY_SJQC6PaZOeNmWqJqGYDAVuR1s48fLeHi_AhrNTUqGvGQCp5iuWBYnntN6HeMCK6kr0WqhgzPSvKCZOjNUG3J7fBA42I8rZ1JZzv7A_IfpGB3stLrDli_KxrM5LJAW-SAqwC7Tebw_Ip2gYGyI"
                    alt={c.step1CardTitle}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#060A12]/85 backdrop-blur-md text-[#00f0ff] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-[#1E2D4A]">
                    <span>{c.step1CardBadge}</span>
                    <span className="w-1 h-1 rounded-full bg-[#00f0ff]" />
                    <span className="text-[#94A3B8]">{c.step1CardTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#F8FAFC] mb-1.5">
                  {c.step1CardTitle}
                </h3>
                <span className="inline-block text-xs font-semibold text-[#00f0ff] mb-2.5">
                  {c.step1CardSub}
                </span>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {c.step1CardDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#1E2D4A]/50 flex items-center text-[#00f0ff] text-xs font-semibold">
                <span>{c.step1CardFooter}</span>
                <CheckCircle2 className="h-4 w-4 ml-1.5 text-[#00f0ff]" />
              </div>
            </div>

            {/* Step 2 Card */}
            <div className="group relative rounded-xl bg-[#111C35] border border-[#1E2D4A] p-6 hover:bg-[#162343] hover:border-[#2A3F66] transition-all duration-300 flex flex-col justify-between shadow-xl overflow-hidden">
              <div>
                <div className="relative h-48 rounded-lg overflow-hidden mb-5 bg-[#171f33]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXX-lY76jy-irbidHwAgqCVmKUrW1DxFXzXZt6EvKYNgpgCjMtU_ZrG314pw8nz18tkGdOmEK-AlF_wIzt7WA6b4Ze3bF3oPgcSYs-c5e9UCmj-qi1CwGbOyAeylIdizP6qON2cH5IcXT2Yp-nPEhv5bZn7UZ8gnyHTMNx44y7ftS4SmzVa2sXRLf99hpyUfzAMr1orDR_a7wPtdVLwuJ1SNop4lBZlvuui_uKSro"
                    alt={c.step2CardTitle}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#060A12]/85 backdrop-blur-md text-[#00f0ff] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-[#1E2D4A]">
                    <span>{c.step2CardBadge}</span>
                    <span className="w-1 h-1 rounded-full bg-[#00f0ff]" />
                    <span className="text-[#94A3B8]">{c.step2CardTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#F8FAFC] mb-1.5">
                  {c.step2CardTitle}
                </h3>
                <span className="inline-block text-xs font-semibold text-[#00f0ff] mb-2.5">
                  {c.step2CardSub}
                </span>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {c.step2CardDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#1E2D4A]/50 flex items-center text-[#00f0ff] text-xs font-semibold">
                <span>{c.step2CardFooter}</span>
                <ShieldCheck className="h-4 w-4 ml-1.5 text-[#00f0ff]" />
              </div>
            </div>

            {/* Step 3 Card */}
            <div className="group relative rounded-xl bg-[#111C35] border border-[#1E2D4A] p-6 hover:bg-[#162343] hover:border-[#2A3F66] transition-all duration-300 flex flex-col justify-between shadow-xl overflow-hidden">
              <div>
                <div className="relative h-48 rounded-lg overflow-hidden mb-5 bg-[#171f33]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxHxzRr3mljG97Y5_wT6QgQwIK4vpxsoYzW-2n_9oe812hjnYAvbnjR02fcEhVLrxriVQpNcHQf7un6m0m8IK1GjqsIAKSfsR8UsczOCYgF9L321ZLB65HhBejdYGFtE9KjvEefbaXkESAbBWX-XaAfY9n2yCOHbDTRWQM5_NKFSvjeZYtWqCcYA9r6zkQmXiOBpZLOT01gHv0quqThyMG6Y_Sq7mD0eosxYL-b60"
                    alt={c.step3CardTitle}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#060A12]/85 backdrop-blur-md text-[#00f0ff] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-[#1E2D4A]">
                    <span>{c.step3CardBadge}</span>
                    <span className="w-1 h-1 rounded-full bg-[#00f0ff]" />
                    <span className="text-[#94A3B8]">{c.step3CardTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#F8FAFC] mb-1.5">
                  {c.step3CardTitle}
                </h3>
                <span className="inline-block text-xs font-semibold text-[#00f0ff] mb-2.5">
                  {c.step3CardSub}
                </span>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {c.step3CardDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#1E2D4A]/50 flex items-center text-[#10B981] text-xs font-semibold">
                <span>{c.step3CardFooter}</span>
                <ThumbsUp className="h-4 w-4 ml-1.5 text-[#10B981]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. STEP 1 DEEP-DIVE EDITORIAL                                             */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#060A12] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Copy Left */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111C35] border border-[#1E2D4A] text-[#00f0ff] text-[11px] uppercase font-bold tracking-widest">
                <span>{c.step1Eyebrow}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F8FAFC] tracking-tight leading-tight">
                {c.step1Title}
              </h2>

              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                {c.step1Desc}
              </p>

              <ul className="space-y-3 pt-2 text-sm text-[#dae2fd]">
                {c.step1Bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00f0ff] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#F8FAFC] font-semibold">{bullet.bold}</strong>
                      {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <div className="p-4 sm:p-5 rounded-xl bg-[#111C35] border border-[#1E2D4A] flex items-start sm:items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff] shrink-0">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <div className="text-xs sm:text-sm text-[#94A3B8]">
                    <span className="text-[#F8FAFC] font-bold block mb-0.5">
                      {c.step1BoxTitle}
                    </span>
                    {c.step1BoxDesc}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden bg-[#111C35] border border-[#1E2D4A] shadow-2xl">
                <img
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOIy0kc7FB5cNeq6nwY-ce-2WKmaNSvMpOP2PPrBuhB-j3STBvnTCU-GfJ9TIl66-oEIO7xsK4Nw5O01_FvpFmusdqLwFfPR3qvh-N5-Zjg2OEuK7t2-kzoxP3sAWwQ2_DBO7lV7ieAdRdsXRDYX7wSMqWDsttmafBgGuLpGqx-GIofgcSyjIYcbVHYbONuXwMXhddcISEx2Y49SDSD5ZqQNMQh4m6_vgH5iHatfc"
                  alt={c.step1Title}
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#060A12] via-[#060A12]/80 to-transparent p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="text-[#F8FAFC] text-sm font-semibold">
                    {c.step1ImageOverlay}
                  </div>
                  <span className="px-3 py-1 rounded bg-[#00f0ff]/20 text-[#00f0ff] text-xs font-semibold whitespace-nowrap">
                    {c.step1ImageBadge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. STEP 2 DEEP-DIVE EDITORIAL (REVERSED)                                  */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#0C1527] relative overflow-hidden border-t border-b border-[#1E2D4A]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Image Left on Desktop */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden bg-[#111C35] border border-[#1E2D4A] shadow-2xl">
                <img
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCerou0tF8Y3f0HZgwBxs8CqAwl6jEULVsE1Dg84Jgi6Hfzrek0GLR_SD_wxqt6V7HPoSIHBEnDAgO_uI9HHOPxeXPZoJUdTv8HvGW8-Nlxg2At3_kotvP6Yaknac20-i_5B4cI-MukgR5aPY6Fz9cWP4SP9KxCjceISBupOHlUt6CQZxMdR7N3mejpbuSOa7c1Nizton75TW3nllk0EyZkvr6uQOuFmcHpFTD1uYw"
                  alt={c.step2Title}
                  loading="lazy"
                />
                {/* Floating telemetry badge */}
                <div className="absolute top-4 right-4 bg-[#111C35]/90 border border-[#2A3F66] backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                  <div className="text-xs font-semibold text-[#F8FAFC]">
                    {c.step2SprintBadge}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Right on Desktop */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111C35] border border-[#1E2D4A] text-[#00f0ff] text-[11px] uppercase font-bold tracking-widest">
                <span>{c.step2Eyebrow}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F8FAFC] tracking-tight leading-tight">
                {c.step2Title}
              </h2>

              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                {c.step2Desc}
              </p>

              <ul className="space-y-3 pt-2 text-sm text-[#dae2fd]">
                {c.step2Bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00f0ff] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#F8FAFC] font-semibold">{bullet.bold}</strong>
                      {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. STEP 3 DEEP-DIVE EDITORIAL                                             */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#060A12] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Copy Left */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111C35] border border-[#1E2D4A] text-[#00f0ff] text-[11px] uppercase font-bold tracking-widest">
                <span>{c.step3Eyebrow}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F8FAFC] tracking-tight leading-tight">
                {c.step3Title}
              </h2>

              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                {c.step3Desc}
              </p>

              <ul className="space-y-3 pt-2 text-sm text-[#dae2fd]">
                {c.step3Bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#10B981] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#F8FAFC] font-semibold">{bullet.bold}</strong>
                      {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-3">
                <button
                  onClick={handleOpenLeadModal}
                  className="inline-flex items-center gap-2 text-[#00f0ff] text-sm font-bold hover:underline transition-all cursor-pointer"
                >
                  <span>{c.step3CtaLink}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Image Right with interactive demo preview badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden bg-[#111C35] border border-[#1E2D4A] shadow-2xl">
                <img
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJoPM9lIFQ9dc8Hx6VRDAlTnR2wZCv36p2RxQqE1C1X9mN6KRp_T7Y7VfOdv25906QVFd7onNxJGViIbomU6j0VBeenfslCk8hCiFPjmS8QqqrU9lr2NzJCuOCQBMXfhv_CyA2_x9m5PTpMV2ufsH7V0ccnMUKwvNo4gKyQToPUfH2D1pDgdY7lW8J3t7TGSbryDkSKq_ATeSfL8WGHXmZaoRpSSeocryDgg7kOeg"
                  alt={c.step3Title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060A12]/90 via-transparent to-transparent flex items-end p-5 sm:p-6">
                  <div className="bg-[#0C1527]/90 border border-[#2A3F66] backdrop-blur-md p-4 rounded-xl w-full flex items-center justify-between shadow-xl">
                    <div>
                      <div className="text-[#F8FAFC] font-bold text-sm">
                        {c.step3DemoTitle}
                      </div>
                      <div className="text-[#94A3B8] text-xs font-mono mt-0.5">
                        {c.step3DemoSub}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff]">
                      <Laptop className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. COMPARISON TABLE / ADVANTAGES BANNER                                  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0C1527] border-t border-b border-[#1E2D4A]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#111C35] border border-[#1E2D4A] p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Col 1 */}
              <div className="border-b md:border-b-0 md:border-r border-[#1E2D4A] pb-6 md:pb-0 md:pr-6">
                <span className="text-[#ffb4ab] text-[11px] font-bold uppercase tracking-wider block mb-1">
                  {c.compareCol1Eyebrow}
                </span>
                <h4 className="text-xl font-bold text-[#F8FAFC] mb-2">
                  {c.compareCol1Title}
                </h4>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {c.compareCol1Desc}
                </p>
              </div>

              {/* Col 2 */}
              <div className="border-b md:border-b-0 md:border-r border-[#1E2D4A] pb-6 md:pb-0 md:pr-6">
                <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-wider block mb-1">
                  {c.compareCol2Eyebrow}
                </span>
                <h4 className="text-xl font-bold text-[#F8FAFC] mb-2">
                  {c.compareCol2Title}
                </h4>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {c.compareCol2Desc}
                </p>
              </div>

              {/* Col 3 */}
              <div>
                <span className="text-[#00f0ff] text-[11px] font-bold uppercase tracking-wider block mb-1">
                  {c.compareCol3Eyebrow}
                </span>
                <h4 className="text-xl font-bold text-[#00f0ff] mb-2">
                  {c.compareCol3Title}
                </h4>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {c.compareCol3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FAQ SECTION (INTERACTIVE ACCORDION)                                    */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#060A12] relative">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] font-bold text-[#00f0ff] uppercase tracking-widest">
              {c.faqEyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F8FAFC] mt-2">
              {c.faqTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2 leading-relaxed">
              {c.faqSubtitle}
            </p>
          </div>

          {/* Accordion Container */}
          <div className="space-y-3">
            {c.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#162343] border-[#00f0ff]/40 shadow-lg'
                      : 'bg-[#111C35] border-[#1E2D4A] hover:border-[#2A3F66] hover:bg-[#131f3b]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#F8FAFC] pr-4">
                      {faq.q}
                    </span>
                    <span className="p-1.5 rounded-lg bg-[#0C1527] text-[#00f0ff] shrink-0 transition-transform duration-300">
                      {isOpen ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm text-[#94A3B8] leading-relaxed border-t border-[#1E2D4A]/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FINAL CTA / SATISFACTION GUARANTEE                                     */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#0C1527] relative overflow-hidden border-t border-[#1E2D4A]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] text-[11px] font-bold uppercase tracking-widest border border-[#10B981]/20">
              <ShieldCheck className="h-4 w-4" />
              <span>{c.finalEyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              {c.finalTitle}
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
              {c.finalSubtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={handleOpenLeadModal}
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-4 rounded-lg bg-[#00f0ff] text-[#00363a] text-sm font-bold transition-all hover:scale-105 hover:bg-[#7df4ff] shadow-[0_0_30px_rgba(0,240,255,0.4)] cursor-pointer"
              >
                <span>{c.finalCtaPrimary}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-4 rounded-lg bg-[#111C35] hover:bg-[#162343] text-[#F8FAFC] text-sm font-semibold transition-all hover:scale-102 border border-[#1E2D4A] hover:border-[#2A3F66] shadow-lg"
              >
                <MessageCircle className="h-5 w-5 text-[#10B981]" />
                <span>{c.finalCtaWhatsApp}</span>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#64748B]">
              {c.finalFootnotes.map((fn, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#00f0ff]" />
                  <span>{fn}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
