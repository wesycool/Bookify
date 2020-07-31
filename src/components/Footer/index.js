import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Claim your Business</a>
              </li>
              <li>
                <a href="#">Advertise on Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Term of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 social">
            <a href="#">
              <i className="icon ion-social-facebook"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-twitter"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-snapchat"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-instagram"></i>
            </a>
            <p className="copyright">Spratans © 2020</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
