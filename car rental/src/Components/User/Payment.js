import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import UserNavbarCompo from "./UserNavBar";

export default function PaymentCompo() {
  const [resp, setResp] = useState("");

  //Session Variables
  const carId = sessionStorage.getItem("carId");
  const userEmail = sessionStorage.getItem("userEmail");
  const userName = sessionStorage.getItem("userName");
  const userId = sessionStorage.getItem("userId");
  const fromDate = sessionStorage.getItem("fromDate");
  const toDate = sessionStorage.getItem("toDate");
  const carName = sessionStorage.getItem("carName");
  const carType = sessionStorage.getItem("carType");
  const noOfSeats = sessionStorage.getItem("noOfSeats");
  const pricePerDay = sessionStorage.getItem("pricePerDay");
  const location = sessionStorage.getItem("location");
  var datediff = sessionStorage.getItem("datediff");

  //Bill Calculation
  const finalbill = datediff * pricePerDay + 48;

  const carObject = {
    carName: carName,
    noOfSeats: noOfSeats,
    carType: carType,
    carPrice: pricePerDay,
    carId: carId,
    userName: userName,
    userEmail: userEmail,
    userId: userId,
    fromDate: fromDate,
    toDate: toDate,
  };

  function handleForm(e) {
    e.preventDefault();
    console.log("payment page");
  }

  console.log(carObject);

  return (
    <>
      <UserNavbarCompo />
      <div className="alert alert-primary text-center">Journey Details</div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-6  m-0 p-0">
            <div className="row">
              <div className="col-12 text-center"></div>
              <div className="col-12">
                <h4> {carName}</h4>
              </div>
            </div>
            <div className="row">
              <div className="mt-1">
                <h5>Car Type : {carType}</h5>
              </div>
            </div>
            <div className="mt-1">
              <h5>No of Seats : {noOfSeats}</h5>
            </div>
            <div className="mt-1">
              <h5>Price/day : ₹{pricePerDay}</h5>
            </div>
            <div className="col-12 text-center">
              <hr />
              <h4>Customer Details </h4>
            </div>
            <div className="mt-1">
              <h5>Customer : {userName}</h5>
            </div>
            <div className="mt-1">
              <h5>Email : {userEmail}</h5>
            </div>
            <div className="col-12 text-center">
              <hr />
              <h4>Trip Details</h4>
            </div>
            <div className="d-flex g-5">
              <div className="mt-1">
                <h5>
                  From : {fromDate} {"       "}
                </h5>
              </div>
              <div className="mt-1" style={{ paddingLeft: "30px" }}>
                <h5>Till : {toDate}</h5>
              </div>
            </div>
            <div className="mt-1">
              <h5>Pick Up Point : {location}</h5>
            </div>
            <div className="mt-1">
              <h5>Total Days : {datediff}</h5>
            </div>
            <div className="col d-flex flex-row">
              <div className="mt-1">
                <h5>Total Amount : ₹{finalbill} Tax Inc. </h5>
              </div>
              <div>
                <form onSubmit={handleForm}>
                  <Button
                    type="submit"
                    className="btn btn-info"
                    style={{ marginLeft: "280px", marginTop: "-12px" }}
                  >
                    {" "}
                    PayNow
                  </Button>
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
  /* <h1>{carId}</h1>
      <h1>userid {userId}</h1>
      <h1>{userEmail}</h1>
      <h1>{userName}</h1>
      <h1>{fromDate}</h1>
      <h1>{toDate}</h1>
      <h1>{carName}</h1>
      <h1>{carType}</h1>
      <h1>{noOfSeats}</h1>
      <h1>{pricePerDay}</h1>
      <h1>{datediff}</h1>
      <h1>{finalbill}</h1> */
}
