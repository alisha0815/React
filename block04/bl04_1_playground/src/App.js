import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  // initial value 0
  const [username, setUsername] = useState("");

  let clicked = () => {
    setCounter(counter + 1);
  };

  let handleInput = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="App">
      <h1>You clicked the button {counter} times</h1>
      <button onClick={clicked}>Click me!</button>
      <input onChange={handleInput} />
      <h1>{username}</h1>
    </div>
  );
}

export default App;
