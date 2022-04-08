import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbarCompo from "./AdminNavBar";

export default function AdminCompo() {
  const userRole = sessionStorage.getItem("userRole");
  const userName = sessionStorage.getItem("userName");
  sessionStorage.setItem("userName", userName);
  sessionStorage.setItem("userRole", userRole);
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole === "null" || userRole != "admin") {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <AdminNavbarCompo />
      <h2>User Type {userRole}</h2>
      <h2>Welcome {userName}</h2>
    </>
  );
}
