import React, { useState } from 'react';

const Carousell = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div
        className={`relative w-[40vw] h-[50vh] flex justify-center items-center rounded-lg overflow-hidden transition-all duration-500 bg-gray-200`}
      >
        <button
          onClick={prevImage}
          className="absolute left-4 text-black bg-white p-2 rounded-full"
        >
          &lt;
        </button>

        <img
          src={images[currentIndex]}
          alt={`Immagine ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />

        <button
          onClick={nextImage}
          className="absolute right-4 text-black bg-white p-2 rounded-full"
        >
          &gt;
        </button>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${index === currentIndex ? 'bg-black' : 'bg-white'}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousell;


