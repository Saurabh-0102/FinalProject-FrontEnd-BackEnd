import "./AboutUs.css";
import NavbarCompo from "./Navbar";

const AboutUsCompo = () => {
  return (
    <>
      <NavbarCompo />
      <div class="container-fluid">
        <div class="row p-5">
          <div class="col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img src="/public/Images/12-findcar.jpg.jpg" />
                  </div>
                  <div className="img-text">
                    <h2>Saurabh jhariya </h2>
                    <p>Hi I'm Saurabh jhariya. I am Full Stack developer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsCompo;
