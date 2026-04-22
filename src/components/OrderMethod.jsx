import React from 'react'
import { FaMapMarkerAlt, FaHamburger, FaMotorcycle, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


function OrderMethod() {
  return (
  <>
<div className="container py-5">
  <h2 className="text-center text-danger fw-bold">How to Order</h2>
  <p className="text-center fs-5 mb-5">It's as easy as this.</p>

  <div className="row text-center g-4">
    
    <div className="col-md-4">
      <div className="card shadow border-0 p-4 h-100">
        <FaMapMarkerAlt size={50} className="text-danger mx-auto" />
        <h5 className="fw-bold mt-3">Tell us where you are</h5>
        <p>We'll show you stores and restaurants nearby you can order from.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow border-0 p-4 h-100">
        <FaHamburger size={50} className="text-warning mx-auto" />
        <h5 className="fw-bold mt-3">Find what you want</h5>
        <p>Search for items or dishes, businesses or cuisines.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card shadow border-0 p-4 h-100">
        <FaMotorcycle size={50} className="text-success mx-auto" />
        <h5 className="fw-bold mt-3">Order for delivery or collection</h5>
        <p>We'll update you on your order's progress.</p>
      </div>
    </div>
  </div>
</div>
</>
  );
};

export default OrderMethod;

