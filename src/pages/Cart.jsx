import React from "react";
import Footer from "../components/Footer";

function Cart() {
  return (
    <>
    <div className="container py-5">

      <h2 className="text-center text-danger mb-4">
        Your Cart 
      </h2>

      {/* Item 1 */}
      <div className="card mb-3 p-3 shadow">
        <div className="row align-items-center">

          <div className="col-md-2">
            <img 
              src="https://images.unsplash.com/photo-1614243135180-c4f3fb925daf?w=500" 
              className="img-fluid rounded" 
              alt="burger"
            />
          </div>

          <div className="col-md-4">
            <h5>Smoky BBQ Burger</h5>
            <p className="mb-0">Price: Rs. 1699</p>
          </div>

          <div className="col-md-3">
            <span className="badge bg-secondary">Qty: 1</span>
          </div>

          <div className="col-md-3">
            <button className="btn btn-danger">X</button>
          </div>

        </div>
      </div>

      {/* Item 2 */}
      <div className="card mb-3 p-3 shadow">
        <div className="row align-items-center">

          <div className="col-md-2">
            <img 
              src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500" 
              className="img-fluid rounded" 
              alt="cake"
            />
          </div>

          <div className="col-md-4">
            <h5>Molten Lava Cake</h5>
            <p className="mb-0">Price: Rs. 3100</p>
          </div>

          <div className="col-md-3">
            <span className="badge bg-secondary">Qty: 1</span>
          </div>

          <div className="col-md-3">
            <button className="btn btn-danger">X</button>
          </div>

        </div>
      </div>


      {/* Checkout Button */}
      <div className="text-end mt-3">
        <button className="btn btn-success">
          Proceed to Checkout 
        </button>
      </div>

    </div>
    <Footer/>
    </>
  );
}

export default Cart;
