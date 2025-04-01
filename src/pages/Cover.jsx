import { useState, useEffect } from "react";
import PhoneCaseCustomizerIphone from "../components/PhoneCaseCustomizerIphone";
import PhoneCaseCustomizerSamsung from "../components/PhoneCaseCustomizerSamsung";
import AddButton from "../components/AddButton";
import { useNavigate } from "react-router-dom";

const Cover = () => {
  const [activeButton, setActiveButton] = useState("apple");
  const [showApple, setShowApple] = useState(false);
  const [showSamsung, setShowSamsung] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleBrandClick = (brand) => {
    if (brand === "Apple") {
      setShowApple(true);
      setShowSamsung(false);
      setActiveButton("apple");
    } else if (brand === "Samsung") {
      setShowSamsung(true);
      setShowApple(false);
      setActiveButton("samsung");
    }
  };

  const coverPrice = selectedPrice || 0;
  const totalPrice = coverPrice;

  const handleAddToCart = () => {
    if (!activeButton) {
      alert("Seleziona un colore");
      return;
    }

    const item = {
      name: `${activeButton.toUpperCase()} - Cover`,
      color: selectedColor || "Colore cover",
      priceCover: coverPrice,
      price: totalPrice,
      quantity: 1,
    };

    setCart((prevCart) => [...prevCart, item]);
    console.log("🛒 Aggiunto al carrello:", item);
    navigate("/cart");
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
            onClick={() => handleBrandClick(brand === "apple" ? "Apple" : "Samsung")}
          >
            {brand.charAt(0).toUpperCase() + brand.slice(1)}
          </span>
        ))}
      </div>

      {/* Customizer */}
      <div className="max-w-5xl mx-auto mt-10 px-2 sm:px-4">
        {showApple && (
          <PhoneCaseCustomizerIphone
            setSelectedColor={setSelectedColor}
            setSelectedPrice={setSelectedPrice}
          />
        )}
        {showSamsung && (
          <PhoneCaseCustomizerSamsung
            setSelectedColor={setSelectedColor}
            setSelectedPrice={setSelectedPrice}
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

export default Cover;
