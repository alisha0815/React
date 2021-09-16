import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    title: "",
    year: "",
    error: "",
  };

  componentDidMount() {
    this.findMovie("It");
  }

  handleChange = (e) => {
    let movie = e.target.value;
    this.setState({ movieToSearch: movie });
  };

  searchMovie = (e) => {
    e.preventDefault();
    this.findMovie(this.state.movieToSearch);
  };

  findMovie = (movie) => {
    console.log("from findMovie");
    let url = `http://www.omdbapi.com/?t=${movie}&apikey=5647a44b`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        // debugger;
        this.setState({ title: res.data.Title, year: res.data.Year });
      })
      .catch((e) => {
        debugger;
      });
  };
  render() {
    return (
      <div>
        <h1>Search for</h1>
        <form onSubmit={this.searchMovie}>
          <input onChange={this.handleChange} />
          <button>Search Movies</button>
        </form>
        <h1>
          Title: {this.state.title} released year: {this.state.year}
        </h1>
      </div>
    );
  }
}

export default App;
