import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const { cartItems, onAddProduct, onRemoveProduct } = props;

  let cartItemsList = "";

  if (cartItems.length === 0) {
    cartItemsList = <div>Cart is Emapty!</div>;
  } else {
    cartItemsList = cartItems.map((item) => {
      return (
        <div key={item.id} className={classes["cart-inner"]}>
          <div className={classes["cart-img"]}>
            <img src={item.image} alt={item.name} />
          </div>
          <div className={classes["cart-description-container"]}>
            <div className={classes.description}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <div className={classes["cart-price-box"]}>
                <span className={classes["cart-discout-price"]}>
                  {item.discount_price}
                </span>
                <span className={classes["cart-price"]}>{item.price}</span>
              </div>
            </div>
            <div className={classes.quantity}>
              <button onClick={() => onRemoveProduct(item)}>-</button>
              <button className={classes.qtyBtn}>{item.quantity}</button>
              <button onClick={() => onAddProduct(item)}>+</button>
            </div>
            <div className={classes.price}>
              <strong>{item.quantity}</strong> x
              <strong>{item.discount_price}</strong>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <Container>
      <div className="cart">{cartItemsList}</div>;
    </Container>
  );
};

export default Cart;
