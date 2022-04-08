import axios from "axios";
import { useEffect, useState } from "react";
import { useAccordionButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserNavbarCompo from "./UserNavBar";

export default function UserPageCompo() {
  const userEmail = sessionStorage.getItem("userEmail");
  const userId = sessionStorage.getItem("userId");
  console.log(userEmail);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getuserbyemail/${userEmail}`)
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      });
  }, []);

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setUserData({ ...userData, [name]: val });
  }

  function handleForm(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/updateuserbyid/${userId}`, userData)
      .then((res) => {
        console.log(res.data);
      });
    navigate("/user");
  }

  return (
    <>
      <UserNavbarCompo />
      <form onSubmit={handleForm}>
        <div className="alert alert-primary text-center">
          Update Your Profile
        </div>
        <div
          className="row justify-content-center"
          style={{ marginTop: "100px" }}
        >
          <div className="col-7 d-flex justify-content-center">
            <div className="col-5 d-flex flex-column justify-content-center">
              <div>
                <lable>
                  <b>Enter User name :</b>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={change}
                  />
                </lable>
              </div>
              <div>
                <lable>
                  <b>User Email:</b>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={change}
                  />
                </lable>
              </div>
              <div>
                <lable>
                  <b> mobileNumber :</b>
                  <input
                    className="form-control"
                    type="text"
                    name="mobileNumber"
                    value={userData.mobileNumber}
                    onChange={change}
                  />
                </lable>
              </div>
              <div>
                <lable>
                  <b>User City :</b>
                  <input
                    className="form-control"
                    type="text"
                    name="city"
                    value={userData.city}
                    onChange={change}
                  />
                </lable>
              </div>
              <div>
                <lable>
                  <b>User Password :</b>
                  <input
                    className="form-control"
                    type="text"
                    name="password"
                    value={userData.password}
                    onChange={change}
                  />
                </lable>
              </div>

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
      </form>
    </>
  );
}
