import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Footer = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/src/assets/EPICAimagotipo1-Rojo.png" alt={t('epicaLogoAlt')} />
        </div>
        <div className="footer-contact">
          <h3 className="footer-section-title">{t('f-contact')}</h3>
          <p className="footer-contact-item"><a href="https://maps.google.com/?q=Av.+Zamn%C3%A1+Mensajeros+de+Paz,+97208,+M%C3%A9rida,+Yucat%C3%A1n" target="_blank" rel="noopener noreferrer">{t('location')}</a></p>
          <p className="footer-contact-item">{t('phone')} +52 999 750 7344</p>
          <p className="footer-contact-item">{t('email')} <a href="mailto:contacto@epicapadel.mx">contacto@epicapadel.mx</a></p>
        </div>
        <div className="footer-links">
          <h3 className="footer-section-title">{t('links')}</h3>
          <Link to="/privacy-policy" className="footer-link footer-link-item"> {t('privacyPolicy')}</Link>
          <Link to="/job-application" className="footer-link footer-link-item">{t('joinTeam')}</Link>
        </div>
        <div className="footer-social">
          <h3 className="footer-section-title">{t('socialNetworks')}</h3>
          <a href="https://wa.me/529997507344" target="_blank" rel="noopener noreferrer" aria-label={t('whatsapp')} className="social-link">
            <img src="/src/assets/whatsapp-icon.png" alt={t('whatsapp')} className="social-icon" />
            <span className="social-icon-text">{t('whatsapp')}</span>
          </a>
          <a href="https://www.instagram.com/epicapadelclub/" target="_blank" rel="noopener noreferrer" aria-label={t('instagram')} className="social-link">
            <img src="/src/assets/instagram-icon.png" alt={t('instagram')} className="social-icon" />
            <span className="social-icon-text">{t('instagram')}</span>
          </a>
          <a href="https://www.facebook.com/Epicapadelclub" target="_blank" rel="noopener noreferrer" aria-label={t('facebook')} className="social-link">
            <img src="/src/assets/facebook-icon.png" alt={t('facebook')} className="social-icon" />
            <span className="social-icon-text">{t('facebook')}</span>
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>{t('copyright')}</p>
      </div>
      <button className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span>↑</span>
      </button>
    </footer>
  );
};

export default Footer;