import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Product from "./pages/Product/Product";
import Layout from "./components/Layout";
import EcoProduct from "./pages/EcoProduct";


const App = () => {
  return (
      <Routes>
        <Route element={<Layout />}> {/* Layout Route */}
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ecoproduct"  element={<EcoProduct />} />  
        </Route>
      </Routes>
  );
};

export default App;
