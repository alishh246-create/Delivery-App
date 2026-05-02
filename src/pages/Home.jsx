import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import OrderMethod from "../components/OrderMethod";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function Home() {
  const [addedId, setAddedId] = useState(null);
  const dispatch = useDispatch();

  return (
    <>
      <br />

      {/* HERO */}
      <div
        className="container-fluid d-flex align-items-center justify-content-center text-center"
        style={{
          height: "90vh",
          backgroundImage:
"url('https://static.vecteezy.com/system/resources/thumbnails/049/221/986/small/appetizing-burger-with-greens-tomato-and-cheese-in-flight-on-a-yellow-background-with-blur-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
          }}
        ></div>

        <div style={{ zIndex: 2 }}>
          <h1 className="fw-bold display-4">Alishh Flavour Town</h1>
          <p className="fs-4">Fast Food, Happy Mood</p>
        </div>
      </div>

      {/* ================= BURGERS ================= */}
      <div className="container py-4">
        <h2 className="text-center mb-4 text-danger">Burger Bliss Zone</h2>

        <div className="row">
          {[
            {
              id: 1,
              name: "Zinger Burger",
              price: 950,
              img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
            },
            {
              id: 2,
              name: "Cheese Burger",
              price: 899,
              img: "https://images.unsplash.com/photo-1603893662172-99ed0cea2a08?w=500",
            },
            {
              id: 3,
              name: "Chicken Burger",
              price: 650,
              img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500",
            },
          ].map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card shadow">
                <img
                  src={item.img}
                  className="card-img-top"
                  height="250"
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5>{item.name}</h5>
                  <p>Rs.{item.price}</p>

                  <button
  className={`btn ${addedId === item.id ? "btn-success" : "btn-warning"}`}
  onClick={() => {
    dispatch(addToCart(item));
    setAddedId(item.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  }}
>
  {addedId === item.id ? "Added " : "Add to Cart"}
</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-3">
          <Link to="/menu" className="btn btn-outline-danger px-4 rounded-pill">
            More →
          </Link>
        </div>
      </div>

      {/* ================= SLUSH ================= */}
      <div className="container py-5">
        <h2 className="text-center mb-4 text-danger fw-bold">
          Slush & Soda Station
        </h2>

        <div className="row">

          {[
            {
              id: 10,
              name: "CoCo Milk",
              price: 499,
              img: "https://static.vecteezy.com/system/resources/thumbnails/039/889/450/small/ai-generated-coconut-drink-with-mango-strawberries-and-coconut-leaves-free-photo.jpg",
            },
            {
              id: 11,
              name: "Special Mint",
              price: 399,
              img: "https://images.unsplash.com/photo-1621330716555-5cad596c4562?w=500",
            },
            {
              id: 12,
              name: "Lemonade",
              price: 780,
              img: "https://www.dailynews.com/wp-content/uploads/2018/04/ldn-l-lemonade01-0422b.jpg?w=1024&h=681",
            },
          ].map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card shadow border-0">
                <img
                  src={item.img}
                  className="card-img-top"
                  height="190"
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5>{item.name}</h5>
                  <h6 className="text-danger">Rs.{item.price}</h6>

                  <button
  className={`btn ${addedId === item.id ? "btn-success" : "btn-warning"}`}
  onClick={() => {
    dispatch(addToCart(item));
    setAddedId(item.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  }}
>
  {addedId === item.id ? "Added " : "Add to Cart"}
</button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= WRAPS ================= */}
      <div className="container py-5">
        <h2 className="text-center mb-4 text-danger fw-bold">
          Loaded Wrap Corner
        </h2>

        <div className="row">

          {[
            {
              id: 20,
              name: "Creamy Wrap",
              price: 899,
              img: "https://static.vecteezy.com/system/resources/thumbnails/069/920/545/small/delicious-chicken-burritos-topped-with-creamy-sauce-free-photo.jpg",
            },
            {
              id: 21,
              name: "Dynamite Wrap",
              price: 699,
              img: "https://plus.unsplash.com/premium_photo-1664478294917-c11274b9ce79?w=500",
            },
            {
              id: 22,
              name: "Peri Peri Wrap",
              price: 780,
              img: "https://plus.unsplash.com/premium_photo-1678051305065-1cd54b84272e?w=500",
            },
          ].map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card shadow border-0">
                <img
                  src={item.img}
                  className="card-img-top"
                  height="220"
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5>{item.name}</h5>
                  <h6 className="text-danger">Rs.{item.price}</h6>

                  <button
  className={`btn ${addedId === item.id ? "btn-success" : "btn-warning"}`}
  onClick={() => {
    dispatch(addToCart(item));
    setAddedId(item.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  }}
>
  {addedId === item.id ? "Added " : "Add to Cart"}
</button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ================= DEALS ================= */}
      <div className="container py-5">
        <h2 className="text-center mb-4 text-danger fw-bold">
          Tasty Combo Offers
        </h2>

        <div className="row">

          {[
            {
              id: 30,
              name: "Student Deal",
              price: 1099,
              img: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500",
            },
            {
              id: 31,
              name: "Family Deal",
              price: 1899,
              img: "https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?w=500",
            },
            {
              id: 32,
              name: "1 Person Deal",
              price: 1199,
              img: "https://images.unsplash.com/photo-1700835880301-065f2688a7ab?w=500",
            },
          ].map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card shadow border-0">
                <img
                  src={item.img}
                  className="card-img-top"
                  height="220"
                  style={{ objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5>{item.name}</h5>
                  <h6 className="text-danger">Rs.{item.price}</h6>

                  <button
  className={`btn ${addedId === item.id ? "btn-success" : "btn-warning"}`}
  onClick={() => {
    dispatch(addToCart(item));
    setAddedId(item.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  }}
>
  {addedId === item.id ? "Added " : "Add to Cart"}
</button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <OrderMethod />
      <Footer />
    </>
  );
}

export default Home;