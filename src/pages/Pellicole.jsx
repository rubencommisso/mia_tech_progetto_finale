import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import esempio from '@assets/esempio.jpg';
import Card from '@components/card';
import pellicola from '@assets/pellicola.jpeg';
import pellicole from '@assets/pellicole.jpeg';
import pellicole2 from '@assets/pellicole2.jpeg';
// Importa il bottone personalizzato come in KitPulizia
import ButtonToPage from '@components/ButtonToPage';

const Pellicole = () => {
  const [activeCardId, setActiveCardId] = useState(null);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const CardProduct = [
    {
      src: 'piccola-1.jpg',
      alt: 'imgpiccola 1',
      id: 4,
      title: "Pellicola pvc super resistente effetto satinato",
      price: 20,
      image: pellicole,
      images: [
        { src: pellicola, alt: 'imgpiccola 1' },
        { src: pellicole, alt: 'imgpiccola 2' },
        { src: pellicole2, alt: 'imgpiccola 3' }
      ]
    },
    {
      src: 'piccola-2.jpg',
      alt: 'imgpiccola 1',
      id: 5,
      title: "Pellicola vetro temprato antigraffio",
      price: 30,
      image: pellicole2,
      images: [
        { src: pellicola, alt: 'imgpiccola 4' },
        { src: pellicola, alt: 'imgpiccola 5' },
        { src: pellicole2, alt: 'imgpiccola 6' }
      ]
    },
    {
      src: 'piccola-2.jpg',
      alt: 'imgpiccola 2',
      id: 6,
      title: "Pellicola vetro temprato anti-impronte",
      price: 40,
      image: pellicola,
      images: [
        { src: pellicola, alt: 'imgpiccola 7' },
        { src: pellicole, alt: 'imgpiccola 8' },
        { src: pellicole2, alt: 'imgpiccola 9' }
      ]
    },
  ];

  // Effetto per scrollare in alto alla prima render
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  // Recupero del carrello dallo storage all'avvio
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Ogni volta che il carrello cambia viene salvato nel localStorage
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

  const handleAddToCart = (product) => {
    console.log(`Aggiunto al carrello: ${product.title}`);

    // Leggiamo il carrello dal localStorage oppure usiamo lo state
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (isNaN(product.price) || product.price <= 0) {
      console.error("Prezzo non valido per il prodotto", product);
      return;
    }

    const existingProductIndex = savedCart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Se il prodotto esiste già, incrementa la quantità
      savedCart[existingProductIndex].quantity += 1;
    } else {
      // Altrimenti lo aggiunge con quantità iniziale 1
      savedCart.push({ ...product, quantity: 1 });
    }

    // Usa la funzione updateCart per aggiornare lo state, salvare nel localStorage
    // e dispatchare l'evento "cartUpdated"
    updateCart(savedCart);

    // Naviga alla pagina del carrello
    navigate('/cart');
  };

  return (
    <div className="bg-gray-100 p-10 md:p-6 flex justify-start items-start">
      <div className="max-w-5xl mx-auto flex flex-col justify-center">
        <h1 className="text-3xl text-start md:mt-2 md:mb-2 font-bold">Pellicole</h1>
        <h2 className="text-2xl font-normal text-start mt-2 md:mb-2">
          Scegli la pellicola che desideri!
        </h2>
        
        <div className="grid grid-cols-1 max-w-3xl justify-items-start mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {CardProduct.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-center items-center p-4 sm:w-48 md:w-60 md:h-80 md:p-0 md:mb-6"
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
          <h2 className="text-3xl text-start font-semibold mb-2">
            Dettagli aggiuntivi sulle Pellicole per Cellulari
          </h2>
          <p className="text-gray-700 text-justify text-xl mt-4">
            Le pellicole per cellulari sono progettate per proteggere il tuo dispositivo da graffi, urti e polvere...
          </p>

          <h3 className="text-2xl font-bold mb-2 mt-6">
            Vantaggi principali delle Pellicole:
          </h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Protezione contro graffi e danni alla superficie dello schermo.</li>
            <li>Facile applicazione senza bolle d'aria.</li>
            <li>Non altera la qualità delle immagini o la sensibilità al tocco.</li>
            <li>Compatibile con la maggior parte dei modelli di smartphone.</li>
          </ul>

          <h3 className="text-2xl font-extrabold mt-12 mb-2">
            Tipologie di pellicole disponibili:
          </h3>
          <p className="text-gray-900 font-black">
            Esistono diverse tipologie di pellicole, come quelle in vetro temperato o in plastica...
          </p>

          <h3 className="text-3xl font-bold text-start mt-12 mb-10">
            Come scegliere la pellicola giusta per il tuo smartphone:
          </h3>
          <p className="text-gray-700 text-lg">
            Quando scegli una pellicola per il tuo smartphone, è importante considerare il tipo di utilizzo...
          </p>

          <h3 className="text-3xl font-semibold mt-10 mb-2">
            Manutenzione e cura della pellicola:
          </h3>
          <p className="text-gray-700 pb-6 text-2xl">
            Per mantenere la pellicola in buone condizioni, è consigliabile pulirla regolarmente con un panno morbido...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pellicole;

