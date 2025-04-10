import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Logo5 from "../assets/Logo5.png";
import cover3 from "../assets/cover3.jpeg";
import coverColorate from "../assets/coverColorate.jpeg";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const aboutLinks = [
  { to: "/about-us", label: "Chi siamo" },
  { to: "/sustainability", label: "Sostenibilità" },
  { to: "/contact-us", label: "Contattaci" },
];

const productLinks = [
  { to: "/set-accessori", label: "Set accessori" },
  { to: "/cover", label: "Cover" },
  { to: "/pellicole", label: "Pellicole" },
  { to: "/ring", label: "Ring" },
  { to: "/kit-pulizia", label: "Kit pulizia" },
];

const Navbar = () => {
  // Variabili di stato per la gestione della navbar
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  // Riferimenti per i dropdown e il menu mobile
  const mobileMenuRef = useRef(null);
  const mobileMenuMaskRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const productsDropdownRef = useRef(null);

  // Hook per la navigazione
  const navigate = useNavigate();

  // Funzioni per il dropdown (hover e click) e per la gestione del menu mobile
  const handleMouseEnterDropdown = (dropdownName) => {
    // Mostra il dropdown solo su schermi >= 768px
    if (window.innerWidth >= 768) {
      setActiveDropdown(dropdownName);
    }
  };

  const handleMouseLeaveDropdown = () => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdownName) => {
    if (window.innerWidth < 768) return; // Evita toggle da mobile
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Chiude i dropdown se clicchiamo fuori (solo in desktop)
  const handleClickOutside = (event) => {
    if (window.innerWidth < 768) return;
    const isClickInsideAbout =
      aboutDropdownRef.current?.contains(event.target) ||
      event.target.closest("[data-dropdown='about']");
    const isClickInsideProducts =
      productsDropdownRef.current?.contains(event.target) ||
      event.target.closest("[data-dropdown='products']");
    if (!isClickInsideAbout && !isClickInsideProducts) {
      setActiveDropdown(null);
    }
  };

  // Funzione per aggiornare il conteggio leggendo il localStorage
  const updateCartCount = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // Se ogni articolo nel carrello ha un campo "quantity", somma le quantità
    const count = storedCart.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );
    setCartCount(count);
  };

  // useEffect per aggiornare il conteggio quando la navbar monta
  useEffect(() => {
    updateCartCount();
    // Aggiunge un listener per un eventuale evento custom "cartUpdated"
    window.addEventListener("cartUpdated", updateCartCount);
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  // Aggiunge listener per click fuori dai dropdown (desktop)
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Resetta i dropdown se la finestra viene ridimensionata a <768
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Funzione che gestisce il click sull'icona del carrello
  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <>
      {/* Overlay scuro dietro al menu mobile aperto */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuMaskRef}
          className="w-screen h-screen fixed top-0 left-0 z-10 bg-black opacity-50"
          onClick={() => {
            closeMobileMenu();
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
          }}
        />
      )}

      {/* NAVBAR principale */}
      <nav className="border-b sticky top-0 bg-white w-full z-[5]">
        <div className="relative flex items-center px-2 sm:px-6 md:px-6 h-16">
          {/* HEADER MOBILE (visibile solo su <768px) */}
          <div className="md:hidden flex w-full items-center justify-between">
            <div className="flex items-center">
              {/* Bottone apertura menu mobile */}
              <button
                type="button"
                className="mr-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
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

              {/* Logo */}
              <Link to="/">
                <img
                  src={Logo5}
                  alt="Logo"
                  className="object-contain h-20 w-auto"
                />
              </Link>
            </div>

            {/* Icona Carrello Mobile */}
            <div className="flex items-center">
              <button
                type="button"
                className="relative p-2 focus:outline-none"
                onClick={handleCartClick}
              >
                <span className="sr-only">View cart</span>
                <ShoppingCartIcon
                  className={`h-8 w-8 ${
                    cartClicked ? "text-orange-700" : "text-black"
                  } hover:text-orange-700`}
                />
              </button>
            </div>
          </div>

          {/* VISTA DESKTOP (>=768px) */}
          <div className="hidden md:flex w-full items-center justify-between">
            {/* Sezione sinistra: logo e navigazione */}
            <div className="flex items-center space-x-6">
              {/* Logo */}
              <div id="logo" className="mr-6">
                <Link to="/">
                  <img
                    src={Logo5}
                    alt="Logo"
                    className="object-contain h-[130px] w-auto"
                  />
                </Link>
              </div>

              {/* Link Home */}
              <Link
                to="/"
                className="rounded-md px-3 py-2 text-sm hover:text-orange-700 font-semibold"
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                }}
              >
                Home
              </Link>

              {/* DROPDOWN ABOUT */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnterDropdown("about")}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <button
                  onClick={() => toggleDropdown("about")}
                  data-dropdown="about"
                  className="rounded-md px-3 py-2 text-sm hover:text-orange-700 font-semibold"
                >
                  Chi siamo
                </button>
                <div
                  ref={aboutDropdownRef}
                  onMouseEnter={() => setActiveDropdown("about")}
                  onMouseLeave={handleMouseLeaveDropdown}
                  className={`fixed top-[64px] left-0 w-screen bg-white shadow-lg z-20 transition-all duration-300 ease-in-out transform ${
                    activeDropdown === "about"
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  } hidden md:block`}
                >
                  <div className="flex">
                    {/* Colonna sinistra: Immagine */}
                    <div className="w-1/4 p-4">
                      <img
                        src={coverColorate}
                        alt="Chi siamo"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* Colonna destra: Link */}
                    <div className="w-3/4 px-6 py-4">
                      {aboutLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                          onClick={() => {
                            closeMobileMenu();
                            setTimeout(() => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }, 100);
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* DROPDOWN PRODUCTS */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnterDropdown("products")}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <button
                  onClick={() => toggleDropdown("products")}
                  data-dropdown="products"
                  className="rounded-md px-3 py-2 text-sm hover:text-orange-700 font-semibold"
                >
                  Prodotti
                </button>
                <div
                  ref={productsDropdownRef}
                  onMouseEnter={() => setActiveDropdown("products")}
                  onMouseLeave={handleMouseLeaveDropdown}
                  className={`fixed top-[64px] left-0 w-screen bg-white shadow-lg z-20 transition-all duration-300 ease-in-out transform ${
                    activeDropdown === "products"
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  } hidden md:block`}
                >
                  <div className="flex">
                    {/* Colonna sinistra: Immagine */}
                    <div className="w-1/4 p-4">
                      <img
                        src={cover3}
                        alt="Prodotti"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* Colonna destra: Link */}
                    <div className="w-3/4 px-6 py-4">
                      {productLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                          onClick={() => {
                            closeMobileMenu();
                            setTimeout(() => {
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }, 100);
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sezione destra: carrello */}
            <div className="flex items-center">
              <button
                type="button"
                className="relative p-2 focus:outline-none"
                onClick={handleCartClick}
              >
                <span className="sr-only">View cart</span>
                <ShoppingCartIcon
                  className={`h-8 w-8 ${
                    cartClicked ? "text-orange-700" : "text-black"
                  } hover:text-orange-700`}
                />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU ALTERNATIVO (visibile solo quando mobileMenuOpen è true) */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-0 left-0 w-full h-full md:hidden bg-white z-[60] pt-2 pb-3 px-6 transition-all duration-500"
        >
          {/* Pulsante per chiudere il menu */}
          <div
            className="font-bold text-xl py-3 cursor-pointer inline-block"
            onClick={() => {
              closeMobileMenu();
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }}
          >
            X
          </div>
          <div className="flex flex-col h-4/6 justify-around">
            {/* Link Home Mobile */}
            <Link
              to="/"
              className="text-black block px-3 py-2 text-base font-medium border-b-2"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                closeMobileMenu();
              }}
            >
              Home
            </Link>

            {/* Dropdown About Mobile */}
            <div className="relative">
              <button
                onClick={() =>
                  setActiveDropdown((prev) => (prev === "about" ? null : "about"))
                }
                className="text-black block px-3 py-2 text-base font-medium border-b-2"
              >
                Chi siamo
              </button>
              <div
                className={`transition-all duration-300 ease-in-out transform ${
                  activeDropdown === "about"
                    ? "opacity-100 max-h-[500px]"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {aboutLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      closeMobileMenu();
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown Products Mobile */}
            <div className="relative">
              <button
                onClick={() =>
                  setActiveDropdown((prev) => (prev === "products" ? null : "products"))
                }
                className="text-black block px-3 py-2 text-base font-medium border-b-2"
              >
                Prodotti
              </button>
              <div
                className={`transition-all duration-300 ease-in-out transform ${
                  activeDropdown === "products"
                    ? "opacity-100 max-h-[500px]"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {productLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-4 py-2 text-sm text-black hover:bg-orange-100"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      closeMobileMenu();
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;



