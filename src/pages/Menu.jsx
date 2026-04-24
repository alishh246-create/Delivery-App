import React from 'react'
import OrderMethod from '../components/OrderMethod'
import Follow from '../components/Follow';
import Footer from '../components/Footer';

function Menu() {
  return (
    <>
      <OrderMethod />
       <h1 className="text-center mb-4 text-danger">
      Choose Your Craving
    </h1>

      <div className="container">
        <div className="row">

          {/* Card 1 */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500" 
                    className="img-fluid rounded-start" 
                    
                    alt="burger"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Burger Deal</h5>
                    <p className="card-text">Delicious burgers with crispy fries.</p>
                    <h6 className='card-text'>Price:2799</h6>
                    <button className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1683657860843-abae8aa03a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzdCUyMGZvb2QlMjBEZWFscyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" 
                    className="img-fluid rounded-start" 
                    alt="deal"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Special Deal</h5>
                    <p className="card-text">Combo meal with drink & fries.</p>
                    <h6 className='card-text'>Price:3099</h6>
                    <button className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="container">
        <div className="row">

          {/* Card 3 */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src="https://media.istockphoto.com/id/521988672/photo/shredded-barbecued-chicken-wraps-with-carrot-cheese-avocado-and-spinach.webp?a=1&b=1&s=612x612&w=0&k=20&c=6naNzXwNzfFwBSxgwCv3FiDh3x4VsO0vzb1l4TSxH3o=" 
                    className="img-fluid rounded-start" 
                    
                    alt="burger"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Student Deal</h5>
                    <p className="card-text">3 Wraps & Fries</p>
                    <h6 className='card-text'>Price:1699</h6>
                    <button className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" 
                    className="img-fluid rounded-start" 
                    alt="deal"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Special 3 Persons Deal</h5>
                    <p className="card-text">Tikka,Pizza,Fried Rice + (customer demand)</p>
                    <h6 className='card-text'>Price:2899</h6>
                    <button className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      { /* Sweets */}

        <h1 className="text-center mb-4 text-danger">
      Sweat Treats
    </h1>
      <div className="container">
        <div className="row">

          {/* Card 1 */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src="https://images.unsplash.com/photo-1527904324834-3bda86da6771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9udXRzfGVufDB8fDB8fHww" 
                    className="img-fluid rounded-start" 
                    
                    alt="Donuts"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Loaded Chocolate Donuts</h5>
                    <h6 className='card-text'>Price:550 per piece</h6>
                    <button className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1667031519185-3dad7d8931cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN3ZWV0c3xlbnwwfHwwfHx8MA%3D%3D" 
                    className="img-fluid rounded-start" 
                    alt="Cholotae Balls"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Chocolate Balls</h5>
                    <h6 className='card-text'>Price:500 6 piece</h6>
                    <button className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="container">
        <div className="row">

          {/* Card 3 */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src="https://media.istockphoto.com/id/183879807/photo/christmas-sweets.webp?a=1&b=1&s=612x612&w=0&k=20&c=TLzHcab4ImkDUTTg0KFykx4P2JmMab36U7NKJTuxYrw=" 
                    className="img-fluid rounded-start" 
                    
                    alt="Oreo Pops"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Oreo Pops</h5>
                    <h6 className='card-text'>Price:700 3 Piece</h6>
                    <button className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyb3duaWVzfGVufDB8fDB8fHww" 
                    className="img-fluid rounded-start" 
                    alt="brownies"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Brownies</h5>
                    <h6 className='card-text'>Price:550 per Piece</h6>
                    <button className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* Signature Food */}
      <h1 className="text-center mb-4 text-danger">
      Our Signature Food
    </h1>
      <div className="container">
        <div className="row">

          {/* Card 1 */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src="https://images.unsplash.com/photo-1614243135180-c4f3fb925daf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtb2t5JTIwYmJxJTIwYnVyZ2VyfGVufDB8fDB8fHww" 
                    className="img-fluid rounded-start" 
                    
                    alt="burger"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Smoky BBQ Burger</h5>
                    <h6 className='card-text'>Price:1699</h6>
                    <button className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img 
                    src="https://media.istockphoto.com/id/2256227067/photo/molten-chocolate-lava-cake-with-fork-bite-and-turquoise-cup.webp?a=1&b=1&s=612x612&w=0&k=20&c=sUWQOBQJ9TmFR5xr8h0SJlM6FnJ7rW20cJNifGYIkJU=" 
                    className="img-fluid rounded-start" 
                    alt="deal"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Molten Lava Cake</h5>
                    <h6 className='card-text'>Price:3100</h6>
                    <button className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Menu;