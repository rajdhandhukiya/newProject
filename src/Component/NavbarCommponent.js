import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Image/loopcode.png";
import "./NavbarComponent.css";

function NavbarCommponent() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Row className="main_div">
          <Col>
            <Navbar.Brand>
              <img src={logo} style={{ width: "160px" }} alt="some value" />
            </Navbar.Brand>
          </Col>
          <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/dashboard">Dashboard</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Comment">Comment</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Comments">Comments</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/message">message</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}

export default NavbarCommponent;
