
    
const ButtonToPage = ({ onClick, label = "Scopri di più", className }) => {
    const handleClick = (e) => {
        e.stopPropagation();
        if (typeof onClick === 'function') {
            onClick();
        }
    };

    return (
        <button onClick={handleClick} className={className}>
            {label}
        </button>
    );
};

export default ButtonToPage;

