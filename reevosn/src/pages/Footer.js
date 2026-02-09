import React from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaHeart,
  FaCode
} from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
    

      {/* Section principale du footer */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Colonne 1 - À propos */}
            <div className="footer-column">
              <div className="footer-logo">
                <img src="logo1.png" alt="REVOO Logo" />
              </div>
              <p className="footer-description">
                REVOO révolutionne la mobilité urbaine au Sénégal avec des motos électriques performantes, 
                écologiques et économiques. Rejoignez la révolution électrique !
              </p>
              <div className="footer-contact-info">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <a href="tel:+221781682626">+221 78 168 26 26</a>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:contact@revoo.sn">contact@revoo.sn</a>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Médina, Dakar, Sénégal</span>
                </div>
              </div>
            </div>

            {/* Colonne 2 - Produits */}
            <div className="footer-column">
              <h4 className="footer-title">Nos Produits</h4>
              <ul className="footer-links">
                <li><a href="#a-series">A Series</a></li>
                <li><a href="#c-series">C Series</a></li>
                <li><a href="#e-series">E Series</a></li>
                <li><a href="#comparison">Comparaison</a></li>
                <li><a href="#accessories">Accessoires</a></li>
              </ul>
            </div>

            {/* Colonne 3 - Services */}
            <div className="footer-column">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                <li><a href="#test-ride">Essai gratuit</a></li>
                <li><a href="#warranty">Garantie</a></li>
                <li><a href="#maintenance">Maintenance</a></li>
                <li><a href="#insurance">Assurance</a></li>
                <li><a href="#spare-parts">Pièces détachées</a></li>
                <li><a href="#technical-support">Support technique</a></li>
              </ul>
            </div>

            {/* Colonne 4 - À propos */}
            <div className="footer-column">
              <h4 className="footer-title">À propos</h4>
              <ul className="footer-links">
                <li><a href="#about">Notre Histoire</a></li>
                <li><a href="#mission">Notre Mission</a></li>
                
              </ul>
            </div>

            {/* Colonne 5 - Aide */}
            <div className="footer-column">
              <h4 className="footer-title">Aide & Support</h4>
              <ul className="footer-links">
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#store-locator">Trouver un magasin</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section Réseaux sociaux */}
      <div className="footer-social-section">
        <div className="footer-container">
          <div className="social-content">
            <h4 className="social-title">Suivez-nous</h4>
            <p className="social-subtitle">Rejoignez notre communauté sur les réseaux sociaux</p>
            <div className="social-links">
              <a 
                href="https://www.facebook.com/revoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link facebook"
                aria-label="Facebook"
              >
                <FaFacebookF />
                <span className="social-name">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/revoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
                <span className="social-name">Instagram</span>
              </a>
              <a 
                href="https://www.tiktok.com/@revoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link tiktok"
                aria-label="TikTok"
              >
                <FaTiktok />
                <span className="social-name">TikTok</span>
              </a>
              <a 
                href="https://twitter.com/revoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link twitter"
                aria-label="Twitter"
              >
                <FaTwitter />
                <span className="social-name">Twitter</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/revoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
                <span className="social-name">LinkedIn</span>
              </a>
              <a 
                href="https://www.youtube.com/@revoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link youtube"
                aria-label="YouTube"
              >
                <FaYoutube />
                <span className="social-name">YouTube</span>
              </a>
              <a 
                href="https://wa.me/221781682626" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
                <span className="social-name">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      

      {/* Bottom bar - Copyright et développeur */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} <strong>REVOO</strong>. Tous droits réservés. 
                <span className="separator">|</span>
                La révolution électrique au Sénégal
              </p>
            </div>
            
            <div className="developer-credit">
              <p>
                Développé avec <FaHeart className="heart-icon" /> par 
                <a 
                  href="https://magnsdev.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="developer-link"
                >
                  <FaCode className="code-icon" />
                  <strong>MANIANG DIENG</strong>
                </a>
              </p>
            </div>

            <div className="footer-legal-links">
              <a href="#privacy">Confidentialité</a>
              <span className="separator">•</span>
              <a href="#terms">Conditions</a>
              <span className="separator">•</span>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton scroll to top */}
      <button 
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Retour en haut"
      >
        <FaArrowRight className="scroll-icon" />
      </button>
    </footer>
  );
};

export default Footer;