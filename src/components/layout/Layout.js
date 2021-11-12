import React from "react";
import { Container } from "react-bootstrap";
import InviteBanner from "../UI/InviteBanner";
import Navbar from "./header/Navbar";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <section>
      <Navbar cartItems={props.cartItems} />

      <main className={classes.main}>
        <InviteBanner />
        <Container fluid className="pt-3">
          {props.children}
        </Container>
      </main>
    </section>
  );
};

export default Layout;
