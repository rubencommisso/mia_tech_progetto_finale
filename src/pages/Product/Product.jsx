import esempio from "../../assets/esempio.jpg";
import { useState } from "react";
import PhoneCaseCustomizer from "../../components/PhoneCaseCustomizer";

const Product = () => {
  const [showIphone, setShowIphone] = useState(false);
  const [showSamsung, setShowSamsung] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [activeModel, setActiveModel] = useState(null);
  const [activeCardId, setActiveCardId] = useState(null);

  const handleBrandClick = (brand) => {
    if (brand === "Apple") {
      setShowIphone(true);
      setShowSamsung(false);
      setActiveButton("apple");
    } else if (brand === "Android") {
      setShowSamsung(true);
      setShowIphone(false);
      setActiveButton("android");
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
    <>
      <div className="text-left p-8">
        <h1 className="text-3xl font-bold">Framework Laptop 13</h1>
        <h2 className="text-xl">Framework Laptop 13 DIY Edition (AMD Ryzen 7040 Series)</h2>

        {/* Sezione Apple/Android */}
        <div className="flex rounded-lg overflow-hidden mt-6">
          <span
            className={`cursor-pointer font-semibold px-12 py-3 text-lg bg-gray-100 border-r border-gray-300 ${activeButton === "apple" ? "bg-blue-100 border border-blue-500" : ""
              } rounded-l-lg hover:bg-blue-100 hover:border-blue-500`}
            onClick={() => handleBrandClick("Apple")}
          >
            Apple
          </span>
          <span
            className={`cursor-pointer font-semibold px-10 py-3 text-lg bg-gray-100 ${activeButton === "android" ? "bg-blue-100 border border-blue-500" : ""
              } rounded-r-lg hover:bg-blue-100 hover:border-blue-500`}
            onClick={() => handleBrandClick("Android")}
          >
            Android
          </span>
        </div>

        {/* Sezione Modelli iPhone */}
        {showIphone && (
          <div className="inline-flex rounded-lg overflow-hidden mt-4">
            <span
              className={`cursor-pointer px-4 py-2 text-base bg-gray-100 border-r border-gray-300 ${activeModel === "iPhone 16" ? "bg-blue-100 border border-blue-500" : ""
                } rounded-l-lg hover:bg-blue-100 hover:border-blue-500`}
              onClick={() => handleModelClick("iPhone 16")}
            >
              iPhone 16
            </span>
            <span
              className={`cursor-pointer px-4 py-2 text-base bg-gray-100 ${activeModel === "iPhone SE" ? "bg-blue-100 border border-blue-500" : ""
                } rounded-r-lg hover:bg-blue-100 hover:border-blue-500`}
              onClick={() => handleModelClick("iPhone SE")}
            >
              iPhone SE
            </span>
          </div>
        )}

        {/* Sezione Modelli Samsung */}
        {showSamsung && (
          <div className="inline-flex rounded-lg overflow-hidden mt-4">
            <span
              className={`cursor-pointer px-4 py-2 text-base bg-gray-100 border-r border-gray-300 ${activeModel === "Samsung S24" ? "bg-blue-100 border border-blue-500" : ""
                } rounded-l-lg hover:bg-blue-100 hover:border-blue-500`}
              onClick={() => handleModelClick("Samsung S24")}
            >
              Samsung S24
            </span>
            <span
              className={`cursor-pointer px-4 py-2 text-base bg-gray-100 ${activeModel === "Samsung S23" ? "bg-blue-100 border border-blue-500" : ""
                } rounded-r-lg hover:bg-blue-100 hover:border-blue-500`}
              onClick={() => handleModelClick("Samsung S23")}
            >
              Samsung S23
            </span>
          </div>
        )}

        {/* Cards */}
        <div className="flex flex-wrap gap-8 mt-10">
          <div
            className={`w-[35vw] max-w-full p-8 border border-gray-300 rounded-lg bg-gray-100 text-center cursor-pointer overflow-hidden hover:bg-blue-100 hover:border-blue-500 ${activeCardId === 1 ? "bg-blue-100 border-blue-500" : ""
              }`}
            onClick={() => handleCardClick(1)}
          >
            <span>
              <h1 className="text-2xl mb-4 truncate">Product 1</h1>
              <img className="w-[40vw] max-w-full h-auto" src={esempio} alt="img" />
              <h2 className="text-xl text-gray-800 truncate mt-2">308$</h2>
            </span>
          </div>

          <div
            className={`w-[35vw] max-w-full p-8 border border-gray-300 rounded-lg bg-gray-100 text-center cursor-pointer overflow-hidden hover:bg-blue-100 hover:border-blue-500 ${activeCardId === 2 ? "bg-blue-100 border-blue-500" : ""
              }`}
            onClick={() => handleCardClick(2)}
          >
            <span>
              <h1 className="text-2xl mb-4 truncate">Product 2</h1>
              <img className="w-[40vw] max-w-full h-auto" src={esempio} alt="img" />
              <h2 className="text-xl text-gray-800 truncate mt-2">308$</h2>
            </span>
          </div>
        </div>
      </div>

      <PhoneCaseCustomizer />
    </>
  );
};

export default Product;