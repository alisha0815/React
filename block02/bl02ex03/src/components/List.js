import React from "react";
import Item from "./components/Item";

class List extends React.Component {
  render() {
    console.log("list.js props are...", this.props);
    let renderCategories = (array) => {
      return array.map((item, idx) => {
        return <p key={idx}>Categories are {item}</p>;
      });
    };
    return renderCategories(this.props.categories);
  }
}

export default List;
