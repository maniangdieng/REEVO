import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductComparison from './pages/ProductComparison';
import FAQ from './pages/FAQ';
import OurStory from './pages/OurStory';
import OurMission from './pages/OurMission';
import Warranty from './pages/Warranty';
import './App.css';
import { HashRouter } from "react-router-dom";


function App() {
  return (
    
    <Router>
    
<HashRouter>
  <App />
</HashRouter>
      <div className="App">
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<Home />} />
          
          {/* Pages produits */}
          <Route path="/product-comparison" element={<ProductComparison />} />
          
          {/* Pages À propos */}
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/our-mission" element={<OurMission />} />
          
          {/* Pages Assistance */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/warranty" element={<Warranty />} />
          
          {/* Page Contact */}
          
          {/* 404 - Page non trouvée */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// Composant 404
const NotFound = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '20px'
  }}>
    <h1 style={{ fontSize: '6rem', margin: '0', color: '#00FF00' }}>404</h1>
    <h2 style={{ fontSize: '2rem', margin: '20px 0' }}>Page non trouvée</h2>
    <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
      Désolé, la page que vous recherchez n'existe pas.
    </p>
    <a 
      href="/" 
      style={{
        padding: '15px 40px',
        background: 'linear-gradient(135deg, #00FF00, #00CC00)',
        color: '#000',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: '600',
        fontSize: '1.1rem'
      }}
    >
      Retour à l'accueil
    </a>
  </div>
);

export default App;