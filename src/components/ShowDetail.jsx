import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ShowDetail = () => {
    const { state } = useLocation()
    const { product } = state || {}
    const [mainImage, setMainImage] = useState(product ? product.images[0].src : '')
    const [selectedImage, setSelectedImage] = useState(product ? product.images[0].src : '')
    const [imgpiccolaErrors, setImgpiccolaErrors] = useState({})  
    const navigate = useNavigate()

    
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

    }

    const handleBackClick = () => {
        navigate(-1)  
    }

    if (!product) {
        return <div>Prodotto non trovato!</div>
    }

    return (
        <div className='min-h-screen bg-gray-100 pt-0 pb-0'>
            <div className="p-6 flex flex-wrap gap-3 md:mb-32 bg-gray-100">
              
                <div className="flex flex-col gap-4 w-24 md:ml-52 md:mt-4">
                    {product.images.map((image, index) => (
                        <div key={index} className="mb-4">
                            <div
                                onClick={() => changeImage(image.src)} 
                                className={`w-24 h-24 rounded-md  m-2 p-1 cursor-pointer transition-all duration-200 ${selectedImage === image.src ? 'bg-gray-400' : 'bg-gray-200'}`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-24 h-24 object-contain rounded-md"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                
                <div className="flex-1">
                    {imgpiccolaErrors["main"] ? (
                        <div className="w-full max-w-md h-64 md:ml-36 bg-gray-300 flex justify-center items-center text-white font-semibold">
                            Immagine non disponibile
                        </div>
                    ) : (
                        <div
                            className="md:h-[500px] md:w-[500px] w-full h-[300px] md:ml-4 md:mt-4 rounded-lg flex justify-center items-center"
                            onError={() => handleImageError("main")}
                        >
                            <img src={mainImage} alt={mainImage} className="w-full h-full object-contain" />
                        </div>
                    )}
                </div>

                <div className="flex flex-col mr-auto md:w-80 md:pl-6 w-full gap-4 md:mr-64 md:mt-4">
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="text-4xl flex font-bold mb-6">{product.title}</h1>
                        <h3 className="text-xl text-gray-700 font-medium mb-4 md:w-full">Proteggi il tuo smartphone con stile!</h3>
                        <div className="flex flex-col gap-4 w-full md:w-auto">
                            <button
                                className="bg-orange-500 rounded-3xl px-1 py-2 w-72 md:w-54 justify-center hover:bg-orange-400 text-black font-semibold"
                                onClick={handleAddToCart}
                            >
                                Add to bag
                            </button>

                            <div className="md:mt-5 flex md:flex-col gap-4">
                                <p><span role="img" aria-label="local shipping">🚚</span> Spedisce entro cinque giorni lavorativi.</p>
                                <p><span role="img" aria-label="verified user">✅</span><u>Garanzia di restituzione entro 30 giorni + garanzia limitata.</u></p>
                                <p><span role="img" aria-label="cover">📱</span> Spedizione gratuita su ordini di cover e pellicole.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={handleBackClick}
                className="bg-orange-500 hover:bg-orange-400 text-black font-semibold rounded-xl p-2 m-2 flex justify-center items-center"
            >
                BACK
            </button>
        </div>
    )
}

export default ShowDetail










