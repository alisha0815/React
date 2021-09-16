import React from "react";

const Counter = ({ number, setNumber, numberHandler }) => {
  return (
    <div>
      <h1>Only Even Numbers PopUp !</h1>
      <h2>{number % 2 === 0 ? number : number - 1}</h2>
      <button onClick={numberHandler}>Click</button>
    </div>
  );
};

export default Counter;
