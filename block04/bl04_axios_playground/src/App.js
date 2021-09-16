import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  // state = {
  //   title: "",
  //   year: "",
  //   error: "",
  // };

  // const [title, setTitle] = useState("");
  // const [year, setYear] = useState("");
  const [movie, setMovie] = useState();
  // movie will be the object
  const [error, setError] = useState("");
  const [inputMovie, setInputMovie] = useState("");
  // const [plot, setPlot] = useState("");

  // componentDidMount() {
  //   this.findMovie("It");
  // }

  useEffect(() => {
    findMovie("It");
  }, []);

  let handleChange = (e) => {
    let movie = e.target.value;
    // this.setState({ movieToSearch: movie });
    // setMovie({ title: movie });
    setInputMovie(movie);
  };

  let searchMovie = (e) => {
    e.preventDefault();
    // this.findMovie(this.state.movieToSearch);
    findMovie(inputMovie);
  };

  let findMovie = (movie) => {
    console.log("from findMovie");
    let url = `http://www.omdbapi.com/?t=${movie}&apikey=5647a44b`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        let { Title, Year, Plot } = res.data;
        // this.setState({ title: res.data.Title, year: res.data.Year });
        setMovie({ title: Title, year: Year, plot: Plot });
      })
      .catch((e) => {
        debugger;
      });
  };
  // render() {
  return (
    <div>
      <h1>Search for</h1>
      <form onSubmit={searchMovie}>
        <input onChange={handleChange} />
        <button>Search Movies</button>
      </form>
      {movie ? (
        <>
          <h1>
            Title: {movie.title}, release year: {movie.year}
          </h1>
          <p>{movie.plot}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
// }

export default App;
