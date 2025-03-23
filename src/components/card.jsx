// Card.jsx
const Card = ({ id, title, price, image, activeCardId, onClick }) => {
    const isActive = activeCardId === id;
  
    return (
      <div
        className={`
          w-40 h-60 p-3 rounded-2xl shadow-md border 
          flex flex-col items-center justify-between
          transition-all duration-200 text-center
          cursor-pointer
          ${isActive ? "bg-blue-100 border-blue-500" : "bg-white hover:bg-blue-50"}
        `}
        onClick={() => onClick(id)}
      >
        {/* Immagine */}
        <div className="h-24 w-full flex items-center justify-center overflow-hidden">
          <img
            className="max-h-full max-w-full object-contain"
            src={image}
            alt={title}
          />
        </div>
  
        {/* Titolo */}
        <div className="mt-2 px-1 w-full flex-1">
          <h1 className="text-sm font-semibold leading-snug break-words line-clamp-2">
            {title}
          </h1>
        </div>
  
        {/* Prezzo */}
        <div className="mt-2">
          <h2 className="text-base font-bold text-blue-800">
            {price}
          </h2>
        </div>
      </div>
    );
  };
  
  export default Card;
  