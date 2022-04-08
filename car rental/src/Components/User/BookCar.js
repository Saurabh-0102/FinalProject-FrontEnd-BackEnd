import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbarCompo from "./UserNavBar";
import datepicker from "react-datepicker";

export default function BookCarCompo() {
  const navigate = useNavigate();
  const carId = sessionStorage.getItem("carId");
  const userEmail = sessionStorage.getItem("userEmail");
  const userName = sessionStorage.getItem("userName");
  const userId = sessionStorage.getItem("userId");

  const [carData, setCarData] = useState({});
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [location, setLocation] = useState("");
  sessionStorage.setItem("fromDate", fromDate);
  sessionStorage.setItem("toDate", toDate);
  sessionStorage.setItem("location", location);
  //date
  var d1 = new Date(fromDate);
  var d2 = new Date(toDate);
  const diff = Math.abs(d2 - d1);
  const datediff = diff / 86400000;

  let str = datediff.toString();
  console.log(str);
  sessionStorage.setItem("datediff", str);

  useEffect(() => {
    axios.get(`http://localhost:8080/hostfindcarbyid/${carId}`).then((res) => {
      setCarData(res.data);
      //alert(JSON.stringify(res.data));
      const carName = res.data.carName;
      const carId = res.data.carId;
      const noOfSeats = res.data.noOfSeats;
      const pricePerDay = res.data.pricePerDay;
      const carType = res.data.carType;
      sessionStorage.setItem("carName", carName);
      sessionStorage.setItem("carId", carId);
      sessionStorage.setItem("noOfSeats", noOfSeats);
      sessionStorage.setItem("pricePerDay", pricePerDay);
      sessionStorage.setItem("carType", carType);
    });
  }, []);

  // const carObject = {
  //   carName: carData.carName,
  //   noOfSeats: carData.noOfSeats,
  //   carType: carData.carType,
  //   carPrice: carData.pricePerDay,
  //   carId: carData.carId,
  //   userName: userName,
  //   userEmail: userEmail,
  //   userId: userId,
  //   fromDate: fromDate,
  //   toDate: toDate,
  // };

  // const d = carObject;

  // console.log(d);

  function fromDateHandle(e) {
    setFromDate(e.target.value);
  }
  function toDateHandle(e) {
    setToDate(e.target.value);
  }

  function locationHandle(e) {
    setLocation(e.target.value);
  }
  console.log(location);

  function formHandle(e) {
    e.preventDefault();
    // axios.post(`http://localhost:8080/saveorder`, d).then((res) => {
    //   alert(JSON.stringify(res.data));
    // });
    navigate("/payment");
  }

  return (
    <>
      <UserNavbarCompo />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="alert alert-primary text-center">
              Pick Journey dates
            </div>
            <div className="row justify-content-center">
              <div
                className="border border-2 col-4 p-3 "
                style={{ marginTop: "80px" }}
              >
                <form onSubmit={formHandle}>
                  <div className="text-center">
                    <div className="mt-3">
                      <label>
                        <b>Pick Up Location</b>
                        <input
                          className="form-control"
                          type="text"
                          name="location"
                          value={location}
                          onChange={locationHandle}
                        />
                      </label>
                    </div>
                    <div className="mt-3">
                      <label>
                        <b>Enter Starting date</b>
                        <input
                          className="form-control"
                          type="date"
                          name="fromDate"
                          value={fromDate}
                          onChange={fromDateHandle}
                        />
                      </label>
                    </div>
                    <div className="row justify-content-center mt-2">
                      <div className="col-6">
                        <lable>
                          <b>Enter End date</b>
                          <input
                            className="form-control"
                            type="date"
                            name="toDate"
                            value={toDate}
                            onChange={toDateHandle}
                          />
                        </lable>
                      </div>
                    </div>
                    <div className="mt-2">
                      <button className="btn btn-info " type="submit">
                        Next
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <h1>carName :{carData.carName}</h1>
      <h1>no of seats : {carData.noOfSeats}</h1>
      <h1>car type {carData.carType}</h1>
      <h1>car price {carData.pricePerDay}</h1>
      <h1>car id : {carData.carId}</h1>
      <h1>User Name :{userName}</h1>
      <h1>user Email {userEmail}</h1>
      <h1>user id {userId}</h1> */
}
