import React from "react";
import FirstName from "./components/FirstName";
import LastName from "./components/LastName";

class App extends React.Component {
  render() {
    const lastNames = ["Greve", "Kim", "Solheim", "Sohn"];
    const firstNames = ["Mathias", "Yuri", "Henrik", "Alisha"];

    return (
      <div>
        <h1>
          Welcome!
          <FirstName firstNames={firstNames} />
        </h1>
        <h1>
          <LastName lastNames={lastNames} />
        </h1>
      </div>
    );
  }
}

export default App;

// ## Exercise 2

// Create a parent class component inside which you define two arrays of equal length, the first will have 5 firstnames and the second 5 lastnames.

// Create 2 children class components – one to display the firstnames and one to display the lastnames so that they are rendered side by side with matching order.
