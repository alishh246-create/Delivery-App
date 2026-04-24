import React from "react";

function Billing() {
  return (
    <div className="container py-5">

      <h2 className="text-center text-primary mb-4">
        Billing Method
      </h2>

      <div className="card p-4 shadow">

        <h5>Select Payment Method</h5>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="payment" />
          <label className="form-check-label">Cash on Delivery</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="payment" />
          <label className="form-check-label">JazzCash</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="payment" />
          <label className="form-check-label">EasyPaisa</label>
        </div>

        <button className="btn btn-primary mt-3">
          Confirm Order
        </button>

      </div>

    </div>
  );
}

export default Billing;