import React, { useState, useEffect } from "react";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../../store/actions/action-movie";
import SearchIcon from "@mui/icons-material/Search";
import { MovieRow } from "../MovieRow/MovieRow";
import { fetchGenre } from "../../store/actions/action-movie";
import { POPCORN } from "../../constants/constant";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(fetchGenre());
  }, []);

  const movieGenre = movies.genres?.genres;

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(query))
    .finally(() => setLoading(false))
    .catch(() => setError(true));
  };


  return (
    <>
      <div className="searchh">
        <div className="search__top">
          <div className="heading"> Results</div>
          <form className="search" onSubmit={(e) => handleSearch(e)}>
          <SearchIcon />
          <input
            type="text"
            placeholder="search..."
            value={query}
            maxLength="20"
            onChange={(e) => setQuery(e.target.value)}
          />
          </form>
        </div>
        <div className="home__box">
          {/* {loading && <h1>Loading...</h1>}
        {error && <h1>Something Went Wrong !</h1>} */}
          {movies?.search?.results?.length <= 0 && (
            <h2>
              Sorry we did'nt found what you looking for, make sure your search
              was right.
            </h2>
          )}
          {!loading &&
            !error &&
            movies?.search?.results?.map((el) => {
              return (
                <MovieRow
                  grid
                  key={el.id}
                  id={el?.id}
                  img={el?.poster_path || el?.backdrop_path}
                  popcorn={POPCORN}
                  title={el.original_title || el.original_name || el.title}
                  release_date={el.release_date || el.first_air_date}
                  rate={el.vote_average}
                  genre={el.genre_ids}
                  movieGenre={movieGenre}
                  type="movie"
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
