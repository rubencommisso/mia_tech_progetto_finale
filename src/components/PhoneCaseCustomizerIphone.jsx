import React, { useState, useEffect } from "react";

const PhoneCaseCustomizerIphone = ({ 
    setSelectedColor, 
    setSelectedPrice, 
    setSelectedTextColorIphone, 
    setSelectedTextIphone, 
    setSelectedFontIphone,
}) => {

    const [color, setColor] = useState("#ff0000"); // Colore iniziale rosso
    const [text, setText] = useState("");
    const [fontFamily, setFontFamily] = useState("Arial");
    const [textColorIphone, setTextColorIphone] = useState("#ffffff")

    const coverPrice = 308;
    const fonts = ["Arial", "Verdana", "Tahoma", "Trebuchet MS", "Georgia", "Times New Roman", "Courier New", "Comic Sans MS"];

    const formatPrice = (value) =>
        new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR",
        }).format(value);

    useEffect(() => {
        setSelectedColor(color);
        setSelectedPrice(coverPrice);
        setSelectedTextColorIphone(textColorIphone);
        setSelectedFontIphone(fontFamily);
    }, [color, coverPrice, setSelectedColor, setSelectedTextColorIphone, setSelectedPrice,fontFamily, setSelectedFontIphone]);

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);              // aggiorna lo stato locale
        setSelectedColor(newColor);      // aggiorna anche il parent (Product.jsx)
    };
    const handleTextColorChange = (e) => {
        const newColor = e.target.value;
        setTextColorIphone(newColor);              // aggiorna lo stato locale
        setSelectedTextColorIphone(newColor);      // aggiorna anche il parent (Product.jsx)
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setText(value);
        setSelectedTextIphone(value); // ➕ Informa il parent del nuovo testo
    };

    const handleFontChange = (e) => {
        const newFont = e.target.value;
        setFontFamily(newFont);
        setSelectedFontIphone(newFont); // ➕ passa il font al parent
      };


    return (
        <div className="flex flex-col lg:flex-row justify-center items-start min-h-screen gap-8 p-8 bg-gray-100">
            {/* LEFT SIDE: Cover */}
            <div className="flex justify-center w-full lg:w-1/2 pt-16">
                <div className="relative w-40 h-80 rounded-3xl shadow-xl transition-all duration-300" style={{ backgroundColor: color }}>
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
                        {text && (
                            <p
                                className="text-xl text-center h-[50px] w-[150px] break-words"
                                style={{ fontFamily, color: textColorIphone }}
                            >
                                {text}
                            </p>
                        )}
                    </div>
                </div>
            </div>
    
            {/* RIGHT SIDE: All controls */}
            <div className="flex flex-col space-y-6 w-full lg:w-1/2">
                <h1 className="text-2xl font-bold">Personalizza la tua cover</h1>
    
                {/* Selettore colore cover */}
                <div className="flex flex-col items-start space-y-2">
                    <label className="font-medium">Seleziona il colore della cover:</label>
                    <input
                        type="color"
                        value={color}
                        onChange={handleColorChange}
                        className="w-24 h-12 border-2 border-gray-300 rounded-md cursor-pointer"
                    />
                </div>
    
                {/* Input di testo + bottone */}
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
    
                {/* Selettore colore del testo */}
                <div className="flex flex-col items-start space-y-2">
                    <label className="font-medium">Seleziona il colore del testo:</label>
                    <input
                        type="color"
                        value={textColorIphone}
                        onChange={handleTextColorChange}
                        className="w-24 h-12 border-2 border-gray-300 rounded-md cursor-pointer"
                    />
                </div>
    
                {/* Font selector */}
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
            </div>
        </div>
    );
    
};

export default PhoneCaseCustomizerIphone;



