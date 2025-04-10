import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    updateCartStorage(updatedCart); // Invece di fare setCart e localStorage manualmente
  };

  const updateCartStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // Scatena l'evento per informare la Navbar dell'aggiornamento
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((product) =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    );
    updateCartStorage(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        if (product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return null;
        }
      }
      return product;
    }).filter(Boolean);
    updateCartStorage(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };
  

  return (
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-10">
      {/* Lista prodotti */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-6">Il tuo Carrello</h2>
        <hr className="mb-4" />

        {cart.length === 0 ? (
          <p>Il carrello è vuoto</p>
        ) : (
          cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-row md:flex-row justify-between gap-y-4 md:gap-x-6 items-start w-full pb-6 pt-2 border-b border-gray-400"
            >
              {/* Info prodotto */}
              <div className="flex gap-4 flex-1 items-stretch">
                {/* immagine prodotto */}
                {product.image &&
                (<div className="w-40 h-45">
                  <img src={product.image}  className="object-contain w-full h-full"/>
                  </div>)}
                {/* immagine Cover del Set accessori */}
                {product.imageCover &&
                (<div className="pt-2">
                 <img src={product.imageCover} alt="" className="w-32 h-32 object-contain rounded-lg" />
                </div>)}
                {/* Imaggine cover della pagina Cover */}
                {product.imageCoverOnly &&
                (<div className="pt-2">
                 <img src={product.imageCoverOnly} alt="" className="w-32 h-32 object-contain rounded-lg" />
                </div>)}
                

                <div className="flex flex-col justify-between min-w-0">
                {product.imageCover && (<h3 className="text-base font-semibold mb-2 break-words">Set Accessori</h3>)}
                {product.imageCoverOnly && (<h3 className="text-base font-semibold mb-2 break-words">Cover</h3>)}
                  <h3 className="text-base font-semibold mb-2 break-words">{product.title || product.name}</h3>
                  {product.image &&(<span>prezzo x1: €{product.price}</span>)}

                  <div className="text-sm text-gray-600 mb-3 flex flex-col gap-1">
                    
                      {product.film && (<div className=" flex gap-2">
                      <span className="font-medium">{product.film}</span>
                      <span>€{product.filmPrice}</span>
                      </div>)}
                        {product.ring && (<div className=" flex gap-2">
                      <span className="font-medium">{product.ring}</span>
                      <span>€{product.ringPrice}</span>
                      </div>)}
                      {product.kit && (<div className=" flex gap-2">
                      <span className="font-medium">{product.kit}</span>
                      <span>€{product.kitPrice}</span>
                      </div>)}
                      {product.text && (<div className=" flex gap-2">
                      <span className="font-medium">La tua frase: "{product.text}"</span>
                      <span>€{product.textPrice}</span>
                      </div>)}
                      {product.font && (<div className=" flex gap-2">
                      <span className="font-medium">Font: {product.font}</span>
                      </div>)}
                      {product.font && (<div className="flex items-center w-60 gap-2">
                      <span className="capitalize font-medium">Colore testo: {product.textColor}</span>
                      <div
                        className="w-3.5 h-3.5 rounded-full border"
                        style={{ backgroundColor: product.textColor }}
                      />
                      </div>)}
                      {product.coverColor && (<div className="flex items-center  w-60 gap-2">
                      <span className="capitalize font-medium">Colore Cover: {product.coverColor}</span>
                      <div
                        className="w-3.5 h-3.5 rounded-full border"
                        style={{ backgroundColor: product.coverColor }}
                        />
                        <span>€{product.priceCover}</span>
                    
                    </div>)}
                    
                  </div>
                </div>
              </div>

              {/* Azioni prodotto */}
              <div className="flex flex-col items-center gap-5 md:min-w-[150px] text-right">
                <div className="flex">
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="w-8 h-8 text-lg font-thin hover:bg-gray-100 hover:rounded-full flex items-center justify-center"
                  >
                    -
                  </button>

                  <input
                    type="text"
                    value={product.quantity}
                    readOnly
                    className="w-10 h-8 p-1 text-center bg-gray-100 border border-gray-200 rounded-lg mx-2"
                  />

                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="w-8 h-8 text-lg font-thin hover:bg-gray-100 hover:rounded-full flex items-center justify-center"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="hover:text-red-400 font-normal underline text-sm"
                >
                  Rimuovi
                </button>

                <p className="text-lg font-medium">
                  €{(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Riepilogo */}
      <div className="w-full md:w-80">
        <div className="bg-gray-50 rounded-md p-4 flex flex-col gap-5">
          <p>
            Subtotale: <span className="text-lg">€{getTotal().toFixed(2)}</span>
          </p>
          <p>
            Spedizione:<br />
            <span className="text-sm">Spedizione gratuita</span>
          </p>
          <p>
            Imposta stimata: <span>€0.00</span>
          </p>
          <p className="font-bold">
            Totale: <span className="text-lg">€{getTotal().toFixed(2)}</span>
          </p>

          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-400 text-black font-semibold rounded-3xl px-4 py-2 w-full">
              Continua col Checkout
            </button>
          </div>
        </div>
        
        <hr className="my-6" />

        <div className="text-sm space-y-2">
          <p>🚚 Spedisce entro cinque giorni lavorativi.</p>
          <p>✅ <u>Garanzia di restituzione entro 30 giorni + garanzia limitata.</u></p>
          <p>📱 Spedizione gratuita su ordini di cover e pellicole.</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
