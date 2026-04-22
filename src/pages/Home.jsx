import React from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer";
import OrderMethod from "../components/OrderMethod";

function Home() {
const burgers = [
    {
      id: 1,
      name: "Zinger Burger",
      price: "Rs.950",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
    },
    {
      id: 2,
      name: "Cheese Burger",
      price: "Rs.899",
      img: "https://images.unsplash.com/photo-1603893662172-99ed0cea2a08?w=500"
    },
    {
      id: 3,
      name: "Chicken Burger",
      price: "Rs.650",
      img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500"
    }
  ];

  return (
    
    <>
    <br></br>
    <div
  className="container-fluid d-flex align-items-center justify-content-center text-center"
  style={{
    height: "90vh",
    backgroundImage:
      "url('https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?a=1&b=1&s=612x612&w=0&k=20&c=8bsgIoBTl4-1t1D0oddBitbMwQL-ZnLNHhECLgJ8kD0=')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "white"
  }}
>
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.6)"
    }}
  ></div>


  <div style={{ zIndex: 2 }}>
    <h1 className="fw-bold display-4">
      Alishha Flavour Town
    </h1>
    <p className="fs-4">
      Fast Food, Happy Mood 
    </p>
  </div>
</div>

              {/* CARDS */}
              <div className="container py-4">
                <h2 className="text-center mb-4 text-danger">
                  Burger Bliss Zone
                </h2>
                

                <div className="row">
                  {burgers.map((item) => (
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
                          <p>{item.price}</p>

                          <button className="btn btn-warning">
                            Add to Cart
                          </button>
                        </div>
                
</div>
                      </div>
                      
                    
                    
                  ))}
                  <div className="text-center mt-3">
  <Link to="/menu" className="btn btn-outline-danger px-4 rounded-pill">
    More →
  </Link>
</div>
                                    {/* Wraps */}
<div className="container py-5">
  <h2 className="text-center mb-4 text-danger fw-bold">
    Slush & Soda Station
  </h2>

  <div className="row">

    {/* Deal 1 */}
    <div className="col-md-4 mb-4">
      <div className="card shadow border-0">
        <img
          src="https://media.istockphoto.com/id/688745634/photo/frozen-homemade-soda-pop-slushy-drink.webp?a=1&b=1&s=612x612&w=0&k=20&c=eMexM_8p0ZJSHmiQkh0FbGlq0fVhz1-hE5RhulTMi3o="
          className="card-img-top"
          height="190"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5>CoCo Milk</h5>
          <h6 className="text-danger">Rs.499</h6>
          <button className="btn btn-warning">
Add to Cart          </button>
        </div>
      </div>
    </div>

    {/* Deal 2 */}
    <div className="col-md-4 mb-4">
      <div className="card shadow border-0">
        <img
          src="https://images.unsplash.com/photo-1621330716555-5cad596c4562?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZGF8ZW58MHx8MHx8fDA%3D"
          className="card-img-top"
          height="190"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5>Special Mint</h5>
          <h6 className="text-danger">Rs.399</h6>
          <button className="btn btn-warning">
Add to Cart          </button>
        </div>
      </div>
    </div>

    {/* Deal 3 */}
    <div className="col-md-4 mb-4">
      <div className="card shadow border-0">
        <img
          src="https://media.istockphoto.com/id/2235187635/photo/a-glass-of-honey-lemon-soda-on-the-wooden-table-with-bokeh-background-of-the-restaurant.webp?a=1&b=1&s=612x612&w=0&k=20&c=VrjmEzMvV2ZTmmcm4FbKYfhwSlN28-gSk5cG9IC861w="
          className="card-img-top"
          height="190"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5>Lemonade</h5>
          <h6 className="text-danger">Rs.780</h6>
          <button className="btn btn-warning">
Add to Cart          </button>
        </div>
      </div>
    </div>
