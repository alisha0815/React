import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, message, setName }) => {
  return (
    <div className="tweet-list">
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
      <button onClick={() => setName("Mike")}>Click</button>
    </div>
  );
};

export default TweetList;
