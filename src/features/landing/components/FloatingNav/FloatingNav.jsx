import { useState, useEffect } from 'react';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import Button from '../../../../shared/components/Button';
import { useTheme } from '../../../../shared/contexts/ThemeContext';
import { useLanguage } from '../../../../shared/contexts/LanguageContext';
import styles from './FloatingNav.module.css';

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
      
      // Detect active section
      const sections = ['hero', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: t('nav.welcome') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'contact', label: t('nav.contact') }
  ];

  return (
    <>
      {/* Floating Navigation */}
      <nav className={`${styles.floatingNav} ${isVisible ? styles.visible : styles.hidden}`}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            {/* Logo */}
            <div className={styles.logo}>
              <img src="/completeicon.png" alt="Meraki" className={styles.logoImage} />
            </div>

            {/* Navigation Items - Hidden on mobile */}
            <div className={styles.navItems}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${styles.navItem} ${
                    activeSection === item.id ? styles.active : ''
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className={styles.activeIndicator}></div>
                  )}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className={styles.controls}>
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className={styles.controlButton}
              >
                {theme === 'light' ? <Moon className={styles.icon} /> : <Sun className={styles.icon} />}
              </Button>
              
              <Button
                onClick={toggleLanguage}
                variant="ghost"
                size="icon"
                className={styles.controlButton}
              >
                <Globe className={styles.icon} />
                <span className={styles.langText}>{language.toUpperCase()}</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                variant="ghost"
                size="icon"
                className={`${styles.controlButton} ${styles.mobileOnly}`}
              >
                {isMobileMenuOpen ? <X className={styles.icon} /> : <Menu className={styles.icon} />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div 
            className={styles.mobileMenuBackdrop} 
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileMenuItems}>
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={styles.mobileMenuItem}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Top Header (Always visible) */}
      <header className={styles.topHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <div className={styles.headerLogo}>
              <div className={styles.logoIcon}></div>
              <span className={styles.logoText}>MERAKI</span>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className={styles.ctaButton}
            >
              {t('hero.startProject')}
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default FloatingNav;
