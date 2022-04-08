import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavbarCompo from "./Navbar";
import LinearIndeterminate from "./Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterCompo() {
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    city: "",
    govId: "",
    role: "",
  });

  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setLoginData({ ...loginData, [name]: val });
  }

  function handleForm(e) {
    e.preventDefault();
    console.log(loginData);
    axios.post("Http://localhost:8080/addUser", loginData).then((res) => {
      const d = JSON.stringify(res.data);
      setLoading(d);
      if (res.data === "User Added Successfully") {
        toast.success("Registration done");
        setLoginData({
          name: "",
          email: "",
          password: "",
          mobileNumber: "",
          city: "",
          govId: "",
          role: "",
        });
      }
    });
  }

  return (
    <>
      <NavbarCompo />
      <ToastContainer />
      {/* <LinearIndeterminate/> */}
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
                Registration Page
              </div>
              <div className="d-flex justify-content-center flex-column">
                <div>
                  <input
                    className="form-control form-container"
                    type="text"
                    placeholder="Enter Your Name"
                    value={loginData.name}
                    name="name"
                    onChange={change}
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="form-control form-container"
                    type="email"
                    placeholder="Enter Email Address"
                    value={loginData.email}
                    name="email"
                    onChange={change}
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter Your Password"
                    value={loginData.password}
                    name="password"
                    onChange={change}
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="form-control form-container"
                    type="text"
                    placeholder="Enter Mobile Number"
                    value={loginData.mobileNumber}
                    name="mobileNumber"
                    onChange={change}
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="form-control form-container"
                    type="text"
                    placeholder="Enter City"
                    value={loginData.city}
                    name="city"
                    onChange={change}
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Government Id"
                    value={loginData.govId}
                    name="govId"
                    onChange={change}
                  />
                </div>
                <div className="mt-2 d-flex justify-content-center">
                  <h5>login as : </h5>
                  <div style={{ marginLeft: "20px", marginTop: "2px" }}>
                    <input
                      type="radio"
                      value="user"
                      name="role"
                      onChange={change}
                    />{" "}
                    <b>Customer</b>
                  </div>
                  <div style={{ marginLeft: "20px", marginTop: "2px" }}>
                    <input
                      type="radio"
                      value="host"
                      name="role"
                      onChange={change}
                    />{" "}
                    <b>Host</b>
                  </div>
                  {/* <div>
                    <lable>
                      {"  "}
                      <select name="role">{" "}
                        <option value="user"> User</option>
                        <option value="host"> Host</option>
                      </select>
                    </lable>
                  </div> */}
                </div>
                <div className="text-center">
                  <Button
                    style={{ width: "150px" }}
                    className="mt-3 btn-group-sm btn-success"
                    type="submit"
                  >
                    {" "}
                    Register{" "}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
