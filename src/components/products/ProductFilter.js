import React from "react";
import { Form } from "react-bootstrap";
import classes from "./ProductFilter.module.css";
const ProductFilter = (props) => {
  const { onProductFilter } = props;
  return (
    <div className={classes.filterContainer}>
      <div className={classes.filterTabs}>
        <label>Filter: </label>
        <div className={classes.tabs}>
          <button onClick={() => onProductFilter("all")}>All Products</button>
          <button onClick={() => onProductFilter("tee shirt")}>
            Tee Shirt
          </button>
          <button onClick={() => onProductFilter("denim")}>Denim</button>
          <button onClick={() => onProductFilter("sweatshirts")}>
            Sweatshirts
          </button>
          <button onClick={() => onProductFilter("polo tee shirt")}>
            Polo Tee Shirt
          </button>
          <button onClick={() => onProductFilter("shirt")}>Shirt</button>
        </div>
      </div>
      <div className={classes.priceFilter}>
        <label>Sort By: </label>
        <Form.Select size="lg" className={classes["custom-select"]}>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </Form.Select>
      </div>
    </div>
  );
};
export default ProductFilter;
