import { createContext, useContext, useState } from 'react';

const translations = {
  es: {
    nav: {
      welcome: 'Bienvenidos',
      about: 'Nosotros',
      services: 'Servicios',
      contact: 'Contacto'
    },
    hero: {
      badge: 'Agencia de Publicidad Premium',
      title: 'AGENCIA DE',
      subtitle: 'PUBLICIDAD',
      brand: 'MERAKI',
      description: 'Hacemos que tu marca destaque con creatividad, estrategia y pasión. Transformamos ideas en experiencias únicas que conectan con tu audiencia.',
      startProject: 'Comenzar Proyecto',
      learnMore: 'Conocer Más'
    },
    about: {
      title: 'Hacemos que tu',
      titleHighlight: 'marca destaque',
      description: 'Nosotros transformamos tu marca, construyendo tu identidad a través de su trayectoria. Acercamos tus productos y servicios a nuevos clientes. ¡Anímate a crecer!',
      expertTeam: 'Equipo Experto',
      expertTeamDesc: 'Profesionales creativos y estratégicos que entienden tu visión y la transforman en resultados tangibles.',
      innovativeIdeas: 'Ideas Innovadoras',
      innovativeIdeasDesc: 'Desarrollamos conceptos únicos y creativos que capturan la esencia de tu marca y conectan con tu audiencia.',
      measurableResults: 'Resultados Medibles',
      measurableResultsDesc: 'Estrategias basadas en datos que generan impacto real en el crecimiento y reconocimiento de tu marca.',
      projectsCompleted: 'Proyectos Completados',
      satisfactionRate: 'Satisfacción del Cliente',
      support: 'Soporte',
      ready: '¿Listo para hacer crecer tu marca?',
      readyDescription: 'Conversemos sobre tu proyecto y creemos algo extraordinario juntos.'
    },
    services: {
      title: 'Nuestros',
      titleHighlight: 'Servicios',
      description: 'Resolvemos desafíos. Ofrecemos servicios de comunicación eficaz, desarrollando nuevas estrategias, contenido de calidad para tu marca.',
      branding: 'Branding & Identidad',
      brandingDesc: 'Creamos identidades visuales únicas que reflejan la esencia de tu marca y la hacen memorable.',
      digitalMarketing: 'Marketing Digital',
      digitalMarketingDesc: 'Estrategias integrales en redes sociales, SEO y publicidad para maximizar tu alcance online.',
      webDevelopment: 'Desarrollo Web',
      webDevelopmentDesc: 'Sitios web modernos, responsivos y optimizados para generar más conversiones y ventas.',
      audiovisualProduction: 'Producción Audiovisual',
      audiovisualProductionDesc: 'Videos promocionales, fotografía de producto y contenido visual de alta calidad.',
      graphicDesign: 'Diseño Gráfico',
      graphicDesignDesc: 'Materiales publicitarios, brochures y diseños que comunican tu mensaje efectivamente.',
      contentStrategy: 'Estrategia de Contenido',
      contentStrategyDesc: 'Planificación y creación de contenido que enganche y convierta a tu audiencia objetivo.',
      ready: '¿Listo para potenciar tu marca?',
      readyDescription: 'Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos de marketing y publicidad.'
    },
    contact: {
      title: 'Haz tu',
      titleHighlight: 'consulta',
      description: 'Hablemos sobre la publicidad adecuada para tu empresa. Estamos aquí para ayudarte a crecer.',
      phone: 'Teléfono',
      email: 'Email',
      location: 'Ubicación',
      callNow: '¡Llamanos Ahora!',
      callNowDesc: 'Nuestro equipo está listo para escuchar tu proyecto y ayudarte a alcanzar tus objetivos.',
      name: 'Nombre',
      company: 'Empresa',
      message: 'Mensaje',
      sendMessage: 'Enviar Mensaje'
    }
  },
  en: {
    nav: {
      welcome: 'Welcome',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact'
    },
    hero: {
      badge: 'Premium Advertising Agency',
      title: 'ADVERTISING',
      subtitle: 'AGENCY',
      brand: 'MERAKI',
      description: 'We make your brand stand out with creativity, strategy and passion. We transform ideas into unique experiences that connect with your audience.',
      startProject: 'Start Project',
      learnMore: 'Learn More'
    },
    about: {
      title: 'We make your',
      titleHighlight: 'brand stand out',
      description: 'We transform your brand, building your identity through its trajectory. We bring your products and services to new customers. Dare to grow!',
      expertTeam: 'Expert Team',
      expertTeamDesc: 'Creative and strategic professionals who understand your vision and transform it into tangible results.',
      innovativeIdeas: 'Innovative Ideas',
      innovativeIdeasDesc: 'We develop unique and creative concepts that capture the essence of your brand and connect with your audience.',
      measurableResults: 'Measurable Results',
      measurableResultsDesc: 'Data-driven strategies that generate real impact on your brand growth and recognition.',
      projectsCompleted: 'Projects Completed',
      satisfactionRate: 'Client Satisfaction',
      support: 'Support',
      ready: 'Ready to grow your brand?',
      readyDescription: 'Let\'s talk about your project and create something extraordinary together.'
    },
    services: {
      title: 'Our',
      titleHighlight: 'Services',
      description: 'We solve challenges. We offer effective communication services, developing new strategies, quality content for your brand.',
      branding: 'Branding & Identity',
      brandingDesc: 'We create unique visual identities that reflect the essence of your brand and make it memorable.',
      digitalMarketing: 'Digital Marketing',
      digitalMarketingDesc: 'Comprehensive strategies in social media, SEO and advertising to maximize your online reach.',
      webDevelopment: 'Web Development',
      webDevelopmentDesc: 'Modern, responsive websites optimized to generate more conversions and sales.',
      audiovisualProduction: 'Audiovisual Production',
      audiovisualProductionDesc: 'Promotional videos, product photography and high-quality visual content.',
      graphicDesign: 'Graphic Design',
      graphicDesignDesc: 'Advertising materials, brochures and designs that effectively communicate your message.',
      contentStrategy: 'Content Strategy',
      contentStrategyDesc: 'Planning and creation of content that engages and converts your target audience.',
      ready: 'Ready to boost your brand?',
      readyDescription: 'Let\'s talk about how we can help you achieve your marketing and advertising goals.'
    },
    contact: {
      title: 'Make your',
      titleHighlight: 'inquiry',
      description: 'Let\'s talk about the right advertising for your company. We are here to help you grow.',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      callNow: 'Call Us Now!',
      callNowDesc: 'Our team is ready to listen to your project and help you achieve your goals.',
      name: 'Name',
      company: 'Company',
      message: 'Message',
      sendMessage: 'Send Message'
    }
  }
};

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
