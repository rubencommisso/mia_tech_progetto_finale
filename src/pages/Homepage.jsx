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
    navigate("/clean");
  };

  return (
    <>
      {/* Qui forziamo larghezza schermo intero */}
      <div className="w-screen overflow-hidden bg-white ">
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

      {/* L’area con 80vw per il resto della pagina */}
      <div className="w-[80vw] max-w-screen-xl mx-auto">
        <CarousellHomepage />

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
  <div>
    <img src={esempio} alt="foto" />
    <ButtonToPage onClick={goToCoverPage} />
  </div>
  {/* Card 2 */}
  <div>
    <img src={esempio} alt="foto" />
    <ButtonToPage onClick={goToFilmPage} />
  </div>
  {/* Card 3 */}
  <div>
    <img src={esempio} alt="foto" />
    <ButtonToPage onClick={goToRingPage} />
  </div>
  {/* Card 4 */}
  <div>
    <img src={esempio} alt="foto" />
    <ButtonToPage onClick={goToCleanPage} />
  </div>
</div>

      </div>
    </>
  );
};

export default Homepage;


