import React, { useState } from "react";

const CreateTweet = ({ tweets, setTweets, textInput, setTextInput }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, textInput]);
    setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        col="50"
        rows="5"
      ></textarea>
      <button>Submit!</button>
      <h1>{textInput}</h1>
    </form>
  );
};

export default CreateTweet;
