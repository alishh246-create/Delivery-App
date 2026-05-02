import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
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
      <ScrollToTop/>
       <Navbar/>
       <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/billing" element={<Billing/>}/>
      </Routes>
    </>
  );
};

export default App;