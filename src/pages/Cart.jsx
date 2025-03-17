
import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Prodotto 1', price: 20, quantity: 1, description: 'Descrizione del prodotto 1, descriviamo il prodotto' },
    { id: 2, name: 'Prodotto 2', price: 15, quantity: 1, description: 'Descrizione del prodotto 2, descriviamo il prodotto' },
    { id: 3, name: 'Prodotto 3', price: 35, quantity: 1, description: 'Descrizione del prodotto 3, descriviamo il prodotto' },
  ]);

  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return; 
    setCart(cart.map(product =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    ));
  };

  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const continueShopping = () => {
 
  };

  return (
    <div className="container mx-auto p-8 m-6  flex flex-col items-center md:flex-col md:items-start md:p-6">
      <h2 className="text-3xl items-center font-bold mb-10">Il tuo Carrello</h2><hr />
      {cart.length === 0 ? (
        <p>Il carrello è vuoto</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="flex justify-between p-8 border-b border-gray-400">
            <div className="w-52 h-52 bg-gray-300 rounded-lg flex items-center justify-center text-white">
              Immagine del prodotto
            </div>

            <div className="ml-8 flex-1 p-4">
              <h3 className="text-lg font-semibold mb-10">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-10">{product.description}</p>
              <p className="text-lg font-bold">€{product.price}</p>
            </div>

            <div className='flex-1 mt-4'>
              <label htmlFor={`quantity-${product.id}`} className="text-sm mt-2">Quantità:</label>
              <input
                type="number"
                id={`quantity-${product.id}`}
                value={product.quantity}
                min="1"
                onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                className="w-14 p-1 border border-gray-200 rounded-lg"
              />
            </div>

            <div className="flex items-center flex-col text-center">
              <button
                onClick={() => removeFromCart(product.id)}
                className="mt-4 text-red-400 font-semibold border-2 p-1 border-gray-200 rounded-lg bg-gray"
              >
                Rimuovi
              </button>

              <p className="text-lg font-semibold mt-auto">Totale: €{(product.price * product.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))
      )}

      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-3xl font-semibold">Totale Carrello: €{getTotal().toFixed(2)}</h3>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={continueShopping}
          className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
        >
          Continua la spesa
        </button>
      </div>
    </div>
  );
};

export default Cart;
