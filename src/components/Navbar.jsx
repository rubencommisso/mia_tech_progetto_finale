import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Importa Link per il routing

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);
  const [dropdownOpenAbout, setDropdownOpenAbout] = useState(false);
  const [dropdownOpenProducts, setDropdownOpenProducts] = useState(false);

  // Riferimento per il menu mobile
  const mobileMenuRef = useRef(null);
  const mobileMenuMaskRef = useRef(null);

  const handleCartClick = () => {
    setCartClicked(!cartClicked);
  };

  const toggleDropdownAbout = () => {
    setDropdownOpenAbout(!dropdownOpenAbout);
    setDropdownOpenProducts(false);
  };

  const toggleDropdownProducts = () => {
    setDropdownOpenProducts(!dropdownOpenProducts);
    setDropdownOpenAbout(false);
  };

  // Funzione per chiudere il menu mobile
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Funzione per chiudere il menu quando clicchi fuori dal menu
  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current && 
      !mobileMenuRef.current.contains(event.target) && 
      !mobileMenuMaskRef.current.contains(event.target)
    ) {
      setMobileMenuOpen(false);
    }
  };

  // Aggiungi un listener per il clic fuori dal menu mobile solo in modalità desktop
  useEffect(() => {
    const handleResize = () => {
      // Controlla se siamo in modalità desktop
      if (window.innerWidth >= 768) {
        document.addEventListener("click", handleClickOutside);
      } else {
        document.removeEventListener("click", handleClickOutside);
      }
    };

    // Aggiungi listener per il ridimensionamento della finestra
    handleResize();
    window.addEventListener("resize", handleResize);

    // Pulizia al dismontaggio del componente
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {mobileMenuOpen && (
        <div
          ref={mobileMenuMaskRef}
          id="mask"
          className="w-[100vw] h-[100vh] fixed top-0 z-10 bg-black opacity-50"
          onClick={closeMobileMenu} // Chiude il menu se si clicca fuori dal menu
        ></div>
      )}
      <nav className="border-b px-3 sticky top-0 bg-white md:h-[80px] md:flex md:items-center max-w-7xl mx-auto z-[5]">
        <div className="px-2 sm:px-6 md:flex-grow">
          <div className="relative flex items-center justify-between md:justify-start">
            <div className="md:hidden">
              <button
                type="button"
                className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 flex justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div id="logo" className="md:w-1/12 flex justify-start mr-6">
              <a href="/">
                <img
                  src={logo}
                  alt="Logo Progetto Finale"
                  className="object-contain"
                  style={{
                    height: "auto",
                    maxHeight: "80px",
                    width: "auto",
                    maxWidth: "400px",
                  }}
                />
              </a>
            </div>

            <div className="hidden md:flex space-x-6 px-8">
              <a
                href="#"
                className="rounded-md px-3 py-2 text-sm hover:text-orange-700 font-semibold"
              >
                Home
              </a>

              <div className="relative">
                <button
                  onClick={toggleDropdownAbout}
                  className="rounded-md px-3 py-2 text-sm hover:text-orange-700 font-semibold"
                >
                  About
                </button>
                {dropdownOpenAbout && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                    <Link
                      to="/about-us"
                      className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                      onClick={closeMobileMenu} // Chiude il menu e naviga quando clicchi
                    >
                      About us
                    </Link>
                    <Link
                      to="/sustainability"
                      className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                      onClick={closeMobileMenu}
                    >
                      Sustainability
                    </Link>
                    <Link
                      to="/contact-us"
                      className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                      onClick={closeMobileMenu}
                    >
                      Contact us
                    </Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={toggleDropdownProducts}
                  className="rounded-md px-3 py-2 text-sm hover:text-orange-700 font-semibold"
                >
                  Products
                </button>
                {dropdownOpenProducts && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                    <Link
                      to="/set-accessori"
                      className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                      onClick={closeMobileMenu} // Chiude il menu e naviga quando clicchi
                    >
                      Set accessori
                    </Link>
                    <Link
                      to="/cover"
                      className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                      onClick={closeMobileMenu}
                    >
                      Cover
                    </Link>
                    <Link
                      to="/pellicole"
                      className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                      onClick={closeMobileMenu}
                    >
                      Pellicole
                    </Link>
                    <Link
                      to="/ring"
                      className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                      onClick={closeMobileMenu}
                    >
                      Ring
                    </Link>
                    <Link
                      to="/kit-pulizia"
                      className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                      onClick={closeMobileMenu}
                    >
                      Kit pulizia
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center md:flex-grow md:justify-end">
              <button
                type="button"
                className="relative p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={handleCartClick}
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View cart</span>
                <ShoppingCartIcon
                  className={`h-8 w-8 ${
                    cartClicked ? "text-orange-700" : "text-black"
                  } hover:text-orange-700`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef} // Riferimento al menu mobile
          className="fixed top-0 w-[80vw] h-[100vh] md:hidden bg-white pt-2 pb-3 space-y-1 z-20 px-6 transition-all duration-1000"
        >
          <div
            className="font-bold text-xl py-3 cursor-pointer inline-block"
            onClick={() => setMobileMenuOpen(false)}
          >
            X
          </div>
          <div className="flex flex-col h-4/6 justify-around">
            <Link
              to="/"
              className="text-black block px-3 py-2 text-base font-medium border-b-2"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdownAbout}
                className="text-black block px-3 py-2 text-base font-medium border-b-2"
              >
                About
              </button>
              {dropdownOpenAbout && (
                <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
                  <Link
                    to="/about-us"
                    className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                    onClick={closeMobileMenu}
                  >
                    About us
                  </Link>
                  <Link
                    to="/sustainability"
                    className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                    onClick={closeMobileMenu}
                  >
                    Sustainability
                  </Link>
                  <Link
                    to="/contact-us"
                    className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                    onClick={closeMobileMenu}
                  >
                    Contact us
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={toggleDropdownProducts}
                className="text-black block px-3 py-2 text-base font-medium border-b-2"
              >
                Products
              </button>
              {dropdownOpenProducts && (
                <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10">
                  <Link
                    to="/set-accessori"
                    className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                    onClick={closeMobileMenu}
                  >
                    Set accessori
                  </Link>
                  <Link
                    to="/cover"
                    className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                    onClick={closeMobileMenu}
                  >
                    Cover
                  </Link>
                  <Link
                    to="/pellicole"
                    className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                    onClick={closeMobileMenu}
                  >
                    Pellicole
                  </Link>
                  <Link
                    to="/ring"
                    className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                    onClick={closeMobileMenu}
                  >
                    Ring
                  </Link>
                  <Link
                    to="/kit-pulizia"
                    className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                    onClick={closeMobileMenu}
                  >
                    Kit pulizia
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
