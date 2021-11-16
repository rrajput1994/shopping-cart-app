import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import classes from "./ProductsList.module.css";
import BreadcrumbMenu from "../UI/BreadcrumbMenu";
import ProductFilter from "./ProductFilter";

const ProductsList = (props) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [sort, setSort] = useState();
  const allCates = [
    "all",
    ...new Set(allProducts.map((item) => item.category)),
  ];

  const loadProducts = async () => {
    const response = await axios.get(
      "https://shopping-app-345fa-default-rtdb.firebaseio.com/products.json"
    );
    const fetchedProducts = [];

    for (let key in response.data) {
      fetchedProducts.push({
        ...response.data[key],
        id: key,
      });
    }
    setProducts(fetchedProducts);
    setAllProducts(fetchedProducts);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const totalProducts = products.length;

  const filterProductsHandler = (category) => {
    if (category === "all") {
      setProducts(allProducts);
    } else {
      const CategoryWiseFilteredData = allProducts.filter((item) => {
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

  const onSelectHander = (e) => {
    setSort(e.target.value);
    const sortValue = e.target.value;
    const sortedProducts = products.sort((a, b) => {
      if (sortValue === "lowest") {
        return a.discount_price > b.discount_price ? 1 : -1;
      }
      if (sortValue === "highest") {
        return a.discount_price < b.discount_price ? 1 : -1;
      }
      if (sortValue === "all") {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(sortedProducts);
  };

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
        allCategories={allCates}
        onSelectHander={onSelectHander}
        sort={sort}
      />
      <div className={classes.productList}>{productList}</div>
    </Fragment>
  );
};

export default ProductsList;
