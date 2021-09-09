import React from "react";
import Item from "./Item";

class List extends React.Component {
  render() {
    console.log("list.js props are==>", this.props.products);

    let renderProducts = (arr) => {
      return arr.map((item, idx) => {
        return (
          // <div key={idx}>
          //   <h1>Category:{item.category}</h1>
          //   <img src={item.image} alt={item.category} />
          //   <h3>Price: $ {item.price}</h3>
          // </div>
          <Item item={item} key={idx} />
        );
      });
    };
    return renderProducts(this.props.products);
  }
}

export default List;
