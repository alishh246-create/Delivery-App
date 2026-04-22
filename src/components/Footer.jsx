import React from "react"
import { Link } from "react-router-dom"
import Follow from "./Follow";

const Footer = () =>{
    return(
    <>
              <footer
                className="text-light mt-5"
                style={{
                  background: "linear-gradient(135deg, #111, #1f1f1f, #2c2c2c)"
                }}
              >
                <div className="container py-5">

                  <div className="row g-4">

                    {/* Brand */}
                    <div className="col-md-4">
                      <h2 className="fw-bold text-warning">
                        Alishh Flavour Town
                      </h2>
                      <p>
                        Premium burgers, fresh taste, fast delivery.
                      </p>
                    </div>

                    {/* Links */}
                    <div className="col-md-4">
  <h5 className="text-warning">Quick Links</h5>

  <p>
    <Link to="/" className="text-light text-decoration-none">
      Home
    </Link>
  </p>

  <p>
    <Link to="/menu" className="text-light text-decoration-none">
      Menu
    </Link>
  </p>

  <p>
    <Link to="/cart" className="text-light text-decoration-none">
      Cart
    </Link>
  </p>

  <p>
    <Link to="/contact" className="text-light text-decoration-none">
      Contact
    </Link>
  </p>
</div>

                    {/* Contact */}
                    <div className="col-md-4">
                      <h5 className="text-warning">Contact</h5>
                      <p>⚲ Bahawalpur, Pakistan</p>
                      <p>✆ 0300 1234567</p>
                      <p>✉ hello@flavourtown.com</p>
                      
                    </div>
                    <Follow/>

                  </div>

                  <hr className="border-secondary" />

                  <p className="text-center">
                    © 2026 Alishh Flavour Town
                  </p>

                </div>
                
              </footer>
              
            </>
    );
          };

        export default Footer;