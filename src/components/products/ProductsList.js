import React, { Fragment } from "react";
import ProductItem from "./ProductItem";
import classes from "./ProductsList.module.css";
import Data from "../api/ProductData";
import BreadcrumbMenu from "../UI/BreadcrumbMenu";
import ProductFilter from "./ProductFilter";
const ProductsList = (props) => {
  const { products } = Data;

  const totalProducts = products.length;

  const addProductHandler = (product) => {
    props.onAddProduct(product);
  };

  const productList = (
    <ul>
      {products.map((product) => {
        return (
          <ProductItem
            onAddProduct={addProductHandler}
            key={product.id}
            product={product}
          />
        );
      })}
    </ul>
  );

  return (
    <Fragment>
      <BreadcrumbMenu />
      <div className={classes.allProducts}>
        <h4>
          All Products <span>({totalProducts} Products)</span>
        </h4>
      </div>
      <ProductFilter />
      <div className={classes.productList}>{productList}</div>
    </Fragment>
  );
};

export default ProductsList;
