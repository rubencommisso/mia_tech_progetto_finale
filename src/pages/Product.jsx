import esempio from "../assets/esempio.jpg";
import { useState, useEffect } from "react";
import PhoneCaseCustomizerIphone from "../components/PhoneCaseCustomizerIphone";
import PhoneCaseCustomizerSamsung from "../components/PhoneCaseCustomizerSamsung";
import Card from "../components/card";
import AddButton from "../components/AddButton";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

const Product = () => {
  const [showIphone, setShowIphone] = useState(false);
  const [showSamsung, setShowSamsung] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [activeModel, setActiveModel] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedTextColorIphone, setSelectedTextColorIphone] = useState(null);
  const [selectedTextColorSamsung, setSelectedTextColorSamsung] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedFilmId, setSelectedFilmId] = useState(null);
  const [selectedRingId, setSelectedRingId] = useState(null);
  const [selectedKitId, setSelectedKitId] = useState(null);
  const [textIphone, setTextIphone] = useState("");
  const [textSamsung, setTextSamsung] = useState("");
  const [fontIphone, setFontIphone] = useState("");
  const [fontSamsung, setFontSamsung] = useState("");


  const navigate = useNavigate();

  // Caricamento iniziale del carrello
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Salvataggio carrello
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
    setSelectedFilmId(null);
    setSelectedRingId(null);
    setSelectedKitId(null);
  };

  const handleModelClick = (model) => {
    setActiveModel(model);
  };

  const handleCardClick = (id, category) => {
    if (category === "film") {
      setSelectedFilmId(id);
    } else if (category === "ring") {
      setSelectedRingId(id);
    } else if (category === "kit") {
      setSelectedKitId(id);
    }
  };

  const filmProduct = [
    {
      id: 1,
      title: "Pellicola pvc",
      price: 308,
      image: esempio,
    },
    {
      id: 2,
      title: "Pellicola vetro temprato",
      price: 308,
      image: esempio,
    },
    {
      id: 3,
      title: "Pellicola vetro temprato",
      price: 308,
      image: esempio,
    },
  ];

  const ringProduct = [
    {
      id: 4,
      title: "Ring Nero",
      price: 308,
      image: esempio,
    },
    {
      id: 5,
      title: "Ring Argento",
      price: 308,
      image: esempio,
    },
    {
      id: 6,
      title: "Ring oro",
      price: 308,
      image: esempio,
    },
  ];

  const kitProduct = [
    {
      id: 7,
      title: "KIt pulizia",
      price: 308,
      image: esempio,
    },
    {
      id: 8,
      title: "panno microfibra",
      price: 308,
      image: esempio,
    },
    {
      id: 9,
      title: "Spray",
      price: 308,
      image: esempio,
    },
  ];

  const selectedFilm = filmProduct.find((c) => c.id === selectedFilmId);
  const selectedRing = ringProduct.find((c) => c.id === selectedRingId);
  const selectedKit = kitProduct.find((c) => c.id === selectedKitId);
  const filmPrice = selectedFilm?.price || 0;
  const ringPrice = selectedRing?.price || 0;
  const kitPrice = selectedKit?.price || 0;
  const coverPrice = selectedPrice || 0;
  const textPrice = 20 || 0;
  const totalPrice = filmPrice + ringPrice + kitPrice + textPrice + coverPrice;

  const handleAddToCart = async () => {
    if (!activeButton || !activeModel || (!selectedFilm && !selectedRing && !selectedKit)) {
      alert("Seleziona marca, modello e almeno un accessorio.");
      return;
    }

    const renderImage = await captureRender(); // 👈 Ottieni il render

    if(!renderImage) {
      alert(error)
    }

    const item = {
      id: Date.now(),
     /*  image: selectedFilm?.image || selectedRing?.image || selectedKit?.image || "Foto", */
      name: `${activeButton.toUpperCase()} - ${activeModel}`,
      film: selectedFilm?.title || "Nessuna pellicola",
      ring: selectedRing?.title || "Nessun ring",
      kit: selectedKit?.title || "Nessun kit",
      coverColor: selectedColor || "Colore cover",
      textColor: activeButton === "apple" ? selectedTextColorIphone : selectedTextColorSamsung || "Colore testo",
      text: activeButton === "apple" ? textIphone : textSamsung,
      font: activeButton === "apple" ? fontIphone : fontSamsung, 
      filmPrice,
      ringPrice,
      kitPrice,
      textPrice,
      priceCover: coverPrice,
      price: totalPrice,
      quantity: 1,
      imageCover: renderImage, // 👈 Salva l’immagine nel carrello
    };

    setCart((prevCart) => [...prevCart, item]);
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
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="text-left max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">Benvenuto!</h1>
        <h2 className="text-xl mt-2">
          In questa pagina puoi scegliere un set di accessori per il tuo smartphone.
        </h2>
        <h3 className="text-xl mt-4">Inizia Ora!</h3>

        {/* Marca Selection */}
        <div className="mt-8">Seleziona la marca:</div>
        <div className="flex flex-col sm:flex-row rounded-lg bg-white shadow-md mt-4">
          {["apple", "samsung"].map((brand) => (
            <span
              key={brand}
              className={`
                cursor-pointer font-semibold px-10 py-3 text-lg 
                flex-1 text-center border 
                ${activeButton === brand
                  ? "bg-blue-100 border border-blue-500"
                  : "hover:bg-blue-100"
                }
                ${brand === "apple" ? "rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none" : "rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none"}
              `}
              onClick={() => handleBrandClick(brand === "apple" ? "Apple" : "Samsung")}
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

        {/* Pellicole */}
        <div className="font-semibold py-3 text-lg">Pellicole:</div>
        <CardGrid products={filmProduct} selectedId={selectedFilmId} category="film" onCardClick={handleCardClick} />

        <hr className="border-t border-gray-300 my-6" />

        {/* Ring */}
        <div className="font-semibold py-3 text-lg">Ring:</div>
        <CardGrid products={ringProduct} selectedId={selectedRingId} category="ring" onCardClick={handleCardClick} />

        <hr className="border-t border-gray-300 my-6" />

        <div className="font-semibold py-3 text-lg">Kit:</div>
        <CardGrid products={kitProduct} selectedId={selectedKitId} category="kit" onCardClick={handleCardClick} />

        {/* Customizer */}
        <div className="max-w-5xl mx-auto mt-10">
          {showIphone && <PhoneCaseCustomizerIphone
           setSelectedColor={setSelectedColor} 
           setSelectedPrice={setSelectedPrice} 
           setSelectedTextColorIphone={setSelectedTextColorIphone}
           setSelectedTextIphone={setTextIphone}
           setSelectedFontIphone={setFontIphone}

           />}
          {showSamsung && <PhoneCaseCustomizerSamsung 
          setSelectedColor={setSelectedColor} 
          setSelectedPrice={setSelectedPrice}
          setSelectedTextColorSamsung={setSelectedTextColorSamsung} 
          setSelectedTextSamsung={setTextSamsung}
          setSelectedFontSamsung={setFontSamsung}
          />}
        </div>

        {/* Totale */}
        <div className="text-xl font-bold my-4">Totale: € {totalPrice.toFixed(2)}</div>

        {/* Add to Cart */}
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
            ${activeModel === model
              ? "bg-blue-100 border-blue-500"
              : "hover:bg-blue-100"
            }
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

const CardGrid = ({ products, selectedId, category, onCardClick }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
    {products.map((product) => (
      <Card
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        activeCardId={selectedId}
        onClick={() => onCardClick(product.id, category)}
      />
    ))}
  </div>
);

export default Product;











