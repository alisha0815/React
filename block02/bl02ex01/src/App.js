import React from "react";
import List from "./components/List";

class App extends React.Component {
  render() {
    const names = ["Ana", "Mario", "Sue", "Martin"];
    return (
      <div>
        <List names={names} />
      </div>
    );
  }
}

export default App;

// ## Exercise 1

// Create two React class components, one of them will be the parent component and the other will be the child component.

// The parent component will render the child component passing a prop to it (this will be your name that you first assign in the parent component using the
// keyword `this`).

// The child component needs to return the following message: "Hello 'the name you passed as a prop', I am  the child component!"
