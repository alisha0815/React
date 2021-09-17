import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [currency, setCurrency] = useState({});
  const [input, setInput] = useState("");

  // Event
  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const findCurrency = () => {
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/076bf3661b25645fde3a8bc0/latest/EUR`
      )
      .then((data) => {
        let rate = data.data.conversion_rates.USD;
        setCurrency(rate);
      });
  };
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

export default App;
