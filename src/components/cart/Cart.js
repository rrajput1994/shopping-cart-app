import React from "react";

const Cart = (props) => {
  const { cartItems } = props;

  let cartItemsList = "";

  if (cartItems.length === 0) {
    return (cartItemsList = <div>Cart is Emapty!</div>);
  } else {
    cartItemsList = cartItems.map((item) => {
      return (
        <div className="cart-inner">
          <div className="cart-img">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="cart-description">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
          </div>
          <div className="cart-price">
            <span className="cart-discout-price">{item.discount_price}</span>
            <span className="cart-price">{item.price}</span>
          </div>
        </div>
      );
    });
  }

  return <div className="cart">{cartItemsList}</div>;
};

export default Cart;
