import {
  moviePayload,
  discoverPayload,
  tvPayload,
  topRatedPayload,
  searchPayload,
  genrePayload,
  detailPayload,
  trailerPayload,
} from "./payload-movies";
import { API_KEY, API_URL } from "../../constants/constant";

const fetchMovie = () => (dispatch) => {
  return fetch(
    `${API_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Http error Status: ${res.status}`);
      return res.json();
    })
    .then((res) => {
      dispatch(moviePayload(res));
    });
};

const fetchMoviePagination = (page) => (dispatch) => {
  return fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY}&page=${page}`
  )
    .then((res) => {
      if (!res.ok) throw new Error("HTTP Error Status: " + res.status);
      return res.json();
    })
    .then((res) => {
      dispatch(discoverPayload(res));
    });
};

const fetchTVShow = () => (dispatch) => {
  return fetch(
    `${API_URL}/discover/tv?api_key=${API_KEY}&with_network=123&language=en-US`
  )
    .then((res) => {
      if (!res.ok) throw new Error("HTTP Error Status: " + res.status);
      return res.json();
    })
    .then((res) => {
      dispatch(tvPayload(res));
    });
};

const fetchTopRate = () => (dispatch) => {
  return fetch(`${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`)
    .then((res) => {
      if (!res.ok) throw new Error("HTTP Error Status: " + res.status);
      return res.json();
    })
    .then((res) => dispatch(topRatedPayload(res)));
};

const fetchSearch = (query) => (dispatch) => {
  return fetch(
    `${API_URL}/search/movie?query=${query ? query: 'batman' }&api_key=${API_KEY}&page=1`
  )
    .then((res) => {
      if (!res.ok) throw new Error("HTTP Error Status: " + res.status);
      return res.json();
    })
    .then((res) => {
      dispatch(searchPayload(res))
    });
};

const fetchGenre = () => (dispatch) => {
  return fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => {
      if (!res.ok) throw new Error("HTTP Error Status: " + res.status);
      return res.json();
    })
    .then((res) => dispatch(genrePayload(res)));
};

const fetchDetail = (info) => (dispatch) => {
  const { type, id } = info;

  return fetch(`${API_URL}/${type}/${id}?language=en-US&api_key=${API_KEY}`)
    .then((res) => {
      if (!res.ok) throw new Error("HTTP Error Status: " + res.status);
      return res.json();
    })
    .then((res) => dispatch(detailPayload(res)));
};

const fetchTrailer = (info) => (dispatch) => {
  const { type, id} = info

  return fetch(`${API_URL}/${type}/${id}/videos?api_key=${API_KEY}&append_to_response=videos`)
   .then((res) => {
    if(!res.ok) throw new Error("HTTP Error Status: " + res.status)
    return res.json()
   })
   .then((res) => dispatch(trailerPayload(res)))
}





export {
  fetchMovie,
  fetchMoviePagination,
  fetchTVShow,
  fetchTopRate,
  fetchSearch,
  fetchGenre,
  fetchDetail,
  fetchTrailer
};
