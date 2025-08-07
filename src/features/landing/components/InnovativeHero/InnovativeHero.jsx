import { useEffect, useRef, useState } from 'react';
import { Button } from '@shared/components/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@shared/contexts/LanguageContext';
import styles from './InnovativeHero.module.css';

const InnovativeHero = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const cursorRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [animationTime, setAnimationTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationTime(Date.now() * 0.001);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={heroRef} className={styles.hero}>
      {/* Dynamic Background */}
      <div className={styles.background}>
        {/* Morphing Blobs */}
        <div 
          className={`${styles.blob} ${styles.blob1}`}
          style={{
            left: mousePosition.x * 0.02,
            top: mousePosition.y * 0.02,
            transform: `scale(${1 + mousePosition.x * 0.0001})`
          }}
        />
        <div 
          className={`${styles.blob} ${styles.blob2}`}
          style={{
            right: mousePosition.x * 0.01,
            bottom: mousePosition.y * 0.01,
            transform: `scale(${1 + mousePosition.y * 0.0001}) rotate(${mousePosition.x * 0.1}deg)`
          }}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Floating Badge */}
          <div 
            className={styles.badge}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
              transform: `translateY(${Math.sin(animationTime) * 10}px)`
            }}
          >
            <Sparkles className={styles.badgeIcon} />
            <span className={styles.badgeText}>{t('hero.badge')}</span>
          </div>

          {/* Morphing Title */}
          <div className={styles.titleSection}>
            <h1 className={styles.title}>
              <span 
                className={styles.titleWord}
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`
                }}
              >
                {t('hero.title')}
              </span>
            </h1>
            <h1 className={styles.title}>
              <span className={styles.subtitle}>
                {t('hero.subtitle')}
              </span>
            </h1>
            
            {/* 3D MERAKI */}
            <div className={styles.brandContainer}>
              <h2 
                className={styles.brand}
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
                  textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
                }}
              >
                {t('hero.brand')}
              </h2>
              {/* Shadow Layer */}
              <h2 
                className={styles.brandShadow}
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02 + 5}deg) rotateY(${mousePosition.x * 0.02 + 5}deg) translateZ(-50px)`
                }}
              >
                {t('hero.brand')}
              </h2>
            </div>
          </div>

          {/* Floating Description */}
          <p 
            className={styles.description}
            style={{
              transform: `translateY(${Math.sin(animationTime + 1) * 5}px)`
            }}
          >
            {t('hero.description')}
          </p>

          {/* Interactive Buttons */}
          <div className={styles.buttonGroup}>
            <Button 
              onClick={scrollToContact}
              variant="primary"
              size="lg"
              className={styles.heroButton}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span>{t('hero.startProject')}</span>
              <ArrowRight className={styles.buttonIcon} />
            </Button>
            <Button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              variant="ghost"
              size="lg"
              className={styles.glassButton}
            >
              {t('hero.learnMore')}
              <div className={styles.buttonDot}></div>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className={styles.scrollIndicator}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className={styles.scrollWheel}>
              <div className={styles.scrollDot}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeHero;
