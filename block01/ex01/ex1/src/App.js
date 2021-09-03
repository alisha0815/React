// import logo from './logo.svg';
import "./App.css";

function App() {
  let categories = ["t-shirts", "hats", "shorts", "shirts", "pants", "shoes"];

  let renderNames = (arr) =>
    arr.map((ele, index) => {
      return <p key={index}> {ele}</p>;
    });
  return (
    <div className="App">
      <h1>{renderNames(categories)}</h1>
    </div>
  );
}

export default App;

// ## Exercise 1

// Create a brand new React application with 'React create App'. This app needs to display a list of product categories from an array. The categories are 't-shirts', 'hats', 'shorts', 'shirts', 'pants', 'shoes'. In order to display them you will need to use Array.map
