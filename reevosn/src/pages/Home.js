import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { FaBars, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { FaLeaf, FaCoins, FaVolumeMute, FaTools, FaBolt, FaMobileAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Footer from './Footer';

// Tableau de textes à animer
const typewriterTexts = [
  "LA REVOLUTION ELECTRIQUE EST EN MARCHE!",
  "DEY DAW REEK AMOUL ARRET!!",
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
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeCard, setActiveCard] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [hoveredStore, setHoveredStore] = useState(null);
  const [activeProductTab, setActiveProductTab] = useState('a-series');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const performanceCardsRef = useRef([]);
  const dropdownTimerRef = useRef(null);

  // Mettre à jour l'état isMobile en fonction de la taille de l'écran
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Détection du scroll pour fixer la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Détection de visibilité pour les cartes sur mobile
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    performanceCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const bikes = [
    { src: 'A1.jpg', alt: 'Moto 1', model: 'Model A12', discoverLink: '/discover-a1', tryLink: '/try-a1' },
    { src: 'A2.jpg', alt: 'Moto 2', model: 'Model C32 Pro', discoverLink: '/discover-a2', tryLink: '/try-a2' },
    { src: 'A3.jpg', alt: 'Moto 3', model: 'Model E52', discoverLink: '/discover-a3', tryLink: '/try-a3' },
    { src: 'A4.jpg', alt: 'Moto 4', model: 'Model X5', discoverLink: '/discover-a4', tryLink: '/try-a4' },
    { src: 'A5.jpg', alt: 'Moto 5', model: 'Model X5', discoverLink: '/discover-a5', tryLink: '/try-a5' },
    { src: 'A6.jpg', alt: 'Moto 6', model: 'Model X5', discoverLink: '/discover-a6', tryLink: '/try-a6' },
  ];

  const motorcycleModels = [
    
    {
      id: 1,
      name: 'A12 LFP',
      series: 'a-series',
      tagline: 'REBORN IN LITHIUM',
      image: 'A12lfp.png',
      backgroundColor: '#f5f5f5',
      specs: {
        topSpeed: '35-55KM/H',
        range: '80-110KM',
        capacity: '72V 35Ah'
      }
    },
    {
      id: 2,
      name: 'A11 LFP',
      series: 'a-series',
      tagline: 'REBORN IN LITHIUM',
      image: 'A11lfp.png',
      backgroundColor: '#ffffff',
      specs: {
        topSpeed: '40-60KM/H',
        range: '90-120KM',
        capacity: '72V 40Ah'
      }
    },
    {
      id: 3,
      name: 'E52',
      series: 'e-series',
      tagline: 'GLIDE WITH POWER',
      image: 'E52.png',
      backgroundColor: '#f8f8f8',
      specs: {
        topSpeed: '45-70KM/H',
        range: '100-130KM',
        capacity: '72V 50Ah'
      }
    },
    {
      id: 4,
      name: 'C32',
      series: 'c-series',
      tagline: 'PERFORMANCE REDEFINED',
      image: 'C32.png',
      backgroundColor: '#fafafa',
      specs: {
        topSpeed: '50-75KM/H',
        range: '110-140KM',
        capacity: '72V 45Ah'
      }
    },
    {
      id: 5,
      name: 'A12',
      series: 'a-series',
      tagline: 'AS STRONG, AS STYLE',
      image: 'A12.png',
      backgroundColor: '#fafafa',
      specs: {
        topSpeed: '35-55KM/H',
        range: '85-115KM',
        capacity: '72V 38Ah'
      }
    },
    {
      id: 6,
      name: 'C32 PRO',
      series: 'c-series',
      tagline: 'STAY BOLD? STAY PRO',
      image: 'C32pro.png',
      backgroundColor: '#fafafa',
      specs: {
        topSpeed: '55-80KM/H',
        range: '120-150KM',
        capacity: '72V 52Ah'
      }
    },
  ];

  // Données des magasins
  const stores = [
    {
      id: 1,
      name: 'Boutique REVOO Médina',
      region: 'Dakar',
      address: 'Avenue Blaise Diagne, près de Sahm, en face de la station Shell',
      phones: ['+221 78 168 26 26', '+221 78 877 25 25', '+221 78 877 31 31'],
      mapLink: 'https://maps.google.com/?q=Boutique+REVOO+Médina+Dakar',
      coordinates: { lat: 14.6937, lng: -17.4441 }
    },
    {
      id: 2,
      name: 'Boutique REVOO Bourguiba',
      region: 'Dakar',
      address: 'Boulevard du Président Habib Bourguiba, près du rond-point Jet d\'eau, juste à côté du terrain de football de Niary Tally',
      phones: ['+221 78 168 26 26', '+221 78 877 25 25', '+221 78 877 31 31'],
      mapLink: 'https://maps.google.com/?q=Boutique+REVOO+Bourguiba+Dakar',
      coordinates: { lat: 14.7167, lng: -17.4677 }
    },
    {
      id: 3,
      name: 'Boutique SMK',
      region: 'Dakar',
      address: 'Rond-point Case Ba, en face de la Banque SGBS',
      phones: ['+221 78 168 26 26', '+221 78 877 25 25', '+221 78 877 31 31'],
      mapLink: 'https://maps.google.com/?q=Boutique+SMK+Parcelles+Assainies+Dakar',
      coordinates: { lat: 14.7833, lng: -17.4167 }
    },
    {
      id: 4,
      name: 'Boutique KABIREX',
      region: 'Keur Massar',
      address: 'Juste à côté de la SEDIMA, près de la station Shell',
      phones: ['+221 78 168 26 26', '+221 78 877 25 25', '+221 78 877 31 31'],
      mapLink: 'https://maps.google.com/?q=Boutique+KABIREX+Keur+Massar',
      coordinates: { lat: 14.7833, lng: -17.3167 }
    },
    {
      id: 5,
      name: 'Boutique REVOO Pikine',
      region: 'Dakar',
      address: 'Près de Saf Bar',
      phones: ['+221 78 168 26 26', '+221 78 877 25 25', '+221 78 877 31 31'],
      mapLink: 'https://maps.google.com/?q=Boutique+REVOO+Pikine',
      coordinates: { lat: 14.7500, lng: -17.4000 }
    },
    {
      id: 6,
      name: 'Boutique SMK (SAMSUNG)',
      region: 'Dakar',
      address: 'Juste à côté du rond-point Liberté 6',
      phones: ['+221 78 477 82 58', '+221 77 571 61 23'],
      mapLink: 'https://maps.google.com/?q=Boutique+SMK+Liberté+6+Dakar',
      coordinates: { lat: 14.7167, lng: -17.4677 }
    },
    {
      id: 7,
      name: 'Boutique SMK',
      region: 'Thiès',
      address: 'Avenue Léopold Sédar Senghor, en face de l\'hôtel Big Faim',
      phones: ['+221 77 627 86 47', '+221 78 877 31 31'],
      mapLink: 'https://maps.google.com/?q=Boutique+SMK+Thiès',
      coordinates: { lat: 14.7886, lng: -16.9317 }
    },
    {
      id: 8,
      name: 'Boutique SMK',
      region: 'Saly',
      address: 'En face de la SONATEL',
      phones: ['+221 78 877 31 31'],
      mapLink: 'https://maps.google.com/?q=Boutique+SMK+Saly+Mbour',
      coordinates: { lat: 14.4500, lng: -16.9833 }
    },
    {
      id: 9,
      name: 'Boutique KABIREX',
      region: 'Kaolack',
      address: 'Juste à côté de la station Total Baba Gueye, sur la Route Nationale (ex Cinéma Vox)',
      phones: ['+221 78 877 31 31'],
      mapLink: 'https://maps.google.com/?q=Boutique+KABIREX+Kaolack',
      coordinates: { lat: 14.1500, lng: -16.0833 }
    }
  ];

  // Filtrer les produits par série
  const getProductsBySeries = (series) => {
    return motorcycleModels.filter(model => model.series === series);
  };

  const imagesPerSlide = window.innerWidth >= 1024 ? 3 : 1;

  const nextBike = useCallback(() => {
    if (currentIndex < bikes.length - imagesPerSlide) {
      setCurrentIndex(currentIndex + imagesPerSlide);
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex, imagesPerSlide, bikes.length]);

  const prevBike = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerSlide);
    } else {
      setCurrentIndex(bikes.length - imagesPerSlide);
    }
  }, [currentIndex, imagesPerSlide, bikes.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextBike();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextBike]);

  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  const performanceCards = [
    { src: 'performance1.png', title: 'Batterie Haute Performance', text: 'Haute densité énergetique, longue durée de vie, résistance aux hautes températures ' },
    { src: 'performance2.png', title: 'Moteurs polyvalents', text: 'Puissant, controle intelligent,durable et  robuste' },
    { src: 'performance3.png', title: 'Roues Performantes', text: 'Performance de freinage supérieures ' },
  ];

  const nextModel = () => {
    setCurrentModelIndex((prevIndex) => 
      prevIndex === motorcycleModels.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevModel = () => {
    setCurrentModelIndex((prevIndex) => 
      prevIndex === 0 ? motorcycleModels.length - 1 : prevIndex - 1
    );
  };

  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  // Filtrer les magasins par région
  const filteredStores = selectedRegion === 'all' 
    ? stores 
    : stores.filter(store => store.region === selectedRegion);

  // Obtenir les régions uniques
  const regions = ['all', ...new Set(stores.map(store => store.region))];

  // Scroll vers une section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Gestion du hover des dropdowns
  const handleDropdownEnter = (dropdownName) => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // Délai de 200ms avant de fermer
  };

  // Cleanup du timer au démontage
  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) {
        clearTimeout(dropdownTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="home-container">
      <section className="hero">
        <header className={`hero-header ${isSidebarOpen ? 'sidebar-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
          <div className="logo">
            <img src="logo1.png" alt="Logo Revoo" className="logo" />
          </div>
          <nav className="nav">
            {/* Dropdown Produits */}
            <div 
              className="dropdown"
              onMouseEnter={() => handleDropdownEnter('produits')}
              onMouseLeave={handleDropdownLeave}
            >
              <span className="nav-link dropdown-toggle">
                Produits <span className="arrow">▼</span>
              </span>
              
              <div 
                className={`dropdown-fullwidth ${activeDropdown === 'produits' ? 'dropdown-active' : ''}`}
                onMouseEnter={() => handleDropdownEnter('produits')}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="dropdown-content">
                  <div className="dropdown-tabs">
                    <a 
                      href="#a-series" 
                      className={`tab-link ${activeProductTab === 'a-series' ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveProductTab('a-series');
                      }}
                    >
                      A Series
                    </a>
                    <a 
                      href="#c-series" 
                      className={`tab-link ${activeProductTab === 'c-series' ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveProductTab('c-series');
                      }}
                    >
                      C Series
                    </a>
                    <a 
                      href="#e-series" 
                      className={`tab-link ${activeProductTab === 'e-series' ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveProductTab('e-series');
                      }}
                    >
                      E Series
                    </a>
                    <Link
                      to="/product-comparison" 
                      className="tab-link"
                      onClick={(e) => {
                        setActiveDropdown(null);
                      }}
                    >
                      Comparaison
                    </Link>
                  </div>
                  <div className="dropdown-products">
                    {getProductsBySeries(activeProductTab).map((model) => (
                      <div key={model.id} className="product-item">
                        <img src={model.image} alt={model.name} />
                        <p>REVOO {model.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown À propos */}
            <div 
              className="dropdown"
              onMouseEnter={() => handleDropdownEnter('apropos')}
              onMouseLeave={handleDropdownLeave}
            >
              <span className="nav-link dropdown-toggle">
                À propos de nous <span className="arrow">▼</span>
              </span>
              
              <div 
                className={`dropdown-fullwidth ${activeDropdown === 'apropos' ? 'dropdown-active' : ''}`}
                onMouseEnter={() => handleDropdownEnter('apropos')}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="dropdown-content dropdown-about">
                  <div className="dropdown-about-left">
                    <img src="/about-office.png" alt="REVOO Office" className="about-image" />
                   
                  </div>
                  <div className="dropdown-about-right">
                    <div className="about-section">
                      <h3 className="about-section-title">About Us</h3>
                      <div className="about-links">
                        <Link 
                          to="/our-story" 
                          className="about-link"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="link-text">A propos de  REVOO</span>
                          <span className="link-arrow">→</span>
                        </Link>
                        <Link 
                          to="/our-mission" 
                          className="about-link"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="link-text">Notre Mission</span>
                          <span className="link-arrow">→</span>
                        </Link>
                       
                        <Link 
                          to="/our-values" 
                          className="about-link"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="link-text">Nos Valeurs</span>
                          <span className="link-arrow">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown Assistance - NOUVEAU STYLE */}
            <div 
              className="dropdown"
              onMouseEnter={() => handleDropdownEnter('assistance')}
              onMouseLeave={handleDropdownLeave}
            >
              <span className="nav-link dropdown-toggle">
                Assistance technique <span className="arrow">▼</span>
              </span>
              
              <div 
                className={`dropdown-fullwidth ${activeDropdown === 'assistance' ? 'dropdown-active' : ''}`}
                onMouseEnter={() => handleDropdownEnter('assistance')}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="dropdown-content dropdown-about">
                  <div className="dropdown-about-left">
                    <img src="/support-image.jpg" alt="REVOO Support" className="about-image" />
                  </div>
                  <div className="dropdown-about-right">
                    <div className="about-section">
                      <h3 className="about-section-title">Support</h3>
                      <div className="about-links">
                        <Link 
                          to="/faq" 
                          className="about-link"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="link-text">FAQ</span>
                          <span className="link-arrow">→</span>
                        </Link>
                        <Link 
                          to="/manuals" 
                          className="about-link"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="link-text">Manuels d'utilisation</span>
                          <span className="link-arrow">→</span>
                        </Link>
                        <Link 
                          to="/warranty" 
                          className="about-link"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="link-text">Garantie</span>
                          <span className="link-arrow">→</span>
                        </Link>
                        <a 
                          href="#contact" 
                          className="about-link"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(null);
                            scrollToSection('contact');
                          }}
                        >
                          <span className="link-text">Contacter le support</span>
                          <span className="link-arrow">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown Magasins - NOUVEAU STYLE */}
            <div 
              className="dropdown"
              onMouseEnter={() => handleDropdownEnter('magasins')}
              onMouseLeave={handleDropdownLeave}
            >
              <span className="nav-link dropdown-toggle">
                Trouver un magasin <span className="arrow">▼</span>
              </span>
              
              <div 
                className={`dropdown-fullwidth ${activeDropdown === 'magasins' ? 'dropdown-active' : ''}`}
                onMouseEnter={() => handleDropdownEnter('magasins')}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="dropdown-content dropdown-about">
                  <div className="dropdown-about-left">
                    <img src="/store-image.jpg" alt="REVOO Store" className="about-image" />
                  </div>
                  <div className="dropdown-about-right">
                    <div className="about-section">
                      <h3 className="about-section-title">Nos Magasins</h3>
                      <div className="about-links">
                        {regions.filter(r => r !== 'all').map((region) => (
                          <a 
                            key={region}
                            href="#store-locator" 
                            className="about-link"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveDropdown(null);
                              setSelectedRegion(region);
                              scrollToSection('store-locator');
                            }}
                          >
                            <span className="link-text">Magasins à {region}</span>
                            <span className="link-arrow">→</span>
                          </a>
                        ))}
                        <a 
                          href="#store-locator" 
                          className="about-link"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(null);
                            setSelectedRegion('all');
                            scrollToSection('store-locator');
                          }}
                        >
                          <span className="link-text">Tous nos revendeurs</span>
                          <span className="link-arrow">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          
          <button 
            className="hamburger" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </header>

        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <nav className="sidebar-nav">
            {/* Produit avec sous-menu */}
            <div 
              className={`sidebar-item ${openSubmenu === 'produit' ? 'active' : ''}`}
              onClick={() => toggleSubmenu('produit')}
            >
              <span>Produit</span>
              <span className="arrow">›</span>
            </div>
            
            {openSubmenu === 'produit' && (
              <div className="sidebar-submenu">
                <a href="#a-series" onClick={() => {
                  setActiveProductTab('a-series');
                  setIsSidebarOpen(false);
                }}>A Series</a>
                <a href="#c-series" onClick={() => {
                  setActiveProductTab('c-series');
                  setIsSidebarOpen(false);
                }}>C Series</a>
                <a href="#e-series" onClick={() => {
                  setActiveProductTab('e-series');
                  setIsSidebarOpen(false);
                }}>E Series</a>
                <Link to="/product-comparison" onClick={() => setIsSidebarOpen(false)}>
                  Comparaison
                </Link>
              </div>
            )}

            {/* Autres liens simples */}
            <div 
              className={`sidebar-item ${openSubmenu === 'about' ? 'active' : ''}`}
              onClick={() => toggleSubmenu('about')}
            >
              <span>À propos de nous</span>
              <span className="arrow">›</span>
            </div>
            
            {openSubmenu === 'about' && (
              <div className="sidebar-submenu">
                <Link to="/our-story" onClick={() => setIsSidebarOpen(false)}>
                  Notre Histoire
                </Link>
                <Link to="/our-mission" onClick={() => setIsSidebarOpen(false)}>
                  Notre Mission
                </Link>
                <Link to="/our-team" onClick={() => setIsSidebarOpen(false)}>
                  Notre Équipe
                </Link>
                <Link to="/our-values" onClick={() => setIsSidebarOpen(false)}>
                  Nos Valeurs
                </Link>
              </div>
            )}

            <div 
              className={`sidebar-item ${openSubmenu === 'support' ? 'active' : ''}`}
              onClick={() => toggleSubmenu('support')}
            >
              <span>Assistance technique</span>
              <span className="arrow">›</span>
            </div>
            
            {openSubmenu === 'support' && (
              <div className="sidebar-submenu">
                <Link to="/faq" onClick={() => setIsSidebarOpen(false)}>
                  FAQ
                </Link>
                <Link to="/manuals" onClick={() => setIsSidebarOpen(false)}>
                  Manuels
                </Link>
                <Link to="/warranty" onClick={() => setIsSidebarOpen(false)}>
                  Garantie
                </Link>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault();
                  setIsSidebarOpen(false);
                  scrollToSection('contact');
                }}>
                  Contact Support
                </a>
              </div>
            )}

            <a 
              href="#store-locator" 
              className="sidebar-item"
              onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(false);
                scrollToSection('store-locator');
              }}
            >
              Trouver un magasin <span className="arrow">›</span>
            </a>

            <a 
              href="#contact" 
              className="sidebar-item"
              onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(false);
                scrollToSection('contact');
              }}
            >
              Contact <span className="arrow">›</span>
            </a>
          </nav>

          {/* Footer de la sidebar */}
          <div className="sidebar-footer">
            <p>REVOO s'engage à vous offrir l'expérience de moto électrique la plus avant-gardiste.</p>
            <p>+221 78 168 26 26</p>
            
            <div className="social-icons">
              <a href="https://wa.me/221781682626" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#linkedin" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#tiktok" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

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
            style={{ transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)` }}
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

      <section className="models-showcase-section">
        {/* Titre de la section */}
        <div className="section-header">
          <h2 className="section-title">
            Explore <span className="highlight-text">REVOO</span> Products
          </h2>
        </div>
        <div className="models-showcase-container">
          {/* Aperçu moto précédente (desktop uniquement) */}
          {currentModelIndex > 0 && (
            <div className="preview-bike prev-preview">
              <img 
                src={motorcycleModels[currentModelIndex - 1].image} 
                alt={motorcycleModels[currentModelIndex - 1].name}
              />
            </div>
          )}

          <button 
            className="model-nav-btn prev-model" 
            onClick={prevModel}
            aria-label="Modèle précédent"
          >
            <FaArrowLeft />
          </button>

          <div className="model-display">
            <div 
              className="model-content"
              style={{ backgroundColor: motorcycleModels[currentModelIndex].backgroundColor }}
            >
              {/* Logo REVOO en arrière-plan */}
              <div className="brand-watermark">REVOO</div>

              <div className="model-info">
                <h2 className="model-name">{motorcycleModels[currentModelIndex].name}</h2>
                <p className="model-tagline">{motorcycleModels[currentModelIndex].tagline}</p>
              </div>
              
              <div className="model-image-wrapper">
                <img 
                  src={motorcycleModels[currentModelIndex].image} 
                  alt={motorcycleModels[currentModelIndex].name}
                  className="model-showcase-image"
                />
              </div>

              {/* Spécifications de la moto */}
              <div className="model-specs">
                <div className="spec-item">
                  <div className="spec-icon">⚡</div>
                  <div className="spec-label">Top Speed</div>
                  <div className="spec-value">{motorcycleModels[currentModelIndex].specs.topSpeed}</div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">🔋</div>
                  <div className="spec-label">Range</div>
                  <div className="spec-value">{motorcycleModels[currentModelIndex].specs.range}</div>
                </div>
                <div className="spec-item">
                  <div className="spec-icon">🔌</div>
                  <div className="spec-label">Capacity</div>
                  <div className="spec-value">{motorcycleModels[currentModelIndex].specs.capacity}</div>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="model-actions">
                <button className="action-btn comparison-btn">
                  Comparison →
                </button>
                <button className="action-btn learn-more-btn">
                  Learn More →
                </button>
              </div>

              {/* Indicateurs de position */}
              <div className="model-indicators">
                {motorcycleModels.map((_, index) => (
                  <span 
                    key={index}
                    className={`indicator ${index === currentModelIndex ? 'active' : ''}`}
                    onClick={() => setCurrentModelIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <button 
            className="model-nav-btn next-model" 
            onClick={nextModel}
            aria-label="Modèle suivant"
          >
            <FaArrowRight />
          </button>

          {/* Aperçu moto suivante (desktop uniquement) */}
          {currentModelIndex < motorcycleModels.length - 1 && (
            <div className="preview-bike next-preview">
              <img 
                src={motorcycleModels[currentModelIndex + 1].image} 
                alt={motorcycleModels[currentModelIndex + 1].name}
              />
            </div>
          )}
        </div>
      </section>

      <section className="performance-section">
        <h2>Performance</h2>
        <div className="performance-cards">
          {performanceCards.map((card, index) => (
            <div
              key={index}
              className={`performance-card ${activeCard === index ? 'active' : ''}`}
              ref={(el) => (performanceCardsRef.current[index] = el)}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <img src={card.src} alt={card.title} className="performance-image" />
              <div className="card-text">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Pourquoi REVOO */}
      <section className="why-revoo-section">
        <div className="why-revoo-container">
          <div className="why-revoo-header">
            <h2 className="why-revoo-title">
              Pourquoi choisir <span className="highlight-revoo">REVOO</span> ?
            </h2>
            <p className="why-revoo-subtitle">
              L'avenir de la mobilité urbaine commence ici
            </p>
          </div>

          <div className="why-revoo-grid">
            {/* Card 1 - Écologique */}
            <div className="why-card">
              <div className="why-card-icon">
                <FaLeaf className="icon-svg" />
              </div>
              <h3 className="why-card-title">100% Écologique</h3>
              <p className="why-card-text">
                Zéro émission de CO₂. Contribuez à un environnement plus propre 
                et respirez un air plus sain dans votre ville.
              </p>
            </div>

            {/* Card 2 - Économique */}
            <div className="why-card">
              <div className="why-card-icon">
                <FaCoins className="icon-svg" />
              </div>
              <h3 className="why-card-title">Économies Maximales</h3>
              <p className="why-card-text">
                Réduisez vos dépenses de 90% par rapport à l'essence. 
                Rechargez pour quelques francs seulement.
              </p>
            </div>

            {/* Card 3 - Silencieux */}
            <div className="why-card">
              <div className="why-card-icon">
                <FaVolumeMute className="icon-svg" />
              </div>
              <h3 className="why-card-title">Silence & Confort</h3>
              <p className="why-card-text">
                Moteur ultra-silencieux pour une conduite zen. 
                Profitez de chaque trajet sans bruit ni vibrations.
              </p>
            </div>

            {/* Card 4 - Maintenance */}
            <div className="why-card">
              <div className="why-card-icon">
                <FaTools className="icon-svg" />
              </div>
              <h3 className="why-card-title">Maintenance Réduite</h3>
              <p className="why-card-text">
                Moins de pièces mécaniques = moins de pannes. 
                Oubliez les vidanges et les réparations coûteuses.
              </p>
            </div>

            {/* Card 5 - Performance */}
            <div className="why-card">
              <div className="why-card-icon">
                <FaBolt className="icon-svg" />
              </div>
              <h3 className="why-card-title">Performance Instantanée</h3>
              <p className="why-card-text">
                Accélération immédiate grâce au couple moteur électrique. 
                Dépassez en toute sécurité dès le premier tour de poignée.
              </p>
            </div>

            {/* Card 6 - Technologie */}
            <div className="why-card">
              <div className="why-card-icon">
                <FaMobileAlt className="icon-svg" />
              </div>
              <h3 className="why-card-title">Technologie Avancée</h3>
              <p className="why-card-text">
                Connectivité Bluetooth, écran digital, GPS intégré. 
                Votre moto est aussi smart que votre smartphone.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="why-revoo-cta">
            <button 
              className="cta-button"
              onClick={() => {
                const element = document.querySelector('.models-showcase-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Découvrir tous nos modèles
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">
              Trusted by <span className="highlight-revoo">REVOO</span> <span className="testimonials-subtitle">Riders Everywhere</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            {/* Témoignage 1 */}
            <div className="testimonial-card">
              <div className="testimonial-image-wrapper">
                <img src="ya.png" alt="Hira Shah" className="testimonial-image" />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-author">
                  <img src="yap.jpeg" alt="Hira Shah" className="author-avatar" />
                  <div className="author-info">
                    <h4 className="author-name">YAYa</h4>
                    <span className="country-flag"></span>
                  </div>
                </div>
                <p className="testimonial-text">
                  I use my Revoo A12 to go to school and back home everyday. It's very comfortable and smooth to ride, even in traffic. I don't have to worry about petrol anymore, which saves me money every month. It charges fast and the battery lasts me 2-3 days easily. It's also very quiet, so I enjoy the ride more. It fits my needs perfectly!
                </p>
              </div>
            </div>

            {/* Témoignage 2 */}
            <div className="testimonial-card">
              <div className="testimonial-image-wrapper">
                <img src="ma.png" alt="Usman" className="testimonial-image" />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-author">
                  <img src="map.jpeg" alt="Usman" className="author-avatar" />
                  <div className="author-info">
                    <h4 className="author-name">MANIANG</h4>
                    <span className="country-flag"></span>
                  </div>
                </div>
                <p className="testimonial-text">
                  I have always been into heavy bikes, but I wanted something smarter, cooler and more futuristic. That's when I found the REVOO E52. This thing isn't just a bike, it's a machine. Feels like a big boy toy bold design, powerful acceleration and turns heads everywhere I go. Plus, it's eco-friendly which is a bonus. Best decision ever!
                </p>
              </div>
            </div>

            {/* Témoignage 3 */}
            <div className="testimonial-card">
              <div className="testimonial-image-wrapper">
                <img src="ba.png" alt="Saad" className="testimonial-image" />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-author">
                  <img src="bap.jpeg" alt="Saad" className="author-avatar" />
                  <div className="author-info">
                    <h4 className="author-name">BASS</h4>
                    <span className="country-flag"></span>
                  </div>
                </div>
                <p className="testimonial-text">
                  I used to take local transport every day, ride hailing apps whatever was cheap but stressful, time-consuming, and honestly not secure. One day I got late to an important interview because of traffic and delays that's when I decided I needed my own ride. I couldn't afford a car, and petrol bikes had their own maintenance costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOUVELLE SECTION - Trouver un magasin */}
      <section id="store-locator" className="store-locator-section">
        <div className="store-locator-container">
          <div className="store-locator-header">
            <h2 className="store-locator-title">
              Trouvez votre <span className="highlight-revoo">REVOO</span> le plus proche
            </h2>
            <p className="store-locator-subtitle">
              Visitez l'un de nos magasins pour découvrir nos motos électriques
            </p>
          </div>

          {/* Filtres par région */}
          <div className="region-filters">
            {regions.map((region) => (
              <button
                key={region}
                className={`region-filter-btn ${selectedRegion === region ? 'active' : ''}`}
                onClick={() => setSelectedRegion(region)}
              >
                {region === 'all' ? 'Toutes les régions' : region}
              </button>
            ))}
          </div>

          {/* Grille des magasins */}
          <div className="stores-grid">
            {filteredStores.map((store) => (
              <div 
                key={store.id} 
                className={`store-card ${hoveredStore === store.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredStore(store.id)}
                onMouseLeave={() => setHoveredStore(null)}
              >
                <div className="store-card-header">
                  <div className="store-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="store-region-badge">{store.region}</div>
                </div>

                <h3 className="store-name">{store.name}</h3>
                <p className="store-address">
                  <FaMapMarkerAlt className="address-icon" />
                  {store.address}
                </p>

                <div className="store-contact">
                  <div className="store-phones">
                    <FaPhone className="phone-icon" />
                    <div className="phone-numbers">
                      {store.phones.map((phone, index) => (
                        <a key={index} href={`tel:${phone}`} className="phone-link">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="store-actions">
                  <a 
                    href={store.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="store-map-btn"
                  >
                    <FaMapMarkerAlt />
                    Voir sur la carte
                  </a>
                  <a 
                    href={`https://wa.me/${store.phones[0].replace(/\s/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="store-whatsapp-btn"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOUVELLE SECTION - Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">
              Contactez <span className="highlight-revoo">REVOO</span>
            </h2>
            <p className="contact-subtitle">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>

          <div className="contact-content">
            {/* Informations de contact */}
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <FaPhone />
                </div>
                <h3>Téléphone</h3>
                <div className="contact-details">
                  <a href="tel:+221781682626">+221 78 168 26 26</a>
                  <a href="tel:+221788772525">+221 78 877 25 25</a>
                  <a href="tel:+221788773131">+221 78 877 31 31</a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <FaEnvelope />
                </div>
                <h3>Email</h3>
                <div className="contact-details">
                  <a href="mailto:contact@revoo.sn">contact@revoo.sn</a>
                  <a href="mailto:support@revoo.sn">support@revoo.sn</a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3>Adresse principale</h3>
                <div className="contact-details">
                  <p>Avenue Blaise Diagne</p>
                  <p>Médina, Dakar</p>
                  <p>Sénégal</p>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Votre nom"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Téléphone *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    placeholder="+221 XX XXX XX XX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select id="subject" name="subject">
                    <option value="">Sélectionnez un sujet</option>
                    <option value="info">Demande d'information</option>
                    <option value="test">Essai de moto</option>
                    <option value="achat">Achat</option>
                    <option value="sav">Service après-vente</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    required 
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Envoyer le message
                  <span className="submit-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;