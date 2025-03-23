const formatPrice = (value) =>
    new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(value);
    
const AddButton = ({onClick, totalPrice}) => {
    return (
        <div className="mt-6 flex gap-4 justify-center items-center ">
            <div className="text-lg font-semibold"> Totale carrello: {totalPrice > 0 ? formatPrice(totalPrice) : "--"}</div>
            <div className=" w-2/3  mx-auto">
            <button
                onClick={onClick}
                className="bg-orange-500 hover:bg-orange-400 text-black font-bold w-full py-3 rounded-3xl transition-all"
            >
                Add to bag
            </button>
            </div>
        </div>
    )
}

export default AddButton