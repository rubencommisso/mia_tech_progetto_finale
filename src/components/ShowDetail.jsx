import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ShowDetail = () => {
  const { state } = useLocation()
  const { product } = state || {}
  const navigate = useNavigate()

  // Immagine principale e gestione delle miniature
  const [mainImage, setMainImage] = useState(product ? product.images[0]?.src : '')
  const [selectedImage, setSelectedImage] = useState(product ? product.images[0]?.src : '')
  const [imgpiccolaErrors, setImgpiccolaErrors] = useState({})

  // Quantità scelta dall'utente
  const [quantity, setQuantity] = useState(1)

  // Stato del carrello
  const [cart, setCart] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(savedCart)
  }, [])

  // Aggiorna carrello e localStorage
  const updateCart = (updatedCart) => {
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    window.dispatchEvent(new CustomEvent('cartUpdated'))
  }

  // Cambio dell'immagine principale
  const changeImage = (imageSrc) => {
    setMainImage(imageSrc)
    setSelectedImage(imageSrc)
  }

  // Gestione errori immagine principale
  const handleImageError = (imageType) => {
    if (imageType === 'main') {
      setImgpiccolaErrors(prevState => ({ ...prevState, main: true }))
    }
  }

  // Aggiunta al carrello
  const handleAddToCart = () => {
    if (!product) return
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    const existingProductIndex = savedCart.findIndex(item => item.id === product.id)
    if (existingProductIndex !== -1) {
      savedCart[existingProductIndex].quantity += quantity
    } else {
      savedCart.push({ ...product, quantity })
    }
    updateCart(savedCart)
    navigate('/cart')
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  // Gestione del campo "quantity"
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10)
    if (value > 0) {
      setQuantity(value)
    }
  }

  if (!product) {
    return <div className="p-8 text-center">Prodotto non trovato!</div>
  }

  return (
    <div className=" lg:pt-[100px] sm:pb-[100px] min-h-screen bg-gray-100 flex flex-col pt-4 overflow-x-hidden">
      {/* Wrapper container responsive: permette di centrare il contenuto e impostare una larghezza massima */}
      <div className="container mx-auto px-4">
        {/* Contenitore principale: in mobile e md è colonna, in desktop (lg) sono tre colonne */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Colonna 1: Testo e bottoni */}
          <div className="flex flex-col justify-start lg:w-1/3">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <h3 className="text-xl text-gray-700 font-medium mb-4">
              Proteggi il tuo smartphone con stile!
            </h3>

            <button
              className="bg-orange-500 rounded-3xl px-4 py-2 w-full hover:bg-orange-400 text-black font-bold mb-4"
              onClick={handleAddToCart}
            >
              Aggiungi al carrello
            </button>

            {/* Info di spedizione */}
            <div className="mt-4 flex flex-col gap-3 text-sm md:text-base">
              <p>
                <span role="img" aria-label="local shipping">🚚</span> Spedisce entro cinque giorni lavorativi.
              </p>
              <p>
                <span role="img" aria-label="verified user">✅</span>
                <u>Garanzia di restituzione entro 30 giorni + garanzia limitata.</u>
              </p>
              <p>
                <span role="img" aria-label="cover">📱</span> Spedizione gratuita su ordini di cover e pellicole.
              </p>
            </div>

            <button
              onClick={handleBackClick}
              className="mt-4 bg-orange-500 rounded-3xl px-4 py-2 w-full hover:bg-orange-400 text-black font-bold"
            >
              INDIETRO
            </button>
          </div>

          {/* Colonna 2: Immagine principale */}
          <div className="mt-4 flex justify-center items-start lg:w-1/3">
            {imgpiccolaErrors.main ? (
              <div className="w-full max-w-md bg-gray-300 p-4 flex justify-center items-center text-white font-semibold">
                Immagine non disponibile
              </div>
            ) : (
              <div className="w-full max-w-lg p-4 flex justify-center items-center transition-transform">
                <img
                  src={mainImage}
                  alt={mainImage}
                  className="w-full h-auto object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                  onError={() => handleImageError('main')}
                />
              </div>
            )}
          </div>

          {/* Colonna 3: Miniature */}
          <div className="flex justify-center items-start lg:w-1/3">
            {/* In modalità small e md le miniature sono disposte in riga, in lg in colonna */}
            <div className="flex flex-row lg:flex-col gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="cursor-pointer">
                  <div
                    onClick={() => changeImage(image.src)}
                    className={`w-30 h-28 rounded-md p-1 transition-all duration-200 ${
                      selectedImage === image.src ? 'bg-gray-400' : 'bg-gray-200'
                    } hover:bg-gray-300`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ShowDetail



