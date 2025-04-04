import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import esempio from '@assets/esempio.jpg'
import Card from '@components/card'
import pellicola from '@assets/pellicola.jpeg'
import pellicole from '@assets/pellicole.jpeg'
import pellicole2 from '@assets/pellicole2.jpeg'


const Pellicole = () => {
    const [activeCardId, setActiveCardId] = useState(null);
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);


    const CardProduct = [
        {
            src: 'piccola-1.jpg',
            alt: 'imgpiccola 1',
            id: 1,
            title: "Pellicola pvc super resistente effetto satinato",
            price: 20,
            image: pellicole,
            images: [
                { src: pellicola, alt: 'imgpiccola 1' },
                { src: pellicole, alt: 'imgpiccola 2' },
                { src: pellicole2, alt: 'imgpiccola 3' }
            ]
        },
        {
            src: 'piccola-2.jpg',
            alt: 'imgpiccola 1',
            id: 2,
            title: "Pellicola vetro temprato antigraffio",
            price: 30,
            image: pellicole2,
            images: [
                { src: pellicola, alt: 'imgpiccola 4' },
                { src: pellicole, alt: 'imgpiccola 5' },
                { src: pellicole2, alt: 'imgpiccola 6' }
            ]
        },
        {
            src: 'piccola-2.jpg',
            alt: 'imgpiccola 2',
            id: 3,
            title: "Pellicola vetro temprato anti-impronte",
            price: 40,
            image: pellicola,
            images: [
                { src: pellicola, alt: 'imgpiccola 7' },
                { src: pellicole, alt: 'imgpiccola 8' },
                { src: pellicole2, alt: 'imgpiccola 9' }
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
      }, [])

      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    

    const handleCardClick = (id) => {
        setActiveCardId(id);
        navigate(`/showdetail/${id}`, { state: { product: CardProduct.find(product => product.id === id) } })
        
    }

    
    const handleAddToCart = (product) => {
        console.log(`Aggiunto al carrello: ${product.title}`)

        const savedCart = JSON.parse(localStorage.getItem("cart")) || []
    
        if (isNaN(product.price) || product.price <= 0) {
            console.error("Prezzo non valido per il prodotto", product)
            return;
        }

        const existingProductIndex = savedCart.findIndex(item => item.id === product.id)
    
        if (existingProductIndex !== -1) {
          
            savedCart[existingProductIndex].quantity += 1
        } else {
           
            savedCart.push({ ...product, quantity: 1 })
        }
    
        localStorage.setItem("cart", JSON.stringify(savedCart))
        navigate('/cart')
    }
    

    return (
        <div className="bg-gray-100 p-2 md:p-2 flex justify-center items-center">
            <div className="max-w-6xl mx-auto flex flex-col justify-center">
                <h1 className="text-4xl text-center md:mt-2 md:mb-2 font-bold">Pellicole</h1>
                <h2 className="text-3xl font-semibold text-center mt-2 md:mb-2">Scegli la pellicola che desideri!</h2>

                <div className="grid grid-cols-1 justify-items-center gap-6 m-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                                className="mt-1 bg-orange-500 hover:bg-orange-400 text-black py-2 px-3 rounded-3xl w-[170px] min-w-[100px]"
                                onClick={() => handleAddToCart(product)}
                            >
                                Aggiungi al carrello
                            </button>
                        </div>
                    ))}
                </div>
                <div >
                    <h2 className="text-4xl text-center font-semibold mb-12">Dettagli aggiuntivi sulle Pellicole per Cellulari</h2>
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
                    <p className="text-gray-700 pb-6 text-2xl">
                        Per mantenere la pellicola in buone condizioni, è consigliabile pulirla regolarmente con un panno morbido e
                        asciutto. Evita di utilizzare detergenti abrasivi che potrebbero danneggiare la pellicola.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Pellicole





