import React from "react";
import "./style.css";

function Footer() {
  return (
    <div class="footerContainer">
    <div class="footer">
        <footer>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-3">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Claim your Business</a></li>
                            <li><a href="#">Advertise with us</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Term of Service</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 item social"><a href="#"><i class="fab fa-facebook"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-snapchat"></i></a><a href="#"><i class="fab fa-instagram"></i></a>
                        <p class="copyright">Spartans © 2020</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
    );
}

export default Footer;
