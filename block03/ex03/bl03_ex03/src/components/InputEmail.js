import React from "react";

class InputEmail extends React.Component {
  render() {
    return (
      <div onChange={this.props.handleInput}>
        <h4>Email</h4>
        <input name="email" value={this.props.state.email} />
        <h4>Password</h4>
        <input name="password" value={this.props.state.password} />
      </div>
    );
  }
}

export default InputEmail;
