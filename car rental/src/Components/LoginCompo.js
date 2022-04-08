import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NavbarCompo from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert } from "@mui/material";

export default function LoginCompo() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setLoginData({ ...loginData, [name]: val });
  }

  function handleForm(e) {
    e.preventDefault();
    axios.post("Http://localhost:8080/login", loginData).then((res) => {
      const response = res.data;
      if (response === "User Not Found") {
        toast.error("Bad User Credentials");
      } else {
        const userRole = res.data.user.role;
        const userName = res.data.user.name;
        const userEmail = res.data.user.email;
        const userId = res.data.user.userId;
        sessionStorage.setItem("userEmail", userEmail);
        sessionStorage.setItem("userRole", userRole);
        sessionStorage.setItem("userName", userName);
        sessionStorage.setItem("userId", userId);
        if (userRole === "admin") {
          toast.success("welcome");
          navigate("/admin");
        } else if (userRole === "host") {
          toast.success("welcome");
          navigate("/host");
        } else if (userRole === "user") {
          toast.success("welcome");
          navigate("/user");
        } else {
          alert(res.data);
        }
      }
    });
  }

  return (
    <>
      <NavbarCompo />
      <ToastContainer autoClose={false} />
      <div className="container-fluid">
        <div
          className="row align-items-center justify-content-center bg-danger"
          style={{
            height: "90vh",
            backgroundImage:
              "url('https://www.excelrentacar.com.au/wp-content/uploads/2015/10/car-rental-wallpaper.jpg')",
          }}
        >
          <div className="col-5 p-3">
            <form onSubmit={handleForm}>
              <div className="alert alert-primary text-center">Login Page</div>
              <div className="d-flex justify-content-center flex-column">
                <div>
                  {/* <label>
                    Enter Email */}
                  <input
                    className="form-control form-container"
                    type="text"
                    placeholder="Enter Email Address"
                    value={loginData.email}
                    name="email"
                    onChange={change}
                  />
                  {/* </label> */}
                </div>
                <div className="mt-3">
                  {/* <label>
                    Enter password */}
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Enter Your Password"
                    value={loginData.password}
                    name="password"
                    onChange={change}
                  />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Link
                    to="/fogpass"
                    style={{ textDecoration: "none", color: "#0F9D58" }}
                  >
                    ForgetPass?
                  </Link>
                </div>
                <div className="text-center">
                  <Button
                    className="mt-3 btn  btn-success"
                    style={{ width: "150px" }}
                    type="submit"
                  >
                    {" "}
                    Login{" "}
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
