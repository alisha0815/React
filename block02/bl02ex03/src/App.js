import React from "react";
import List from "./components/List";

class App extends React.Component {
  render() {
    let categories = ["name", "address", "gender", "id"];
    return <List categories={categories} />;
  }
}

export default App;

// ## Exercise 3

// Create 3 class components, Main, List, and Item.

// In Main declare an array of categories; you should pass this array as it is to List,
// then in List you should map through the array and for each iteration you should pass each element of the array to Item in which you render it.
