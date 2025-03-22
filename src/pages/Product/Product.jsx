import esempio from "../../assets/esempio.jpg";
import { useState } from "react";
import PhoneCaseCustomizerIphone from "../../components/PhoneCaseCustomizerIphone";
import PhoneCaseCustomizerSamsung from "../../components/PhoneCaseCustomizerSamsung";

const Product = () => {
  const [showIphone, setShowIphone] = useState(false);
  const [showSamsung, setShowSamsung] = useState(false);
  const [showCustomApple, setShowCustomApple] = useState(false);
  const [showCustomSamsung, setShowCustomSamsung] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [activeModel, setActiveModel] = useState(null);
  const [activeCardId, setActiveCardId] = useState(null);

  const handleBrandClick = (brand) => {
    if (brand === "Apple") {
      setShowIphone(true);
      setShowSamsung(false);
      setShowCustomApple(true);
      setShowCustomSamsung(false);
      setActiveButton("apple");
    } else if (brand === "Samsung") {
      setShowSamsung(true);
      setShowIphone(false);
      setShowCustomSamsung(true);
      setShowCustomApple(false);
      setActiveButton("samsung");
    }
    setActiveModel(null);
    setActiveCardId(null);
  };

  const handleModelClick = (model) => {
    setActiveModel(model);
    setActiveCardId(null);
  };

  const handleCardClick = (id) => {
    setActiveCardId(id);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="text-left max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">Benvenuto!</h1>
        <h2 className="text-xl mt-2">
          In questa pagina puoi scegliere il modello, la pellicola e personalizzare il colore della cover.
        </h2>
        <h3 className="text-xl mt-4">Inizia Ora!</h3>

        {/* Marca Selection */}
        <div className="mt-8">Seleziona la marca:</div>
        <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden mt-4 bg-white shadow-md">
          <span
            className={`cursor-pointer font-semibold px-10 py-3 text-lg ${
              activeButton === "apple" ? "bg-blue-100 border-blue-500 border" : ""
            } flex-1 text-center hover:bg-blue-100`}
            onClick={() => handleBrandClick("Apple")}
          >
            Apple
          </span>
          <span
            className={`cursor-pointer font-semibold px-10 py-3 text-lg ${
              activeButton === "samsung" ? "bg-blue-100 border-blue-500 border" : ""
            } flex-1 text-center hover:bg-blue-100`}
            onClick={() => handleBrandClick("Samsung")}
          >
            Samsung
          </span>
        </div>

        {/* iPhone Models */}
        {showIphone && (
          <div className="mt-6 bg-gray-100 p-2 rounded-lg border border-gray-300">
            <div className="mb-2 font-medium">Seleziona il tuo modello:</div>
            <div className="flex flex-col bg-white p-6 sm:flex-row rounded-lg ">
              <span
                className={` bg-trasparent cursor-pointer font-semibold px-6 py-3 text-lg ${
                  activeModel === "iPhone 16" ? "bg-blue-100  border-blue-500" : "bg-gray-100"
                } flex-1 text-center hover:bg-blue-100`}
                onClick={() => handleModelClick("iPhone 16")}
              >
                iPhone 16
              </span>
              <span
                className={`bg-trasparent cursor-pointer font-semibold px-6 py-3 text-lg ${
                  activeModel === "iPhone SE" ? "bg-blue-100 rounded-lg border border-blue-500" : "bg-gray-100"
                } flex-1 text-center hover:bg-blue-100`}
                onClick={() => handleModelClick("iPhone SE")}
              >
                iPhone SE
              </span>
            </div>
          </div>
        )}

        {/* Samsung Models */}
        {showSamsung && (
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
            <div className="mb-2 font-medium">Seleziona il tuo modello:</div>
            <div className="flex flex-col sm:flex-row">
              <span
                className={`cursor-pointer font-semibold px-6 py-3 text-lg ${
                  activeModel === "Samsung S24" ? "bg-blue-100 border border-blue-500" : "bg-gray-100"
                } flex-1 text-center hover:bg-blue-100`}
                onClick={() => handleModelClick("Samsung S24")}
              >
                Samsung S24
              </span>
              <span
                className={`cursor-pointer font-semibold px-6 py-3 text-lg ${
                  activeModel === "Samsung S23" ? "bg-blue-100 border border-blue-500" : "bg-gray-100"
                } flex-1 text-center hover:bg-blue-100`}
                onClick={() => handleModelClick("Samsung S23")}
              >
                Samsung S23
              </span>
            </div>
          </div>
        )}

        {/* Example Cards - Uncomment to enable */}
        {/* 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <div
            className={`p-6 border rounded-lg bg-white shadow-md text-center cursor-pointer hover:bg-blue-100 ${
              activeCardId === 1 ? "bg-blue-100 border-blue-500" : ""
            }`}
            onClick={() => handleCardClick(1)}
          >
            <h1 className="text-2xl mb-4 truncate">Product 1</h1>
            <img className="w-full h-auto object-contain" src={esempio} alt="img" />
            <h2 className="text-xl text-gray-800 truncate mt-2">308$</h2>
          </div>

          <div
            className={`p-6 border rounded-lg bg-white shadow-md text-center cursor-pointer hover:bg-blue-100 ${
              activeCardId === 2 ? "bg-blue-100 border-blue-500" : ""
            }`}
            onClick={() => handleCardClick(2)}
          >
            <h1 className="text-2xl mb-4 truncate">Product 2</h1>
            <img className="w-full h-auto object-contain" src={esempio} alt="img" />
            <h2 className="text-xl text-gray-800 truncate mt-2">308$</h2>
          </div>
        </div>
        */}
      </div>

      {/* Customizer Components */}
      <div className="max-w-5xl mx-auto mt-10">
        {showIphone && <PhoneCaseCustomizerIphone />}
        {showSamsung && <PhoneCaseCustomizerSamsung />}
      </div>
    </div>
  );
};

export default Product;
