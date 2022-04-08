import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function NavbarCompo() {
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
            to="/login"
            style={{ textDecoration: "none", color: "#0F9D58" }}
          >
            Login{" "}
          </Link>

          <Link
            to="/register"
            style={{ textDecoration: "none", color: "#0F9D58" }}
          >
            New Account{" "}
          </Link>
          <div style={{ marginLeft: "600px" }}>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#0F9D58" }}
            >
              About US
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
