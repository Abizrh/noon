import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Discover } from "../components/Discover/Discover";
import { MovieRow } from "../components/MovieRow/MovieRow";
import { fetchDiscover, fetchMovie } from "../store/actions/action-movie";
// const base_url = "https://image.tmdb.org/t/p/original";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const movies = useSelector((state) => state.movie);
  // const discover = useSelector((state) => console.log(state, '======'))
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovie())
      .finally(() => setLoading(false))
      .catch((err) => setError(err));
  }, []);

  useEffect(() => {
    dispatch(fetchDiscover())
     .catch(err => console.log(err))
  }, [])

  // let discover = (movies.discover?.results[Math.floor(Math.random() * movies.discover?.results?.length - 1)], "<=======");
  // console.log(movies?.discover?.results[Math.floor(Math.random() * movies.discover?.results.length - 1)])
  const discover = {
    adult: false,
    backdrop_path: "/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg",
    genre_ids: (3) [14, 35, 10751],
    id: 642885,
    original_language: "en",
    original_title: "Hocus Pocus 2",
    overview: "It’s been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it is up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow’s Eve.",
    popularity: 3574.158,
    poster_path: "/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
    release_date: "2022-09-27",
    title: "Hocus Pocus 2",
    video: false,
    vote_average: 7.9,
    vote_count: 433
  }

  return (
    <>
      <div className="home">
        <div className="heading top__heading">
        <h3>Discovers</h3>{" "}
        </div>
        <div className="home__boxx">
          <Discover discover={discover} type='movie' />
        </div>

        <div className="heading">Trending Movies</div>
        <div className="home__box">
          {loading && <h1>Loading.....</h1>}
          {movies?.movies?.results?.map((el) => {
            return (
              <MovieRow
                id={el?.id}
                img={el?.poster_path}
                title={el.original_title || el.original_name || el.title}
                release_date={el.release_date || el.first_air_date}
                rate={el.vote_average}
                type="movie"
              />
            );
          })}
        </div>

        <div className="heading">Tvs Show</div>
        <div className="home__box">this is Tvs show</div>

        <div className="heading">Top Rated</div>
        <div className="home__box">this is Top Rated</div>
      </div>
    </>
  );
};
