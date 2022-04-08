import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import AdminNavbarCompo from "./AdminNavBar";

export default function AdminUpdateCarCompo() {
  const carId = sessionStorage.getItem("carId");
  const userEmail = sessionStorage.getItem("userEmail");

  const navigate = useNavigate();

  const [carData, setCarData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/hostfindcarbyid/${carId}`).then((res) => {
      console.log(JSON.stringify(res.data));
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
    axios.post(`Http://localhost:8080/adminupdatecar`, carData).then((res) => {
      if (res.data === "Car updated") {
        toast.success("updated");
        // Swal.fire({
        //   title: "Car Updated successfully",
        //   showClass: {
        //     popup: "animate__animated animate__fadeInDown",
        //   },
        //   hideClass: {
        //     popup: "animate__animated animate__fadeOutUp",
        //   },
        // });
      }
    });

    navigate("/adminallcars");
  }

  return (
    <>
      <AdminNavbarCompo />
      <ToastContainer />
      <div className="alert alert-primary text-center">Update Car Details</div>
      <form onSubmit={handleForm} style={{ marginTop: "70px" }}>
        <div className="text-center">
          <div className="mt-3">
            <label>
              <b>Enter Car Name</b>
              <input
                className="form-control"
                type="text"
                name="carName"
                value={carData.carName}
                onChange={change}
              />
            </label>
          </div>
          <div className="mt-2">
            {" "}
            <label>
              <b>Enter no of seats</b>
              <input
                className="form-control"
                type="number"
                name="noOfSeats"
                value={carData.noOfSeats}
                onChange={change}
              />
            </label>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-2">
              <lable>
                <b>Enter Car Type</b>
                <input
                  className="form-control"
                  type="text"
                  name="carType"
                  value={carData.carType}
                  onChange={change}
                />
              </lable>
            </div>
          </div>
          <div className="mt-2">
            <label>
              <b>Enter price per day</b>
              <input
                className="form-control"
                type="number"
                name="pricePerDay"
                value={carData.pricePerDay}
                onChange={change}
              />
            </label>
          </div>
          <div className="mt-3">
            {" "}
            <button className="btn btn-info " type="submit">
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
