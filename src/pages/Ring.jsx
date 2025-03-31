import { useState } from "react";
import esempio from "../assets/esempio.jpg"; 
import ButtonToPage from "../components/ButtonToPage"; 
import Card from "../components/card"; 
import ringPhone from "@assets/ringPhone.jpeg"
import ring1 from "@assets/ring1.jpeg"
import ring2 from "@assets/ring2.jpeg"

const Ring = () => {
  const [cart, setCart] = useState([]);
  const [activeCardId, setActiveCardId] = useState(null);

  const handleAddToCart = (color, price) => {
    const item = { ring: color, price, total: price };
    setCart((prevCart) => [...prevCart, item]);
    console.log("🛒 Aggiunto al carrello:", item);
  };

  const CardProduct = [
    {
      id: 1,
      title: "Ring Nero",
      price: 15,
      image: ringPhone, 
      color: "black",
    },
    {
      id: 2,
      title: "Ring Argento",
      price: 18,
      image: ring1,
      color: "silver",
    },
    {
      id: 3,
      title: "Ring Oro",
      price: 20,
      image: ring2,
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

        <div className="mt-4 text-lg">
          <p>
            Scopri la nostra collezione esclusiva di ring per il tuo telefono, disponibili in tre eleganti colori: Nero, Argento e Oro.
          </p>
        </div>

        <h2 className="text-xl mt-4">Scegli il ring che fa per te!</h2>

        <div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mt-10"
        >
          {CardProduct.map((product) => (
            <div
              key={product.id}
              className="w-60 h-auto p-4 rounded-lg shadow-md bg-white"
            >
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                activeCardId={activeCardId}
                onClick={handleCardClick}
              />
              
              <ButtonToPage
                label="Add to Bag"
                onClick={() => handleAddToCart(product.color, product.price)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ring;
