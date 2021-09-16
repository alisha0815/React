import React from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

const App = () => {
  const name = "Alisha";
  const message = "Jeg heter Alisha";

  const sayHelloHandler = (user) => {
    alert(`Hello there ${user}`);
    console.log(user);
  };

  const inputHandler = (e) => {
    console.log(e);
  };

  return (
    <div>
      <h1>Hello React!</h1>
      <button onClick={() => sayHelloHandler("Mike")}>Click!!</button>
      <button onClick={inputHandler}>Try Me</button>
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
};

export default App;
