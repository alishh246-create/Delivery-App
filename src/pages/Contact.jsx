import React from "react";
import Follow from "../components/Follow";
import "../App.css";

const Contact = () => {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">

<div className="card shadow-lg border-0 p-4" style={{ maxWidth: "600px", width: "100%", borderRadius: "15px" }}>
          
          <h2 className="text-center text-danger mb-3">
            Contact Us 
          </h2>

          <p className="text-center text-muted mb-4">
            We did love to hear from you!
          </p>

          <form>

            {/* Name */}
            <div className="mb-3">
              <input 
                type="text" 
                placeholder="Enter Your Name" 
                className="form-control rounded-pill px-3"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="form-control rounded-pill px-3"
              />
            </div>

            {/* Message */}
            <div className="mb-3">
              <textarea 
                placeholder="Write a Message..." 
                className="form-control rounded-5 px-3" 
                rows="3"
              ></textarea>
            </div>

            {/* Button */}
            <button 
              type="button" 
              className="btn btn-warning w-100 fw-bold rounded-pill" onClick={() =>alert("Thanks For Contacting Us!")}>
              Send Message 
            </button>

          </form>
        </div>
      </div>
<br/>
      <Follow />
    </>
  );
};

export default Contact;