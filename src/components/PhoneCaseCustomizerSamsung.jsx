import React, { useState, useEffect } from "react";

const PhoneCaseCustomizerSamsung = ({ 
    setSelectedColor, 
    setSelectedPrice, 
    setSelectedTextColorSamsung,
    setSelectedTextSamsung,
    setSelectedFontSamsung, // ➕ AGGIUNTA 
}) => {

    const [color, setColor] = useState("#ff0000");
    const [text, setText] = useState("");
    const [fontFamily, setFontFamily] = useState("Arial");
    const [textColorSamsung, setTextColorSamsung] = useState("#ffffff");

    const coverPrice = 308;
    const fonts = [
        "Arial", "Verdana", "Tahoma", "Trebuchet MS",
        "Georgia", "Times New Roman", "Courier New", "Comic Sans MS"
    ];

    const formatPrice = (value) =>
        new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR",
        }).format(value);

    useEffect(() => {
        setSelectedColor(color);
        setSelectedPrice(coverPrice);
        setSelectedTextColorSamsung(textColorSamsung);
        setSelectedFontSamsung(fontFamily);
    }, [color, coverPrice, fontFamily, setSelectedFontSamsung, setSelectedColor, setSelectedTextColorSamsung, setSelectedPrice]);

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        setSelectedColor(newColor); 
    };

    const handleTextColorChange = (e) => {
        const newColor = e.target.value;
        setTextColorSamsung(newColor);
        setSelectedTextColorSamsung(newColor);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setText(value);
        setSelectedTextSamsung(value); // ➕ Informa il parent del nuovo testo
    };

    const handleFontChange = (e) => {
        const newFont = e.target.value;
        setFontFamily(newFont);
        setSelectedFontSamsung(newFont);
      };
      
    

    return (
        <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen gap-8 p-8 bg-gray-100">
            {/* LEFT SIDE: Cover */}
            <div className="flex justify-center w-full lg:w-1/2 pt-16">
                <div className="relative w-40 h-80 rounded-2xl shadow-xl transition-all duration-300" style={{ backgroundColor: color }}>
                    {/* Fotocamere Samsung */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 bg-gray-700 rounded-full ring-2 ring-blue-100"></div>
                            </div>
                        ))}
                    </div>

                    {/* Testo personalizzato */}
                    <div className="absolute inset-0 flex items-center justify-center pt-20">
                        {text && (
                            <p
                                className="text-xl text-center h-[50px] w-[150px] break-words"
                                style={{ fontFamily, color: textColorSamsung }}
                            >
                                {text}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Controls */}
            <div className="flex flex-col space-y-6 w-full lg:w-1/2">
                <h1 className="text-2xl font-bold">Personalizza la tua cover</h1>

                {/* Colore cover */}
                <div className="flex flex-col items-start space-y-2">
                    <label className="font-medium">Colore della cover:</label>
                    <input
                        type="color"
                        value={color}
                        onChange={handleColorChange}
                        className="w-24 h-12 border-2 border-gray-300 rounded-md cursor-pointer"
                    />
                </div>

                {/* Input testo */}
                <div className="flex flex-col space-y-2">
                    <label className="font-medium">Inserisci la tua frase:</label>
                    <input
                        type="text"
                        placeholder="Scrivi qualcosa..."
                        value={text}
                        onChange={handleInputChange}
                        maxLength={50}
                        className={`p-2 rounded border-2 transition-all duration-300 focus:outline-none focus:ring-0 ${
                            text ? "border-orange-500" : "border-gray-300"
                        }`}
                    />
                </div>

                {/* Colore testo */}
                <div className="flex flex-col items-start space-y-2">
                    <label className="font-medium">Colore del testo:</label>
                    <input
                        type="color"
                        value={textColorSamsung}
                        onChange={handleTextColorChange}
                        className="w-24 h-12 border-2 border-gray-300 rounded-md cursor-pointer"
                    />
                </div>

                {/* Font */}
                <div className="flex flex-col items-start space-y-2">
                    <label className="font-medium">Font:</label>
                    <select
                        value={fontFamily}
                        onChange={handleFontChange}
                        className="bg-gray-200 transition-all duration-300 hover:bg-gray-100 border hover:border-orange-500 p-2 rounded"
                    >
                        {fonts.map((font) => (
                            <option key={font} value={font} style={{ fontFamily: font }}>
                                {font}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Prezzo (opzionale) */}
                <div className="text-sm text-gray-700">
                    Prezzo cover: {formatPrice(coverPrice)}
                </div>
            </div>
        </div>
    );
};

export default PhoneCaseCustomizerSamsung;
