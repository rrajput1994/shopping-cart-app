import React from "react";
import CartContextProvider from "./store/CartContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import ProductsList from "./components/products/ProductsList";
import Cart from "./components/cart/Cart";
import ProductDetail from "./components/products/ProductDetail";
import Login from "./components/Auth/Login";

function App() {
  return (
    <Router>
      <CartContextProvider>
        <Layout>
          <Switch>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/">
              <ProductsList />
            </Route>
            <Route exact path="/product-detail/:pid">
              <ProductDetail />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Layout>
      </CartContextProvider>
    </Router>
  );
}

export default App;
