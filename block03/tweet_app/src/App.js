import React from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

const App = () => {
  const name = "Alisha";
  const message = "Jeg heter Alisha";

  return (
    <div>
      <h1>Hello React!</h1>
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
};

export default App;
