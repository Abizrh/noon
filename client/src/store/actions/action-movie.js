import {
  allMoviePayload,
  moviePayload,
  discoverPayload,
  tvPayload,
  topRatedPayload,
  searchPayload,
  genrePayload,
  detailPayload,
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

const fetchFilter = (genre) => (dispatch) => {
  return fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}`
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
    `${API_URL}/search/movie?query=${query}&api_key=${API_KEY}&page=1`
  )
    .then((res) => {
      if (!res.ok) throw new Error("HTTP Error Status: " + res.status);
      return res.json();
    })
    .then((res) => dispatch(searchPayload(res)));
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

const fetchAllMovies = () => (dispatch) => {
  return fetch("https://imdb-api.com/API/MostPopularMovies/k_40r463mr")
    .then((res) => {
      if (!res.ok) throw new Error("HTTP Error Status: " + res.status);
      return res.json();
    })
    .then((res) => dispatch(allMoviePayload(res)));
};

export {
  fetchMovie,
  fetchFilter,
  fetchTVShow,
  fetchTopRate,
  fetchSearch,
  fetchGenre,
  fetchDetail,
  fetchAllMovies,
};
