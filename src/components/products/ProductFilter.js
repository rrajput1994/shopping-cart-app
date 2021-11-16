import React, { useState } from "react";
import { Form } from "react-bootstrap";
import classes from "./ProductFilter.module.css";
const ProductFilter = (props) => {
  const { onProductFilter, onSelectHander, allCategories, sort } = props;

  // const selectFilterHandler = (e) => {
  //   setSort(e.target.value);
  //   onSelectHander(e.target.value);
  // };

  return (
    <div className={classes.filterContainer}>
      <div className={classes.filterTabs}>
        <label>Filter: </label>
        <div className={classes.tabs}>
          {allCategories.map((category, index) => {
            return (
              <button key={index} onClick={() => onProductFilter(category)}>
                {category === "all" ? "All Products" : category}
              </button>
            );
          })}
        </div>
      </div>
      <div className={classes.priceFilter}>
        <label>Sort By: </label>
        <Form.Select
          className={classes["custom-select"]}
          onChange={onSelectHander}
          value={sort}
        >
          <option value="all">All</option>
          <option value="lowest">Price Low to High</option>
          <option value="highest">Price High to Low</option>
        </Form.Select>
      </div>
    </div>
  );
};
export default ProductFilter;
