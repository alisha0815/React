import React from "react";

const SingleProduct = (props) => {
  console.log("props are", props);
  return (
    <div>
      <h1>Name: {props.product.product}</h1>
      <p>Price: {props.product.price}</p>
      <p>Category: {props.product.category}</p>
    </div>
  );
};

export default SingleProduct;
