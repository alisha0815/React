import React from "react";

class Password extends React.Component {
  render() {
    return (
      <div>
        <div onChange={this.props.getPassword}>
          <h4>Password</h4>
          <input name="password" value={this.props.password} />
        </div>
      </div>
    );
  }
}

export default Password;
