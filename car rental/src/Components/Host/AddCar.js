import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import HostNavbarCompo from "./HostNavBar";

export default function AddCarCompo() {
  const userEmail = sessionStorage.getItem("userEmail");
  const userId = sessionStorage.getItem("userId");
  console.log(userEmail);
  const userRole = sessionStorage.getItem("userRole");
  const navigate = useNavigate();
  
  useEffect(() => {
    if (userRole === null || userRole != "host") {
      navigate("/login");
    }
  }, []);

  const [loginData, setLoginData] = useState({
    carName: "",
    noOfSeats: "",
    pricePerDay: "",
    carType: "",
  });

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setLoginData({ ...loginData, [name]: val });
  }

  function handleForm(e) {
    e.preventDefault();
    console.log(loginData);
    axios
      .post(`Http://localhost:8080/addNewCar/${userEmail}`, loginData)
      .then((res) => {
        sessionStorage.setItem("carId", res.data.carId);
        if (res.data === "car added") {
          Swal.fire({
            title: "Car Added Successfully",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
    navigate("/uploadcarimg");
    //navigate("/host");
  }

  return (
    <>
      <HostNavbarCompo />
      <div className="container-fluid">
        <div
          className="row align-items-center justify-content-center bg-danger"
          style={{
            height: "90vh",
            backgroundImage:
              "url('https://www.excelrentacar.com.au/wp-content/uploads/2015/10/car-rental-wallpaper.jpg')",
          }}
        >
          <div className="col-5">
            <form onSubmit={handleForm}>
              <div className="alert alert-primary text-center">
                Fill New Car Details
              </div>
              <div className="d-flex justify-content-center flex-column">
                <div>
                  <input
                    className="form-control form-container"
                    type="text"
                    placeholder="Enter Car Name"
                    value={loginData.carName}
                    name="carName"
                    onChange={change}
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="form-control form-container"
                    type="number"
                    placeholder="Enter Number of Seats"
                    value={loginData.noOfSeats}
                    name="noOfSeats"
                    onChange={change}
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter Car Price Per Day"
                    value={loginData.pricePerDay}
                    name="pricePerDay"
                    onChange={change}
                  />
                </div>
                <div className="mt-3 d-flex justify-content-center">
                  <h5>Select Car Type</h5>
                  <div style={{ marginLeft: "20px", marginTop: "2px" }}>
                    <input
                      type="radio"
                      value="PETROL"
                      name="carType"
                      onChange={change}
                    />{" "}
                    <b>PETROL</b>
                  </div>
                  <div style={{ marginLeft: "20px", marginTop: "2px" }}>
                    <input
                      type="radio"
                      value="DIESEL"
                      name="carType"
                      onChange={change}
                    />{" "}
                    <b>DIESEL</b>
                  </div>
                  <div style={{ marginLeft: "20px", marginTop: "2px" }}>
                    <input
                      type="radio"
                      value="ELECTRIC"
                      name="carType"
                      onChange={change}
                    />{" "}
                    <b>ELECTRIC</b>
                  </div>
                </div>
                <Button className="mt-3 btn-group-sm btn-success" type="submit">
                  {" "}
                  Register{" "}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
