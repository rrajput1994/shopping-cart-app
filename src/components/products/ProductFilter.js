import React from "react";
import { Form } from "react-bootstrap";
import classes from "./ProductFilter.module.css";
const ProductFilter = () => {
  return (
    <div className={classes.filterContainer}>
      <div className={classes.filterTabs}>
        <label>Filter: </label>
        <div className={classes.tabs}>
          <button>All Products</button>
          <button>Tee Shirt</button>
          <button>Denim</button>
          <button>Sweatshirts</button>
          <button>Polo Tee Shirt</button>
          <button>Shirt</button>
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
