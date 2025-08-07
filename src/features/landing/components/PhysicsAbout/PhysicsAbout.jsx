import { useEffect, useRef, useState } from 'react';
import { Users, Lightbulb, Target, Zap, Rocket, Heart } from 'lucide-react';
import { useLanguage } from '@shared/contexts/LanguageContext';
import styles from './PhysicsAbout.module.css';

const PhysicsAbout = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    { 
      icon: Users, 
      title: t('about.expertTeam'), 
      description: t('about.expertTeamDesc'),
      color: 'blue',
      delay: 0 
    },
    { 
      icon: Lightbulb, 
      title: t('about.innovativeIdeas'), 
      description: t('about.innovativeIdeasDesc'),
      color: 'cyan',
      delay: 0.2 
    },
    { 
      icon: Target, 
      title: t('about.measurableResults'), 
      description: t('about.measurableResultsDesc'),
      color: 'teal',
      delay: 0.4 
    }
  ];

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      {/* Physics-based background particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollProgress * (100 + i * 50)}px) rotate(${scrollProgress * 360}deg)`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Tilted Title Section */}
          <div 
            className={styles.titleSection}
            style={{
              transform: `perspective(1000px) rotateX(${scrollProgress * 10}deg) translateY(${scrollProgress * -50}px)`
            }}
          >
            <h2 className={styles.title}>
              {t('about.title')}{' '}
              <span className={styles.titleHighlight}>
                {t('about.titleHighlight')}
                {/* Underline animation */}
                <div 
                  className={styles.underline}
                  style={{
                    width: `${isVisible ? 100 : 0}%`,
                    transition: 'width 1s ease-out 0.5s'
                  }}
                />
              </span>
            </h2>
            <p className={styles.description}>
              {t('about.description')}
            </p>
          </div>

          {/* 3D Feature Cards Grid */}
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${styles.featureCard} ${isVisible ? styles.visible : ''}`}
                style={{
                  transform: `perspective(1000px) rotateY(${scrollProgress * 15}deg) translateZ(${scrollProgress * 100}px)`,
                  animationDelay: `${feature.delay}s`
                }}
              >
                <div className={`${styles.iconWrapper} ${styles[`icon${feature.color}`]}`}>
                  <feature.icon className={styles.icon} />
                  {/* Rotating ring */}
                  <div className={styles.ring}></div>
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                
                {/* Interactive glow effect */}
                <div className={styles.glow}></div>
              </div>
            ))}
          </div>

          {/* Floating Stats */}
          <div className={styles.stats}>
            <div 
              className={styles.stat}
              style={{
                transform: `translateY(${Math.sin(animationTime) * 20}px)`
              }}
            >
              <div className={styles.statNumber}>150+</div>
              <div className={styles.statLabel}>{t('about.projectsCompleted')}</div>
            </div>
            <div 
              className={styles.stat}
              style={{
                transform: `translateY(${Math.sin(animationTime + 1) * 20}px)`
              }}
            >
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>{t('about.satisfactionRate')}</div>
            </div>
            <div 
              className={styles.stat}
              style={{
                transform: `translateY(${Math.sin(animationTime + 2) * 20}px)`
              }}
            >
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>{t('about.support')}</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={styles.cta}>
            <div className={styles.ctaIcon}>
              <Heart className={styles.heart} />
            </div>
            <h3 className={styles.ctaTitle}>{t('about.ready')}</h3>
            <p className={styles.ctaDescription}>{t('about.readyDescription')}</p>
            <div className={styles.ctaIndicator}>
              <Rocket className={styles.rocket} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysicsAbout;
