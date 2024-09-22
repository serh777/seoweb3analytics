import React, { useState } from 'react';
import { Search, BarChart, TrendingUp, Download, MessageCircle, Activity, Hash } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/Select';

const Web3KeywordAnalysisTool = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    // Aquí va la lógica para buscar y analizar la palabra clave en Web3.
    // Por ahora usaremos datos de ejemplo:
    setResults({
      volume: 5000,
      difficulty: 75,
      relatedKeywords: ['Ethereum gas fees', 'DeFi yield farming', 'NFT marketplace'],
      trend: 'increasing',
      socialMentions: 1200,
      forumActivity: 850,
      blockchainRelevance: 90,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <p>Optimiza tu contenido Web3 con insights específicos de palabras clave para blockchain.</p>
        </div>
        <div className="flex space-x-2 mb-4">
          <Input
            type="text"
            placeholder="Introduce una palabra clave de Web3"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="flex-grow"
          />
          <Select onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blockchain">Blockchain</SelectItem>
              <SelectItem value="defi">DeFi</SelectItem>
              <SelectItem value="nft">NFTs</SelectItem>
              <SelectItem value="dao">DAOs</SelectItem>
              <SelectItem value="metaverse">Metaverse</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleSearch}>
            <Search className="mr-2 h-4 w-4" /> Analizar
          </Button>
        </div>

        {results && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <BarChart className="mr-2 h-5 w-5" />
                <span className="font-semibold">Volumen de Búsqueda:</span>
              </div>
              <span>{results.volume} búsquedas mensuales</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                <span className="font-semibold">Dificultad de Palabra Clave:</span>
              </div>
              <span>{results.difficulty}/100</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                <span className="font-semibold">Menciones Sociales:</span>
              </div>
              <span>{results.socialMentions} en los últimos 30 días</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Activity className="mr-2 h-5 w-5" />
                <span className="font-semibold">Actividad en Foros:</span>
              </div>
              <span>{results.forumActivity} publicaciones/comentarios</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Hash className="mr-2 h-5 w-5" />
                <span className="font-semibold">Relevancia para Blockchain:</span>
              </div>
              <span>{results.blockchainRelevance}/100</span>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Palabras Clave Relacionadas con Web3:</h3>
              <ul className="list-disc pl-5">
                {results.relatedKeywords.map((kw, index) => (
                  <li key={index}>{kw}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-semibold">Tendencia:</span>
              <span className={`capitalize ${results.trend === 'increasing' ? 'text-green-500' : 'text-red-500'}`}>
                {results.trend}
              </span>
            </div>
          </div>
        )}
        <div className="flex justify-end mt-6">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Exportar Datos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Web3KeywordAnalysisTool;
