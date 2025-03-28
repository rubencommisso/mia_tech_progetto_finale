import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import Carousell from '../components/Carousell';

const Sustainability = () => {
  const { productId } = useParams(); 
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Cover Eco-Friendly',
      description: 'Realizzata con materiali biodegradabili e plastica riciclata al 100%',
      image: 'immagine 1', 
      plasticSaved: 50,
    },
    {
      id: 2,
      name: 'Pellicola Protettiva',
      description: 'Protezione durevole, realizzata con plastica riciclata.',
      image: 'immagine 2', 
      plasticSaved: 70,
    },
    {
      id: 3,
      name: 'Cover in Bambù',
      description: 'Cover leggera e resistente, fatta di bambù naturale e sostenibile.',
      image: 'immagine 3', 
      plasticSaved: 60,
    },
  ];

  useEffect(() => {
    if (productId) {
      const product = products.find(p => p.id === parseInt(productId));
      setSelectedProduct(product);
    }
  }, [productId]);

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
            Ogni nostro prodotto è pensato per ridurre l’impatto ambientale, realizzato con materiali riciclati e biodegradabili per un mondo più verde.
          </p>
        </div>
      </header>

      {selectedProduct ? (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-green-600 text-center mb-20 mt-28">
            {selectedProduct.name}
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex flex-col justify-center text-center md:text-left">
                  <h3 className="text-2xl font-bold text-green-600">{selectedProduct.name}</h3>
                  <p className="text-lg text-gray-700 mt-4">{selectedProduct.description}</p>
                  <span className="block font-bold text-green-900 text-8xl mt-20 text-center">
                    {selectedProduct.plasticSaved}%{' '}
                    <p className="text-lg text-gray-500 mt-2">Risparmio di plastica</p>
                  </span>
                </div>

                <div className="md:w-2/3">
                  <Carousell images={[selectedProduct.image]} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-green-600 text-center mb-20 mt-28">
            Scopri i Nostri Prodotti Eco-Friendly
          </h2>
          <div className="space-y-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex flex-col justify-center text-center md:text-left">
                    <h3 className="text-2xl font-bold text-green-600">{product.name}</h3>
                    <p className="text-lg text-gray-700 mt-4">{product.description}</p>
                    <span className="block font-bold text-green-900 text-8xl mt-20 text-center">
                      {product.plasticSaved}%{' '}
                      <p className="text-lg text-gray-500 mt-2">Risparmio di plastica</p>
                    </span>
                  </div>

                  <div className="md:w-2/3">
                    <Carousell images={[product.image]} />
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
          Le nostre pellicole e cover sono realizzate con materiali riciclati, biodegradabili e certificati. Proteggiamo il tuo smartphone e il nostro pianeta con ogni acquisto.
        </p>
      </section>

      <section className="text-center">
        <h3 className="text-2xl font-semibold text-green-600">Fai la Scelta Sostenibile</h3>
        <p className="text-lg text-gray-700 mt-4">
          Unisciti a noi nella missione di ridurre la plastica e promuovere un futuro più sostenibile.
        </p>
        <button className="mt-6 px-3 py-1 bg-green-600 text-white text-lg rounded-lg hover:bg-green-500 focus:outline-none">
          Acquista Ora
        </button>
      </section>
    </div>
  );
};

export default Sustainability;
