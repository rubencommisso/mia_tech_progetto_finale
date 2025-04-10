import { useState, useEffect } from "react";
import PhoneCaseCustomizerIphone from "../components/PhoneCaseCustomizerIphone";
import PhoneCaseCustomizerSamsung from "../components/PhoneCaseCustomizerSamsung";
import AddButton from "../components/AddButton";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

const Cover = () => {
  const [activeButton, setActiveButton] = useState("apple");
  const [showIphone, setShowIphone] = useState(false);
  const [showSamsung, setShowSamsung] = useState(false);
  const [activeModel, setActiveModel] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedTextColorIphone, setSelectedTextColorIphone] = useState(null);
  const [selectedTextColorSamsung, setSelectedTextColorSamsung] = useState(null);
  const [textIphone, setTextIphone] = useState("");
  const [textSamsung, setTextSamsung] = useState("");
  const [fontIphone, setFontIphone] = useState("");
  const [fontSamsung, setFontSamsung] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Funzione per aggiornare il carrello e dispatchare l'evento "cartUpdated"
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  const handleBrandClick = (brand) => {
    if (brand === "Apple") {
      setShowIphone(true);
      setShowSamsung(false);
      setActiveButton("apple");
    } else if (brand === "Samsung") {
      setShowSamsung(true);
      setShowIphone(false);
      setActiveButton("samsung");
    }
    setActiveModel(null);
  };

  const handleModelClick = (model) => {
    setActiveModel(model);
  };

  const textPrice = 20; // Prezzo fisso
  const coverPrice = selectedPrice || 0;
  const totalPrice = textPrice + coverPrice;

  const handleAddToCart = async () => {
    if (!activeButton || !activeModel) {
      alert("Seleziona marca e modello.");
      return;
    }

    const renderImage = await captureRender(); // Ottieni il render

    if (!renderImage) {
      alert("Errore nel rendering dell'immagine");
      return;
    }

    const item = {
      id: Date.now() + Math.random(),
      name: `${activeButton.toUpperCase()} - ${activeModel}`,
      coverColor: selectedColor || "Colore cover",
      priceCover: coverPrice,
      textColor:
        activeButton === "apple"
          ? selectedTextColorIphone
          : selectedTextColorSamsung || "Colore testo",
      text: activeButton === "apple" ? textIphone : textSamsung,
      font: activeButton === "apple" ? fontIphone : fontSamsung,
      textPrice,
      price: totalPrice,
      quantity: 1,
      imageCoverOnly: renderImage, // Salva l’immagine nel carrello
    };

    // Aggiorna il carrello e dispatch l'evento per aggiornare la Navbar
    updateCart([...cart, item]);

    console.log("🛒 Aggiunto al carrello:", item);
    navigate("/cart");
  };

  const captureRender = async () => {
    const element = document.getElementById("customizer-preview");
    if (!element) return null;
    const canvas = await html2canvas(element);
    return canvas.toDataURL("image/png");
  };

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-6 sm:px-6 md:px-8">
      <div className="mt-4 text-lg font-medium">Seleziona la marca:</div>

      {/* Selezione Marca */}
      <div className="flex flex-col sm:flex-row rounded-lg bg-white shadow-md mt-4 overflow-hidden">
        {["apple", "samsung"].map((brand) => (
          <span
            key={brand}
            className={`
              cursor-pointer font-semibold px-6 py-3 text-base sm:text-lg
              flex-1 text-center border
              ${activeButton === brand
                ? "bg-blue-100 border-blue-500"
                : "hover:bg-blue-100"}
              ${brand === "apple" ? "rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none" : "rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none"}
            `}
            onClick={() =>
              handleBrandClick(brand === "apple" ? "Apple" : "Samsung")
            }
          >
            {brand.charAt(0).toUpperCase() + brand.slice(1)}
          </span>
        ))}
      </div>

      {/* Models */}
      {showIphone && (
        <ModelSelector
          models={["iPhone 16", "iPhone SE"]}
          activeModel={activeModel}
          onClick={handleModelClick}
        />
      )}
      {showSamsung && (
        <ModelSelector
          models={["Samsung S24", "Samsung S23"]}
          activeModel={activeModel}
          onClick={handleModelClick}
        />
      )}

      {/* Customizer */}
      <div className="max-w-5xl mx-auto mt-10 px-2 sm:px-4">
        {showIphone && (
          <PhoneCaseCustomizerIphone
            setSelectedColor={setSelectedColor}
            setSelectedPrice={setSelectedPrice}
            setSelectedTextColorIphone={setSelectedTextColorIphone}
            setSelectedTextIphone={setTextIphone}
            setSelectedFontIphone={setFontIphone}
          />
        )}
        {showSamsung && (
          <PhoneCaseCustomizerSamsung
            setSelectedColor={setSelectedColor}
            setSelectedPrice={setSelectedPrice}
            setSelectedTextColorSamsung={setSelectedTextColorSamsung}
            setSelectedTextSamsung={setTextSamsung}
            setSelectedFontSamsung={setFontSamsung}
          />
        )}
      </div>

      {/* Totale */}
      <div className="text-xl font-bold my-6 sm:my-4 px-2">
        Totale: € {totalPrice.toFixed(2)}
      </div>

      {/* Add to Cart */}
      <div className="px-2">
        <AddButton onClick={handleAddToCart} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

const ModelSelector = ({ models, activeModel, onClick }) => (
  <div className="mt-6">
    <div className="mb-2 font-medium">Seleziona il tuo modello:</div>
    <div className="flex flex-col sm:flex-row rounded-lg bg-white shadow-md mt-2">
      {models.map((model, index) => (
        <span
          key={model}
          className={`
            cursor-pointer font-semibold px-10 py-3 text-lg 
            flex-1 text-center border
            ${activeModel === model ? "bg-blue-100 border-blue-500" : "hover:bg-blue-100"}
            ${index === 0 ? "rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none" : "rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none"}
          `}
          onClick={() => onClick(model)}
        >
          {model}
        </span>
      ))}
    </div>
  </div>
);

export default Cover;

