import React, { useState, useEffect } from "react";

const PhoneCaseCustomizerIphone = ({ setSelectedColor, setSelectedPrice }) => {
    const [color, setColor] = useState("#ff0000"); // Colore iniziale rosso
    const [text, setText] = useState("");
    const [showText, setShowText] = useState("");
    const [fontFamily, setFontFamily] = useState("Arial");
    const [textColor, setTextColor] = useState("#ffffff")

    const coverPrice = 308;
    const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana", "Comic Sans MS"];

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

    const handleInputChange = (e) => {
        setText(e.target.value);
    }; // input utente

    const handleSubmit = () => {
        setShowText(text);
    }; // bottone per testo

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 space-y-6">
            <h1 className="text-2xl font-bold">Personalizza la tua cover</h1>

            {/* Mockup della cover */}
            <div
                className="relative w-40 h-80 rounded-3xl shadow-xl transition-all duration-300"
                style={{ backgroundColor: color }}
            >
                {/* Camera cutouts */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-700 rounded-full ring-2 ring-blue-100"></div>
                </div>
                <div className="absolute top-20 left-4 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-700 rounded-full ring-2 ring-blue-100"></div>
                </div>
                <div className="absolute top-12 right-10 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-gray-700 rounded-full ring-2 ring-blue-100"></div>
                </div>

                {/* Testo al centro della cover */}
                <div className="absolute pt-20 inset-0 flex items-center justify-center">
                    {showText && (

                        <p
                            className="text-xl text-center h-[50px] w-[150px] break-words "
                            style={{ fontFamily, color: textColor }}
                        >
                            {showText}
                        </p>
                    )}
                </div>
            </div>

            {/* Selettore colore cover*/}
            <div className="flex flex-col items-center space-y-2">
                <label className="font-medium">Seleziona il colore della cover:</label>
                <input
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    className="w-24 h-12 border-2 border-gray-300 rounded-md cursor-pointer"
                />

            </div>
            {/* Selettore colore testo */}
            <div className="flex flex-col items-center space-y-2">
                <label className="font-medium">Seleziona il colore del testo:</label>
                <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-24 h-12 border-2 border-gray-300 rounded-md cursor-pointer"
                />
            </div>
            {/* input di testo */}
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Scrivi qualcosa..."
                    value={text}
                    onChange={handleInputChange}
                    maxLength={50}
                    className="border p-2 rounded"
                />
                <button
                    onClick={handleSubmit}
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Mostra
                </button>
            </div>
            <div className="p-4">
                <label className="mr-2 font-medium">Font:</label>
                <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    className="border p-2 rounded"
                >
                    {fonts.map((font) => (
                        <option key={font} value={font} style={{ fontFamily: font }}>
                            {font}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    );
};

export default PhoneCaseCustomizerIphone;



