import React from "react";
import { Link } from "react-router-dom";

function Jumbo() {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className=""></li>
          <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="2" className=""></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img className="jumboImg" alt="Bookify is.." src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
            <div className="container">
              <div className="carousel-caption text-left">
                <h2>Bookify is..</h2>
                <h6>to have a positive impact on the world with this powerful new app. With Bookify we can help connect consumers with businesses through minimal contact and precision bookings.
</h6>
                <p><Link className ="btn btn-lg btn-secondary" to="./aboutus">Learn More</Link></p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <img className="jumboImg" alt="Register your business!" src="https://images.unsplash.com/photo-1534778356534-d3d45b6df1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80 1050w" />
            <div className="container">
              <div className="carousel-caption">
                <h2>Register your business!</h2>
                <h6>During this unprecedented time, we wanted to ensure we can help businesses generate revenue at a faster pace with an easy-to-use platform.</h6>
                <p><Link className ="btn btn-lg btn-secondary" to="./newbusiness">Register</Link></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="jumboImg" alt="Make a Booking Us" src="https://images.unsplash.com/photo-1512080482556-ea648017576c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80 1050w" />
            <div className="container">
              <div className="carousel-caption text-right">
                <h3>Make a Booking Us</h3>
                <h6>During this unprecedented time, we wanted to ensure we can help consumers shop at and support their favourite businesses at a faster pace with an easy-to-use platform.</h6>
                <p><a className ="btn btn-lg btn-secondary" >Book with Us</a></p>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    );
}

export default Jumbo;
