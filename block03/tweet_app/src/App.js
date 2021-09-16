import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

const App = () => {
  const [name, setName] = useState("Dev Ed");

  const sayHelloHandler = (e) => {
    setName("Mathias");
  };

  return (
    <div>
      <h1>Hello {name}!</h1>
      <button onClick={() => sayHelloHandler({ name })}>Click!!</button>
    </div>
  );
};

export default App;
