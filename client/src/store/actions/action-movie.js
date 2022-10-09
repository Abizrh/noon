import {
  FETCH_MOVIES,
  MOVIE_DISCOVER,
  MOVIE_TV,
  MOVIE_TOP_RATED,
  SEARCH_MOVIE,
  FETCH_GENRES,
  FETCH_DETAIL
} from "./type";
const API_KEY = "e41e10a70ecb26587607640ae2112868";
const BASE_URL = "https://api.themoviedb.org/3";

const moviePayload = (payload) => {
  return {
    type: FETCH_MOVIES,
    payload,
  };
};

const discoverPayload = (payload) => {
  return {
    type: MOVIE_DISCOVER,
    payload,
  };
};

const tvPayload = (payload) => {
  return {
    type: MOVIE_TV,
    payload,
  };
};

const topRatedPayload = (payload) => {
  return {
    type: MOVIE_TOP_RATED,
    payload,
  };
};

const searchPayload = (payload) => {
  return {
    type: SEARCH_MOVIE,
    payload,
  };
};

const genrePayload = (payload) => {
  return {
    type: FETCH_GENRES,
    payload,
  };
};

const detailPayload = (payload) => {
  return {
    type: FETCH_DETAIL,
    payload,
  };
};

// https://imdb-api.com/API/MostPopularMovies/k_40r463mr
// https://api.themoviedb.org/3/genre/movie/list?api_key=e41e10a70ecb26587607640ae2112868&language=en-US
// https://api.themoviedb.org/3/search/keyword?query=action&api_key=e41e10a70ecb26587607640ae2112868&page=1
// /${type}/${id}?language=en-US&api_key=${API_KEY}
const fetchMovie = () => (dispatch) => {
  return fetch(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Http error Status: ${res.status}`);
      return res.json();
    })
    .then((res) => {
      dispatch(moviePayload(res));
    });
};

const fetchDiscover = () => (dispatch) => {
  return fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_network=123&language=en-US`
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
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_network=123&language=en-US`
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
  return fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`)
    .then((res) => {
      if (!res.ok) throw new Error("HTTP Error Status: " + res.status);
      return res.json();
    })
    .then((res) => dispatch(topRatedPayload(res)));
};

const fetchSearch = (query) => (dispatch) => {
  return fetch(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}&page=1`
  )
    .then((res) => {
      if (!res.ok) throw new Error("HTTP Error Status: " + res.status);
      return res.json();
    })
    .then((res) => dispatch(searchPayload(res)));
};

const fetchGenre = () => (dispatch) => {
  return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then((res) => {
      if (!res.ok) throw new Error("HTTP Error Status: " + res.status);
      return res.json();
    })
    .then((res) => dispatch(genrePayload(res)));
};

const fetchDetail = (info) => (dispatch) => {
  const { type, id } = info;

  return fetch(`${BASE_URL}/${type}/${id}?language=en-US&api_key=${API_KEY}`)
    .then((res) => {
      if (!res.ok) throw new Error("HTTP Error Status: " + res.status);
      return res.json();
    })
    .then((res) => dispatch(detailPayload(res)));
};

export {
  fetchMovie,
  fetchDiscover,
  fetchTVShow,
  fetchTopRate,
  fetchSearch,
  fetchGenre,
  fetchDetail
};
