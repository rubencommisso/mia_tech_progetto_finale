import { useState } from "react";

const AddTobagRingOro = ({ onAddToCart }) => {
  const [totalPrice] = useState(20); // Il prezzo del ring oro (non viene più mostrato)

  const handleAddToCart = () => {
    onAddToCart("oro", totalPrice);
  };

  return (
    <div className="mt-4">
      <div className="w-full flex justify-center">
        <button
          onClick={handleAddToCart}
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold w-full py-3 rounded-3xl transition-all"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default AddTobagRingOro;
