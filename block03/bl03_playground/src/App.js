import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import products from "./static/products";

class App extends React.Component {
  state = {
    name: "Alisha",
    city: "Oslo",
    counter: 0,
  };
  year = "3000";

  buttonClicked = () => {
    console.log("Button clicked! 😎");
    this.setState({ city: this.state.city });
    this.year = 2020;
    console.log(this.year);
  };

  count = () => {
    let { counter } = this.state;
    counter += 1;
    this.setState({ counter: counter }, () => {
      console.log("updated counter in state==>", this.state.counter);
    });
    // console.log("updated counter in state==>", this.state.counter);
  };

  render() {
    let year = 2021;

    return (
      <div className="App">
        <Header />
        <h1 onClick={this.count}>You clicked me {this.state.counter} times</h1>
        <h1>
          {this.state.name} lives in {this.state.city}
        </h1>
        <h2> Year is {this.year}</h2>
        <button onClick={this.buttonClicked}>Click me! </button>
        {/* <List products={products} /> */}

        <Footer currentYear={year} authorName={"BCS"} />
      </div>
    );
  }
}

export default App;
