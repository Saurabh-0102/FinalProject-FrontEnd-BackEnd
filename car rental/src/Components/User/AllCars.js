import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserNavbarCompo from "./UserNavBar";

export default function AllCarsCompo() {
  const userRole = sessionStorage.getItem("userRole");
  const userName = sessionStorage.getItem("userName");
  const userId = sessionStorage.getItem("userId");
  const userEmail = sessionStorage.getItem("userEmail");

  const navigate = useNavigate();
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    if (userRole === null || userRole != "user") {
      navigate("/login");
    }
    axios.get("http://localhost:8080/hostgetallcars").then((res) => {
      setAllCars(res.data);
    });
  }, []);

  function getCarId(e) {
    e.preventDefault();
    const carId = e.target.value;
    sessionStorage.setItem("carId", e.target.value);
    console.log(carId);
    navigate("/bookcar");
  }

  return (
    <>
      <UserNavbarCompo />
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-6 p-2"
            style={{ marginLeft: "100px", marginTop: "20px " }}
          >
            {allCars.map((data, key) => (
              <Card className="border-2">
                <div className="d-flex border-0 ">
                  <div className="text-center col-4 m-0 p-0 p-1">
                    <Card.Img
                      variant="top"
                      src={data.carPicture}
                      style={{ width: "220px", height: "150px" }}
                    />
                  </div>
                  <div className="col-5">
                    <Card.Body className="d-flex flex-column col-12">
                      <Card.Title>{data.carName}</Card.Title>
                      <Card.Text className="mt-2">
                        <b>{data.carType}</b>
                        <br />
                        <b>No of seats : {data.noOfSeats}</b>
                        <br />
                        <b>Price : {data.pricePerDay} Per day</b>
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <div
                    className="h-25 col-4 text-center "
                    style={{ marginTop: "60px", marginLeft: "-30px" }}
                  >
                    <button
                      className="btn btn-info"
                      onClick={getCarId}
                      value={data.carId}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="col bg-danger">
               <h1 className="text-center">Filter</h1> 
          </div>
        </div>
      </div>
    </>
  );
}
