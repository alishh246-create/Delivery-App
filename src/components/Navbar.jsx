import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logos.png";
import "../App.css";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 sticky-top"> 
       <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center gap-2">
          <img src={logo} alt="logo" width="60" height="70" />
          <span className="fw-bold text-warning fs-4">
            Alishh Flavour Town
          </span>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto gap-3">

            <li>
              <Link className="nav-link text-white fw-semibold" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="nav-link text-white fw-semibold" to="/menu">
                Menu
              </Link>
            </li>

            <li>
              <Link className="nav-link text-white fw-semibold" to="/contact">
                Contact
              </Link>
            </li>
            {/* 🛒 CART ICON WITH BADGE */}
            <li className="nav-item position-relative">
              <Link className="nav-link text-white fw-semibold" to="/cart">
                <FaShoppingCart size={22} />
                
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "11px" }}
                >
                  {totalQty}
                </span>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;