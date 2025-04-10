import esempio from "../assets/esempio.jpg";
import ButtonToPage from "../components/ButtonToPage";
import CarousellHomepage from "../components/carousellHomepage";
import { useNavigate } from "react-router-dom";
import coverColorate from '../assets/coverColorate.jpeg';
import pellicole from '../assets/pellicole.jpeg';
import ringPhone from '../assets/ringPhone.jpeg';
import kitPulizia from '../assets/kitPulizia.jpeg';
import cover3 from '../assets/cover3.jpeg'
import pellicole2 from '../assets/pellicole2.jpeg'


const Homepage = () => {
    const navigate = useNavigate();

    const goTopreSetpage = () => {
        navigate("/product");
    };

    const goToCoverPage = () => {
        navigate("/cover");
    };
    const goToFilmPage = () => {
        navigate("/film");
    };
    const goToRingPage = () => {
        navigate("/ring");
    };
    const goToCleanPage = () => {
        navigate("/clean");
    };

    return (
        <>
            <div className="bg-gray-100" >
                <div className="w-screen overflow-hidden  ">
                    <div className="flex animate-marquee w-max">
                        <span className="text-2xl font-bold pt-4">
                            Benvenuto su Phone Customizer – il tuo spazio per rendere unico il tuo smartphone.🚀
                            Scopri il mondo di Phone Customizer: accessori su misura per te e il tuo telefono.🚀
                        </span>
                        <span className="text-2xl font-bold pt-4">
                            Benvenuto su Phone Customizer – il tuo spazio per rendere unico il tuo smartphone.🚀
                            Scopri il mondo di Phone Customizer: accessori su misura per te e il tuo telefono.🚀
                        </span>
                    </div>
                </div>

                <div className="w-[80vw] max-w-screen-xl mx-auto">
                    <CarousellHomepage />
                    <ButtonToPage
                        onClick={goTopreSetpage}
                        label="Scegli il tuo set"
                        className="mt-4 mb-4 bg-orange-500 hover:bg-orange-400 text-black font-bold w-full py-3 rounded-3xl transition-all"
                    />

                    <style>
                        {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 27s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}
                    </style>

                    {/* Container flex responsive */}
                    <br />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80vw] pb-6">
                        {/* Card 1 */}
                        <div className="w-full">
                            <img
                                src={cover3}
                                alt="foto"
                                className="w-full object-cover"
                            />
                            <ButtonToPage
                                onClick={goToCoverPage}
                                label="Vai alle cover"
                                className="mt-4 bg-orange-500 hover:bg-orange-400 text-black font-bold w-full py-3 rounded-3xl transition-all"
                            />
                        </div>

                        {/* Card 2 */}
                        <div className="w-full">
                            <img
                                src={pellicole2}
                                alt="foto"
                                className="w-full object-cover"
                            />
                            <ButtonToPage
                                onClick={goToFilmPage}
                                label="Vai alle pellicole"
                                className="mt-4 bg-orange-500 hover:bg-orange-400 text-black font-bold w-full py-3 rounded-3xl transition-all"
                            />
                        </div>

                        {/* Card 3 */}
                        <div className="w-full">
                            <img
                                src={ringPhone}
                                alt="foto"
                                className="w-full object-cover"
                            />
                            <ButtonToPage
                                onClick={goToRingPage}
                                label="Vai ai ring"
                                className="mt-4 bg-orange-500 hover:bg-orange-400 text-black font-bold w-full py-3 rounded-3xl transition-all"
                            />
                        </div>

                        {/* Card 4 */}
                        <div className="w-full">
                            <img
                                src={kitPulizia}
                                alt="foto"
                                className="w-full object-cover"
                            />
                            <ButtonToPage
                                onClick={goToCleanPage}
                                label="Vai al kit pulizia"
                                className="mt-4 bg-orange-500 hover:bg-orange-400 text-black font-bold w-full py-3 rounded-3xl transition-all"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Homepage;


