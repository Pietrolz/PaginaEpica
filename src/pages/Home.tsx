import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const { t } = useTranslation();

  // Configuración del carrusel principal
  const heroCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    cssEase: 'linear',
    arrows: true, // Habilitar flechas laterales
  };

  // Configuración del carrusel de bienvenida
  const welcomeCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  };

  // Datos de la sección de servicios
  const services = [
    { title: t('courtRental'), image: '/src/assets/cancha-padel.jpg' },
    { title: t('academies'), image: '/src/assets/maestro.jpg' },
    { title: t('privateLessons'), image: '/src/assets/Padel-Jugador.jpg' },
    { title: t('equipmentRentalSales'), image: '/src/assets/Padel-wilson.webp' },
  ];

  return (
    <div className="home">
      {/* Carrusel principal */}
      <Slider {...heroCarouselSettings} className="hero-carousel">
        <div>
          <img src="/src/assets/cancha-padel.jpg" alt="Cancha de pádel" className="hero-image" />
        </div>
        <div>
          <img src="/src/assets/Padel-Jugador.jpg" alt="Jugador de pádel" className="hero-image" />
        </div>
        <div>
          <img src="/src/assets/Padel-wilson.webp" alt="Equipo Wilson" className="hero-image" />
        </div>
      </Slider>

      {/* Sección de bienvenida */}
      <section className="welcome-section">
        <div className="welcome-carousel">
          <Slider {...welcomeCarouselSettings}>
            <div>
              <img src="/src/assets/maestro.jpg" alt="Maestro" className="welcome-image" />
            </div>
            <div>
              <img src="/src/assets/alumnos.jpg" alt="Alumnos" className="welcome-image" />
            </div>
            <div>
              <img src="/src/assets/amigos.jpg" alt="Amigos" className="welcome-image" />
            </div>
          </Slider>
        </div>
        <div className="welcome-message">
          <h2>{t('welcomeMessageTitle')}</h2>
          <p>{t('welcomeMessage')}</p>
        </div>
      </section>

      {/* Sección de servicios */}
      <section className="services-section">
        <h2 className="services-title">{t('servicesTitle')}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;