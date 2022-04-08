import React from "react";
//import "../css/home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="bg-dark text-white pt-5 pb-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                Car Rental
              </h5>
              <p>
                We Provide easy user interface for users as well as the owners
                which is at a very basic price.
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                Useful links
              </h5>
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/stdhome"
                  class="text-white"
                >
                  HOME
                </Link>
              </p>
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/showmenu"
                  class="text-white"
                >
                  showmenu
                </Link>
              </p>

              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/#"
                  class="text-white"
                >
                  PROFILE
                </Link>
              </p>
              <p>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/aboutus"
                  class="text-white"
                >
                  AboutUs
                </Link>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-info">
                Contact
              </h5>
              <p>
                <i class="fa fa-home mr-3"></i>Khargar, Mumbai
              </p>
              <p>
                <i class="fa fa-envelope mr-3"></i>foodvendormanagment@gmail.com
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 759175563
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 9978787857
              </p>
            </div>
          </div>
          <hr class="mb-4" />
          <div class="row align-items-center">
            <div class="col-md-7 col-lg-12 m-auto">
              <p>
                Copyright ©2020 All rights reserved by :
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="/aboutus"
                >
                  <strong class="text-info :">Team 36 CDAC MUMBAI</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
