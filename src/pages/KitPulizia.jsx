import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import esempio from '@assets/esempio.jpg'
import Card from '@components/card'
import kitPulizia from '@assets/kitPulizia.jpeg'
import pulizia2 from '@assets/pulizia2.jpg'
import pulizia3 from '@assets/pulizia3.jpg'


const KitPulizia = () => {
    const [activeCardId, setActiveCardId] = useState(null);
    const navigate = useNavigate();

    const CardProduct = [
        {
            src: 'kitpulizia-1.jpg',
            alt: 'kitpulizia 1',
            id: 1,
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
            id: 2,
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
            id: 3,
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

    const handleCardClick = (id) => {
        setActiveCardId(id);
        navigate(`/showdetail/${id}`, { state: { product: CardProduct.find(product => product.id === id) } })
    }

    const handleAddToCart = (product) => {
        console.log(`Aggiunto al carrello: ${product.title}`)
         

    }

    return (
        <div className="bg-gray-100 p-6 md:p-2 flex justify-center items-center">
            <div className="max-w-6xl mx-auto flex flex-col justify-center">
                <h1 className="text-4xl text-center md:mt-2 md:mb-20 font-bold">Kit Pulizia</h1>
                <h2 className="text-3xl font-semibold text-center mt-2 md:mb-16">Scegli il kit di pulizia per il tuo dispositivo!</h2>

                <div className="grid grid-cols-1 justify-items-center gap-12 m-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {CardProduct.map((product) => (
                        <div key={product.id} className="flex flex-col justify-center items-center sm:w-48 sm-52 md:w-60 md:h-80 p-6 md:mb-20 rounded-2xl shadow-lg">
                            <Card
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                activeCardId={activeCardId}
                                onClick={() => handleCardClick(product.id)}
                            />
                            <button
                                className="mt-1 bg-orange-400 hover:bg-orange-300 text-black py-2 px-10 rounded-2xl"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to bag
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-2">
                    <h2 className="text-4xl text-center font-semibold mb-12">Dettagli aggiuntivi sui Kit di Pulizia per Cellulari</h2>
                    <p className="text-gray-700 text-justify text-xl mt-10">
                        I kit di pulizia per smartphone sono pensati per mantenere il tuo dispositivo pulito e senza polvere. Utilizzare i giusti strumenti di pulizia può migliorare la durata del tuo telefono e la visibilità dello schermo.
                    </p>

                    <h3 className="text-3xl font-bold mb-2 mt-20">Vantaggi principali dei Kit di Pulizia:</h3>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>Rimuove polvere, impronte e macchie dallo schermo senza danneggiarlo.</li>
                        <li>Il panno in microfibra è delicato e non graffia la superficie del dispositivo.</li>
                        <li>Comodo e facile da usare: porta il kit sempre con te!</li>
                        <li>Prolungano la vita del tuo dispositivo, mantenendolo come nuovo.</li>
                    </ul>

                    <h3 className="text-2xl font-extrabold mt-12 mb-2">Come utilizzare il Kit di Pulizia:</h3>
                    <p className="text-gray-900 font-black">
                        Utilizza il panno in microfibra per pulire delicatamente lo schermo e la scocca del dispositivo. Se necessario, spruzza una piccola quantità di spray direttamente sul panno (non sul dispositivo!) e rimuovi macchie e polvere.
                    </p>

                    <h3 className="text-4xl font-bold text-center mt-12 mb-10">Come scegliere il kit giusto per il tuo smartphone:</h3>
                    <p className="text-gray-700 text-lg">
                        Se desideri un kit completo per la pulizia quotidiana, un kit che include sia il panno che lo spray è la scelta migliore. Se hai bisogno di un'opzione più leggera, un semplice panno in microfibra potrebbe essere sufficiente.
                    </p>

                    <h3 className="text-3xl font-semibold mt-10 mb-2">Manutenzione e cura del Kit di Pulizia:</h3>
                    <p className="text-gray-700 pb-6 text-2xl">
                        Per mantenere il kit in buone condizioni, lavare il panno in microfibra con acqua tiepida e senza detersivo, evitando l'uso di ammorbidenti. Inoltre, conserva lo spray in un luogo fresco e asciutto per evitare che si danneggi.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default KitPulizia
