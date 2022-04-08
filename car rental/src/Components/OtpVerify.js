import axios from "axios";
import { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import NavbarCompo from "./Navbar";

export default function OtpVerifyCompo() {
  const [otp, setOpt] = useState("");
  const navigate = useNavigate();
  const userEmail = sessionStorage.getItem("userEmail");

  console.log(userEmail);

  sessionStorage.setItem("userEmail", userEmail);

  function change(e) {
    const val = e.target.value;
    setOpt(val);
  }

  function formHandle(e) {
    e.preventDefault();
    console.log(otp);
    axios.post(`http://localhost:8080/otpverify/${otp}`).then((res) => {
      const response = res.data;
      if (response == "OTP verified") {
        alert("otp verified");
        navigate("/updatepassword");
      } else {
        toast.error("Invalid Otp");
        console.log(res.data);
      }
    });
  }

  return (
    <>
      <NavbarCompo />
      <ToastContainer autoClose={false} />
      <form onSubmit={formHandle} className="text-center">
        <div className="alert alert-primary text-center">Please Enter OTP</div>
        <div className="row justify-content-center">
          <div style={{ marginTop: "130px" }}>
            <label>
              Enter OTP
              <input
                className="form-control"
                type="number"
                name="otp"
                value={otp}
                onChange={change}
                placeholder="Enter Otp"
              />
            </label>
          </div>
          <div>
            <button className="btn btn-sm btn-info mt-3" type="submit">
              Verify
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
