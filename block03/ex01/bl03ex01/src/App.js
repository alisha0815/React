import React from "react";

class App extends React.Component {
  state = {
    userInput: "",
  };

  handleChange = (event) => {
    let data = event.target.value;
    console.log(data);
    data.length === 0
      ? console.log("No data provided")
      : console.log("Good enough!");
    this.setState({ userInput: data });
  };
  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

export default App;

// ## Exercise 1

// Write a class component, with an input that takes the data from the user, the data is then displayed (rendered) as an `h1` in the page.

// If no text is provided it should display a text saying "no data provided!"

// > You should use the `onChange` event
