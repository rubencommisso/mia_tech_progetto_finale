import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Product from "./pages/Product/Product";
import Layout from "./components/Layout";
import AboutUs from './pages/AboutUs';
import Sustainability from './pages/Sustainability';
import ContactPage from './pages/Contact';
import Rings from './pages/Ring';



const App = () => {
  return (
      <Routes>
        <Route element={<Layout />}> {/* Layout Route */}
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sustainability"  element={<Sustainability />} />  
          <Route path="/about-us"  element={<AboutUs />} />  
          <Route path="/sustainability/:productId" element={<Sustainability />} />
          <Route path="/contact-us"  element={<ContactPage />} /> 
          <Route path="/ring"  element={<Rings />} /> 
        </Route>
      </Routes>
  );
};

export default App;
