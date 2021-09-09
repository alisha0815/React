import React from "react";

class Item extends React.Component {
  render() {
    console.log("item.js.items props are", this.props);

    return (
      <div>
        <h1>Category: {this.props.item.category}</h1>
        <h2>Name: {this.props.item.product}</h2>
        <img src={this.props.item.image} alt={this.props.item.product} />
        <p>$ {this.props.item.price}</p>
      </div>
    );
  }
}

export default Item;
