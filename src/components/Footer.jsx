import React from "react"
import { Link } from "react-router-dom"
import {
  FaInstagram,
  FaFacebook,
  FaShieldAlt,
  FaMobileAlt,
  FaStore,
  FaInfoCircle,
  FaCogs,
  FaEnvelope,
  FaCookieBite,
  FaUserShield,
  FaFileContract,
  FaRing,
  FaPumpSoap,
  FaHome,
  FaGithub
} from "react-icons/fa"

const Footer = () => {
  const linkClass =
    "hover:underline hover:text-orange-400 transition-all duration-200 flex items-center space-x-2";

  const scrollToTop = () => {
    window.scrollTo(0, 0);  // Scorri in alto quando viene cliccato
  }

  return (
    <footer className="bg-black text-white text-left py-16 px-10 lg:py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between px-6">
        {/* Azienda */}
        <div className="flex-auto mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4 transition-transform duration-200 hover:scale-105">
            Azienda
          </h3>
          <ul className="space-y-3">
            <li><Link to="/about-us" onClick={scrollToTop} className={linkClass}><FaInfoCircle /><span>Chi siamo</span></Link></li>
            <li><Link to="/contact-us" onClick={scrollToTop} className={linkClass}><FaEnvelope /><span>Contattaci</span></Link></li>
            <li><Link to="/" onClick={scrollToTop} className={linkClass}><FaHome /><span>Home</span></Link></li>
            <li><Link to="/sustainability" onClick={scrollToTop} className={linkClass}><FaCogs /><span>Sostenibilità</span></Link></li>
          </ul>
        </div>

        { /*Prodotti */}
        <div className="flex-auto mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4 transition-transform duration-200 hover:scale-105">
            I nostri prodotti
          </h3>
          <ul className="space-y-3">
            <li><Link to="/set-accessori" onClick={scrollToTop} className={linkClass}><FaStore /><span>Set accessori</span></Link></li>
            <li><Link to="/cover" onClick={scrollToTop} className={linkClass}><FaMobileAlt /><span>Cover per telefoni</span></Link></li>
            <li><Link to="/pellicole" onClick={scrollToTop} className={linkClass}><FaShieldAlt /><span>Pellicole protettive</span></Link></li>
            <li><Link to="/ring" onClick={scrollToTop} className={linkClass}><FaRing /><span>Ring per telefoni</span></Link></li>
            <li><Link to="/kit-pulizia" onClick={scrollToTop} className={linkClass}><FaPumpSoap /><span>Kit pulizia</span></Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex-auto mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4 transition-transform duration-200 hover:scale-105">
            Social
          </h3>
          <ul className="space-y-3">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={linkClass}><FaInstagram /><span>Instagram</span></a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={linkClass}><FaFacebook /><span>Facebook</span></a></li>
            <li>
              <a
                href="https://github.com/rubencommisso/mia_tech_progetto_finale"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Mappa */}
        <div className="flex-auto">
          <h3 className="text-xl font-semibold mb-4 transition-transform duration-200 hover:scale-105">
            Dove ci troviamo
          </h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Dove ci troviamo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.508022891323!2d9.18998211581572!3d45.46420317910039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a4e6856d9d%3A0x65f0f7e807f34563!2sVia%20Roma%2C%201%2C%20Milano!5e0!3m2!1sit!2sit!4v1712332139728!5m2!1sit!2sit"
              width="150"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Diritti  */}
      <div className="py-6 w-full mt-10">
        <div className="max-w-screen-xl mx-auto px-6 ">
          <p className="text-start text-m mb-4">© 2025 La Tua Azienda. Tutti i diritti riservati.</p>
          <ul className="flex justify-start space-x-6 mb-4">
            <li><Link to="/cookie-policy" onClick={scrollToTop} className={linkClass}><FaCookieBite /><span>Cookie</span></Link></li>
            <li><Link to="/privacy-policy" onClick={scrollToTop} className={linkClass}><FaUserShield /><span>Privacy</span></Link></li>
            <li><Link to="/terms-of-service" onClick={scrollToTop} className={linkClass}><FaFileContract /><span>Termini di servizio</span></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

