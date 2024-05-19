import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import MovieDetails from "./components/MovieDetails";

import { Component } from "react";
import MovieContext from "./context/MovieContext.js";

class App extends Component {
  state = { input: "" };

  navInput = (e) => {
    this.setState({ input: e });
  };

  render() {
    const { input } = this.state;
    return (
      <Router>
        <MovieContext.Provider
          value={{
            input,
            navInput: this.navInput,
          }}
        >
          <>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/popular" element={<Popular />} />
              <Route exact path="/toprated" element={<TopRated />} />
              <Route exact path="/upcoming" element={<Upcoming />} />
              <Route
                exact
                path="/moviedetails/:id"
                element={<MovieDetails />}
              />
            </Routes>
          </>
        </MovieContext.Provider>
      </Router>
    );
  }
}

export default App;
