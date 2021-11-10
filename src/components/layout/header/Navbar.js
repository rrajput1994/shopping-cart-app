import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search.svg";
import userIcon from "../../assets/images/user.svg";
import cartIcon from "../../assets/images/cart.svg";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #fff;
    hight: 70px;
  }
  .navbar .badge {
    color: #fff;
    background: #f44336;
    font-size: 12px;
    border-radius: 20px;
    position: absolute;
    min-width: 19px;
    padding: 4px 6px 0;
    min-height: 19px;
    top: -4px;
    right: -5px;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #000;
    font-size: 14px;
    position: relative;
    &:hover {
      color: #333;
    }
    @media (max-width: 991px) {
      margin: 0 5px;
    }
  }
  .navbar-brand {
    @media (max-width: 991px) {
      img {
        width: 140px;
      }
    }
  }
  .navbar-toggler {
    padding: 0.2rem;
    font-size: 1rem;
    transition: box-shadow 0.15s ease-in-out;
    margin-right: 87px;
  }
  .icon-nav.navbar-nav {
    @media (max-width: 991px) {
      display: flex;
      flex-direction: row;
      position: absolute;
      right: 0;
      top: 15px;
    }
  }
`;

const Navigation = (props) => {
  const { cartItems } = props;

  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavDropdown title="Shop" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/action"}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/action"}>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/something"}>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={"/action"}>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/about"}>
                About US
              </Nav.Link>
              <Nav.Link as={Link} to={"/store"}>
                Our Stores
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"}>
                Contact US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Nav className="icon-nav">
            <Nav.Link as={Link} to={"/search"}>
              <img src={searchIcon} alt="search" />
            </Nav.Link>
            <Nav.Link as={Link} to={"/user-profile"}>
              <img src={userIcon} alt="user" />
            </Nav.Link>
            <Nav.Link as={Link} to={"/cart"}>
              <img src={cartIcon} alt="cart" />
              {cartItems.length > 0 ? (
                <span className="badge">{cartItems.length}</span>
              ) : (
                ""
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Styles>
  );
};
export default Navigation;
