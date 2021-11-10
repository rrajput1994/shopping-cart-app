import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import ProductsList from "./components/products/ProductsList";
import Cart from "./components/cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAddProduct = (product) => {
    console.log(product.id);
    const itemExist = cartItems.find((item) => item.id === product.id);

    console.log(itemExist);
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

  return (
    <Router>
      <Layout cartItems={cartItems}>
        <Switch>
          <Route exact path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route exact path="/">
            <ProductsList onAddProduct={onAddProduct} />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
