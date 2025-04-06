
    
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
                >
                {label}
            </button>
            </div>
        </div>
    )
}

export default ButtonToPage