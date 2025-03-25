import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Prodotto 1",
      price: 20,
      quantity: 1,
      description: "Descrizione del prodotto 1, descriviamo il prodotto",
    },
    {
      id: 2,
      name: "Prodotto 2",
      price: 15,
      quantity: 1,
      description: "Descrizione del prodotto 2, descriviamo il prodotto",
    },
    {
      id: 3,
      name: "Prodotto 3",
      price: 35,
      quantity: 1,
      description: "Descrizione del prodotto 3, descriviamo il prodotto",
    },
    {
      id: 4,
      name: "Prodotto 4",
      price: 55,
      quantity: 1,
      description: "Descrizione del prodotto 4, descriviamo il prodotto",
    },
    {
      id: 5,
      name: "Prodotto 5",
      price: 60,
      quantity: 1,
      description: "Descrizione del prodotto 5, descriviamo il prodotto",
    },
  ])




  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id))
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(
      cart.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    )
  }

  const increaseQuantity = (id) => {
    setCart(
      cart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    )
  }

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    )
  }

  const getTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  }


  return (
    <div className="flex  m-6 flex-col md:flex-row md:mr-32  justify-around md:m-10 md:ml-32">
      <div className="flex flex-col  mx-4">
        <h2 className="text-2xl font-semibold mb-6  mt-6">Il tuo Carrello</h2>
        <hr className="w-full  md:w-full mt-0 font-bold mb-4" />

        {cart.length === 0 ? (
          <p>Il carrello è vuoto</p>
        ) : (
          cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-row  md:flex-row justify-evenly pb-6 pt-2 border-b border-gray-400  md:mb-0"
            >
              <div className="w-28 h-24 mt-1   md:w-24 md:h-28   bg-gray-300 rounded-lg flex items-center justify-around text-white mb-4 md:mb-0">
                Immagine
              </div>

              <div className="ml-6 md:ml-8 flex-1 flex-col md:flex-row justify-around md-m-14 ">
                <h3 className="text-base font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4 mr-4">
                  {product.description}
                </p>

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
                  style={{ textDecoration: "underline" }}
                  className="hover:text-red-400 font-normal p-1 mt-3 ml-2"
                >
                  Rimuovi
                </button>


              </div>
              <div className="mb-10 md:mt-0 md:ml-6">
                <p className="text-lg font-medium flex flex-col ">
                  €{(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            </div>

          ))
        )}

      </div>




      <div> <div className="checkout mt-6 md:mt-8 md:pl-6 md:ml-3 md:pt-8 bg-gray-50 rounded-md p-4 md:mb-auto md:pb-10 flex flex-col gap-5">
        <p>Subtotale: <span className="flex justify-self-end text-lg">€{getTotal().toFixed(2)}</span> </p>
        <p>Spedizione:Spedizione gratuita con l'acquisto  di un'altro accessorio</p>
        <p>Imposta stimata: <span className="flex justify-end"> €0.00</span> </p>
        <p><strong>Totale: <div className="flex justify-end text-lg">€{getTotal().toFixed(2)}</div></strong></p>
        <div className="flex justify-center">
          <button className="bg-orange-500 rounded-3xl  px-1 py-2 w-60 md:w-52 justify-center  hover:bg-orange-400"> <strong >Continua a Checkout</strong></button>
        </div></div>

        <div className="mt-10 flex justify-center">
          <hr className="w-full  md:w-10/12 mt-0 font-bold mb-4" />
        </div>

        <div className="ml-10 md:mt-5">
          <p><span role="img" aria-label="local shipping">🚚</span> Spedisce entro cinque giorni lavorativi.</p>
          <p><span role="img" aria-label="verified user">✅</span><u>Garanzia di restituzione entro 30 giorni + garanzia limitata.</u> </p>
          <p><span role="img" aria-label="cover">📱</span> Spedizione gratuita su ordini di cover e pellicole.</p>
        </div>

        <div className="mt-10 flex justify-center">
          <hr className="w-full  md:w-10/12 mt-0 font-bold mb-4" />
        </div>

      </div>

    </div>
  );
};

export default Cart;
