import React, { useState } from "react";
import Converter from "./Converter";
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
    <Converter
      currency={currency}
      input={input}
      handleInput={handleInput}
      findCurrency={findCurrency}
    />
  );
};

export default App;
