
    
const ButtonToPage = ({onClick, label = "Scopri di più", className}) => {
    const handleClick = (e) => {
        e.stopPropagation() // impedisce che il click "salga" alla card
        if (typeof onClick === 'function') {
            onClick()
          }
      }
      
    return (
        <div className="mt-6 flex gap-4 justify-center items-center ">
            <div className="mx-auto">
            <button
                onClick={handleClick}
                className={`${className}`}
      // oppure se hai classi di default:
      // className={`bg-orange-500 text-white py-2 px-4 rounded ${className}`}
                //className="bg-orange-500 hover:bg-orange-400 text-black font-bold w-full py-3 rounded-3xl transition-all"
                >
                {label}
            </button>
            </div>
        </div>
    )
}

export default ButtonToPage