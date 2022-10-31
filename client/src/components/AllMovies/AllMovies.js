import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AllMovies.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BASE_URL } from "../../constants/constant";
import { Star, FavoriteBorder, Favorite } from "@mui/icons-material";
import { fetchGenre } from "../../store/actions/action-movie";
import { useSelector, useDispatch } from "react-redux";
import { trunc } from "../../helpers/helpers";

const AllMovies = ({
  id,
  img,
  title,
  type,
  release_date,
  image,
  rate,
  grid,
  genre,
}) => {
  const [icon, setIcon] = useState(<FavoriteBorder />);
  const year = new Date(release_date);
  const movies = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenre());
  }, []);

  const movieGenre = movies.genres?.genres;

  const favHandler = () => {
    setIcon(<Favorite />);
  };

  const fixGenre = movieGenre?.filter((el) => genre.includes(el.id));

  const g = [];
  fixGenre?.forEach((el) => {
    g.push(el.name);
  });

  return (
    <>
      <article className="card">
        <Link to={`/${type}/${id}`}>
          <picture class="thumbnail">
            <LazyLoadImage
              src={image ? image : `${BASE_URL}${img}`}
              alt={title}
              effect="blur"
            />
          </picture>
          <div className="fav" onClick={() => favHandler()}>
            {icon}
          </div>
          <div className="movie__name">
            <h3>{trunc(title, 18)}</h3>
            <h5 style={{ color: "#111111" }}>{trunc(g.join(", "), 18)}</h5>
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
          <div class="card-content">{/* <h3>{trunc(title, 18)}</h3> */}</div>
        </Link>
      </article>
    </>
  );
};

export default AllMovies;
