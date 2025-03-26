
    
const ButtonToPage = ({onClick}) => {
    return (
        <div className="mt-6 flex gap-4 justify-center items-center ">
            <div className=" w-2/3  mx-auto">
            <button
                onClick={onClick}
                className="bg-orange-500 hover:bg-orange-400 text-black font-bold w-full py-3 rounded-3xl transition-all"
            >
                Explore
            </button>
            </div>
        </div>
    )
}

export default ButtonToPage