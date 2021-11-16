import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import { Container } from "react-bootstrap";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartContext = useContext(CartContext);

  let cartItemsList = "";

  if (cartContext.cartItems.length === 0) {
    return (cartItemsList = <div>Cart is Emapty!</div>);
  } else {
    cartItemsList = cartContext.cartItems.map((product) => {
      return (
        <div key={product.id} className={classes["cart-inner"]}>
          <div className={classes["cart-img"]}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={classes["cart-description-container"]}>
            <div className={classes.description}>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <div className={classes["cart-price-box"]}>
                <span className={classes["cart-discout-price"]}>
                  {product.discount_price}
                </span>
                <span className={classes["cart-price"]}>{product.price}</span>
              </div>
            </div>
            <div className={classes.quantity}>
              <button onClick={() => cartContext.removeProduct(product)}>
                -
              </button>
              <button className={classes.qtyBtn}>{product.quantity}</button>
              <button onClick={() => cartContext.addProduct(product)}>+</button>
            </div>
            <div className={classes.price}>
              <strong>{product.quantity}</strong> x
              <strong>{product.discount_price}</strong>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <Container>
      <div className="cart">{cartItemsList}</div>
    </Container>
  );
};

export default Cart;
