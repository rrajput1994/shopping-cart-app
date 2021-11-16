import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import classes from "./ProductsList.module.css";
import Data from "../api/ProductData";
import BreadcrumbMenu from "../UI/BreadcrumbMenu";
import ProductFilter from "./ProductFilter";

const allCategories = [
  "all",
  ...new Set(
    Data.map((item) => {
      return item.category;
    })
  ),
];

const ProductsList = (props) => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const response = await axios.get(
      "https://shopping-app-345fa-default-rtdb.firebaseio.com/products.json"
    );
    console.log("from firebases", response.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    setProducts(Data);
  }, []);

  const totalProducts = products.length;

  const filterProductsHandler = (category) => {
    if (category === "all") {
      setProducts(Data);
    } else {
      const CategoryWiseFilteredData = Data.filter((item) => {
        return item.category === category;
      });

      setProducts(CategoryWiseFilteredData);
    }
  };

  const productList = (
    <ul>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
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
      <ProductFilter
        onProductFilter={filterProductsHandler}
        allCategories={allCategories}
      />
      <div className={classes.productList}>{productList}</div>
    </Fragment>
  );
};

export default ProductsList;
