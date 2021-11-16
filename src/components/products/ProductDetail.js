import React from "react";
import { useParams } from "react-router";

const ProductDetail = (props) => {
  let { pid } = useParams();

  return <div>{pid}</div>;
};

export default ProductDetail;
