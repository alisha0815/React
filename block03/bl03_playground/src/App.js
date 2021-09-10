import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import products from "./static/products";

class App extends React.Component {
  state = {
    name: "Alisha",
    city: "Oslo",
  };

  buttonClicked = () => {
    console.log("Button clicked! 😎");
  };

  render() {
    let year = 2021;

    return (
      <div className="App">
        <Header />
        <h1>
          {this.state.name} lives in {this.state.city}
        </h1>
        <button onClick={this.buttonClicked}>Click me! </button>
        {/* <List products={products} /> */}

        <Footer currentYear={year} authorName={"BCS"} />
      </div>
    );
  }
}

export default App;
