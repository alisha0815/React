import React from "react";
import SingleProduct from "./SingleProduct";

class List extends React.Component {
  render() {
    console.log("props in list.js===>", this.props);

    let renderProducts = (arr) => {
      return arr.map((item, idx) => {
        return <SingleProduct product={item} key={idx} />;
      });
    };
    return <div>{renderProducts(this.props.products)}</div>;
  }
}

export default List;
