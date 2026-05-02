import React from "react";

function Billing() {
  return (
    <div className="container py-5">

      <h2 className="text-center mb-4 text-danger">
        Billing Method
      </h2>

      <div className="card p-4 shadow">

<h5>Select Payment Method</h5>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="payment" />
          <label className="form-check-label">Cash on Delivery</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="payment" />
          <label className="form-check-label">JazzCash</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" name="payment" />
          <label className="form-check-label">EasyPaisa</label>
        </div>
<button className="btn btn-warning w-100 fw-bold rounded-pill" onClick={() => alert("/Thank You For Your Order Confirmation")}>
          Confirm Order
        </button>

      </div>

    </div>
  );
}

export default Billing;