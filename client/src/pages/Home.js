import React, { useCallback, useEffect, useRef, useState, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Discover } from "../components/Discover/Discover";
import { LazyLoad, Spinner } from "../components/LazyLoad/Spinner";
import { MovieRow } from "../components/MovieRow/MovieRow";
import { useInfiniteScroll } from "../customHook/useInfiniteScroll";
import {
  fetchAllMovies,
  fetchMovie,
  fetchTopRate,
  fetchTVShow,
} from "../store/actions/action-movie";
// const base_url = "https://image.tmdb.org/t/p/original";

export const MoviesContext = createContext()

export const Home = () => {
  const discover = {
    adult: false,
    backdrop_path: "/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg",
    genre_ids: (3)[(14, 35, 10751)],
    id: 642885,
    original_language: "en",
    original_title: "Hocus Pocus 2",
    overview:
      "It’s been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it is up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow’s Eve.",
    popularity: 3574.158,
    poster_path: "/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
    release_date: "2022-09-27",
    title: "Hocus Pocus 2",
    video: false,
    vote_average: 7.9,
    vote_count: 433,
  };
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [genres, setGenres] = useState("All");
  const movies = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mov, loadMore, load, err } = useInfiniteScroll(pages);

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

  const observer = useRef();
  const lastMovies = useCallback(
    (node) => {
      if (load) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && loadMore) {
          setPages((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [load, loadMore]
  );

  // console.log(movies.all)

  return (
    <MoviesContext.Provider>
      <div className="home">
        <div className="heading top__heading">
          <h3>Discovers</h3>{" "}
        </div>
        <div className="home__boxx">
          <Discover discover={discover} type="movie" />
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
          {/* <div style={{"backgroundColor": "black", "width": "200px", "height": "300px"}}></div> */}
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

        {/* <div className="searchh">
          <div className="heading">All</div>
          <div className="home__box">
            {!load &&
              !err &&
              mov?.map((el, idx) => {
                if (mov.length === idx + 1) {
                  return (
                    <div key={idx} ref={lastMovies}>
                      {el}
                    </div>
                  );
                } else {
                  return <div key={idx}>{el}</div>;
                }
              })}
            {load && <h1>Loading....</h1>}
            {err && <h1>something went wrong!</h1>}
          </div>
        </div> */}
      </div>
    </MoviesContext.Provider>
  );
};
