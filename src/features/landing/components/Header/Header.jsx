import { useState } from 'react';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import Button from '@shared/components/Button';
import { useTheme } from '@shared/contexts/ThemeContext';
import { useLanguage } from '@shared/contexts/LanguageContext';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

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
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <div className={styles.logo}>
            <img src="/completeicon.png" alt="Meraki" className={styles.logoImage} />
          </div>

          {/* Navigation Items - Hidden on mobile */}
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={styles.navItem}
              >
                {item.label}
              </button>
            ))}
          </nav>

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
              className={`${styles.mobileMenuButton} ${styles.controlButton}`}
            >
              {isMobileMenuOpen ? <X className={styles.icon} /> : <Menu className={styles.icon} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={styles.mobileNavItem}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
