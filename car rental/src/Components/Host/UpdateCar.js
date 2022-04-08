import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import HostNavbarCompo from "./HostNavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UpdateCarCompo() {
  const carId = sessionStorage.getItem("carId");
  const userEmail = sessionStorage.getItem("userEmail");
  console.log(carId);

  const navigate = useNavigate();

  const [carData, setCarData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/hostfindcarbyid/${carId}`).then((res) => {
      setCarData(res.data);
      console.log(carData);
    });
  }, []);

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setCarData({ ...carData, [name]: val });
  }

  function handleForm(e) {
    e.preventDefault();
    console.log(carData);
    axios
      .post(`Http://localhost:8080/addNewCar/${userEmail}`, carData)
      .then((res) => {
        if (res.data === "car added") {
          Swal.fire({
            title: "Car Updated successfully",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
    toast("car updated");
    navigate("/mycar");
    // window.location.href = "./mycar";
  }

  return (
    <>
      <HostNavbarCompo />
      <ToastContainer />
      <form onSubmit={handleForm}>
        <div className="alert alert-primary text-center">
          Update Car Details
        </div>
        <div
          className="row justify-content-center"
          style={{ marginTop: "100px" }}
        >
          <div className="col-7 d-flex justify-content-center">
            <div className="col-5 d-flex flex-column justify-content-center">
              <div>
                <lable>
                  <b>Enter Car name :</b>
                  <input
                    className="form-control"
                    type="text"
                    name="carName"
                    value={carData.carName}
                    onChange={change}
                  />
                </lable>
              </div>
              <div className="mt-2">
                <lable>
                  <b>Enter No of Seats in Car :</b>
                  <input
                    className="form-control"
                    type="number"
                    name="noOfSeats"
                    value={carData.noOfSeats}
                    onChange={change}
                  />
                </lable>
              </div>
              <div className="mt-2">
                <lable>
                  <b>Enter Car Type :</b>
                  <input
                    className="form-control"
                    type="text"
                    name="carType"
                    value={carData.carType}
                    onChange={change}
                  />
                </lable>
              </div>
              <div className="mt-2">
                <lable>
                  <b>Enter Price per Day :</b>
                  <input
                    className="form-control"
                    type="number"
                    name="pricePerDay"
                    value={carData.pricePerDay}
                    onChange={change}
                  />
                </lable>
                <div className="row justify-content-center">
                  <div className="col-5 justify-content-center d-flex mt-3">
                    <button className="btn btn-info" type="submit">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
