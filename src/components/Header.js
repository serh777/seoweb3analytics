import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo-container">
        <div className="animated-text">SEOWeb3Analytics</div>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/CompetitorAnalysisTool">CompetidorTool</Link></li>
          <li><Link to="/blockchain">Blockchain</Link></li>
          <li><Link to="/nfts">NFTs</Link></li>
          <li><Link to="/smartcontracts">Smart Contracts</Link></li>
          <li><Link to="/keyword-analysis">Análisis de Palabras Clave</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
