import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HostNavbarCompo from "./HostNavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HostCompo() {
  const userRole = sessionStorage.getItem("userRole");
  const userName = sessionStorage.getItem("userName");
  const userEmail = sessionStorage.getItem("userEmail");
  const userId = sessionStorage.getItem("userId");
  const navigate = useNavigate();
  sessionStorage.setItem("userEmail", userEmail);
  sessionStorage.setItem("userId", userId);
  sessionStorage.setItem("userRole", userRole);

  useEffect(() => {
    toast.success(`Welcome ${userName}`);
    if (userRole === null || userRole != "host") {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <HostNavbarCompo />
      <ToastContainer />
      <h1>Host page</h1>
      <h2>User Type {userRole}</h2>
      <h2>User Name {userName}</h2>
      <h2>user email {userEmail}</h2>
      <h2>user id {userId}</h2>
    </>
  );
}
