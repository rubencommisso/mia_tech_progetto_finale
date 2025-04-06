// Card.jsx
const Card = ({ id, title, price, image, activeCardId, onClick, children }) => {
  const isActive = activeCardId === id;

  const formatPrice = (value) =>
    new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(value);

  return (
    <div
      className={`
        w-48 min-h-[15rem] p-3 rounded-2xl shadow-md border 
        flex flex-col transition-all duration-200 text-center cursor-pointer
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

      {/* Contenuto dinamico */}
      <div className="flex-1 flex flex-col justify-between items-center w-full">
        {/* Titolo */}
        <div className="mt-2 px-1 w-full">
          <h1 className="text-sm font-semibold leading-snug break-words line-clamp-2">
            {title}
          </h1>
        </div>

        {/* Prezzo */}
        <div className="mt-2">
          <h2 className="text-base font-bold text-blue-800">
            {formatPrice(price)}
          </h2>
        </div>

        {/* Bottone */}
        {children && (
          <div className="mt-3 w-full flex justify-center">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
