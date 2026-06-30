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

  return (
    <div className="app-container">

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

      {/* 2. SECCIÓN DEL ITINERARIO (ESTILO REPLICADO DE LA IMAGEN) */}
      <section className="itinerary-section">
        <h2 className="itinerary-title">Itinerario</h2>

        {/* El contenedor del timeline crea la línea negra central */}
        <div className="timeline-container">
          
          {/* Evento 1: Derecha */}
          <div className="timeline-item right-item">
            <div className="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M228.12,145.14,192,123.47V104a8,8,0,0,0-4-7L136,67.36V48h16a8,8,0,0,0,0-16H136V16a8,8,0,0,0-16,0V32H104a8,8,0,0,0,0,16h16V67.36L68,97.05a8,8,0,0,0-4,7v19.47L27.88,145.14A8,8,0,0,0,24,152v64a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V168a8,8,0,0,1,16,0v48a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V152A8,8,0,0,0,228.12,145.14ZM40,156.53l24-14.4V208H40ZM128,144a24,24,0,0,0-24,24v40H80V108.64l48-27.43,48,27.43V208H152V168A24,24,0,0,0,128,144Zm88,64H192V142.13l24,14.4Z"></path></svg>
            </div>
            <div className="timeline-content">
              <span className="itinerary-time">18:00 hrs</span>
              <p className="itinerary-event">Ceremonia Religiosa</p>
              <p className="itinerary-desc">Acompáñanos a dar el sí en el altar.</p>
            </div>
          </div>

          {/* Evento 2: Izquierda */}
          <div className="timeline-item left-item">
            <div className="timeline-icon">💍</div>
            <div className="timeline-content">
              <span className="itinerary-time">20:00 hrs</span>
              <p className="itinerary-event">Recepción</p>
              <p className="itinerary-desc">Momento para recibir a los novios y tomar fotos.</p>
            </div>
          </div>

          {/* Evento 3: Derecha */}
          <div className="timeline-item right-item">
            <div className="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"></path></svg>
              </div>
            <div className="timeline-content">
              <span className="itinerary-time">21:00 hrs</span>
              <p className="itinerary-event">Cena</p>
              <p className="itinerary-desc">Disfrutemos de un banquete inolvidable juntos.</p>
            </div>
          </div>{/*  */}

          {/* Evento 4: Izquierda */}
          <div className="timeline-item left-item">
            <div className="timeline-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M120,64.37V16a8,8,0,0,0-16,0V64.37a88,88,0,1,0,16,0ZM183.54,144H151.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16,72.16,0,0,1,183.54,144Zm-95.3,16h47.52c-2,33.52-16.13,52.95-23.76,61.08C104.36,212.93,90.23,193.51,88.24,160Zm0-16c2-33.52,16.13-52.95,23.76-61.08,7.64,8.15,21.77,27.57,23.76,61.08Zm3.43-61.06C83,95.64,73.74,115.64,72.23,144H40.46A72.16,72.16,0,0,1,91.67,82.94ZM40.46,160H72.23c1.51,28.36,10.79,48.36,19.44,61.06A72.16,72.16,0,0,1,40.46,160Zm91.87,61.06c8.65-12.7,17.93-32.7,19.44-61.06h31.77A72.16,72.16,0,0,1,132.33,221.06ZM256,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,256,88ZM152,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H192V64a8,8,0,0,1-16,0V48H160A8,8,0,0,1,152,40Z"></path></svg>
              </div>
            <div className="timeline-content">
              <span className="itinerary-time">22:00 hrs</span>
              <p className="itinerary-event">Fiesta y Baile</p>
              <p className="itinerary-desc">¡A abrir la pista de baile y celebrar!</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;