import { useEffect, useRef, useState } from 'react';
import { Palette, Megaphone, Globe, Camera, BarChart3, PenTool } from 'lucide-react';
import { useLanguage } from '@shared/contexts/LanguageContext';
import styles from './MorphingServices.module.css';

const MorphingServices = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [animationTime, setAnimationTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationTime(Date.now() * 0.001);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2
    });
  };

  const services = [
    {
      icon: Palette,
      title: t('services.branding'),
      description: t('services.brandingDesc'),
      features: ['Logo Design', 'Manual de Marca', 'Paleta de Colores', 'Tipografía'],
      color: 'blue',
      rotation: '0deg'
    },
    {
      icon: Megaphone,
      title: t('services.digitalMarketing'),
      description: t('services.digitalMarketingDesc'),
      features: ['SEO', 'SEM', 'Social Media', 'Email Marketing'],
      color: 'purple',
      rotation: '5deg'
    },
    {
      icon: Globe,
      title: t('services.webDevelopment'),
      description: t('services.webDevelopmentDesc'),
      features: ['Sitios Web', 'E-commerce', 'Landing Pages', 'Responsive Design'],
      color: 'red',
      rotation: '-3deg'
    },
    {
      icon: Camera,
      title: t('services.audiovisualProduction'),
      description: t('services.audiovisualProductionDesc'),
      features: ['Video Marketing', 'Fotografía', 'Motion Graphics', 'Animación'],
      color: 'green',
      rotation: '7deg'
    },
    {
      icon: PenTool,
      title: t('services.graphicDesign'),
      description: t('services.graphicDesignDesc'),
      features: ['Brochures', 'Flyers', 'Packaging', 'Material POP'],
      color: 'teal',
      rotation: '-5deg'
    },
    {
      icon: BarChart3,
      title: t('services.contentStrategy'),
      description: t('services.contentStrategyDesc'),
      features: ['Estrategia', 'Copywriting', 'Calendario Editorial', 'Métricas'],
      color: 'orange',
      rotation: '4deg'
    }
  ];

  return (
    <section id="services" ref={sectionRef} className={styles.services}>
      {/* Morphing background */}
      <div className={styles.morphingBg}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Title Section */}
          <div className={styles.titleSection}>
            <h2 className={styles.title}>
              {t('services.title')}{' '}
              <span className={styles.highlight}>
                {t('services.titleHighlight')}
              </span>
            </h2>
            <p className={styles.description}>
              {t('services.description')}
            </p>
          </div>

          {/* Services Grid */}
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`${styles.serviceCard} ${isVisible ? styles.visible : ''} ${hoveredCard === index ? styles.hovered : ''}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: `rotate(${service.rotation})`
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                {/* Card Background */}
                <div className={styles.cardBg}></div>
                
                {/* Floating Icon */}
                <div className={`${styles.iconContainer} ${styles[`icon${service.color}`]}`}>
                  <service.icon className={styles.icon} />
                  <div className={styles.iconGlow}></div>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  
                  {/* Features List */}
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.feature}>
                        <span className={styles.featureDot}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className={styles.hoverEffect}></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className={styles.cta}>
            <h3 className={styles.ctaTitle}>{t('services.ready')}</h3>
            <p className={styles.ctaDescription}>{t('services.readyDescription')}</p>
            <div className={styles.ctaIcons}>
              <Camera className={styles.ctaIcon} />
              <PenTool className={styles.ctaIcon} />
              <BarChart3 className={styles.ctaIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorphingServices;
