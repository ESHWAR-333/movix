import { Link } from "react-router-dom";
import "./index.css";

const MovieCard = (props) => {
  const { data } = props;
  const { poster_path, title, vote_average, id } = data;
  const url = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <Link to={`/moviedetails/${id}`} className="link-item">
      <div className="moviecard-container">
        <img src={url} alt={title} className="moviecard-image" />
        <h1 className="moviecard-title">{title}</h1>
        <p className="moviecard-rating">Rating:{vote_average}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
