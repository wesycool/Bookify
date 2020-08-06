import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const location = useLocation()

  return (
    <div className="footerContainer">
    <div className="footer">
        <footer>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to={ location === "/" ? "./Newbusinesspage": "../Newbusinesspage"}>List your Business</Link></li>
                            <li><a href="#">Advertise with us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Term of Service</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 item social"><a href="#"><i className="fab fa-facebook"></i></a><a href="#"><i className="fab fa-twitter"></i></a><a href="#"><i className="fab fa-snapchat"></i></a><a href="#"><i className="fab fa-instagram"></i></a>
                        <p className="copyright">Spartans © 2020</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
    );
}

export default Footer;
