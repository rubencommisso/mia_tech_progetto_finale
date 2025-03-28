import React, { useState } from 'react'

const ShowDetail = () => {
    const images = [
        { src: 'grande-immagine.jpg', alt: 'Immagine principale', title: 'Pellicola per cellulare 1', id: 1, bgColor: '#d3d3d3' },
        { src: 'piccola-1.jpg', alt: 'imgpiccola 1', title: 'Pellicola 1', id: 2, bgColor: '#c1c1c1' },
        { src: 'piccola-2.jpg', alt: 'imgpiccola 2', title: 'Pellicola 2', id: 3, bgColor: '#b0b0b0' },
        { src: 'piccola-3.jpg', alt: 'imgpiccola 3', title: 'Pellicola 3', id: 4, bgColor: '#a1a1a1' },
        { src: 'piccola-4.jpg', alt: 'imgpiccola 4', title: 'Pellicola 4', id: 5, bgColor: '#909090' },
    ]

    const [mainImage, setMainImage] = useState(images[0].src)
    const [imageError, setImageError] = useState(false)
    const [imgpiccolaErrors, setImgpiccolaErrors] = useState({})
    const [mainImageTitle, setMainImageTitle] = useState(images[0].title)


    const changeImage = (imageSrc, imageTitle) => {
        setMainImage(imageSrc)
        setMainImageTitle(imageTitle)
        setImageError(false)
    }

    const handleImageError = (imageType, index) => {
        if (imageType === "main") {
            setImageError(true)
        } else {
            setImgpiccolaErrors(prevState => ({ ...prevState, [index]: true }))
        }
    }

    

    return (
        <div className=' min-h-screen bg-gray-100'>
            <div className="p-6 flex flex-wrap gap-3 md:mb-44">
                <div className="flex flex-col gap-4 w-24 md:ml-52 md:mt-4">
                    {images.slice(1).map((image, index) => (
                        <div key={index}>
                            {imgpiccolaErrors[index] ? (
                                <div className="w-24 h-24 bg-gray-300 flex justify-center items-center text-white font-semibold">
                                    Immagine non disponibile
                                </div>
                            ) : (
                                <div
                                    style={{ backgroundColor: image.bgColor }}
                                    className="w-24 h-24 rounded-md cursor-pointer hover:scale-105 transition-transform"
                                    onClick={() => changeImage(image.src, image.title)}
                                    onError={() => handleImageError("thumbnail", index)}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex-1">
                    {imageError ? (
                        <div className="w-full max-w-md h-64 md:ml-36 bg-gray-300 flex justify-center items-center text-white font-semibold">
                            Immagine non disponibile
                        </div>
                    ) : (
                        <div
                
                            className=" md:h-full md:w-11/12 border md:mt-4 border-black rounded-lg flex justify-center items-center"
                            onError={() => handleImageError("main")}
                        >
                            <span className="text-black text-center text-xl font-semibold">{mainImageTitle}</span>
                        </div>
                    )}

                </div>
                <div className="flex flex-col md:w-80 md:pl-6 w-full gap-4 md:mr-64 md:mt-4">
                    <h1 className="text-4xl flex  font-bold mb-6">Nome Pellicola</h1>
                    <h3 className="text-xl text-gray-700 font-medium mb-4 md:w-full">Proteggi il tuo smartphone con stile!</h3>
                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <div>
                            <button className="bg-orange-500 rounded-3xl  px-1 py-2 w-72 md:w-54 justify-center  hover:bg-orange-400  text-black font-semibold ">AddButton</button>
                        </div>
                      
                        <div className=" md:mt-5 flex md:flex-col gap-4">
                            <p><span role="img" aria-label="local shipping">🚚</span> Spedisce entro cinque giorni lavorativi.</p>
                            <p><span role="img" aria-label="verified user">✅</span><u>Garanzia di restituzione entro 30 giorni + garanzia limitata.</u> </p>
                            <p><span role="img" aria-label="cover">📱</span> Spedizione gratuita su ordini di cover e pellicole.</p>
                        </div>

                    </div>
                </div>
            </div>



            <div className="m-24 mt-44" id="more-info">
                <h2 className="text-6xl text-center font-semibold   mb-12">Dettagli aggiuntivi sulle Pellicole per Cellulari</h2>
                <p className="text-gray-700 text-justify text-xl mt-10">
                    Le pellicole per cellulari sono progettate per proteggere il tuo dispositivo da graffi, urti e polvere. Sono
                    realizzate con materiali di alta qualità che garantiscono una protezione completa senza compromettere la
                    sensibilità del touchscreen.
                </p>

                <h3 className="text-3xl font-bold mb-2 mt-20">Vantaggi principali:</h3>
                <ul className="list-disc pl-6 text-gray-600">
                    <li>Protezione contro graffi e danni alla superficie dello schermo.</li>
                    <li>Facile applicazione senza bolle d'aria.</li>
                    <li>Non altera la qualità delle immagini o la sensibilità al tocco.</li>
                    <li>Compatibile con la maggior parte dei modelli di smartphone.</li>
                </ul>

                <h3 className="text-2xl font-extrabold mt-12 mb-2">Tipologie di pellicole disponibili:</h3>
                <p className="text-gray-900 font-black">
                    Esistono diverse tipologie di pellicole, come quelle in vetro temperato o in plastica, ognuna con specifici
                    vantaggi. Le pellicole in vetro temperato offrono una protezione maggiore contro gli urti, mentre quelle in
                    plastica sono più sottili e leggere, ma comunque efficaci nel prevenire graffi.
                </p>

                <h3 className="text-4xl font-bold text-center mt-12 mb-10">Come scegliere la pellicola giusta per il tuo smartphone:</h3>
                <p className="text-gray-700 text-lg">
                    Quando scegli una pellicola per il tuo smartphone, è importante considerare il tipo di utilizzo che fai del
                    tuo dispositivo e il livello di protezione che desideri. Se utilizzi spesso il telefono all'aperto o in
                    ambienti polverosi, una pellicola in vetro temperato potrebbe essere la scelta migliore.
                </p>

                <h3 className="text-3xl font-semibold mt-10 mb-2">Manutenzione e cura della pellicola:</h3>
                <p className="text-gray-700 text-2xl">
                    Per mantenere la pellicola in buone condizioni, è consigliabile pulirla regolarmente con un panno morbido e
                    asciutto. Evita di utilizzare detergenti abrasivi che potrebbero danneggiare la pellicola.
                </p>
            </div>
        </div>
    )
}

export default ShowDetail









