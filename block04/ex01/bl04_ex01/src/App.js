import React, { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [number, setNumber] = useState(0);
  const numberHandler = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <Counter
        number={number}
        setNumber={setNumber}
        numberHandler={numberHandler}
      />
    </div>
  );
};

export default App;
