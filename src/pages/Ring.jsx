import { useState } from "react";
import esempio from "../assets/esempio.jpg"; // Assicurati che l'immagine del ring sia nel percorso giusto
import AddTobagRingNero from "../components/AddTobagRingNero";
import AddTobagRingArgento from "../components/AddTobagRingArgento";
import AddTobagRingOro from "../components/AddTobagRingOro";

const Ring = () => {
  const [cart, setCart] = useState([]);
  const [activeCardId, setActiveCardId] = useState(null);

  const handleAddToCart = (color, price) => {
    const item = { ring: color, price, total: price };
    setCart((prevCart) => [...prevCart, item]);
    console.log("🛒 Aggiunto al carrello:", item);
  };

  // Dati dei prodotti (i ring con i rispettivi colori)
  const CardProduct = [
    {
      id: 1,
      title: "Ring Nero",
      price: 15,
      image: esempio, 
      color: "black",
    },
    {
      id: 2,
      title: "Ring Argento",
      price: 18,
      image: esempio,
      color: "silver",
    },
    {
      id: 3,
      title: "Ring Oro",
      price: 20,
      image: esempio,
      color: "gold",
    },
  ];

  const handleCardClick = (id) => {
    setActiveCardId(id);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="text-left max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">Benvenuto!</h1>

        {/* Descrizione breve */}
        <div className="mt-4 text-lg">
          <p>
            Scopri la nostra collezione esclusiva di ring per il tuo telefono, disponibili in tre eleganti colori: Nero, Argento e Oro.
          </p>
        </div>

        <h2 className="text-xl mt-4">Scegli il ring che fa per te!</h2>

        {/* Sezione delle Card */}
        <div
          className="
            flex 
            flex-wrap
            justify-center     /* Centra le card orizzontalmente */
            gap-6               /* Distanza standard tra le card */
            sm:gap-8            /* Aumenta la distanza tra le card su schermi da 640px */
            md:gap-12           /* Aumenta ulteriormente la distanza tra le card su desktop */
            mt-10
          "
        >
          {CardProduct.map((product) => (
            <div
              key={product.id}
              className={`transition-transform transform hover:scale-105 rounded-md border-2 p-4 w-56 h-auto max-w-xs ${ /* Card più grande */
                product.color === "black"
                  ? "border-black"
                  : product.color === "silver"
                  ? "border-gray-500"
                  : "border-yellow-500"
              }`}
              onClick={() => handleCardClick(product.id)}
            >
              {/* Colore sopra la card */}
              <div
                className={`w-full h-1 mb-2 rounded-t-md ${ 
                  product.color === "black"
                    ? "bg-black"
                    : product.color === "silver"
                    ? "bg-gray-500"
                    : "bg-yellow-500"
                }`}
              ></div>

              {/* Card contenente l'immagine */}
              <div className="h-40 overflow-hidden mb-2"> {/* Aumento l'altezza dell'immagine */}
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover" // L'immagine prende tutta la card
                />
              </div>

              {/* Testo della Card */}
              <div className="text-center">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-500">{`€${product.price}`}</p>
              </div>

              {/* Bottone Add to Bag */}
              {product.color === "black" && <AddTobagRingNero onAddToCart={handleAddToCart} />}
              {product.color === "silver" && <AddTobagRingArgento onAddToCart={handleAddToCart} />}
              {product.color === "gold" && <AddTobagRingOro onAddToCart={handleAddToCart} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ring;
