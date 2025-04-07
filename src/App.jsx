import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Layout from "./components/Layout";
import AboutUs from './pages/AboutUs';
import Sustainability from './pages/Sustainability';
import ContactPage from './pages/Contact'
import Pellicole from "./pages/Pellicole";
import ShowDetail from "./components/ShowDetail";
import Homepage from "./pages/Homepage";
import Ring from "./pages/Ring";
import KitPulizia from "./pages/KitPulizia";
import Cover from "./pages/Cover";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsofService";



const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}> {/* Layout Route */}
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sustainability/:productId" element={<Sustainability />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/ring" element={<Ring />} />
        <Route path="/pellicole" element={<Pellicole />} />
        <Route path="/kit-pulizia" element={<KitPulizia />} />
        <Route path="/showdetail/:productId" element={<ShowDetail />} />
        <Route path="/set-accessori" element={<Product />} />
        <Route path="/showdetail" element={<ShowDetail />} />
        <Route path="/cover" element={<Cover />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Route>
    </Routes>
  );
};

export default App;
