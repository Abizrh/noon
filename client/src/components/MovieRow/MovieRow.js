import React, { useState } from "react";
import "./MovieRow.css";
import { Link } from "react-router-dom";
import { Star, FavoriteBorder, Favorite } from "@mui/icons-material";

export const MovieRow = ({
  id,
  img,
  title,
  type,
  release_date,
  rate,
  grid,
}) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [icon, setIcon] = useState(<FavoriteBorder />);
  const year = new Date(release_date);

  const trunc = (str, num) => str?.length > num ? str.substr(0, num - 1) + '...' : str;

  const favHandler = () => {
    setIcon(<Favorite />);
  };

  return (
    <>
      <div className={grid ? "moviesRow gridMovies" : "moviesRow"} key={id}>
        <Link to={`/${type}${id}`}>
          <img src={`${base_url}${img}`} />
        </Link>
        <div className="fav" onClick={() => favHandler()}>
          {icon}
        </div>

        <div className={grid ? "movies__info inn" : "movies_info"}>
          <div className="movie__name">
            <h3>{trunc(title, 18)}</h3>
          </div>
          <div className="movie__other">
            <p>
              {year?.getFullYear()}
              <span>
                {rate}
                <Star />
              </span>
            </p>
            <p>{type}</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
