import React from "react";

class LastName extends React.Component {
  render() {
    console.log("lastname.js props are", this.props);
    // let { firstnames } = this.props;

    let renderLastNames = (arr) => {
      return arr.map((first, idx) => {
        return (
          <div key={idx}>
            <p>{first}</p>
          </div>
        );
      });
    };
    return renderLastNames(this.props.lastNames);
  }
}

export default LastName;
