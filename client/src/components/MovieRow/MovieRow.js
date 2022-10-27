import React, { useState, useEffect } from "react";
import "./MovieRow.css";
import { Link } from "react-router-dom";
import { Star, FavoriteBorder, Favorite } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenre } from "../../store/actions/action-movie";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

export const MovieRow = ({
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
  const base_url = "https://image.tmdb.org/t/p/original";
  const [icon, setIcon] = useState(<FavoriteBorder />);
  const [genres, setGenres] = useState('All')
  const [showMovie, setShowMovie] = useState([])
  const year = new Date(release_date);
  const movies = useSelector((state) => state.movie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenre())
  }, [])


  const movieGenre = movies.genres?.genres

  const trunc = (str, num) =>
    str?.length > num ? str.substr(0, num - 1) + "..." : str;

  const favHandler = () => {
    setIcon(<Favorite />);
  };

  const fixGenre = movieGenre?.filter((el) => genre.includes(el.id))

  const g = []
  fixGenre?.forEach(el => {
    g.push(el.name)
  })


  return (
    <>
        
      <div className={grid ? "moviesRow gridMovies" : "moviesRow"} key={id}>
        <Link to={`/${type}/${id}`}>
          {/* <img src={image ? image : `${base_url}${img}`} alt={title} /> */}
          <LazyLoadImage 
           src={image ? image : `${base_url}${img}`}
           alt={title}
           effect="blur"
           />
        </Link>
        <div className="fav" onClick={() => favHandler()}>
          {icon}
        </div>

        <div className={grid ? "movies__info inn" : "movies_info"}>
          <div className="movie__name">
            <h3>{trunc(title, 18)}</h3>
                <h5 style={{ color: "#111111" }}>
                  {trunc(g.join(', '), 18)}
                </h5>
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
    </>
  );
};
