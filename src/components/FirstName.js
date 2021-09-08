import React from "react";

class FirstName extends React.Component {
  render() {
    console.log("firstname.js props are", this.props);
    // let { firstnames } = this.props;

    let renderFirstNames = (arr) => {
      return arr.map((first, idx) => {
        return (
          <div key={idx}>
            <p>{first}</p>
          </div>
        );
      });
    };
    return renderFirstNames(this.props.firstNames);
  }
}

export default FirstName;
