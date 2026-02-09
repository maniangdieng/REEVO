import React, { useState } from 'react';
import '../styles/ProductComparison.css';
import { FaCheck, FaTimes, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductComparison = () => {
  const [selectedModels, setSelectedModels] = useState([0, 1, 2]); // Par défaut 3 premiers modèles

  const motorcycleModels = [
    {
      id: 1,
      name: 'A12 LFP',
      series: 'A Series',
      image: 'A12lfp.png',
      price: '1 200 000 FCFA',
      specs: {
        topSpeed: '55 KM/H',
        range: '110 KM',
        battery: '72V 35Ah LFP',
        motor: '1200W',
        weight: '85 kg',
        chargingTime: '6-8h',
        brakes: 'Disque avant/arrière',
        warranty: '2 ans'
      },
      features: {
        bluetooth: true,
        gps: false,
        alarm: true,
        usb: true,
        led: true,
        display: 'LCD'
      }
    },
    {
      id: 2,
      name: 'A11 LFP',
      series: 'A Series',
      image: 'A11lfp.png',
      price: '1 350 000 FCFA',
      specs: {
        topSpeed: '60 KM/H',
        range: '120 KM',
        battery: '72V 40Ah LFP',
        motor: '1500W',
        weight: '88 kg',
        chargingTime: '6-8h',
        brakes: 'Disque avant/arrière',
        warranty: '2 ans'
      },
      features: {
        bluetooth: true,
        gps: true,
        alarm: true,
        usb: true,
        led: true,
        display: 'LCD Digital'
      }
    },
    {
      id: 3,
      name: 'E52',
      series: 'E Series',
      image: 'E52.png',
      price: '1 500 000 FCFA',
      specs: {
        topSpeed: '70 KM/H',
        range: '130 KM',
        battery: '72V 50Ah',
        motor: '2000W',
        weight: '95 kg',
        chargingTime: '7-9h',
        brakes: 'Disque hydraulique',
        warranty: '2 ans'
      },
      features: {
        bluetooth: true,
        gps: true,
        alarm: true,
        usb: true,
        led: true,
        display: 'TFT Digital'
      }
    },
    {
      id: 4,
      name: 'C32',
      series: 'C Series',
      image: 'C32.png',
      price: '1 450 000 FCFA',
      specs: {
        topSpeed: '75 KM/H',
        range: '140 KM',
        battery: '72V 45Ah',
        motor: '1800W',
        weight: '90 kg',
        chargingTime: '6-8h',
        brakes: 'Disque hydraulique',
        warranty: '2 ans'
      },
      features: {
        bluetooth: true,
        gps: true,
        alarm: true,
        usb: true,
        led: true,
        display: 'LCD Digital'
      }
    },
    {
      id: 5,
      name: 'A12',
      series: 'A Series',
      image: 'A12.png',
      price: '1 100 000 FCFA',
      specs: {
        topSpeed: '55 KM/H',
        range: '115 KM',
        battery: '72V 38Ah',
        motor: '1200W',
        weight: '85 kg',
        chargingTime: '6-8h',
        brakes: 'Disque avant/arrière',
        warranty: '2 ans'
      },
      features: {
        bluetooth: false,
        gps: false,
        alarm: true,
        usb: true,
        led: true,
        display: 'LCD'
      }
    },
    {
      id: 6,
      name: 'C32 PRO',
      series: 'C Series',
      image: 'C32pro.png',
      price: '1 650 000 FCFA',
      specs: {
        topSpeed: '80 KM/H',
        range: '150 KM',
        battery: '72V 52Ah',
        motor: '2500W',
        weight: '98 kg',
        chargingTime: '7-9h',
        brakes: 'ABS Disque hydraulique',
        warranty: '3 ans'
      },
      features: {
        bluetooth: true,
        gps: true,
        alarm: true,
        usb: true,
        led: true,
        display: 'TFT Smart'
      }
    }
  ];

  const handleModelSelect = (index, position) => {
    const newSelected = [...selectedModels];
    newSelected[position] = index;
    setSelectedModels(newSelected);
  };

  return (
    <div className="comparison-page">
      {/* Header */}
      <div className="comparison-header">
        <Link to="/" className="back-button">
          <FaArrowLeft /> Retour
        </Link>
        <h1 className="comparison-title">
          Comparez nos <span className="highlight">modèles</span>
        </h1>
        <p className="comparison-subtitle">
          Trouvez la moto électrique parfaite pour vos besoins
        </p>
      </div>

      {/* Sélecteurs de modèles */}
      <div className="model-selectors">
        {[0, 1, 2].map((position) => (
          <div key={position} className="model-selector">
            <label>Modèle {position + 1}</label>
            <select
              value={selectedModels[position]}
              onChange={(e) => handleModelSelect(parseInt(e.target.value), position)}
            >
              {motorcycleModels.map((model, index) => (
                <option key={model.id} value={index}>
                  {model.name} - {model.series}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Table de comparaison */}
      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="feature-column">Caractéristiques</th>
              {selectedModels.map((modelIndex, position) => (
                <th key={position} className="model-column">
                  <div className="model-header">
                    <img
                      src={motorcycleModels[modelIndex].image}
                      alt={motorcycleModels[modelIndex].name}
                      className="model-image"
                    />
                    <h3>{motorcycleModels[modelIndex].name}</h3>
                    <p className="model-price">{motorcycleModels[modelIndex].price}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Prix */}
            <tr className="section-header">
              <td colSpan="4">💰 Prix</td>
            </tr>
            <tr>
              <td className="feature-name">Prix de vente</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].price}
                </td>
              ))}
            </tr>

            {/* Performances */}
            <tr className="section-header">
              <td colSpan="4">⚡ Performances</td>
            </tr>
            <tr>
              <td className="feature-name">Vitesse maximale</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].specs.topSpeed}
                </td>
              ))}
            </tr>
            <tr>
              <td className="feature-name">Autonomie</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].specs.range}
                </td>
              ))}
            </tr>
            <tr>
              <td className="feature-name">Moteur</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].specs.motor}
                </td>
              ))}
            </tr>

            {/* Batterie */}
            <tr className="section-header">
              <td colSpan="4">🔋 Batterie</td>
            </tr>
            <tr>
              <td className="feature-name">Type et capacité</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].specs.battery}
                </td>
              ))}
            </tr>
            <tr>
              <td className="feature-name">Temps de charge</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].specs.chargingTime}
                </td>
              ))}
            </tr>

            {/* Caractéristiques techniques */}
            <tr className="section-header">
              <td colSpan="4">🔧 Caractéristiques techniques</td>
            </tr>
            <tr>
              <td className="feature-name">Poids</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].specs.weight}
                </td>
              ))}
            </tr>
            <tr>
              <td className="feature-name">Freins</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].specs.brakes}
                </td>
              ))}
            </tr>

            {/* Fonctionnalités */}
            <tr className="section-header">
              <td colSpan="4">📱 Fonctionnalités</td>
            </tr>
            <tr>
              <td className="feature-name">Bluetooth</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].features.bluetooth ? (
                    <FaCheck className="check-icon" />
                  ) : (
                    <FaTimes className="times-icon" />
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="feature-name">GPS intégré</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].features.gps ? (
                    <FaCheck className="check-icon" />
                  ) : (
                    <FaTimes className="times-icon" />
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="feature-name">Alarme antivol</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].features.alarm ? (
                    <FaCheck className="check-icon" />
                  ) : (
                    <FaTimes className="times-icon" />
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="feature-name">Port USB</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].features.usb ? (
                    <FaCheck className="check-icon" />
                  ) : (
                    <FaTimes className="times-icon" />
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="feature-name">Éclairage LED</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].features.led ? (
                    <FaCheck className="check-icon" />
                  ) : (
                    <FaTimes className="times-icon" />
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="feature-name">Type d'écran</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].features.display}
                </td>
              ))}
            </tr>

            {/* Garantie */}
            <tr className="section-header">
              <td colSpan="4">🛡️ Garantie</td>
            </tr>
            <tr>
              <td className="feature-name">Durée de garantie</td>
              {selectedModels.map((modelIndex, position) => (
                <td key={position} className="feature-value">
                  {motorcycleModels[modelIndex].specs.warranty}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Boutons d'action */}
      <div className="comparison-actions">
        {selectedModels.map((modelIndex, position) => (
          <div key={position} className="action-group">
            <Link
              to={`/product/${motorcycleModels[modelIndex].id}`}
              className="action-btn primary"
            >
              En savoir plus sur {motorcycleModels[modelIndex].name}
            </Link>
            <Link to="/contact" className="action-btn secondary">
              Essayer ce modèle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComparison;