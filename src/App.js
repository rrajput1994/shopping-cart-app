import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import ProductsList from "./components/products/ProductsList";
import Cart from "./components/cart/Cart";
import ProductDetail from "./components/products/ProductDetail";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAddProduct = (product) => {
    const itemExist = cartItems.find((item) => item.id === product.id);

    if (itemExist) {
      setCartItems(
        cartItems.map((item) => {
          return item.id === product.id
            ? { ...itemExist, quantity: itemExist.quantity + 1 }
            : item;
        })
      );
    } else {
      setCartItems((prevProduct) => {
        return [...prevProduct, { ...product, quantity: 1 }];
      });
    }
  };

  const onRemoveProduct = (product) => {
    const existProduct = cartItems.find((item) => item.id === product.id);

    if (existProduct.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) => {
          return item.id === product.id
            ? { ...existProduct, quantity: existProduct.quantity - 1 }
            : item;
        })
      );
    }
  };

  return (
    <Router>
      <Layout cartItems={cartItems}>
        <Switch>
          <Route exact path="/cart">
            <Cart
              cartItems={cartItems}
              onAddProduct={onAddProduct}
              onRemoveProduct={onRemoveProduct}
            />
          </Route>
          <Route exact path="/">
            <ProductsList onAddProduct={onAddProduct} />
          </Route>
          <Route exact path="/product-detail/:pid">
            <ProductDetail />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
