import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavbarCompo from "./Navbar";

export default function ForPassCompo() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  sessionStorage.setItem("userEmail", email);
  function change(e) {
    const val = e.target.value;
    setEmail(val);
  }

  function formHandle(e) {
    e.preventDefault();
    //console.log(email);
    axios.post(`http://localhost:8080/otpgenerator/${email}`).then((res) => {
    toast.done("done");    
    alert(JSON.stringify(res.data));
      
      const response = res.data;
      console.log(response);
      if (response === "OTP Sent Successfully") {
        navigate("/otp");
      }
    });
  }

  return (
    <>
      <NavbarCompo />
      <form onSubmit={formHandle} className="text-center">
        <div className="alert alert-primary text-center">
          Please Enter your registered Email Address
        </div>
        <div className="row justify-content-center">
          <div style={{marginTop : '130px'}}>
            <label>
              Enter Email Address :
              <input
              className="form-control"
              style={{width : '350px'}}
                type="text"
                name="email"
                placeholder="Enter Your registered Email Address"
                value={email}
                onChange={change}
              />{" "}
            </label>
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-sm  btn-info">
              Get OTP on Emial
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
