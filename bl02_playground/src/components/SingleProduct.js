import React from "react";

const SingleProduct = (props) => {
  return (
    <div>
      <h1>Name: {props.product}</h1>
      <p>Price: {props.price}</p>
      <p>Category: {props.category}</p>
    </div>
  );
};

export default SingleProduct;
