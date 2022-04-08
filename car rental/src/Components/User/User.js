import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserNavbarCompo from "./UserNavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserCompo() {
  const userRole = sessionStorage.getItem("userRole");
  const userName = sessionStorage.getItem("userName");
  const navigate = useNavigate();
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    toast.success(`welcome ${userName}`);
    if (userRole === null || userRole != "user") {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <UserNavbarCompo />
      <ToastContainer />
      <h1>Welcome {userName}</h1>
    </>
  );
}
