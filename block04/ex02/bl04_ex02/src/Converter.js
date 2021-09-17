import React from "react";

const Converter = ({ input, currency, handleInput, findCurrency }) => {
  return (
    <div>
      <h1>Convert EUR to USD</h1>
      <p> EUR</p>
      <input onChange={handleInput} text={input} />
      <button onClick={findCurrency}>Search</button>
      <h2>$ {(input * currency).toFixed(2)}</h2>
    </div>
  );
};

export default Converter;
