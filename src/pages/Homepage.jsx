import esempio from "../assets/esempio.jpg";
import ButtonToPage from "../components/ButtonToPage";
import CarousellHomepage from "../components/carousellHomepage";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();

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
        navigate("/Clean");
    };

    return (
        <>
            <CarousellHomepage />
            <div className="w-[90vw] max-w-screen-xl mx-auto py-4">
            <div class="overflow-hidden whitespace-nowrap">
                    <div class="inline-block animate-marquee">
                        <span class="text-2xl font-bold px-4">Benvenuto su Phone Customizer – il tuo spazio per rendere unico il tuo smartphone.🚀</span>
                        <span class="text-2xl font-bold px-4">Scopri il mondo di Phone Customizer: accessori su misura per te e il tuo telefono.🚀</span>
                    </div>
                </div>
                <style>
                    {`
                        @keyframes marquee {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                        }
                        .animate-marquee {
                        display: inline-block;
                        white-space: nowrap;
                        animation: marquee 50s linear infinite;
                        }
                        .animate-marquee:hover {
                        animation-play-state: paused;
                        }
                    `}
                </style>

                {/* Container flex responsive */}
                <div className="flex flex-col md:flex-row gap-4 w-[90vw]">
                    <div className="flex-1">
                        <img src={esempio} alt="foto" />
                        <ButtonToPage onClick={goToCoverPage} />
                    </div>
                    <div className="flex-1">
                        <img src={esempio} alt="foto" />
                        <ButtonToPage onClick={goToFilmPage} />
                    </div>
                    <div className="flex-1">
                        <img src={esempio} alt="foto" />
                        <ButtonToPage onClick={goToRingPage} />
                    </div>
                    <div className="flex-1">
                        <img src={esempio} alt="foto" />
                        <ButtonToPage onClick={goToCleanPage} />
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Homepage;

