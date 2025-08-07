import { useState } from 'react';
import Button from '@shared/components/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@shared/components/Toast';
import { useLanguage } from '@shared/contexts/LanguageContext';
import styles from './Contact.module.css';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t('contact.title')}{' '}
            <span className={styles.highlight}>
              {t('contact.titleHighlight')}
            </span>
          </h2>
          <p className={styles.description}>
            {t('contact.description')}
          </p>
        </div>

        <div className={styles.content}>
          {/* Contact Form */}
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.name')}
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="company"
                    placeholder={t('contact.company')}
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('contact.phone')}
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  name="message"
                  placeholder={t('contact.message')}
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={5}
                  required
                ></textarea>
              </div>

              <Button type="submit" className={styles.submitButton}>
                <Send className={styles.buttonIcon} />
                {t('contact.sendMessage')}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Phone className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.infoTitle}>{t('contact.phone')}</h3>
                <p className={styles.infoText}>+54 9 223 687 3463</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Mail className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.infoTitle}>{t('contact.email')}</h3>
                <p className={styles.infoText}>meraki.publicidad@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MapPin className={styles.icon} />
              </div>
              <div>
                <h3 className={styles.infoTitle}>{t('contact.location')}</h3>
                <p className={styles.infoText}>Argentina</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className={styles.callToAction}>
              <h3 className={styles.ctaTitle}>{t('contact.callNow')}</h3>
              <p className={styles.ctaDescription}>{t('contact.callNowDesc')}</p>
              <Button className={styles.ctaButton}>
                <Phone className={styles.buttonIcon} />
                {t('contact.callNow')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
