import { Container, Nav, Navbar } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

export default function HostNavbarCompo() {
  const userRole = sessionStorage.getItem("userRole");
  const userName = sessionStorage.getItem("userName");

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
        <Link to="/host" style={{ textDecoration: "none", color: "#0F9D58" }}>
          DashBoard{" "}
        </Link>

        <Link to="/addcar" style={{ textDecoration: "none", color: "#0F9D58" }}>
          Add Car{" "}
        </Link>

        <Link to="/mycar" style={{ textDecoration: "none", color: "#0F9D58" }}>
          MyCars{" "}
        </Link>

        <Nav className="me-auto gap-4">
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
              marginLeft: "330px",
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
