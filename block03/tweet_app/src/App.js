import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

const App = () => {
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const [name, setName] = useState("Alisha");
  const message = "Hello";

  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} />
    </div>
  );
};

export default App;
