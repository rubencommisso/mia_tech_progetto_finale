import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ringPhone from "@assets/ringPhone.jpeg";
import ring1 from "@assets/ring1.jpeg";
import ring2 from "@assets/ring2.jpeg";
import ButtonToPage from "@components/ButtonToPage";
import Card from "../components/card";

const Ring = () => {
  const [activeCardId, setActiveCardId] = useState(null);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const CardProduct = [
    {
      id: 7,
      title: "Ring Nero",
      price: 15,
      image: ringPhone,
      images: [
        { src: ringPhone, alt: "Ring Nero 1" },
        { src: ring1, alt: "Ring Nero 2" },
        { src: ring2, alt: "Ring Nero 3" }
      ]
    },
    {
      id: 8,
      title: "Ring Argento",
      price: 18,
      image: ring1,
      images: [
        { src: ringPhone, alt: "Ring Argento 1" },
        { src: ring1, alt: "Ring Argento 2" },
        { src: ring2, alt: "Ring Argento 3" }
      ]
    },
    {
      id: 9,
      title: "Ring Oro",
      price: 20,
      image: ring2,
      images: [
        { src: ringPhone, alt: "Ring Oro 1" },
        { src: ring1, alt: "Ring Oro 2" },
        { src: ring2, alt: "Ring Oro 3" }
      ]
    },
  ];

  // Effetto per scrollare in alto al montaggio
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  // Caricamento del carrello dal localStorage al montaggio del componente
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Salvataggio del carrello nello storage ogni volta che cambia lo state
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Funzione per aggiornare il carrello: aggiorna lo state, il localStorage e dispatcha l'evento "cartUpdated"
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  const handleCardClick = (id) => {
    setActiveCardId(id);
    navigate(`/showdetail`, {
      state: { product: CardProduct.find((product) => product.id === id) }
    });
  };

  const handleAddToCart = (product) => {
    console.log(`Aggiunto al carrello: ${product.title}`);

    // Leggiamo il carrello già esistente dal localStorage (oppure usiamo lo state)
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (isNaN(product.price) || product.price <= 0) {
      console.error("Prezzo non valido per il prodotto", product);
      return;
    }

    // Verifica se il prodotto esiste già nel carrello
    const existingProductIndex = savedCart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Se esiste, incrementa la quantità
      savedCart[existingProductIndex].quantity += 1;
    } else {
      // Altrimenti, aggiungi il prodotto con quantità iniziale 1
      savedCart.push({ ...product, quantity: 1 });
    }

    // Aggiorna il carrello usando la funzione updateCart
    updateCart(savedCart);

    // Naviga alla pagina del carrello
    navigate("/cart");
  };

  return (
    <div className="bg-gray-100 p-10 md:p-6 flex justify-start items-start">
      <div className="max-w-5xl mx-auto flex flex-col justify-center">
        <h1 className="text-3xl text-start md:mt-2 md:mb-0 font-bold">Ring</h1>
        <h2 className="text-2xl font-normal text-start mt-2 md:mb-0">
          Scegli il ring che fa per te!
        </h2>

        <div className="grid grid-cols-1 max-w-3xl justify-items-start mt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {CardProduct.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-center items-start md:items-start sm:items-start  p-4 sm:w-48 md:w-60 md:h-80 md:p-0 md:mb-2"
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
          <h2 className="text-3xl text-start font-semibold mb-2 mt-2">Dettagli sui Ring - Perché sceglierli?</h2>
          <p className="text-gray-700 text-justify text-xl mt-2">
            I nostri ring sono progettati per offrire una presa sicura e comoda sul tuo dispositivo, migliorando la funzionalità e lo stile. Offrono una protezione aggiuntiva e una maneggevolezza superiore per ogni tipo di telefono.
          </p>

          <h3 className="text-2xl font-bold mb-2 mt-6">Vantaggi principali:</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Protezione robusta per il tuo dispositivo.</li>
            <li>Design elegante e raffinato adatto a ogni occasione.</li>
            <li>Materiali di alta qualità che garantiscono durata nel tempo.</li>
            <li>Compatibile con la maggior parte dei telefoni cellulari.</li>
          </ul>

          <h3 className="text-2xl font-extrabold mt-12 mb-2">Tipologie di ring disponibili:</h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li><strong>Ring Nero:</strong> Perfetto per chi cerca un look elegante e sobrio.</li>
            <li><strong>Ring Argento:</strong> Un tocco di raffinatezza per il tuo telefono.</li>
            <li><strong>Ring Oro:</strong> Il massimo del lusso per chi vuole distinguersi.</li>
          </ul>

          <h3 className="text-2xl font-bold text-start mt-12 mb-10">Come scegliere il ring giusto per il tuo telefono</h3>
          <p className="text-gray-700 text-lg">
            Considera il tuo stile personale e le tue abitudini d'uso. Scegli un ring che combini funzionalità, estetica e compatibilità con il tuo dispositivo.
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-2">Manutenzione e cura del ring:</h3>
          <p className="text-gray-700 pb-6 text-2xl">
            Per mantenere il tuo ring in perfette condizioni, puliscilo regolarmente con un panno morbido e asciutto. Evita il contatto con sostanze chimiche aggressive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ring;
