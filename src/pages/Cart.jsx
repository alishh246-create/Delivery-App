import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../features/cartSlice";
import Footer from "../components/Footer";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <>
      <div className="container py-5">

        <h2 className="text-center text-danger mb-4">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <h5 className="text-center text-muted">Cart is empty</h5>
        ) : (
          cartItems.map((item) => (
            <div className="card mb-3 p-3 shadow" key={item.id}>
              <div className="row align-items-center">

                <div className="col-md-2">
                  <img src={item.img} className="img-fluid rounded" />
                </div>

                <div className="col-md-4">
                  <h5>{item.name}</h5>
                  <p>Price: Rs. {item.price}</p>
                </div>

                <div className="col-md-3">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => dispatch(decreaseQty(item.id))}
                  >
                    -
                  </button>

                  <span className="badge bg-secondary px-3 py-2">
                    {item.qty}
                  </span>

                  <button
                    className="btn btn-warning ms-2"
                    onClick={() => dispatch(increaseQty(item.id))}
                  >
                    +
                  </button>
                </div>

                <div className="col-md-3 text-end">
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    X
                  </button>
                </div>

              </div>
            </div>
          ))
        )}

        {/* 👇 ONLY ONE TOTAL AT END */}
        
        {cartItems.length > 0 && (
          <div className="text-end mt-4">
  <button
    className="btn btn-danger px-4"
    onClick={() => navigate("/billing")}
  >
    Grand Total: Rs. {total}
  </button>
</div>
        )}

      </div>

      <Footer />
    </>
  );
}

export default Cart;