<div className="text-center mt-3">
  <Link to="/menu" className="btn btn-outline-danger px-4 rounded-pill">
    More →
  </Link>
</div>
  </div>
</div>
                  {/* Wraps */}
<div className="container py-5">
  <h2 className="text-center mb-4 text-danger fw-bold">
    Loaded Wrap Corner
  </h2>

  <div className="row">

    {/* Deal 1 */}
    <div className="col-md-4 mb-4">
      <div className="card shadow border-0">
        <img
          src="https://burgeroclock.com.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1678304741-creamy%20wrap.webp%3Fq%3D10&w=640&q=75"
          className="card-img-top"
          height="220"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5>Creamy Wrap</h5>
          <h6 className="text-danger">Rs.899</h6>
          <button className="btn btn-warning">
Add to Cart          </button>
        </div>
      </div>
    </div>

    {/* Deal 2 */}
    <div className="col-md-4 mb-4">
      <div className="card shadow border-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1664478294917-c11274b9ce79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d3JhcHN8ZW58MHx8MHx8fDA%3D"
          className="card-img-top"
          height="220"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5>Dynamite Wrap</h5>
          <h6 className="text-danger">Rs.699</h6>
          <button className="btn btn-warning">
Add to Cart          </button>
        </div>
      </div>
    </div>

    {/* Deal 3 */}
    <div className="col-md-4 mb-4">
      <div className="card shadow border-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1678051305065-1cd54b84272e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdyYXBzfGVufDB8fDB8fHww"
          className="card-img-top"
          height="220"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5>Peri Peri Wrap</h5>
          <h6 className="text-danger">Rs.780</h6>
          <button className="btn btn-warning">
Add to Cart          </button>
        </div>
      </div>
    </div>
<div className="text-center mt-3">
  <Link to="/menu" className="btn btn-outline-danger px-4 rounded-pill">
    More →
  </Link>
</div>
  </div>
</div>
                  {/* OUR DEALS */}

  <h2 className="text-center mb-4 text-danger fw-bold">
    Tasty Combo Offers
  </h2>

  <div className="row">

    {/* Deal 1 */}
    <div className="col-md-4 mb-4">
      <div className="card shadow border-0">
        <img
          src="https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlciUyMGRlYWxzfGVufDB8fDB8fHww"
          className="card-img-top"
          height="220"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5>Student Deal</h5>
          <p>1 Burger + Fries + Souse</p>
          <h6 className="text-danger">Rs.1099</h6>
          <button className="btn btn-warning">
Add to Cart          </button>
        </div>
      </div>
    </div>

    {/* Deal 2 */}
    <div className="col-md-4 mb-4">
      <div className="card shadow border-0">
        <img
          src="https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1cmdlciUyMGRlYWxzfGVufDB8fDB8fHww"
          className="card-img-top"
          height="220"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5>Family Deal</h5>
          <p>3 Burgers + 2 Fries</p>
          <h6 className="text-danger">Rs.1899</h6>
          <button className="btn btn-warning">
Add to Cart          </button>
        </div>
      </div>
    </div>

    {/* Deal 3 */}
    <div className="col-md-4 mb-4">
      <div className="card shadow border-0">
        <img
          src="https://images.unsplash.com/photo-1700835880301-065f2688a7ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1cmdlciUyMGRlYWxzJTIwd2l0aCUyMGNvbGQlMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D"
          className="card-img-top"
          height="220"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5>1 Person Deal</h5>
          <p> Burger + Fries + Cold Drink</p>
          <h6 className="text-danger">Rs.1199</h6>
          <button className="btn btn-warning">
Add to Cart          </button>
        </div>
      </div>
    </div>
<div className="text-center mt-3">
  <Link to="/menu" className="btn btn-outline-danger px-4 rounded-pill">
    More →
  </Link>
</div>
  </div>
</div>
                </div>
                <OrderMethod/>
                <Footer/>
            </>
  );
};

  export default Home
