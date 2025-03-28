import React, { useState, useEffect } from "react";

const PhoneCaseCustomizerSamsung = ({setSelectedColor, setSelectedPrice}) => {
    const [color, setColor] = useState("#ff0000"); // Colore iniziale rosso
    const coverPrice = 308;

    const formatPrice = (value) =>
        new Intl.NumberFormat("it-IT", {
          style: "currency",
          currency: "EUR",
        }).format(value);

    useEffect(() => {
            setSelectedColor(color);
            setSelectedPrice(coverPrice);
          }, [color, coverPrice, setSelectedColor, setSelectedPrice]);

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);              // aggiorna lo stato locale
        setSelectedColor(newColor);      // aggiorna anche il parent (Product.jsx)
      };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 space-y-6">
            <h1 className="text-2xl font-bold">Personalizza la tua cover</h1>

            {/* Mockup della cover */}
            <div
                className="flex justify-between w-40 h-80 rounded-lg shadow-xl transition-all duration-300"
                style={{ backgroundColor: color }}
            > <div>
                    <div className="w-12 h-12 bg-black rounded-full mr-auto ml-4 mt-3 flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-700 rounded-full ring-2 ring-blue-100"></div>
                    </div>
                    <div className="w-12 h-12 bg-black rounded-full mr-auto ml-4 mt-1 flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-700 rounded-full ring-2 ring-blue-100"></div>
                    </div>
                    <div className="w-12 h-12 bg-black rounded-full mr-auto ml-4 mt-1 flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-700 rounded-full ring-2 ring-blue-100"></div>
                    </div>
                </div>
            </div>

            {/* Selettore colore */}
            <input
                type="color"
                value={color}
                onChange={handleColorChange}
                className="w-24 h-12 border-2 border-gray-300 rounded-md cursor-pointer"
            />

            <p className="text-sm">Colore selezionato: {color}</p>
            <div>cover price:{formatPrice(coverPrice)}</div>
        </div>
    );
};

export default PhoneCaseCustomizerSamsung;