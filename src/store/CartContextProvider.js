import React, { useState } from "react";

import CartContext from "./cart-context";

const CartContextProvider = (props) => {
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

  const CartContextValues = {
    cartItems: cartItems,
    addProduct: onAddProduct,
    removeProduct: onRemoveProduct,
  };

  return (
    <CartContext.Provider value={CartContextValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
