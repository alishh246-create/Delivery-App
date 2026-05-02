import React from 'react'

function Follow() {
  return (
    <div>
<div className="text-center py-4 bg-dark"style={{ background: "linear-gradient(135deg, #111, #1f1f1f, #2c2c2c)"}}>
  <h3 className="text-danger fw-bold">Follow Us</h3>
  <p className="mb-3 text-light">Stay Connected With Us for Best Flavour</p>
<div className="d-flex justify-content-center gap-4 fs-2">
<a href="https://facebook.com" target="_blank" className="text-primary">
      <i className="bi bi-facebook">
        
      </i>
    </a>

    <a href="https://instagram.com" target="_blank" className="text-danger">
<i className="bi bi-instagram"></i>
    </a>

    <a href="https://twitter.com" target="_blank" className="text-info">
      <i className="bi bi-twitter-x"></i>
    </a>

    <a href="https://youtube.com" target="_blank" className="text-danger">
      <i className="bi bi-youtube"></i>
    </a>
  </div>
</div>
    </div>
  );
};

export default Follow

