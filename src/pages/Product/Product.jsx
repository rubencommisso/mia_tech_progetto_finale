import esempio from "../../assets/esempio.jpg";
import { useState } from "react";
import PhoneCaseCustomizerIphone from "../../components/PhoneCaseCustomizerIphone";
import PhoneCaseCustomizerSamsung from "../../components/PhoneCaseCustomizerSamsung";
import Card from "../../components/card"

const Product = () => {
  const [showIphone, setShowIphone] = useState(false);
  const [showSamsung, setShowSamsung] = useState(false);
  const [showCustomApple, setShowCustomApple] = useState(false);
  const [showCustomSamsung, setShowCustomSamsung] = useState(false);
  const [activeButton, setActiveButton] = useState("apple");
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

  const CardProduct = [
    {
      id: 1,
      title: "Pellicola pvc super resistente effetto satinato",
      price: "308$",
      image: esempio,
    },
    {
      id: 2,
      title: "Pellicola vetro temprato",
      price: "308$",
      image: esempio,
    },
    {
      id: 3,
      title: "Pellicola vetro temprato",
      price: "308$",
      image: esempio,
    },
  ];

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
        <div className="flex flex-col sm:flex-row rounded-lg bg-white shadow-md mt-4">
          <span
            className={`
              cursor-pointer font-semibold px-10 py-3 text-lg 
              flex-1 text-center border 
              ${activeButton === "apple"
                ? "bg-blue-100 border border-blue-500"
                : "hover:bg-blue-100"
              }
              // Arrotondiamo solo il primo elemento a sinistra
              rounded-t-lg sm:rounded-l-lg 
              sm:rounded-tr-none
            `}
            onClick={() => handleBrandClick("Apple")}
          >
            Apple
          </span>
          <span
            className={`
              cursor-pointer font-semibold px-10 py-3 text-lg 
              flex-1 text-center border 
              ${activeButton === "samsung"
                ? "bg-blue-100 border border-blue-500"
                : "hover:bg-blue-100"
              }
              // Arrotondiamo solo l'ultimo a destra
              rounded-b-lg sm:rounded-r-lg 
              sm:rounded-bl-none
            `}
            onClick={() => handleBrandClick("Samsung")}
          >
            Samsung
          </span>
        </div>

        {/* iPhone Models */}
        {showIphone && (
          <div className="mt-6">
            <div className="mb-2 font-medium">Seleziona il tuo modello:</div>
            <div className="flex flex-col sm:flex-row rounded-lg bg-white shadow-md mt-2">
              <span
                className={`
                  cursor-pointer font-semibold px-10 py-3 text-lg 
                  flex-1 text-center border border-gray
                  ${activeModel === "iPhone 16"
                    ? "bg-blue-100 border border-blue-500"
                    : "hover:bg-blue-100"
                  }
                  rounded-t-lg sm:rounded-l-lg
                  sm:rounded-tr-none
                `}
                onClick={() => handleModelClick("iPhone 16")}
              >
                iPhone 16
              </span>
              <span
                className={`
                  cursor-pointer font-semibold px-10 py-3 text-lg 
                  flex-1 text-center border border-gray
                  ${activeModel === "iPhone SE"
                    ? "bg-blue-100 border border-blue-500"
                    : "hover:bg-blue-100"
                  }
                  rounded-b-lg sm:rounded-r-lg
                  sm:rounded-bl-none
                `}
                onClick={() => handleModelClick("iPhone SE")}
              >
                iPhone SE
              </span>
            </div>
          </div>
        )}

        {/* Samsung Models */}
        {showSamsung && (
          <div className="mt-6">
            <div className="mb-2 font-medium">Seleziona il tuo modello:</div>
            <div className="flex flex-col sm:flex-row rounded-lg bg-white shadow-md mt-2">
              <span
                className={`
                  cursor-pointer font-semibold px-10 py-3 text-lg
                  flex-1 text-center border border-gray
                  ${activeModel === "Samsung S24"
                    ? "bg-blue-100 border border-blue-500"
                    : "hover:bg-blue-100"
                  }
                  rounded-t-lg sm:rounded-l-lg
                  sm:rounded-tr-none
                `}
                onClick={() => handleModelClick("Samsung S24")}
              >
                Samsung S24
              </span>
              <span
                className={`
                  cursor-pointer font-semibold px-10 py-3 text-lg
                  flex-1 text-center border border-gray
                  ${activeModel === "Samsung S23"
                    ? "bg-blue-100 border border-blue-500"
                    : "hover:bg-blue-100"
                  }
                  rounded-b-lg sm:rounded-r-lg
                  sm:rounded-bl-none
                `}
                onClick={() => handleModelClick("Samsung S23")}
              >
                Samsung S23
              </span>
            </div>
          </div>
        )}

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-2       /* 1 colonna su schermi molto piccoli */
            sm:grid-cols-3     /* 2 colonne >= sm (640px) */
            md:grid-cols-3     /* 3 colonne >= md (768px) */
            lg:grid-cols-4     /* 4 colonne >= lg (1024px) */
            gap-6 mt-10
          "
        >
          {CardProduct.map((product)=>(
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              activeCardId={activeCardId}
              onClick={handleCardClick}

            />
          ))}
      </div>

      {/* Customizer Components */}
      <div className="max-w-5xl mx-auto mt-10">
        {showIphone && <PhoneCaseCustomizerIphone />}
        {showSamsung && <PhoneCaseCustomizerSamsung />}
      </div>
    </div>
    </div>
  );
};

export default Product;



