import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./ProductItem.module.css";
// import productImg from "../../assets/p-1.jpg";
const ProductItem = ({ product, onAddProduct }) => {
  const [show, setShow] = useState(false);

  const sizeHandler = (size) => {
    console.log(size);
    setShow(true);
  };

  return (
    <li className={classes["list-item"]}>
      <div className={classes.card}>
        <div className={classes["item-img"]}>
          <img src={product.image} alt="product" />
        </div>
        <div className={classes["card-body"]}>
          {!show && <div className={classes["title"]}>{product.name}</div>}

          {show && (
            <Button
              onClick={() => onAddProduct(product)}
              className={classes.addToCartBtn}
            >
              Add to Cart
            </Button>
          )}

          {!show && (
            <div className={classes["select-size-box"]}>
              <label className={classes.labels}>Select Size</label>
              <div className={classes["select-size"]}>
                <button onClick={() => sizeHandler(38)}>38</button>
                <button onClick={() => sizeHandler(39)}>39</button>
                <button onClick={() => sizeHandler(40)}>40</button>
                <button onClick={() => sizeHandler(44)}>44</button>
                <button onClick={() => sizeHandler(46)}>46</button>
              </div>
            </div>
          )}
          <div className={classes["description"]}>{product.description}</div>
          <div className={classes.sizes}>Sizes: XS, S, M, L, XL, XXL</div>
          <div className={classes.priceContainer}>
            <strong className={classes.newPrice}>
              ${product.discount_price}
            </strong>
            <span className={classes.originalPrice}>{product.price}</span>
            <span className={classes.discount}>(50% OFF)</span>
          </div>
        </div>
      </div>
    </li>
  );
};
export default ProductItem;
