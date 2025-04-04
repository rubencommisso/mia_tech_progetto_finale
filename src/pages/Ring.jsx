import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ringPhone from "@assets/ringPhone.jpeg";
import ring1 from "@assets/ring1.jpeg";
import ring2 from "@assets/ring2.jpeg";
import Card from "../components/card";

const Ring = () => {
  const [activeCardId, setActiveCardId] = useState(null);
  const navigate = useNavigate();

  const CardProduct = [
    {
      id: 1,
      title: "Ring Nero",
      price: 15,
      image: ringPhone,
      images: [
        { src: ringPhone, alt: 'Ring Nero 1' },
        { src: ring1, alt: 'Ring Nero 2' },
        { src: ring2, alt: 'Ring Nero 3' }
      ]
    },
    {
      id: 2,
      title: "Ring Argento",
      price: 18,
      image: ring1,
      images: [
        { src: ringPhone, alt: 'Ring Argento 1' },
        { src: ring1, alt: 'Ring Argento 2' },
        { src: ring2, alt: 'Ring Argento 3' }
      ]
    },
    {
      id: 3,
      title: "Ring Oro",
      price: 20,
      image: ring2,
      images: [
        { src: ringPhone, alt: 'Ring Oro 1' },
        { src: ring1, alt: 'Ring Oro 2' },
        { src: ring2, alt: 'Ring Oro 3' }
      ]
    }
  ];

  const handleCardClick = (id) => {
    setActiveCardId(id);
    navigate(`/showdetail`, { state: { product: CardProduct.find(product => product.id === id) } });
  };

  const handleAddToCart = (product) => {
    console.log(`Aggiunto al carrello: ${product.title}`)
  
  }

  return (
    <div className="bg-gray-100 p-6 md:p-2 flex justify-center items-center">
      <div className="max-w-6xl mx-auto flex flex-col justify-center">
        <h1 className="text-4xl text-center md:mt-2 md:mb-20 font-bold">Ring</h1>
        <h2 className="text-3xl font-semibold text-center mt-2 md:mb-20">Scegli il ring che fa per te!</h2>

        <div className="grid grid-cols-1 justify-items-center gap-12 m-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {CardProduct.map((product) => (
            <div key={product.id} className="flex flex-col justify-center items-center sm:w-48 sm-52 md:w-60 md:h-80 p-6 md:mb-20 rounded-2xl shadow-lg">
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                activeCardId={activeCardId}
                onClick={() => handleCardClick(product.id)}
              />
              <button
                className="mt-1 bg-orange-400 hover:bg-orange-300 text-black py-2 px-10 rounded-2xl"
                onClick={() => handleAddToCart(product)}
              >
                Add to bag
              </button>
            </div>
          ))}
        </div>
        <div className="mt-2">
          <h2 className="text-4xl text-center font-semibold mb-12">Dettagli sui Ring - Perché sceglierli?</h2>
          <p className="text-gray-700 text-justify text-xl mt-10">
            I nostri ring sono progettati per offrire una presa sicura e comoda sul tuo dispositivo, riducendo il rischio che scivoli o cada dalle mani. Realizzati con materiali di alta qualità, sono disponibili in tre varianti – Nero, Argento e Oro – per aggiungere un tocco di eleganza al tuo smartphone, senza compromettere la funzionalità.
          </p>

          <h3 className="text-3xl font-bold mb-2 mt-20">Vantaggi principali:</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Protezione robusta per il tuo dispositivo.</li>
            <li>Design elegante e raffinato adatto a ogni occasione.</li>
            <li>Materiali di alta qualità che garantiscono durata nel tempo.</li>
            <li>Compatibile con la maggior parte dei telefoni cellulari.</li>
          </ul>

          <h3 className="text-2xl font-extrabold mt-12 mb-2">Tipologie di ring disponibili:</h3>
          <p className="text-gray-900 font-black">
            I nostri ring sono disponibili in tre varianti:
            <ul className="list-disc pl-6 text-gray-600">
              <li><strong>Ring Nero:</strong> Perfetto per chi cerca un look elegante e sobrio.</li>
              <li><strong>Ring Argento:</strong> Un tocco di raffinatezza per il tuo telefono.</li>
              <li><strong>Ring Oro:</strong> Il massimo del lusso per chi vuole distinguersi.</li>
            </ul>
          </p>

          <h3 className="text-4xl font-bold text-center mt-12 mb-10">Come scegliere il ring giusto per il tuo telefono:</h3>
          <p className="text-gray-700 text-lg">
            Quando scegli un ring per il tuo telefono, considera il tuo stile personale e il look che desideri ottenere. Se prediligi un design minimalista, il ring nero sarà l'ideale, mentre se preferisci uno stile più luminoso, il ring argento o oro ti offriranno la combinazione perfetta di eleganza e classe.
          </p>

          <h3 className="text-3xl font-semibold mt-10 mb-2">Manutenzione e cura del ring:</h3>
          <p className="text-gray-700 pb-6 text-2xl">
            Per mantenere il tuo ring in perfette condizioni, ti consigliamo di pulirlo regolarmente con un panno morbido e asciutto. Evita l'uso di detergenti abrasivi che potrebbero danneggiare la finitura del materiale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ring;
