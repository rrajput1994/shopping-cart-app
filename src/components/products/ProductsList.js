import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import classes from "./ProductsList.module.css";
import Data from "../api/ProductData";
import BreadcrumbMenu from "../UI/BreadcrumbMenu";
import ProductFilter from "./ProductFilter";

// const allCategories = [
//   ...new Set(
//     Data.map((item) => {
//       return item.category;
//     })
//   ),
// ];

// console.log(allCategories);

const ProductsList = (props) => {
  const [products, setProducts] = useState(Data);

  // useEffect(() => {
  //   loadProducts();
  // }, []);

  // const loadProducts = async () => {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  //   console.log(response.data[0].name);
  //   setProducts(response.data);
  // };

  const totalProducts = products.length;

  const filterProductsHandler = (category) => {
    if (category === "all") {
      // console.log(Data);
      setProducts(Data);
    }

    const allCats = Data.filter((item) => {
      return item.category === category;
    });

    setProducts(allCats);
  };

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
      <ProductFilter onProductFilter={filterProductsHandler} />
      <div className={classes.productList}>{productList}</div>
    </Fragment>
  );
};

export default ProductsList;
