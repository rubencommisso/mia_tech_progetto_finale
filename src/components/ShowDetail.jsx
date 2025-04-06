import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ShowDetail = () => {
    const { state } = useLocation()
    const { product } = state || {}
    const [mainImage, setMainImage] = useState(product ? product.images[0].src : '')
    const [selectedImage, setSelectedImage] = useState(product ? product.images[0].src : '')
    const [imgpiccolaErrors, setImgpiccolaErrors] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const changeImage = (imageSrc) => {
        setMainImage(imageSrc)
        setSelectedImage(imageSrc)
    }

    const handleImageError = (imageType, index) => {
        if (imageType === 'main') {
            setImgpiccolaErrors(prevState => ({ ...prevState, [index]: true }))
        }
    }

    const handleAddToCart = () => {
        console.log(`Aggiunto al carrello: ${product.title}`)

        const savedCart = JSON.parse(localStorage.getItem("cart")) || []

        const existingProductIndex = savedCart.findIndex(item => item.id === product.id)

        if (existingProductIndex !== -1) {
            savedCart[existingProductIndex].quantity += 1
        } else {
            savedCart.push({ ...product, quantity: 1 })
        }

        localStorage.setItem("cart", JSON.stringify(savedCart))
        navigate('/cart')
    }

    const handleBackClick = () => {
        navigate(-1)
    }

    if (!product) {
        return <div>Prodotto non trovato!</div>
    }

    return (
        <div className='min-h-screen bg-gray-100 flex flex-col pt-4'>
        
            <button
                onClick={handleBackClick}
                className="bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-3xl px-2 py-2 mr-12 ml-6 md:w-32 md:h-10 md:absolute relative mt-16  md:bottom-64 md:left-16 "
            >
                INDIETRO
            </button>

            <div className="p-6 flex flex-col gap-2 md:flex-row md:gap-6  md:space-x-4 md:mr-40 md:ml-16">
            
                <div className="flex gap-2 overflow-x-auto md:flex-col md:w-32">
                    {product.images.map((image, index) => (
                        <div key={index} className="cursor-pointer">
                            <div
                                onClick={() => changeImage(image.src)}
                                className={`w-24 h-24 rounded-md p-1 m-4 md:m-2 transition-all duration-200 ${selectedImage === image.src ? 'bg-gray-400' : 'bg-gray-200'}`}
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

             
                <div className="flex-1 flex justify-center items-center">
                    {imgpiccolaErrors["main"] ? (
                        <div className="w-full max-w-md h-64 bg-gray-300 flex justify-center items-center text-white font-semibold">
                            Immagine non disponibile
                        </div>
                    ) : (
                        <div className="w-full max-w-lg h-64 md:h-[500px] flex justify-center items-center">
                            <img
                                src={mainImage}
                                alt={mainImage}
                                className="w-full h-full object-contain rounded-lg"
                                onError={() => handleImageError("main")}
                            />
                        </div>
                    )}
                </div>

                <div className="flex flex-col md:flex-row md:w-1/3 gap-1">
                    <div className="flex flex-col items-start text-center md:text-left">
                        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                        <h3 className="text-xl text-gray-700 font-medium mb-4">Proteggi il tuo smartphone con stile!</h3>

                    
                        <button
                            className="bg-orange-500 rounded-3xl px-4 py-2 w-full hover:bg-orange-400 text-black font-bold"
                            onClick={handleAddToCart}
                        >
                            Aggiungi al carrello
                        </button>

                        <div className="mt-4 flex flex-col gap-3">
                            <p><span role="img" aria-label="local shipping">🚚</span> Spedisce entro cinque giorni lavorativi.</p>
                            <p><span role="img" aria-label="verified user">✅</span><u>Garanzia di restituzione entro 30 giorni + garanzia limitata.</u></p>
                            <p><span role="img" aria-label="cover">📱</span> Spedizione gratuita su ordini di cover e pellicole.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowDetail











