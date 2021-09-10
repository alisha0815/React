import React from "react";

class SingleProduct extends React.Component {
  render() {
    let { product } = this.props;
    return (
      <div>
        <h1>Name: {product.product}</h1>
        <p>Price: {product.price}</p>
        <p>Category: {product.category}</p>
      </div>
    );
  }
}

export default SingleProduct;
