import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Prodotto 1', price: 20, quantity: 1, description: 'Descrizione del prodotto 1, descriviamo il prodotto' },
    { id: 2, name: 'Prodotto 2', price: 15, quantity: 1, description: 'Descrizione del prodotto 2, descriviamo il prodotto' },
    { id: 3, name: 'Prodotto 3', price: 35, quantity: 1, description: 'Descrizione del prodotto 3, descriviamo il prodotto' },
    { id: 4, name: 'Prodotto 4', price: 55, quantity: 1, description: 'Descrizione del prodotto 4, descriviamo il prodotto' },
    { id: 5, name: 'Prodotto 5', price: 60, quantity: 1, description: 'Descrizione del prodotto 5, descriviamo il prodotto' },
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


  const increaseQuantity = (id) => {
    setCart(cart.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ));
  };


  const decreaseQuantity = (id) => {
    setCart(cart.map(product =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ));
  };

  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const continueShopping = () => {

  };

  return (
    <div className="container pt-3 mt-1 mx-16 md:m-40 md:mt-0 md:px-1 py-40 lg:py-22 lg:ml-44 flex flex-col items-start md:flex-col md:justify-around">

      <h2 className="text-2xl font-semibold mb-6  mt-6">Il tuo Carrello</h2>
      <hr className="w-9/12 lg:w-2/4 md:w-1/2 mt-0 font-bold mb-4" />

      {cart.length === 0 ? (
        <p>Il carrello è vuoto</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="flex flex-row  md:flex-row justify-evenly pb-6 pt-2 border-b border-gray-400  md:mb-0">
            <div className="w-1/3 h-28 mt-1 sm:w-1/4 sm:h-4/4 md:w-32 md:h-36 lg:w-2/4 xl:w-1/6 bg-gray-300 rounded-lg flex items-center justify-around text-white mb-4 md:mb-0">
              Immagine
            </div>

            <div className="ml-6 md:ml-8 flex-2 ">
              <h3 className="text-base font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4 mr-4">{product.description}</p>


              <button
                onClick={() => decreaseQuantity(product.id)}
                className="space-x-1 rounded-lg w-12 h-12  font-thin hover:bg-gray-100  hover:rounded-full text-5xl "
              >
                -
              </button>


              <input
                type="text"
                id={`quantity-${product.id}`}
                value={product.quantity}
                readOnly
                className="w-10 h-10 p-2 sm:w-10 md:w-10  lg:w-12 text-center bg-gray-100 border rounded-lg border-gray-200"
              />


              <button
                onClick={() => increaseQuantity(product.id)}
                className="  space-x-1  w-12 h-12 font-thin hover:bg-gray-100 hover:rounded-full text-4xl"
              >
                +
              </button>


              <button
                onClick={() => removeFromCart(product.id)}
                style={{ textDecoration: 'underline' }}
                className="hover:text-red-400 font-normal p-1 mt-3 ml-2"
              >
                Rimuovi
              </button>


            </div>
            <div className='flex flex-col  md:flex-row '>
            <div className='mb-12 md:mt-o md:flex  md:flex-row md:justify-between'>
              <p className="text-lg font-bold flex flex-initial">€{product.price}</p>
            </div>



            <div className="flex flex-row mt-4 justify-start   items-left md:items-end ml-auto">
              <p className="text-lg font-semibold  md:ml-12">Totale: €{(product.price * product.quantity).toFixed(2)}</p>
            </div>
            </div>
           
          </div>
        ))
      )}

      <div className="mt-6 flex justify-between w-full">
        <div className="w-full md:w-auto ">
          <h3 className="text-1xl font-bold">Totale Carrello: €{getTotal().toFixed(2)}</h3>
        </div>
      </div>

      <div className=" flex md:justify-start justify-center mt-6 w-full ">
        <button
          onClick={continueShopping}
          className="px-6 py-2  bg-gray-200 text-black font-semibold rounded-3xl items-center shadow-md hover:bg-orange-600 transition duration-300"
        >
          Continua la spesa
        </button>
      </div>
    </div>
  );
};

export default Cart
