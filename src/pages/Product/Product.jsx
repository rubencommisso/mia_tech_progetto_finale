import "./Product.css";
import esempio from "../assets/esempio.jpg";
import { useState } from "react";

const Product = () => {
  // Stato per gestire quale sezione di modelli mostrare
  const [showIphone, setShowIphone] = useState(false);
  const [showSamsung, setShowSamsung] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [activeModel, setActiveModel] = useState(null);

  // Stato per l'hover permanente di una singola card
  const [activeCardId, setActiveCardId] = useState(null);

  // Funzione per gestire il click su "Apple"
  const handleAppleClick = () => {
    setShowIphone(true);
    setShowSamsung(false);
    setActiveButton("apple");
    setActiveModel(null); 
    setActiveCardId(null); // Reset dell'eventuale card selezionata se cambio sezione
  };

  // Funzione per gestire il click su "Android"
  const handleAndroidClick = () => {
    setShowSamsung(true);
    setShowIphone(false);
    setActiveButton("android");
    setActiveModel(null); 
    setActiveCardId(null); // Reset dell'eventuale card selezionata se cambio sezione
  };

  // Funzione per gestire il click su un modello
  const handleModelClick = (model) => {
    setActiveModel(model);
    setActiveCardId(null);
  };

  // Funzione per gestire il click su una card
  const handleCardClick = (id) => {
    setActiveCardId(id);
  };

  return (
    <div className="container">
      <h1 className="title">Framework Laptop 13</h1>
      <h2 className="subtitle">Framework Laptop 13 DIY Edition (AMD Ryzen 7040 Series)</h2>

      {/* Sezione Apple/Android */}
      <div className="phone-container">
        <span
          className={`span1 ${activeButton === "apple" ? "active" : ""}`}
          onClick={handleAppleClick}
        >
          Apple
        </span>
        <span
          className={`span1 ${activeButton === "android" ? "active" : ""}`}
          onClick={handleAndroidClick}
        >
          Android
        </span>
      </div>

      <br />
      <br />

      {/* Sezione Modelli iPhone */}
      {showIphone && (
        <div className="phone-model-container">
          <span
            className={`span1 ${activeModel === "iPhone 16" ? "active" : ""}`}
            onClick={() => handleModelClick("iPhone 16")}
          >
            iPhone 16
          </span>
          <span
            className={`span1 ${activeModel === "iPhone SE" ? "active" : ""}`}
            onClick={() => handleModelClick("iPhone SE")}
          >
            iPhone SE
          </span>
        </div>
      )}

      {/* Sezione Modelli Samsung */}
      {showSamsung && (
        <div className="phone-model-container">
          <span
            className={`span1 ${activeModel === "Samsung S24" ? "active" : ""}`}
            onClick={() => handleModelClick("Samsung S24")}
          >
            Samsung S24
          </span>
          <span
            className={`span1 ${activeModel === "Samsung S23" ? "active" : ""}`}
            onClick={() => handleModelClick("Samsung S23")}
          >
            Samsung S23
          </span>
        </div>
      )}

      <br />
      <br />
      <div className="containerProduct">
        {/* Prima card */}
        <div
          className={`card-component ${activeCardId === 1 ? "active" : ""}`}
          onClick={() => handleCardClick(1)}
        >
          <span className="ProductCard">
            <h1>Product 1</h1>
            <img className="imgEsempio" src={esempio} alt="img" />
            <h2>308$</h2>
          </span>
        </div>

        {/* Seconda card */}
        <div
          className={`card-component ${activeCardId === 2 ? "active" : ""}`}
          onClick={() => handleCardClick(2)}
        >
          <span className="ProductCard">
            <h1>Product 2</h1>
            <img className="imgEsempio" src={esempio} alt="img" />
            <h2>308$</h2>
          </span>
        </div>
      </div>
    </div>
  );
};


export default Product;
