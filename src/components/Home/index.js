import React from "react";
import { Component } from "react";
import "./index.css";
import MovieCard from "../MovieCard";

class Home extends Component {
  state = { movies: [], page: 1, search: "" };

  componentDidMount() {
    this.getMovieData();
  }

  getMovieData = async () => {
    const { page, search } = this.state;

    let url = "";
    if (search === "") {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=a7c8156f3d026a47ba3ae3028fc1d515&language=en-US&page=${page}`;
    } else {
      url = `https://api.themoviedb.org/3/search/movie?api_key=a7c8156f3d026a47ba3ae3028fc1d515&language=en-US&query=${search}&page=${page}
        `;
    }
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    this.setState({ movies: data.results });
  };

  render() {
    const { movies } = this.state;
    return (
      <div className="home-main-contaner">
        {movies.map((each) => {
          return <MovieCard data={each} />;
        })}
      </div>
    );
  }
}

export default Home;
