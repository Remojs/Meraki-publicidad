import styles from './Footer.module.css';

const Footer = () => {
  const scrollToHero = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brandSection}>
              <div className={styles.brand}>
                <div className={styles.logo}></div>
                <span className={styles.brandName}>MERAKI</span>
              </div>
              <p className={styles.description}>
                Agencia de publicidad especializada en transformar marcas y crear 
                experiencias únicas que conectan con tu audiencia.
              </p>
              
              {/* Contact Info */}
              <div className={styles.contactInfo}>
                <p>📧 meraki.publicidad@gmail.com</p>
                <p>📱 +54 9 223 687 3463</p>
                <p>📍 Argentina</p>
              </div>
            </div>

            {/* Services */}
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Servicios</h4>
              <ul className={styles.list}>
                <li className={styles.listItem} onClick={scrollToHero} style={{cursor: 'pointer'}}>Branding</li>
                <li className={styles.listItem} onClick={scrollToHero} style={{cursor: 'pointer'}}>Marketing Digital</li>
                <li className={styles.listItem} onClick={scrollToHero} style={{cursor: 'pointer'}}>Desarrollo Web</li>
                <li className={styles.listItem} onClick={scrollToHero} style={{cursor: 'pointer'}}>Diseño Gráfico</li>
                <li className={styles.listItem} onClick={scrollToHero} style={{cursor: 'pointer'}}>Producción Audiovisual</li>
              </ul>
            </div>

            {/* Company */}
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Empresa</h4>
              <ul className={styles.list}>
                <li className={styles.listItem} onClick={scrollToHero} style={{cursor: 'pointer'}}>Sobre Nosotros</li>
                <li className={styles.listItem} onClick={scrollToHero} style={{cursor: 'pointer'}}>Nuestro Equipo</li>
                <li className={styles.listItem} onClick={scrollToHero} style={{cursor: 'pointer'}}>Portfolio</li>
                <li className={styles.listItem} onClick={scrollToHero} style={{cursor: 'pointer'}}>Contacto</li>
                <li className={styles.listItem} onClick={scrollToHero} style={{cursor: 'pointer'}}>Blog</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className={styles.bottom}>
            <div className={styles.copyright}>
              <span>© 2025 MERAKI. Todos los derechos reservados.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
