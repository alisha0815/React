import React from "react";

class Email extends React.Component {
  render() {
    return (
      <div>
        <div onChange={this.props.getEmail}>
          <h4>Email</h4>
          <input name="email" value={this.props.email} />
        </div>
      </div>
    );
  }
}

export default Email;
