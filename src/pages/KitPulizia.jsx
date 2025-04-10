import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import esempio from '@assets/esempio.jpg';
import spryDef from "../assets/spryDef.png";
import pannoDef from "../assets/pannoDef.png";
import Card from '@components/card';
import kitPulizia from '@assets/kitPulizia.jpeg';
import pulizia2 from '@assets/pulizia2.jpg';
import pulizia3 from '@assets/pulizia3.jpg';
import ButtonToPage from '@components/ButtonToPage';

const KitPulizia = () => {
  const [activeCardId, setActiveCardId] = useState(null);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const CardProduct = [
    {
      src: 'kitpulizia-1.jpg',
      alt: 'kitpulizia 1',
      id: 1,
      title: "Kit di pulizia completo per smartphone",
      price: 15,
      image: kitPulizia,
      images: [
        { src: kitPulizia, alt: 'kitpulizia 1' },
        { src: pannoDef, alt: 'kitpulizia 2' },
        { src: spryDef, alt: 'kitpulizia 3' }
      ]
    },
    {
      src: 'kitpulizia-4.jpg',
      alt: 'kitpulizia 2',
      id: 2,
      title: "Panno in microfibra",
      price: 10,
      image: pannoDef,
      images: [
        { src:pannoDef, alt: 'kitpulizia 4' },
        { src: kitPulizia, alt: 'kitpulizia 5' },
        { src: spryDef, alt: 'kitpulizia 6' }
      ]
    },
    {
      src: 'kitpulizia-7.jpg',
      alt: 'kitpulizia 3',
      id: 3,
      title: "Spray per la pulizia del display",
      price: 12,
      image: spryDef,
      images: [
        { src: spryDef, alt: 'kitpulizia 7' },
        { src: pannoDef, alt: 'kitpulizia 8' },
        { src: kitPulizia, alt: 'kitpulizia 9' }
      ]
    },
  ];

  // Scroll all'avvio della pagina
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  // Caricamento del carrello dal localStorage all'avvio
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Ogni volta che il cart cambia viene salvato nel localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Funzione per aggiornare il carrello e dispatchare l'evento "cartUpdated"
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  const handleCardClick = (id) => {
    setActiveCardId(id);
    navigate(`/showdetail/${id}`, {
      state: { product: CardProduct.find(product => product.id === id) }
    });
  };

  // Funzione per aggiungere l'articolo al carrello
  const handleAddToCart = (product) => {
    console.log(`Aggiunto al carrello: ${product.title}`);
    
    // Leggiamo il carrello già presente (se non usi già lo state, qui lo puoi aggiornare da "cart")
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (isNaN(product.price) || product.price <= 0) {
      console.error("Prezzo non valido per il prodotto", product);
      return;
    }
    
    // Verifica se il prodotto è già presente nel carrello
    const existingProductIndex = savedCart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Incrementa la quantità se esiste già
      savedCart[existingProductIndex].quantity += 1;
    } else {
      // Altrimenti, aggiungi il prodotto con quantity 1
      savedCart.push({ ...product, quantity: 1 });
    }

    // Aggiorna il cart con la funzione updateCart che dispatcha l'evento "cartUpdated"
    updateCart(savedCart);
    
    // Naviga alla pagina del carrello
    navigate('/cart');
  };

  return (
    <div className="bg-gray-100 p-10 md:p-6 flex justify-start items-start">
      <div className="max-w-5xl mx-auto flex flex-col justify-center">
        <h1 className="text-3xl text-start md:mt-2 md:mb-0 font-bold">Kit Pulizia</h1>
        <h2 className="text-2xl font-normal text-start mt-2 md:mb-0">
          Scegli il kit di pulizia per il tuo dispositivo!
        </h2>
        
        <div className="grid grid-cols-1 max-w-3xl justify-items-start mt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {CardProduct.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-center items-start md:items-start sm:items-start p-2 sm:w-48 md:w-60 md:h-80 md:p-0 md:mb-2"
            >
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                activeCardId={activeCardId}
                onClick={() => handleCardClick(product.id)}
              >
                <ButtonToPage
                  onClick={() => handleAddToCart(product)}
                  label="Aggiungi al carrello"
                  className="bg-orange-500 h-8 hover:bg-orange-400 text-black font-bold w-40 rounded-3xl transition-all"
                />
              </Card>
            </div>
          ))}
        </div>
        
        {/* Sezione dettagli aggiuntivi */}
        <div>
          <h2 className="text-3xl text-start font-semibold mb-2 mt-2">
            Dettagli aggiuntivi sui Kit di Pulizia per Cellulari
          </h2>
          <p className="text-gray-700 text-justify text-xl mt-4">
            I kit di pulizia per smartphone sono pensati per mantenere il tuo dispositivo pulito e senza polvere. Utilizzare i giusti strumenti di pulizia può migliorare la durata del tuo telefono e la visibilità dello schermo.
          </p>
          <h3 className="text-2xl font-bold mb-2 mt-6">Vantaggi principali dei Kit di Pulizia:</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Rimuove polvere, impronte e macchie dallo schermo senza danneggiarlo.</li>
            <li>Il panno in microfibra è delicato e non graffia la superficie del dispositivo.</li>
            <li>Comodo e facile da usare: porta il kit sempre con te!</li>
            <li>Prolungano la vita del tuo dispositivo, mantenendolo come nuovo.</li>
          </ul>
          <h3 className="text-2xl font-extrabold mt-12 mb-2">Come utilizzare il Kit di Pulizia:</h3>
          <p className="text-gray-900 font-black">
            Utilizza il panno in microfibra per pulire delicatamente lo schermo e la scocca del dispositivo. Se necessario, spruzza una piccola quantità di spray direttamente sul panno (non sul dispositivo!) e rimuovi macchie e polvere.
          </p>
          <h3 className="text-3xl font-bold text-start mt-12 mb-10">Come scegliere il kit giusto per il tuo smartphone:</h3>
          <p className="text-gray-700 text-lg">
            Se desideri un kit completo per la pulizia quotidiana, un kit che include sia il panno che lo spray è la scelta migliore. Se hai bisogno di un'opzione più leggera, un semplice panno in microfibra potrebbe essere sufficiente.
          </p>
          <h3 className="text-3xl font-semibold mt-10 mb-2">Manutenzione e cura del Kit di Pulizia:</h3>
          <p className="text-gray-700 pb-6 text-2xl">
            Per mantenere il kit in buone condizioni, lava il panno in microfibra con acqua tiepida (senza detersivo o ammorbidenti) e conserva lo spray in un luogo fresco e asciutto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KitPulizia;

