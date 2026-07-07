import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const targetDate = new Date('2026-09-05T18:00:00');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // NUEVO: Efecto para detectar el scroll y animar el itinerario
  useEffect(() => {
    // Creamos el "vigía"
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si el elemento entra en la pantalla
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Opcional: si quieres que la animación se reproduzca solo una vez
            // observer.unobserve(entry.target); 
          }
        });
      },
      { 
        threshold: 0.2 // Se activa cuando al menos el 20% del elemento es visible
      } 
    );

    // Seleccionamos todos los elementos del itinerario
    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => {
      observer.observe(item);
    });

    // Limpiamos el vigía cuando el componente se desmonta
    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const carouselPhotos = [
    { id: 1, src: './anillo.JPG', caption: 'Donde empezó todo' },
    { id: 2, src: './arbol.JPG', caption: 'Sesión formal (Denisse con su vestido floral menta)' },
    { id: 3, src: './caballito.JPG', caption: 'Listos para el gran día' },
    { id: 4, src: './juegos.JPG', caption: 'Sesión formal (Denisse con su vestido floral menta)' },
    { id: 5, src: './pose.JPG', caption: 'Listos para el gran día' }
  ];

  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev === carouselPhotos.length - 1 ? 0 : prev + 1));
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev === 0 ? carouselPhotos.length - 1 : prev - 1));
  };

  return (

    

    <div className="app-container">
      {/* ... (tu código JSX sigue exactamente igual) ... */}



      {/* Capas de Fondo Fijo */}
      <div className="background-image"></div>
      <div className="background-overlay"></div>

      {/* Gráficos Florales */}
      <div className="floral floral-top-left">🌿</div>
      <div className="floral floral-top-right">❀</div>
      
      {/* 1. SECCIÓN DE PORTADA */}
      <section className="hero-section">
        <p className="subtitle">¡Nos casamos!</p>
        <h1 className="title">Carlos & Denisse</h1>
        <p className="date">Sábado, 5 de Septiembre de 2026</p>
        
        <div className="countdown-box">
          {timeLeft.dias === 0 && timeLeft.horas === 0 && timeLeft.minutos === 0 && timeLeft.segundos === 0 ? (
            <span>¡EL GRAN DÍA HA LLEGADO!</span>
          ) : (
            <span>
              FALTAN: {timeLeft.dias} DÍAS, {timeLeft.horas} HORAS, {timeLeft.minutos} MIN, {timeLeft.segundos} SEG
            </span>
          )}
        </div>
      </section>

      {/* 1.5. SECCIÓN DE CARRUSEL DE FOTOS */}

      <section className="carousel-section">
        <h2 className="carousel-title">Nuestros Momentos</h2>
        
        <div className="carousel-container">
          <button className="carousel-btn left" onClick={prevPhoto}>&#10094;</button>
          
          <div className="carousel-slide">
            <img 
              src={carouselPhotos[currentPhoto].src} 
              alt={carouselPhotos[currentPhoto].caption} 
              className="carousel-image"
            />
            <p className="carousel-caption">{carouselPhotos[currentPhoto].caption}</p>
          </div>

          <button className="carousel-btn right" onClick={nextPhoto}>&#10095;</button>
        </div>
      </section>

      {/* 2. SECCIÓN DEL ITINERARIO */}
      <section className="itinerary-section">
        <h2 className="itinerary-title">Itinerario</h2>

        <div className="timeline-container">
          
          {/* Evento 1: Derecha (18:00) */}
          <div className="timeline-item right-item">
            <div className="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M228.12,145.14,192,123.47V104a8,8,0,0,0-4-7L136,67.36V48h16a8,8,0,0,0,0-16H136V16a8,8,0,0,0-16,0V32H104a8,8,0,0,0,0,16h16V67.36L68,97.05a8,8,0,0,0-4,7v19.47L27.88,145.14A8,8,0,0,0,24,152v64a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V168a8,8,0,0,1,16,0v48a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V152A8,8,0,0,0,228.12,145.14ZM40,156.53l24-14.4V208H40ZM128,144a24,24,0,0,0-24,24v40H80V108.64l48-27.43,48,27.43V208H152V168A24,24,0,0,0,128,144Zm88,64H192V142.13l24,14.4Z"></path></svg>
            </div>
            <div className="timeline-content">
              <span className="itinerary-time">18:00 hrs</span>
              <p className="itinerary-event">Ceremonia Religiosa</p>
              <p className="itinerary-desc">Acompáñanos a dar el sí en el altar.</p>
            </div>
          </div>

          {/* Evento 2: Izquierda (20:00) */}
          <div className="timeline-item left-item">
            <div className="timeline-icon">💍</div>
            <div className="timeline-content">
              <span className="itinerary-time">20:00 hrs</span>
              <p className="itinerary-event">Recepción</p>
              <p className="itinerary-desc">Momento para recibir a los novios y tomar fotos.</p>
            </div>
          </div>

          {/* Evento 3: Derecha (21:00) */}
          <div className="timeline-item right-item">
            <div className="timeline-icon">🎵</div>
            <div className="timeline-content">
              <span className="itinerary-time">21:00 hrs</span>
              <p className="itinerary-event">Nuestro Primer Baile</p>
              <p className="itinerary-desc">Acompáñanos en el tradicional vals.</p>
            </div>
          </div>

          {/* Evento 4: Izquierda (22:30) - Ajustado según asunción */}
          <div className="timeline-item left-item">
            <div className="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"></path></svg>
            </div>
            <div className="timeline-content">
              <span className="itinerary-time">22:30 hrs</span>
              <p className="itinerary-event">Cena</p>
              <p className="itinerary-desc">Disfrutemos de un banquete inolvidable juntos.</p>
            </div>
          </div>

          {/* Evento 5: Derecha (23:30) */}
          <div className="timeline-item right-item">
            <div className="timeline-icon">🥂</div>
            <div className="timeline-content">
              <span className="itinerary-time">23:30 hrs</span>
              <p className="itinerary-event">Brindis</p>
              <p className="itinerary-desc">Levantemos las copas por nuestro futuro.</p>
            </div>
          </div>

          {/* Evento 6: Izquierda (23:45) */}
          <div className="timeline-item left-item">
            <div className="timeline-icon">🎂</div>
            <div className="timeline-content">
              <span className="itinerary-time">23:45 hrs</span>
              <p className="itinerary-event">Corte del Pastel</p>
              <p className="itinerary-desc">Un momento dulce para compartir.</p>
            </div>
          </div>

          {/* Evento 7: Derecha (01:00) */}
          <div className="timeline-item right-item">
            <div className="timeline-icon">🌙</div>
            <div className="timeline-content">
              <span className="itinerary-time">01:00 hrs</span>
              <p className="itinerary-event">Fin de la Recepción</p>
              <p className="itinerary-desc">¡Gracias por hacer este día tan especial!</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;