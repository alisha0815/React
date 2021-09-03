// import logo from "./logo.svg";
import "./App.css";

function App() {
  let group1 = ["stefano", "laura", "anotonio"];
  let group2 = [{ name: "jack" }, { name: "mathias" }, { name: "jenny" }];

  let renderNames = (arr) =>
    arr.map((ele, idx) => {
      return ele !== "laura" ? <p key={idx}>Hello {ele}</p> : null;
    });

  let renderNamesFromObj = (arr) =>
    arr.map((ele, idx) => {
      return <p key={idx}>Hello {ele.name}</p>;
    });

  return (
    <div className="App">
      <header>
        <h1>React App</h1>
      </header>
      <h1 className="pink">Welcome group #1</h1>
      {renderNames(group1)}
      <h1 className="pink">Welcome group #2</h1>
      {renderNamesFromObj(group2)}
      <footer>
        <h1>Alisha 👩‍💻</h1>
      </footer>
    </div>
  );
}

export default App;
