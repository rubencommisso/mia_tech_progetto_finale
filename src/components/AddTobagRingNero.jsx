import { useState } from "react";

const AddTobagRingNero = ({ onAddToCart }) => {
  const [totalPrice] = useState(15); // Il prezzo del ring nero (non viene più mostrato)

  const handleAddToCart = () => {
    onAddToCart("nero", totalPrice);
  };

  return (
    <div className="mt-4">
      <div className="w-full flex justify-center">
        <button
          onClick={handleAddToCart}
          className="bg-black hover:bg-gray-800 text-white font-bold w-full py-3 rounded-3xl transition-all"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default AddTobagRingNero;
