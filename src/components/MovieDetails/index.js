import React, { useEffect, useState } from "react";

import "./index.css";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const [gener, setGener] = useState([]);
  const [cast, setCast] = useState([]);
  // const [curr, setCurr] = useState(1);
  // const [per, setPer] = useState(6);
  const params = useParams();

  useEffect(() => {
    const fetching = async () => {
      const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=a7c8156f3d026a47ba3ae3028fc1d515&language=en-US`;
      // eslint-disable-next-line
      const res = await fetch(url);
      const data = await res.json();
      const movedetails = {
        backdrop_path: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`,
        poster_path: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        genres: data.genres,
        original_title: data.original_title,
        overview: data.overview,
        rating: data.vote_average,
        runtime: data.runtime,
        date: data.release_date,
      };

      const updatedgener = [...data.genres];
      setGener(updatedgener);
      setDetails(movedetails);

      const url2 = `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=a7c8156f3d026a47ba3ae3028fc1d515&language=en-US`;

      const res2 = await fetch(url2);
      const data2 = await res2.json();
      let updatedData = [...data2.cast];
      setCast(updatedData);
    };
    fetching();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const curr = 1;
  const per = 6;
  const indexlast = curr * per;
  const indexFirst = indexlast - per;
  const currlist = cast.slice(indexFirst, indexlast);

  return (
    <div className="movie-deatils-main-container">
      <div>
        <div className="main-poster">
          <div className="movie-details-left-container">
            <div className="movie-details-top-container">
              <img src={details.poster_path} alt="" className="poster-image" />
              <div className="details-container">
                <h1>{details.original_title}</h1>
                <h1>Rating: {details.rating}</h1>
                <div className="runtime-container">
                  <div className="time-container">{details.runtime} min</div>
                  <ul className="gener-class">
                    {gener.map((each) => (
                      <li className="each-gener" key={each.id}>
                        {each.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <p>Release Date: {details.date}</p>
              </div>
            </div>
            <div>
              <h1>Overview</h1>
              <p>{details.overview}</p>
            </div>
          </div>
          <div className="movie-details-right-container">
            <img
              src={details.backdrop_path}
              alt=""
              className="backdrop_image"
            />
          </div>
        </div>
      </div>

      <div className="cast-main-container">
        <h1 className="main-heading">Cast</h1>
        <ul className="cast-container">
          {currlist.map((each) => (
            <li key={each.key} className="each-cast">
              <img
                src={`https://image.tmdb.org/t/p/w500/${each.profile_path}`}
                alt=""
                className="profile-image"
              />
              <p className="name">{each.name}</p>
              <p className="character">Character: {each.character}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
