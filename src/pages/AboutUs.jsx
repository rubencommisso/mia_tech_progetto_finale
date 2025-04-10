import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';  
import { Link } from 'react-router-dom'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  
  
  return (
    <div className="about-us-container bg-white text-gray-800">
    <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="text-center mb-12">
    <h1
    className="text-4xl font-extrabold text-gray-800 mb-4"
    data-aos="fade-up"
    data-aos-duration="1000"
    >
    Chi Siamo
    </h1>
    <p
    className="text-lg text-gray-700"
    data-aos="fade-up"
    data-aos-duration="1500"
    data-aos-delay="500"
    >
    Siamo un'azienda innovativa che offre prodotti di qualità per il tuo smartphone, sempre attenti all'ambiente.
    Scopri la nostra missione, i nostri valori e il nostro impegno.
    </p>
    </div>
    
    <div className="about-us-content max-w-3xl mx-auto text-center">
    <div className="relative">
    <h2
    className="text-2xl font-semibold text-gray-800 mb-4"
    data-aos="fade-up"
    data-aos-duration="1000"
    >
    La Nostra Missione
    </h2>
    
    <div
    className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-full' : 'max-h-0 overflow-hidden'}`}
    >
    <p className="text-lg text-gray-700 leading-relaxed">
    Siamo appassionati di protezione del telefono, innovazione e sostenibilità. Offriamo pellicole protettive e cover
    progettate per durare e proteggere i tuoi dispositivi, utilizzando materiali eco-compatibili a basso impatto ambientale.
    </p>
    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
    Ogni nostro prodotto è pensato per chi desidera il meglio per il proprio smartphone senza compromettere l'ambiente. I nostri materiali biodegradabili e riciclati riducono l'uso della plastica, proteggendo il tuo dispositivo e il nostro pianeta.
    </p>
    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
    Offriamo anche cover personalizzabili, non solo per la protezione, ma anche per dare un tocco di stile al tuo smartphone.
    </p>
    </div>
    
    <div
    className="absolute left-1/2 transform -translate-x-1/2 mt-6"
    >
    <button onClick={toggleContent}>
    <FaChevronDown
    className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
    style={{ fontSize: '2rem', color: '#333' }}
    />
    </button>
    </div>
    </div>
    </div>
    
    <div
    className="text-center mt-16"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="1000"
    >
    <h3 className="text-3xl font-semibold text-gray-800 mb-4">
    Unisciti a Noi nel Viaggio verso un Futuro Sostenibile
    </h3>
    <p className="text-lg text-gray-700 mb-4">
    Ogni acquisto contribuisce a ridurre l'impatto ambientale. Scegliendo i nostri prodotti, riduciamo insieme la plastica e proteggiamo il nostro pianeta.
    </p>
    </div>
    
{/*     <div className="mt-24">
    <h2
    className="text-3xl font-bold text-center text-gray-800 mb-8"
    data-aos="fade-up"
    data-aos-duration="1000"
    >
    Ultimi Aggiornamenti
    </h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {recentProducts.map((product, index) => (
      <div
      key={index}
      className="bg-white border rounded-lg shadow-md p-6"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={`${index * 300}`}
      >
      <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
      {product.name}
      </h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <Link
      to={`/sustainability/${index + 1}`}  
      className="text-orange-600 hover:text-orange-700 font-semibold"
      >
      Scopri di più
      </Link>
      </div>
    ))}
    </div>
    </div> */}
    </div>
    </div>
  );
};

export default AboutUs;
