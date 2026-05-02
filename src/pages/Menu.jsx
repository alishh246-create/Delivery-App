import React, { useState } from "react";
import OrderMethod from "../components/OrderMethod";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function Menu() {
  const [addedId, setAddedId] = useState(null);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addToCart(item));
    setAddedId(item.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1000);
  };

  return (
    <>
      <OrderMethod />

      <h1 className="text-center mb-4 text-danger">
        Choose Your Craving
      </h1>

      {/* ================= DEALS (4) ================= */}
      <div className="container">
        <div className="row">

          {[
            {
              id: 1,
              name: "Burger Deal",
              price: 2799,
              img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500",
            },
            {
              id: 2,
              name: "Special Deal",
              price: 3099,
              img: "https://plus.unsplash.com/premium_photo-1683657860843-abae8aa03a64?w=500",
            },
            {
              id: 3,
              name: "Student Deal",
              price: 1699,
              img: "https://thumbs.dreamstime.com/b/fast-food-burger-hot-dog-sandwich-chicken-wrap-plate-sandwiches-93110264.jpg",
            },
            {
              id: 4,
              name: "3 Person Deal",
              price: 2899,
              img: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500",
            },
          ].map((item) => (
            <div className="col-md-6" key={item.id}>
              <div className="card mb-3">
                <div className="row g-0">

                  <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>{item.name}</h5>
                      <h6>Price: {item.price}</h6>

                      <button
                        className={`btn ${
                          addedId === item.id ? "btn-success" : "btn-warning"
                        }`}
                        onClick={() => handleAdd(item)}
                      >
                        {addedId === item.id ? "Added ✓" : "Add to Cart"}
                      </button>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= SWEETS (4) ================= */}
      <h1 className="text-center mb-4 text-danger">
        Sweet Treats
      </h1>

      <div className="container">
        <div className="row">

          {[
            {
              id: 5,
              name: "Chocolate Donuts",
              price: 550,
              img: "https://images.unsplash.com/photo-1527904324834-3bda86da6771?w=500",
            },
            {
              id: 6,
              name: "Chocolate Balls",
              price: 500,
              img: "https://plus.unsplash.com/premium_photo-1667031519185-3dad7d8931cd?w=500",
            },
            {
              id: 7,
              name: "Oreo Pops",
              price: 700,
              img: "https://pekis.net/sites/default/files/styles/social_share_1200/public/2025-04/Oreo%20Cake%20Pops.webp?itok=inC6XFRt",
            },
            {
              id: 8,
              name: "Brownies",
              price: 550,
              img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500",
            },
          ].map((item) => (
            <div className="col-md-6" key={item.id}>
              <div className="card mb-3">
                <div className="row g-0">

                  <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>{item.name}</h5>
                      <h6>Price: {item.price}</h6>

                      <button
                        className={`btn ${
                          addedId === item.id ? "btn-success" : "btn-warning"
                        }`}
                        onClick={() => handleAdd(item)}
                      >
                        {addedId === item.id ? "Added ✓" : "Add to Cart"}
                      </button>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= SIGNATURE (2) ================= */}
      <h1 className="text-center mb-4 text-danger">
        Our Signature Food
      </h1>

      <div className="container">
        <div className="row">

          {[
            {
              id: 9,
              name: "Smoky BBQ Burger",
              price: 1699,
              img: "https://images.unsplash.com/photo-1614243135180-c4f3fb925daf?w=500",
            },
            {
              id: 10,
              name: "Molten Lava Cake",
              price: 3100,
              img: "https://images.getrecipekit.com/20250325120225-how-20to-20make-20chocolate-20molten-20lava-20cake-20in-20the-20microwave.png?width=650&quality=90&",
            },
          ].map((item) => (
            <div className="col-md-6" key={item.id}>
              <div className="card mb-3">
                <div className="row g-0">

                  <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" />
                  </div>

                  <div className="col-md-8">
                    <div className="card-body">
                      <h5>{item.name}</h5>
                      <h6>Price: {item.price}</h6>

                      <button
                        className={`btn ${
                          addedId === item.id ? "btn-success" : "btn-warning"
                        }`}
                        onClick={() => handleAdd(item)}
                      >
                        {addedId === item.id ? "Added ✓" : "Add to Cart"}
                      </button>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Menu;