import React, { useEffect, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllMovies from "../components/AllMovies/AllMovies";
import { Discover } from "../components/Discover/Discover";
import { Spinner } from "../components/LazyLoad/Spinner";
import { Leftbar } from "../components/Leftbar/GenreTag/GenreTag";
import { MovieRow } from "../components/MovieRow/MovieRow";
import { DISCOVER } from "../constants/constant";
import {
  fetchAllMovies,
  fetchMovie,
  fetchTopRate,
  fetchTVShow,
} from "../store/actions/action-movie";

export const MoviesContext = createContext();

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const movies = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie())
      .finally(() => setLoading(false))
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    dispatch(fetchTVShow()).catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    dispatch(fetchTopRate());
  }, []);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, []);

  return (
    <MoviesContext.Provider>
      <div className="home">
        <div className="heading top__heading">
          <h3>Discovers</h3>{" "}
        </div>
        <div className="home__boxx">
          <Discover discover={DISCOVER} type="movie" />
        </div>

        <div className="heading">Trending Movies</div>

        <div className="home__box">
          {loading && <Spinner />}
          {error && <h1>something went wrong!</h1>}

          {!loading &&
            !error &&
            movies?.movies?.results?.map((el) => {
              return (
                <MovieRow
                  key={el.id}
                  id={el?.id}
                  img={el?.poster_path}
                  title={el.original_title || el.original_name || el.title}
                  release_date={el.release_date || el.first_air_date}
                  rate={el.vote_average}
                  genre={el.genre_ids}
                  type="movie"
                />
              );
            })}
        </div>

        <div className="heading">Tvs Show</div>
        <div className="home__box">
          {loading && <h1>Loading....</h1>}
          {error && <h1>something went wrong!</h1>}

          {!loading &&
            !error &&
            movies?.tvShow?.results?.map((el) => {
              return (
                <MovieRow
                  key={el.id}
                  id={el?.id}
                  img={el?.poster_path}
                  title={el.original_title || el.original_name || el.name}
                  release_date={el.release_date || el.first_air_date}
                  rate={el.vote_average}
                  genre={el.genre_ids}
                  type="tv"
                />
              );
            })}
        </div>

        <div className="heading">Top Rated</div>
        <div className="home__box">
          {loading && <h1>Loading....</h1>}
          {error && <h1>something went wrong!</h1>}
          {!loading &&
            !error &&
            movies?.topRated?.results?.map((el) => {
              return (
                <MovieRow
                  key={el.id}
                  id={el?.id}
                  img={el?.poster_path}
                  title={el.original_title || el.original_name || el.title}
                  release_date={el.release_date || el.first_air_date}
                  rate={el.vote_average}
                  genre={el.genre_ids}
                  type="movie"
                />
              );
            })}
        </div>

        {/* Use the different API */}
        <div className="heading">All</div>
        <main className="all_movies">
          <div className="centered">
            <section className="cards">
              {movies?.movies?.results?.map((el) => {
                return (
                  <AllMovies
                    key={el.id}
                    id={el?.id}
                    img={el?.poster_path}
                    title={el.original_title || el.original_name || el.title}
                    release_date={el.release_date || el.first_air_date}
                    rate={el.vote_average}
                    genre={el.genre_ids}
                    type="movie"
                  />
                );
              })}
            </section>
          </div>
        </main>
      </div>
      <Leftbar />
    </MoviesContext.Provider>
  );
};
