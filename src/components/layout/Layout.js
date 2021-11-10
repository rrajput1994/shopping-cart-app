import React from "react";
import { Container } from "react-bootstrap";
import InviteBanner from "../UI/InviteBanner";
import Navbar from "./header/Navbar";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <section>
      <Navbar cartItems={props.cartItems} />
      <InviteBanner />
      <main className={classes.main}>
        <Container fluid>{props.children}</Container>
      </main>
    </section>
  );
};

export default Layout;
