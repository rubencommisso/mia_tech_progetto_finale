import React, { useState } from "react";

const PhoneCaseCustomizerIphone = () => {
    const [color, setColor] = useState("#ff0000"); // Colore iniziale rosso

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 space-y-6">
            <h1 className="text-2xl font-bold">Personalizza la tua cover</h1>

            {/* Mockup della cover */}
            <div
                className="flex justify-between w-40 h-80 rounded-3xl shadow-xl transition-all duration-300"
                style={{ backgroundColor: color }}
            > <div>
                    <div className="w-12 h-12 bg-black rounded-full mr-auto ml-4 mt-4 flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-700 rounded-full ring-2 ring-blue-100"></div>
                    </div>
                    <div className="w-12 h-12 bg-black rounded-full mr-auto ml-4 mt-4 flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-700 rounded-full ring-2 ring-blue-100"></div>
                    </div>
                    {/* Camera cutout */}
                </div>
                <div>
                    <div className="w-12 h-12 bg-black rounded-full ml-auto mr-10 mt-11 flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-700 rounded-full ring-2 ring-blue-100"></div>

                    </div>


                </div>
            </div>

            {/* Selettore colore */}
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-24 h-12 border-2 border-gray-300 rounded-md cursor-pointer"
            />

            <p className="text-sm">Colore selezionato: {color}</p>
        </div>
    );
};

export default PhoneCaseCustomizerIphone;
