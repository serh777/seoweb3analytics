import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blockchain from './components/Blockchain';
import Nfts from './components/Nfts';
import SmartContracts from './components/SmartContracts';
import Contacto from './components/Contacto';
import Pago from './components/Pago';
import KeywordAnalysisPage from './components/KeywordAnalysisPage';
import CompetitorAnalysisTool from './components/CompetitorAnalysisTool';  // Importación corregida

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/CompetitorAnalysisTool" element={ <ProtectedRoute><CompetitorAnalysisTool /> </ProtectedRoute>} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/nfts" element={<Nfts />} />
          <Route path="/smartcontracts" element={<SmartContracts />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/pago-pro" element={<Pago plan="Plan Pro" precio="$50" />} />
          <Route path="/pago-premium" element={<Pago plan="Plan Premium" precio="$200" />} />
          <Route path="/keyword-analysis" element={<KeywordAnalysisPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
