import React from "react";
import Email from "./components/Email";
import Password from "./components/Password";
import Submit from "./components/Submit";

class App extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  getDataOnClick = () => {
    alert(
      `Your email is ${this.state.email} and your password is ${this.state.password}`
    );
  };

  render() {
    return (
      <div>
        <Email getEmail={this.handleInput} />
        <Password getPassword={this.handleInput} />
        <Submit submit={this.getDataOnClick} />
      </div>
    );
  }
}

export default App;
// ## Exercise 3

// In a function component, create a `div` which contains 2 inputs and one button.

// Each of these should be a separate child component, all rendered by a parent component called App.

// You should collect the data from the inputs and make it available in the parent component (using a function would work for this).

// Input 1 should collect the user's email.
// Input 2 should collect the user's password.

// When the button (also a separate component) is clicked then you should alert the data collected by the two inputs.

// > You should use the `onChange` and `onClick` events
