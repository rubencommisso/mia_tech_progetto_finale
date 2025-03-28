import { useState } from "react";

const AddTobagRingArgento = ({ onAddToCart }) => {
  const [totalPrice] = useState(18); // Il prezzo del ring argento (non viene più mostrato)

  const handleAddToCart = () => {
    onAddToCart("argento", totalPrice);
  };

  return (
    <div className="mt-4">
      <div className="w-full flex justify-center">
        <button
          onClick={handleAddToCart}
          className="bg-gray-500 hover:bg-gray-400 text-white font-bold w-full py-3 rounded-3xl transition-all"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default AddTobagRingArgento;
