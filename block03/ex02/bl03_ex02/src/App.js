import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("No data provided");

  let handleInput = (event) => {
    let data = event.target.value;
    data.length === 0 ? setUserInput("No data provided") : setUserInput(data);
  };

  return (
    <div>
      <input onChange={handleInput} />
      <h1>{userInput}</h1>
    </div>
  );
}

export default App;
