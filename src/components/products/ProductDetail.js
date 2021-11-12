import React from "react";
import { useParams } from "react-router";

const ProductDetail = (props) => {
  let { pid } = useParams();
  return <h2>Product Details {pid}</h2>;
};

export default ProductDetail;
