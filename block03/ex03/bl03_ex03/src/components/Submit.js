import React from "react";

class Submit extends React.Component {
  render() {
    return (
      <div>
        <h4>
          <button onClick={this.props.submit}>Click!</button>
        </h4>
        <h2>Your email is {this.props.data.email}</h2>
        <h2>Your password is {this.props.data.password}</h2>
      </div>
    );
  }
}

export default Submit;
