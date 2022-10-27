import { useEffect, useState } from "react";
import { MovieRow } from "../components/MovieRow/MovieRow";
import axios from "axios";

export const useInfiniteScroll = (page) => {
  const [load, setLoading] = useState(true);
  const [err, setError] = useState(false);
  const [mov, setMovies] = useState([]);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setError(false);
      
      let cancel; 
      try {
        const { data } = await axios({
          method: "get",
          url: "https://imdb-api.com/API/MostPopularMovies/k_40r463mr",
          params: { page: page },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });

        // console.log(data, "<=========== Custom Hook");

        setMovies((prevMovies) => {
          return [
            ...new Set([
              ...prevMovies,
              ...data.items.map((el) => {
                return (
                  <MovieRow
                    grid
                    key={el.id}
                    id={el?.id}
                    image={el.image}
                    title={el.title || el.fullTitle}
                    release_date={el.year}
                    rate={el?.vote_average}
                    genre={el?.genre_ids || "Action, Horror"}
                    type="movie"
                  />
                );
              }),
            ]),
          ];
        });

        setLoadMore(data.items.length > 0);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(true);
      }

      return () => cancel();
    };
    fetch();
  }, [page]);

  console.log(mov, "<===== MOVIE");

  return { load, err, mov, loadMore };
};
