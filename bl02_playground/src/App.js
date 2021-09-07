import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const names = ["antonello", "mike", "jason", "peter"];
  let year = 2020;
  const renderNames = (arr) => {
    return arr.map((name, i) => {
      return <h1 key={i}>{name}</h1>;
    });
  };

  return (
    <div className="App">
      <Header />
      {renderNames(names)}
      <Footer currentYear={year} />
    </div>
  );
}

export default App;
