import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Follow from "./components/Follow";
import OrderMethod from "./components/OrderMethod";
import Billing from "./pages/Billing";


function App() {
  return (
       <>
       <Navbar/>
       <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/billing" element={<Billing/>}/>
      </Routes>
    </>
  );
}

export default App;