import React from "react";

class List extends React.Component {
  render() {
    console.log("props in list.js==>", this.props);
    let { names } = this.props;
    let renderNames = (arr) => {
      return arr.map((name, idx) => {
        return (
          <div key={idx}>
            <p>Hello {name}</p>
          </div>
        );
      });
    };
    return renderNames(names);
  }
}

export default List;
