import React, { useState } from 'react';

const CarousellHomepage = () => {
  const images = [
    { id: 1, text: 'Immagine 1', bgColor: 'bg-gray-200' },
    { id: 2, text: 'Immagine 2', bgColor: 'bg-gray-300' },
    { id: 3, text: 'Immagine 3', bgColor: 'bg-gray-400' },
    { id: 4, text: 'Immagine 4', bgColor: 'bg-gray-500' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  return (
    <div className="flex justify-center items-center mt-8">
      <div
        className={`relative w-[90vw] h-[90vh] flex justify-center items-center rounded-lg overflow-hidden transition-all duration-500 ${images[currentIndex].bgColor}`}
      >

<div className="absolute top-10 text-center">
    <h1 className="text-4xl font-bold text-black">Titolo principale</h1>
    <h2 className="text-2xl text-black mt-2">Sottotitolo descrittivo</h2>
  </div>

    
       {/*  <button
          onClick={prevImage}
          className="absolute left-4 text-black bg-white p-2 rounded-full"
        >
          &lt;
        </button>

        <div className="text-black text-xl font-semibold text-center">
          <p>{images[currentIndex].text}</p>
        </div>

        <button
          onClick={nextImage}
          className="absolute right-4 text-black bg-white p-2 rounded-full"
        >
          &gt;
        </button> */}

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
  )
}

export default CarousellHomepage