import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import products from "./static/products";
import Inputs from "./components/Inputs";

class App extends React.Component {
  state = {
    fname: "",
    lname: "",
    name: "Alisha",
    city: "Oslo",
    counter: 0,
    userInput: "",
    fullName: "",
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

  submitInput = () => {
    let { fname, lname } = this.state;
    let full = `${fname} ${lname}`;
    this.setState({ fullName: full, lname: "", fname: "" });
    alert(this.state.fname + " " + this.state.lname);
  };

  handleChange = (event) => {
    let data = event.target.value;
    data.length > 6 ? console.log("good enough!") : console.log("keep typing");
    this.setState({ [event.target.name]: data }, () => {
      console.log("state==>", this.state);
    });
    // console.log("from the input ==>", data.length);
    // console.log("form the input==>", data);
    // console.log("form the input==>", event);
    // console.log("form the input==>", event.target);
  };

  handleForm = (event) => {
    event.preventDefault();
    alert(this.state.userInput);
  };
  render() {
    let year = 2021;

    return (
      <div className="App">
        <Header />
        <Inputs
          change={this.handleChange}
          submit={this.submitInput}
          fn={this.state.fname}
          ln={this.state.lname}
        />

        <h1>Your full name is {this.state.fullName}</h1>
        <p>you typed : {this.state.userInput}</p>
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
