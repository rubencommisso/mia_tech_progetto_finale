import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import Carousell from '../components/Carousell';

import kitPulizia from "../assets/kitPulizia.jpeg";
import pellicolaVetroDef from "../assets/pellicolaVetroDef.png";
import cover3 from '../assets/cover3.jpeg';

// Altri import di immagini che al momento non usi
import pannoDef from "../assets/pannoDef.png";
import pellicolaPryDef from "../assets/pellicolaPryDef.png";
import pellicolaPvcDef from "../assets/pellicolaPvcDef.png";
import ringBlackDef from "../assets/ringBlackDef.png";
import ringOroDef from "../assets/ringOroDef.png";
import ringSilverDef from "../assets/ringSilverDef.png";
import spryDef from "../assets/spryDef.png";

const Sustainability = () => {
  const { productId } = useParams(); 
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Cover Eco-Friendly',
      description: 'Realizzata con materiali riciclato e sostenibile.',
      images: [kitPulizia, pellicolaPvcDef, ringBlackDef], // ARRAY immagini
      plasticSaved: 70,
    },
    {
      id: 2,
      name: 'Pellicola Protettiva',
      description: 'Protezione durevole, realizzata con pvc e vetro riciclato.',
      images: [pellicolaVetroDef, pannoDef, spryDef],
      plasticSaved: 70,
    },
    {
      id: 3,
      name: 'Kit-Pulizia',
      description: 'Utilizziamo prodotti non chimici per la pulizia, e contenitori in plastica riciclata',
      images: [cover3, ringOroDef, ringSilverDef],
      plasticSaved: 60,
    },
  ];
  

  // Creo una funzione che restituisce l'array di oggetti in cui "text" è un <img>.
  // Carousell mostra "text" in un <p>, quindi qui passiamo un elemento React (l’immagine).
  // "bgColor" serve perché Carousell usa .bgColor come sfondo.
  const getCarousellData = (product) => [
    {
      id: product.id,
      text: (
        <img
          src={product.image}
          alt={product.name}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      ),
      bgColor: 'bg-gray-200',
    },
  ];

  // Effetto per caricare il prodotto selezionato se c'è un productId
  useEffect(() => {
    if (productId) {
      const product = products.find(p => p.id === parseInt(productId));
      setSelectedProduct(product);
    }
  }, [productId]);

  // Se c’è un productId ma non troviamo un prodotto corrispondente, errore
  if (productId && !selectedProduct) {
    return (
      <div className="text-center p-8">
        <h2 className="text-3xl font-semibold text-gray-800">Prodotto non trovato</h2>
        <p className="text-lg text-gray-600 mt-4">Il prodotto che cerchi non esiste.</p>
      </div>
    );
  }

  return (
    <div className="p-6 font-sans m-16 bg-white-200">
      <header className="flex flex-col md:flex-row justify-between items-center gap-7 mb-12">
        <h1 className="text-5xl font-bold text-green-700 mt-2 md:mt-0">Scegli la Sostenibilità</h1>
        <div className="flex flex-col items-center text-right">
          <h2 className="text-3xl font-semibold text-green-600">Prodotti Eco-Friendly per il Tuo Smartphone</h2>
          <p className="text-xl text-gray-600 mt-10">
            Ogni nostro prodotto è pensato per ridurre l’impatto ambientale,
            realizzato con materiali riciclati e biodegradabili per un mondo più verde.
          </p>
        </div>
      </header>

      {selectedProduct ? (
        // Se ho un prodotto selezionato
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-green-600 text-center mb-20 mt-28">
            {selectedProduct.name}
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex flex-col justify-center text-center md:text-left">
                  <h3 className="text-2xl font-bold text-green-600">{selectedProduct.name}</h3>
                  <p className="text-lg text-gray-700 mt-4">
                    {selectedProduct.description}
                  </p>
                  <span className="block font-bold text-green-900 text-8xl mt-20 text-center">
                    {selectedProduct.plasticSaved}%{' '}
                    <p className="text-lg text-gray-500 mt-2">
                      Risparmio di plastica
                    </p>
                  </span>
                </div>

                {/* Passo a Carousell un array con un solo oggetto, in cui text contiene l'immagine */}
                <div className="md:w-2/3">
                  <Carousell images={selectedProduct.images} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Altrimenti mostro la lista di tutti i prodotti
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-green-600 text-center mb-20 mt-28">
            Scopri i Nostri Prodotti Eco-Friendly
          </h2>
          <div className="space-y-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex flex-col justify-center text-center md:text-left">
                    <h3 className="text-2xl font-bold text-green-600">
                      {product.name}
                    </h3>
                    <p className="text-lg text-gray-700 mt-4">
                      {product.description}
                    </p>
                    <span className="block font-bold text-green-900 text-8xl mt-20 text-center">
                      {product.plasticSaved}%{' '}
                      <p className="text-lg text-gray-500 mt-2">Risparmio di plastica</p>
                    </span>
                  </div>

                  <div className="md:w-2/3">
                    <Carousell Carousell images={product.images}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-green-600">I Materiali Eco-Friendly</h2>
        <p className="text-lg text-gray-600 mt-4">
          Le nostre pellicole e cover sono realizzate con materiali riciclati, biodegradabili e certificati.
          Proteggiamo il tuo smartphone e il nostro pianeta con ogni acquisto.
        </p>
      </section>

      <section className="text-center">
        <h3 className="text-2xl font-semibold text-green-600">Fai la Scelta Sostenibile</h3>
        <p className="text-lg text-gray-700 mt-4">
          Unisciti a noi nella missione di ridurre la plastica e promuovere un futuro più sostenibile.
        </p>
      </section>
    </div>
  );
};

export default Sustainability;
