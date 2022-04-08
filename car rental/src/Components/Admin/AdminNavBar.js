import { Container, Nav, Navbar } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

export default function AdminNavbarCompo() {
  const userRole = sessionStorage.getItem("userRole");
  const userName = sessionStorage.getItem("userName");
  const userId = sessionStorage.getItem("userId");

  const navigate = useNavigate();

  function deleteSession(e) {
    e.preventDefault();
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container className="gap-5">
        <Link
          to="/"
          className="fs-4"
          style={{ textDecoration: "none", color: "#DB4437" }}
        >
          Car Rental System
        </Link>

        <Nav className="me-auto gap-4">
          <Link
            to="/admin"
            style={{ textDecoration: "none", color: "#0F9D58" }}
          >
            DashBoard{" "}
          </Link>
          <Link
            to="/adminallcars"
            style={{ textDecoration: "none", color: "#0F9D58" }}
          >
            Available Cars{" "}
          </Link>
          <Link
            to="/allusers"
            style={{ textDecoration: "none", color: "#0F9D58" }}
          >
            All Users{" "}
          </Link>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "#0F9D58" }}
            onClick={deleteSession}
          >
            LogOut{" "}
          </Link>
          <Link
            to="/userpage"
            style={{
              marginLeft: "350px",
              textDecoration: "none",
              color: "#4285F4",
            }}
          >
            Welcome {userName}
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
