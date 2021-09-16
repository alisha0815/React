import React from "react";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    console.log(tweet);
    console.log(tweets);
    setTweets(tweets.filter((t) => t !== tweet));
  };
  return (
    <div>
      <h2>{name}</h2>
      <h3>{tweet}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
