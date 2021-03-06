import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../Auth/firebase-config";
import { signOut } from "@firebase/auth";
import CartContext from "../../../store/cart-context";
import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import searchIcon from "../../assets/images/search.svg";
import userIcon from "../../assets/images/user.svg";
import cartIcon from "../../assets/images/cart.svg";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #fff;
    height: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
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
    margin-right: 100px;
  }
  .navbar-toggler:focus {
    box-shadow: none;
  }
  .icon-nav.navbar-nav {
    @media (max-width: 991px) {
      display: flex;
      flex-direction: row;
      position: absolute;
      right: 15px;
      top: 15px;
    }
  }
  .logoutBtn {
    margin-left: 10px;
    background-color: #da490a;
    border: none;
    border-radius: 5px;
    padding: 0 10px;
    color: #fff;
    font-size: 14px;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  .navbar-light .navbar-nav .nav-link.loginBtn {
    margin-left: 10px;
    background-color: #da490a;
    border: none;
    border-radius: 5px;
    padding: 0 10px;
    color: #fff;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  .navbar-collapse {
    @media (max-width: 991px) {
      background: #fff;
      position: absolute;
      left: 0;
      top: 70px;
      width: 100%;
    }
  }
`;

const Navigation = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartContext = useContext(CartContext);

  const onLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("authUser");
      setIsLoggedIn(false);
      history.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authUser");
    if (token) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const user = auth.currentUser;
  // console.log(user);

  return (
    <Styles>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className="fixed-top"
      >
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
              {user && user.displayName}
            </Nav.Link>
            <Nav.Link as={Link} to={"/cart"}>
              <img src={cartIcon} alt="cart" />
              {cartContext.cartItems.length > 0 ? (
                <span className="badge">{cartContext.cartItems.length}</span>
              ) : (
                ""
              )}
            </Nav.Link>
            {user && (
              <button className="logoutBtn" onClick={onLogout}>
                Logout
              </button>
            )}

            {!user && (
              <Nav.Link as={Link} to={"/login"} className="loginBtn">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </Styles>
  );
};
export default Navigation;
