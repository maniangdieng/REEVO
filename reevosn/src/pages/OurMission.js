import React from 'react';
import '../styles/OurMission.css';
import { FaArrowLeft, FaLeaf, FaBolt, FaGlobeAfrica, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OurMission = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <div className="about-header">
        <Link to="/" className="back-button">
          <FaArrowLeft /> Retour
        </Link>
        <h1 className="about-title">
          Notre <span className="highlight">Mission</span>
        </h1>
        <p className="about-subtitle">
          Transformer la mobilité urbaine africaine pour un avenir durable
        </p>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-image-container">
          <img src="/mission-hero.jpg" alt="REVOO Mission" className="hero-image" />
          <div className="hero-overlay">
            <h2>Rendre la mobilité électrique accessible à tous les Africains</h2>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mission-statement">
        <div className="statement-content">
          <h2 className="section-title">Notre Raison d'Être</h2>
          <p className="mission-text">
            REVOO est né d'une conviction profonde : <strong>l'Afrique mérite une mobilité propre, 
            efficace et accessible</strong>. Chaque jour, des millions de personnes respirent un air 
            pollué par les véhicules thermiques. Chaque jour, des familles dépensent une part 
            considérable de leurs revenus en carburant. Nous croyons qu'il existe une meilleure 
            solution.
          </p>
          <p className="mission-text">
            Notre mission est simple mais ambitieuse : <strong>démocratiser la mobilité électrique 
            en Afrique de l'Ouest</strong> en proposant des solutions adaptées aux réalités locales, 
            économiquement viables et respectueuses de l'environnement.
          </p>
        </div>
      </div>

      {/* 4 Pillars */}
      <div className="pillars-section">
        <h2 className="section-title">Nos 4 Piliers Stratégiques</h2>
        
        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon green">
              <FaLeaf />
            </div>
            <h3>Environnement</h3>
            <p>
              Réduire l'empreinte carbone des transports urbains en proposant des alternatives 
              100% électriques. Notre objectif : <strong>éviter l'émission de 100 000 tonnes 
              de CO₂ d'ici 2027</strong>.
            </p>
            <ul className="pillar-list">
              <li>Zéro émission directe de gaz à effet de serre</li>
              <li>Programme de recyclage des batteries</li>
              <li>Partenariats avec des producteurs d'énergie verte</li>
              <li>Sensibilisation à la mobilité durable</li>
            </ul>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon blue">
              <FaBolt />
            </div>
            <h3>Économie</h3>
            <p>
              Offrir des solutions économiquement viables qui permettent à nos clients 
              d'économiser jusqu'à <strong>90% sur leurs frais de carburant</strong>.
            </p>
            <ul className="pillar-list">
              <li>Coût d'utilisation 10x inférieur à l'essence</li>
              <li>Entretien minimal et économique</li>
              <li>Solutions de financement accessibles</li>
              <li>Création d'emplois locaux (vente, maintenance)</li>
            </ul>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon orange">
              <FaGlobeAfrica />
            </div>
            <h3>Adaptation Locale</h3>
            <p>
              Concevoir des produits spécifiquement adaptés aux conditions africaines : 
              chaleur, routes difficiles, infrastructures limitées.
            </p>
            <ul className="pillar-list">
              <li>Batteries résistantes aux températures élevées</li>
              <li>Suspensions renforcées pour routes dégradées</li>
              <li>Autonomie adaptée aux distances urbaines</li>
              <li>Maintenance simple et pièces disponibles localement</li>
            </ul>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon purple">
              <FaUsers />
            </div>
            <h3>Accessibilité</h3>
            <p>
              Rendre la mobilité électrique accessible au plus grand nombre grâce à 
              des prix compétitifs et des solutions de financement.
            </p>
            <ul className="pillar-list">
              <li>Gamme de produits pour tous les budgets</li>
              <li>Paiement en plusieurs fois</li>
              <li>Programme de reprise ancien véhicule</li>
              <li>Réseau de distribution étendu</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Impact Goals */}
      <div className="impact-section">
        <h2 className="section-title">Nos Objectifs d'Impact 2025-2030</h2>
        
        <div className="impact-grid">
          <div className="impact-card">
            <div className="impact-number">50 000</div>
            <div className="impact-label">Motos électriques en circulation</div>
            <div className="impact-desc">
              Remplacer 50 000 motos à essence par des motos électriques REVOO
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-number">100K t</div>
            <div className="impact-label">CO₂ évité</div>
            <div className="impact-desc">
              Éviter l'émission de 100 000 tonnes de CO₂ dans l'atmosphère
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-number">5M L</div>
            <div className="impact-label">Essence économisée</div>
            <div className="impact-desc">
              Économiser 5 millions de litres d'essence par an
            </div>
          </div>

          <div className="impact-card">
            <div className="impact-number">2 000</div>
            <div className="impact-label">Emplois créés</div>
            <div className="impact-desc">
              Créer 2 000 emplois directs et indirects dans la filière électrique
            </div>
          </div>
        </div>
      </div>

      {/* Vision Future */}
      <div className="vision-section">
        <div className="vision-content">
          <h2 className="section-title">Notre Vision pour l'Afrique</h2>
          
          <div className="vision-grid">
            <div className="vision-item">
              <h3>🌍 Expansion Régionale</h3>
              <p>
                Étendre notre présence dans toute l'Afrique de l'Ouest d'ici 2027. 
                Objectif : être présents au Mali, en Guinée, en Côte d'Ivoire, au Bénin 
                et au Burkina Faso.
              </p>
            </div>

            <div className="vision-item">
              <h3>🔋 Infrastructure de Recharge</h3>
              <p>
                Développer un réseau de 500 bornes de recharge rapide dans les grandes 
                villes de la sous-région pour faciliter l'adoption massive.
              </p>
            </div>

            <div className="vision-item">
              <h3>🏭 Production Locale</h3>
              <p>
                Lancer notre première usine d'assemblage en Afrique de l'Ouest d'ici 2028, 
                créant ainsi des emplois et réduisant notre empreinte carbone liée au transport.
              </p>
            </div>

            <div className="vision-item">
              <h3>🎓 Formation et Éducation</h3>
              <p>
                Former 5 000 techniciens spécialisés en mobilité électrique à travers 
                notre académie REVOO pour soutenir la croissance du secteur.
              </p>
            </div>

            <div className="vision-item">
              <h3>♻️ Économie Circulaire</h3>
              <p>
                Mettre en place une filière complète de recyclage des batteries en 
                partenariat avec des acteurs locaux et internationaux.
              </p>
            </div>

            <div className="vision-item">
              <h3>🤝 Partenariats Stratégiques</h3>
              <p>
                Collaborer avec les gouvernements, les entreprises et les ONG pour 
                accélérer la transition vers une mobilité durable en Afrique.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Commitments */}
      <div className="commitments-section">
        <h2 className="section-title">Nos Engagements</h2>
        
        <div className="commitments-list">
          <div className="commitment-item">
            <div className="commitment-icon">✅</div>
            <div className="commitment-content">
              <h3>Transparence Totale</h3>
              <p>
                Publication annuelle de notre rapport d'impact environnemental et social, 
                accessible à tous nos clients et partenaires.
              </p>
            </div>
          </div>

          <div className="commitment-item">
            <div className="commitment-icon">✅</div>
            <div className="commitment-content">
              <h3>Qualité Irréprochable</h3>
              <p>
                Garantie étendue sur tous nos produits et service après-vente de 
                qualité supérieure avec des techniciens formés et certifiés.
              </p>
            </div>
          </div>

          <div className="commitment-item">
            <div className="commitment-icon">✅</div>
            <div className="commitment-content">
              <h3>Innovation Continue</h3>
              <p>
                Investissement de 15% de notre chiffre d'affaires en R&D pour 
                développer des solutions toujours plus performantes et adaptées.
              </p>
            </div>
          </div>

          <div className="commitment-item">
            <div className="commitment-icon">✅</div>
            <div className="commitment-content">
              <h3>Responsabilité Sociale</h3>
              <p>
                Programme d'électrification de 100 écoles et centres de santé 
                ruraux d'ici 2030, alimentés par énergie solaire.
              </p>
            </div>
          </div>

          <div className="commitment-item">
            <div className="commitment-icon">✅</div>
            <div className="commitment-content">
              <h3>Égalité et Inclusion</h3>
              <p>
                Au moins 40% de femmes dans nos équipes et promotion de 
                l'entrepreneuriat féminin dans la mobilité électrique.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Rejoignez Notre Mission</h2>
        <p>Ensemble, construisons l'avenir de la mobilité en Afrique</p>
        <div className="cta-buttons">
          <Link to="/products" className="cta-btn primary">
            Découvrir nos solutions
          </Link>
          <Link to="/contact" className="cta-btn secondary">
            Devenir partenaire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurMission;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              