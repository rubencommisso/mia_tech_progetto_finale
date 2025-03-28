import React, { useState, useEffect } from 'react';
import coverColorate from '../assets/coverColorate.jpeg';
import pellicole from '../assets/pellicole.jpeg';
import ringPhone from '../assets/ringPhone.jpeg';
import kitPulizia from '../assets/kitPulizia.jpeg';


const CarousellHomepage = () => {
  const images = [
    { id: 1, text: 'Immagine 1', image: coverColorate },
    { id: 2, text: 'Immagine 2', image: pellicole },
    { id: 3, text: 'Immagine 3', image: ringPhone },
    { id: 4, text: 'Immagine 4', image: kitPulizia },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    // Stesso "container" dei div sottostanti: w-[90vw] max-w-screen-xl mx-auto
    <div className="w-[80vw] max-w-screen-xl mx-auto mt-8">
      {/* 1) Carosello con rapporto 16/10 (o quello che preferisci) */}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">

        <img
          src={images[currentIndex].image}
          alt={images[currentIndex].text}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
        />

          {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? 'bg-black' : 'bg-white'
              }`}
            ></button>
          ))}
          </div> */}
          
      </div>
    </div>
  );
};

export default CarousellHomepage;

