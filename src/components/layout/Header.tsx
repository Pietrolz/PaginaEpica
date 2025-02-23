import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = () => {
  const { t, i18n } = useTranslation();
  const headerRef = useRef<HTMLDivElement>(null);
  let lastScrollTop = 0;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scroll hacia abajo
        headerRef.current?.classList.add('header-hidden');
      } else {
        // Scroll hacia arriba
        headerRef.current?.classList.remove('header-hidden');
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="src/assets/epica-logo.png" alt="Épica Logo" />
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">{t('home')}</Link>
          <Link to="/about" className="nav-link">{t('about')}</Link>
          <Link to="/services" className="nav-link">{t('services')}</Link>
          <Link to="/tournaments" className="nav-link">{t('tournaments')}</Link>
          <Link to="/events" className="nav-link">{t('events')}</Link>
          <Link to="/blog" className="nav-link">{t('blog')}</Link>
          <Link to="/sponsors" className="nav-link">{t('sponsors')}</Link>
          <Link to="/contact" className="nav-link">{t('contact')}</Link>
        </nav>
        <div className="language-selector">
          <button onClick={() => changeLanguage('es')} className="language-button">ES</button>
          <button onClick={() => changeLanguage('en')} className="language-button">EN</button>
        </div>
      </div>
    </header>
  );
};

export default Header;