import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ringPhone from "@assets/ringPhone.jpeg"
import ring1 from "@assets/ring1.jpeg"
import ring2 from "@assets/ring2.jpeg"

// Importa il tuo componente ButtonToPage
import ButtonToPage from "@components/ButtonToPage"
import Card from "../components/card"

const Ring = () => {
  const [activeCardId, setActiveCardId] = useState(null)
  const navigate = useNavigate()
  const [cart, setCart] = useState([])

  const CardProduct = [
    {
      id: 7, // oppure mantieni l'id: 1, 2, 3 se preferisci
      title: "Ring Nero",
      price: 15,
      image: ringPhone,
    },
    {
      id:8,
      title: "Ring Argento",
      price: 18,
      image: ring1,
    },
    {
      id:9,
      title: "Ring Oro",
      price: 20,
      image: ring2,
    },
  ]

  // Scorri in alto non appena la pagina viene caricata
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }, [])

  // Recupera eventuale carrello dallo storage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  // Salva il carrello ogni volta che cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const handleCardClick = (id) => {
    setActiveCardId(id)
    // Naviga alla pagina di dettaglio con lo "state" del prodotto
    navigate(`/showdetail`, {
      state: { product: CardProduct.find((product) => product.id === id) },
    })
  }

  const handleAddToCart = (product) => {
    console.log(`Aggiunto al carrello: ${product.title}`)

    const savedCart = JSON.parse(localStorage.getItem("cart")) || []

    // Verifica che il prezzo sia valido
    if (isNaN(product.price) || product.price <= 0) {
      console.error("Prezzo non valido per il prodotto", product)
      return
    }

    // Controllo se il prodotto esiste già nel carrello
    const existingProductIndex = savedCart.findIndex((item) => item.id === product.id)

    if (existingProductIndex !== -1) {
      // Se già esiste, incremento la quantità
      savedCart[existingProductIndex].quantity += 1
    } else {
      // Altrimenti lo aggiungo con quantità iniziale = 1
      savedCart.push({ ...product, quantity: 1 })
    }

    // Salvo nel localStorage
    localStorage.setItem("cart", JSON.stringify(savedCart))
    // Navigo al carrello
    navigate("/cart")
  }

  return (
    <div className="bg-gray-100 p-10 md:p-6 flex justify-start items-start">
      <div className="max-w-5xl mx-auto flex flex-col justify-center">
        <h1 className="text-3xl text-start md:mt-2 md:mb-2 font-bold">Ring</h1>
        <h2 className="text-2xl font-normal text-start mt-2 md:mb-2">
          Scegli il ring che fa per te!
        </h2>

        <div className="grid grid-cols-1 max-w-3xl justify-items-start mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {CardProduct.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-center items-center p-4 sm:w-48 sm-52 md:w-60 md:h-80 md:p-0 md:mb-6"
            >
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                activeCardId={activeCardId}
                onClick={() => handleCardClick(product.id)}
              >
                {/* Stesso pulsante personalizzato usato in KitPulizia/Pellicole */}
                <ButtonToPage
                  onClick={() => handleAddToCart(product)}
                  label="Aggiungi al carrello"
                  className="bg-orange-500 h-8 hover:bg-orange-400 text-black font-bold w-40 h-15 rounded-3xl transition-all"
                />
              </Card>
            </div>
          ))}
        </div>

        {/* Sezione descrittiva e vantaggi */}
        <div className="mt-2">
          <h2 className="text-4xl text-center font-semibold mb-12">
            Dettagli sui Ring - Perché sceglierli?
          </h2>
          <p className="text-gray-700 text-justify text-xl mt-10">
            I nostri ring sono progettati per offrire una presa sicura e comoda sul tuo dispositivo...
            {/* ... e così via */}
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
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              <strong>Ring Nero:</strong> Perfetto per chi cerca un look elegante e sobrio.
            </li>
            <li>
              <strong>Ring Argento:</strong> Un tocco di raffinatezza per il tuo telefono.
            </li>
            <li>
              <strong>Ring Oro:</strong> Il massimo del lusso per chi vuole distinguersi.
            </li>
          </ul>

          <h3 className="text-4xl font-bold text-center mt-12 mb-10">
            Come scegliere il ring giusto per il tuo telefono:
          </h3>
          <p className="text-gray-700 text-lg">
            Quando scegli un ring per il tuo telefono, considera il tuo stile personale...
          </p>

          <h3 className="text-3xl font-semibold mt-10 mb-2">Manutenzione e cura del ring:</h3>
          <p className="text-gray-700 pb-6 text-2xl">
            Per mantenere il tuo ring in perfette condizioni, ti consigliamo di pulirlo regolarmente...
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ring
