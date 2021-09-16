import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

const App = () => {
  const [name, setName] = useState("Alisha");
  const message = "Hello";

  return (
    <div>
      <CreateTweet />
      <TweetList setName={setName} name={name} message={message} />
    </div>
  );
};

export default App;
