import React, { useState } from 'react';
import { Search, BarChart, TrendingUp } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

const CompetitorAnalysisTool = () => {
  const [competitor, setCompetitor] = useState('');
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    // Lógica para analizar el sitio web del competidor
    setResults({
      domain: competitor,
      traffic: 12000,
      backlinks: 850,
      keywordsRanking: 340,
      seoScore: 78,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Herramienta de Monitorización de Competencia Web3</h1>
          <p>Introduce el dominio de tu competidor para analizar su rendimiento SEO en Web3.</p>
        </div>
        <div className="flex space-x-2 mb-4">
          <Input
            type="text"
            placeholder="Introduce el dominio del competidor"
            value={competitor}
            onChange={(e) => setCompetitor(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={handleSearch}>
            <Search className="mr-2 h-4 w-4" /> Analizar
          </Button>
        </div>

        {results && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <BarChart className="mr-2 h-5 w-5" />
                <span className="font-semibold">Tráfico del sitio:</span>
              </div>
              <span>{results.traffic} visitas mensuales</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                <span className="font-semibold">Backlinks:</span>
              </div>
              <span>{results.backlinks}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold">Palabras clave en ranking:</span>
              <span>{results.keywordsRanking}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold">Puntuación SEO:</span>
              <span>{results.seoScore}/100</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompetitorAnalysisTool;
