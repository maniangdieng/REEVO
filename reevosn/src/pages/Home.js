import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Home.css';
import { FaBars, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Tableau de textes à animer
const typewriterTexts = [
  "LA REVOLUTION ELECTRIQUE EST EN MARCHE!",
];

// Composant pour l'effet machine à écrire
const TypewriterTitle = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % typewriterTexts.length;
      const fullText = typewriterTexts[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <h1 className="stroke-title">
      <span className="typewriter-text">{text}</span>
      <span className="cursor"></span>
    </h1>
  );
};

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const bikes = [
    { src: 'A1.jpg', alt: 'Moto 1', model: 'Model A12', discoverLink: '/discover-a1', tryLink: '/try-a1' },
    { src: 'A2.jpg', alt: 'Moto 2', model: 'Model C32 Pro', discoverLink: '/discover-a2', tryLink: '/try-a2' },
    { src: 'A3.jpg', alt: 'Moto 3', model: 'Model E52', discoverLink: '/discover-a3', tryLink: '/try-a3' },
    { src: 'A4.jpg', alt: 'Moto 4', model: 'Model X5', discoverLink: '/discover-a4', tryLink: '/try-a4' },
    { src: 'A5.jpg', alt: 'Moto 5', model: 'Model X5', discoverLink: '/discover-a5', tryLink: '/try-a5' },
    { src: 'A6.jpg', alt: 'Moto 6', model: 'Model X5', discoverLink: '/discover-a6', tryLink: '/try-a6' },
  ];

  const imagesPerSlide = window.innerWidth >= 1024 ? 3 : 1;

  const nextBike = useCallback(() => {
    if (currentIndex < bikes.length - imagesPerSlide) {
      setCurrentIndex(currentIndex + imagesPerSlide);
    } else {
      setCurrentIndex(0); // Retour au début après la dernière slide
    }
  }, [currentIndex, imagesPerSlide, bikes.length]);

  const prevBike = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerSlide);
    } else {
      setCurrentIndex(bikes.length - imagesPerSlide); // Aller à la dernière slide
    }
  }, [currentIndex, imagesPerSlide, bikes.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextBike();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextBike]);

  return (
    <div className="home-container">
      <section className="hero">
        <header className="header">
          <div className="logo">
            <img src="logo1.png" alt="Logo Revoo" className="logo" />
          </div>
          <nav className="nav">
            <a href="#top" className="nav-link">ACCEUIL</a>
            <a href="#custom" className="nav-link">MODELES</a>
            <a href="#range" className="nav-link">CONTACT</a>
          </nav>
          {!isSidebarOpen && (
            <div className="hamburger" onClick={() => setIsSidebarOpen(true)}>
              <FaBars />
            </div>
          )}
          <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
              &times;
            </button>
            <a href="#top" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}>ACCEUIL</a>
            <a href="#custom" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}>MODELES</a>
            <a href="#range" className="sidebar-link" onClick={() => setIsSidebarOpen(false)}>CONTACT</a>
          </div>
        </header>
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="good.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </section>
      <section className="text-section">
        <TypewriterTitle />
        <div className="photo-gallery">
          <button className="carousel-btn prev" onClick={prevBike} aria-label="Previous">
            <FaArrowLeft />
          </button>
          <div
            className="photo-container"
            style={{ transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)` }} // Simplifié et corrigé
          >
            {bikes.map((bike, index) => (
              <div key={index} className="bike-card">
                <img src={bike.src} alt={bike.alt} className="bike-image" />
                <div className="card-overlay">
                  <a href={bike.discoverLink} className="card-btn">Découvrir</a>
                  <a href={bike.tryLink} className="card-btn">Essayer</a>
                </div>
                <div className="model-label">Le modèle</div>
              </div>
            ))}
          </div>
          <button className="carousel-btn next" onClick={nextBike} aria-label="Next">
            <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;