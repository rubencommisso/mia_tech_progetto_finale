import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import esempio from '@assets/esempio.jpg'
import Card from '@components/card'
import kitPulizia from '@assets/kitPulizia.jpeg'
import pulizia2 from '@assets/pulizia2.jpg'
import pulizia3 from '@assets/pulizia3.jpg'
import ButtonToPage from '@components/ButtonToPage'

const KitPulizia = () => {
  const [activeCardId, setActiveCardId] = useState(null);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const CardProduct = [
    {
      src: 'kitpulizia-1.jpg',
      alt: 'kitpulizia 1',
      id: 4,
      title: "Kit di pulizia completo per smartphone",
      price: 15,
      image: kitPulizia,
      images: [
        { src: kitPulizia, alt: 'kitpulizia 1' },
        { src: pulizia2, alt: 'kitpulizia 2' },
        { src: pulizia3, alt: 'kitpulizia 3' }
      ]
    },
    {
      src: 'kitpulizia-4.jpg',
      alt: 'kitpulizia 2',
      id: 5,
      title: "Kit di pulizia con panno in microfibra",
      price: 10,
      image: pulizia2,
      images: [
        { src: pulizia2, alt: 'kitpulizia 4' },
        { src: kitPulizia, alt: 'kitpulizia 5' },
        { src: pulizia3, alt: 'kitpulizia 6' }
      ]
    },
    {
      src: 'kitpulizia-7.jpg',
      alt: 'kitpulizia 3',
      id: 6,
      title: "Spray per la pulizia del display",
      price: 12,
      image: pulizia3,
      images: [
        { src: pulizia3, alt: 'kitpulizia 7' },
        { src: pulizia2, alt: 'kitpulizia 8' },
        { src: kitPulizia, alt: 'kitpulizia 9' }
      ]
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCardClick = (id) => {
    setActiveCardId(id);
    navigate(`/showdetail/${id}`, {
      state: { product: CardProduct.find(product => product.id === id) }
    });
  }

  const handleAddToCart = (product) => {
    console.log(`Aggiunto al carrello: ${product.title}`);

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (isNaN(product.price) || product.price <= 0) {
      console.error("Prezzo non valido per il prodotto", product);
      return;
    }

    const existingProductIndex = savedCart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      savedCart[existingProductIndex].quantity += 1;
    } else {
      savedCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(savedCart));
    navigate('/cart');
  }

  return (
    <div className="bg-gray-100 p-10 md:p-6 flex justify-start items-start">
      <div className="max-w-5xl mx-auto flex flex-col justify-center">
        <h1 className="text-3xl text-start md:mt-2 md:mb-2 font-bold">Kit Pulizia</h1>
        <h2 className="text-2xl font-normal text-start mt-2 md:mb-2">
          Scegli il kit di pulizia per il tuo dispositivo!
        </h2>
        
        <div className="grid grid-cols-1 max-w-3xl justify-items-start mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {CardProduct.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-center item-center p-4 sm:w-48 sm-52 md:w-60 md:h-80 md:p-0 md:mb-6"
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
                  className="bg-orange-500 hover:bg-orange-400 text-black font-bold w-40 h-15 rounded-3xl transition-all"
                />
              </Card>
            </div>
          ))}
        </div>
        
        {/* Altri dettagli sui prodotti */}
        <div>
          <h2 className="text-3xl text-start font-semibold mb-2">
            Dettagli aggiuntivi sui Kit di Pulizia per Cellulari
          </h2>
          <p className="text-gray-700 text-justify text-xl mt-4">
            I kit di pulizia per smartphone sono pensati per mantenere il tuo dispositivo pulito ...
          </p>
          {/* ... e così via */}
        </div>
      </div>
    </div>
  )
}


export default KitPulizia
