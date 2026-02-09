import React, { useState } from 'react';
import '../styles/FAQ.css';
import { FaChevronDown, FaArrowLeft, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqData = [
    {
      category: 'Achat',
      questions: [
        {
          question: "Quels sont les modes de paiement acceptés ?",
          answer: "Nous acceptons les paiements en espèces, par virement bancaire, Mobile Money (Orange Money, Wave, Free Money), et nous proposons également des solutions de financement avec paiement en plusieurs fois."
        },
        {
          question: "Proposez-vous des facilités de paiement ?",
          answer: "Oui ! Nous travaillons avec plusieurs partenaires financiers pour vous proposer des solutions de financement adaptées. Vous pouvez payer en 3, 6 ou 12 mensualités selon votre profil. Contactez-nous pour plus d'informations."
        },
        {
          question: "Quelle est la garantie sur les motos électriques REVOO ?",
          answer: "Toutes nos motos bénéficient d'une garantie de 2 ans sur le moteur et l'électronique, et 1 an sur la batterie. La garantie C32 PRO est étendue à 3 ans. Les conditions détaillées sont disponibles dans votre contrat de vente."
        },
        {
          question: "Puis-je essayer la moto avant l'achat ?",
          answer: "Absolument ! Nous encourageons tous nos clients à essayer nos modèles avant l'achat. Prenez rendez-vous dans l'un de nos magasins ou contactez-nous pour organiser un essai routier."
        }
      ]
    },
    {
      category: 'Batterie',
      questions: [
        {
          question: "Quelle est l'autonomie réelle des motos REVOO ?",
          answer: "L'autonomie varie selon le modèle et les conditions d'utilisation. En moyenne : A12/A12 LFP : 80-115 km, A11 LFP : 90-120 km, E52 : 100-130 km, C32 : 110-140 km, C32 PRO : 120-150 km. Ces chiffres peuvent varier selon le poids du conducteur, le style de conduite, le terrain et les conditions météo."
        },
        {
          question: "Combien de temps faut-il pour recharger la batterie ?",
          answer: "Le temps de charge complet varie de 6 à 9 heures selon le modèle. Vous pouvez effectuer des charges partielles pour des trajets courts. Nous recommandons de charger la nuit à domicile pour avoir une batterie pleine chaque matin."
        },
        {
          question: "Quelle est la durée de vie de la batterie ?",
          answer: "Nos batteries sont conçues pour durer 1000 à 1500 cycles de charge complète, soit environ 4 à 6 ans d'utilisation normale. Les batteries LFP (Lithium Fer Phosphate) sur les modèles A11 LFP et A12 LFP offrent une durée de vie encore supérieure."
        },
        {
          question: "Puis-je remplacer la batterie moi-même ?",
          answer: "Certains modèles disposent de batteries amovibles que vous pouvez retirer pour les recharger chez vous. Cependant, pour le remplacement complet de la batterie, nous recommandons de passer par nos techniciens agréés pour garantir la sécurité et la performance."
        },
        {
          question: "Combien coûte le remplacement d'une batterie ?",
          answer: "Le coût varie selon le modèle, entre 350 000 et 600 000 FCFA. Nos batteries sont garanties 1 an, et nous proposons des programmes de reprise pour faciliter le renouvellement."
        }
      ]
    },
    {
      category: 'Entretien',
      questions: [
        {
          question: "Quel entretien nécessite une moto électrique REVOO ?",
          answer: "L'entretien d'une moto électrique est minimal comparé à une moto thermique : pas de vidange d'huile, pas de changement de filtre à air, pas de bougies. Il faut vérifier régulièrement les freins, les pneus, et faire un contrôle électronique annuel dans nos centres agréés."
        },
        {
          question: "À quelle fréquence dois-je faire réviser ma moto ?",
          answer: "Nous recommandons une révision tous les 6 mois ou tous les 3000 km. La première révision est offerte après 1 mois ou 500 km d'utilisation."
        },
        {
          question: "Où puis-je faire entretenir ma moto REVOO ?",
          answer: "Vous pouvez faire entretenir votre moto dans tous nos centres agréés (voir la section 'Trouver un magasin'). Nos techniciens sont formés spécifiquement sur nos modèles."
        },
        {
          question: "Quel est le coût d'entretien annuel ?",
          answer: "L'entretien annuel d'une moto électrique REVOO coûte environ 50 000 à 80 000 FCFA, soit 70% moins cher qu'une moto à essence équivalente."
        }
      ]
    },
    {
      category: 'Utilisation',
      questions: [
        {
          question: "Puis-je rouler sous la pluie avec une moto REVOO ?",
          answer: "Oui, nos motos sont conçues avec un indice de protection IP67, ce qui signifie qu'elles résistent à la pluie et aux projections d'eau. Évitez cependant de les immerger complètement dans l'eau."
        },
        {
          question: "Ai-je besoin d'un permis de conduire ?",
          answer: "Oui, conformément à la réglementation sénégalaise, vous devez posséder un permis de conduire catégorie A pour conduire nos motos électriques."
        },
        {
          question: "Quelle est la vitesse maximale ?",
          answer: "La vitesse maximale varie selon les modèles : A12/A12 LFP : 55 km/h, A11 LFP : 60 km/h, E52 : 70 km/h, C32 : 75 km/h, C32 PRO : 80 km/h."
        },
        {
          question: "Puis-je transporter un passager ?",
          answer: "Oui, toutes nos motos sont homologuées pour le transport d'un passager. Assurez-vous que le poids total (conducteur + passager + bagages) ne dépasse pas 150 kg."
        },
        {
          question: "Comment fonctionne le système de freinage ?",
          answer: "Nos motos sont équipées de freins à disque avant et arrière. Les modèles haut de gamme (E52, C32 PRO) disposent de freins hydrauliques pour une meilleure efficacité. Le C32 PRO intègre également un système ABS."
        }
      ]
    },
    {
      category: 'Technique',
      questions: [
        {
          question: "Quelle est la puissance du moteur ?",
          answer: "Nos moteurs varient de 1200W (A12) à 2500W (C32 PRO), offrant un couple instantané et une accélération progressive."
        },
        {
          question: "Les motos REVOO sont-elles connectées ?",
          answer: "Oui, la plupart de nos modèles disposent de la connectivité Bluetooth et certains (A11 LFP, E52, C32, C32 PRO) intègrent un GPS. Vous pouvez suivre votre moto via application mobile."
        },
        {
          question: "Y a-t-il un système antivol ?",
          answer: "Toutes nos motos sont équipées d'une alarme antivol. Les modèles connectés permettent également un suivi GPS en temps réel et un verrouillage à distance via l'application."
        },
        {
          question: "Puis-je charger mon téléphone sur la moto ?",
          answer: "Oui, toutes nos motos disposent d'un port USB pour recharger vos appareils en roulant."
        }
      ]
    },
    {
      category: 'Environnement',
      questions: [
        {
          question: "Combien d'économies puis-je réaliser par rapport à une moto à essence ?",
          answer: "En moyenne, vous économisez 90% sur les frais de carburant. Pour 100 km, une moto électrique coûte environ 500 FCFA en électricité contre 5000 FCFA d'essence pour une moto thermique."
        },
        {
          question: "Que devient la batterie en fin de vie ?",
          answer: "Nous avons mis en place un programme de recyclage des batteries. Nous reprenons vos anciennes batteries et les envoyons vers des centres de recyclage spécialisés. De plus, nous offrons une remise sur l'achat d'une batterie neuve lors du retour de l'ancienne."
        },
        {
          question: "Quelle est l'empreinte carbone d'une moto REVOO ?",
          answer: "Même en tenant compte de la production d'électricité, une moto électrique émet 60% moins de CO₂ qu'une moto thermique sur l'ensemble de son cycle de vie."
        }
      ]
    }
  ];

  const categories = ['all', ...new Set(faqData.map(cat => cat.category))];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Filtrer les questions
  const getFilteredQuestions = () => {
    let allQuestions = [];
    
    faqData.forEach((category, catIndex) => {
      if (selectedCategory === 'all' || selectedCategory === category.category) {
        category.questions.forEach((q, qIndex) => {
          allQuestions.push({
            ...q,
            category: category.category,
            index: `${catIndex}-${qIndex}`
          });
        });
      }
    });

    if (searchTerm) {
      allQuestions = allQuestions.filter(q =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return allQuestions;
  };

  const filteredQuestions = getFilteredQuestions();

  return (
    <div className="faq-page">
      {/* Header */}
      <div className="faq-header">
        <Link to="/" className="back-button">
          <FaArrowLeft /> Retour
        </Link>
        <h1 className="faq-title">
          Questions <span className="highlight">Fréquentes</span>
        </h1>
        <p className="faq-subtitle">
          Trouvez rapidement les réponses à vos questions
        </p>
      </div>

      {/* Barre de recherche */}
      <div className="search-section">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher une question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filtres par catégorie */}
      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === 'all' ? 'Toutes' : cat}
          </button>
        ))}
      </div>

      {/* Liste des questions */}
      <div className="faq-container">
        {filteredQuestions.length > 0 ? (
          <div className="faq-list">
            {filteredQuestions.map((item, index) => (
              <div
                key={item.index}
                className={`faq-item ${activeIndex === item.index ? 'active' : ''}`}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleQuestion(item.index)}
                >
                  <div className="question-content">
                    <span className="category-badge">{item.category}</span>
                    <h3>{item.question}</h3>
                  </div>
                  <FaChevronDown className="chevron" />
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>Aucune question ne correspond à votre recherche.</p>
            <button
              className="reset-btn"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      {/* Contact support */}
      <div className="support-section">
        <h2>Vous ne trouvez pas la réponse ?</h2>
        <p>Notre équipe est là pour vous aider</p>
        <div className="support-actions">
          <Link to="/contact" className="support-btn primary">
            Contacter le support
          </Link>
          <a href="tel:+221781682626" className="support-btn secondary">
            Appeler : +221 78 168 26 26
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;