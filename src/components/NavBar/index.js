import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  const [inputs, setInput] = useState("");
  return (
    <div className="navbar-container">
      <Link to="/" className="link-class">
        <h1 className="navabar-heading">MovieDb</h1>
      </Link>

      <div className="navbar-right-container">
        <Link to="/popular" className="link-class">
          <p className="navbar-search-item">Popular</p>
        </Link>
        <Link to="/toprated" className="link-class">
          <p className="navbar-search-item">Top Rated</p>
        </Link>
        <Link to="/upcoming" className="link-class">
          <p className="navbar-search-item">Upcoming</p>
        </Link>
        <input
          className="navbar-search-input"
          type="text"
          placeholder="Movie Name"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={inputs}
        />
        <button className="navbar-search-button">Search</button>
      </div>
    </div>
  );
};
export default NavBar;
