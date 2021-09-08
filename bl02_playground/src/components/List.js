import React from "react";
import SingleProduct from "./SingleProduct";

let List = (props) => {
  console.log("props in list.js===>", props);

  let renderProducts = (arr) => {
    return arr.map((item, idx) => {
      return <SingleProduct product={item} key={idx} />;
    });
  };
  return <div>{renderProducts(props.products)}</div>;
};

export default List;
