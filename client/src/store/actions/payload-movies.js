import {
    FETCH_MOVIES,
    MOVIE_DISCOVER,
    MOVIE_TV,
    MOVIE_TOP_RATED,
    SEARCH_MOVIE,
    FETCH_GENRES,
    FETCH_DETAIL,
    FETCH_ALL_MOVIE,
    FETCH_TRAILER
  } from "./type";

  const allMoviePayload = (payload) => {
    return {
      type: FETCH_ALL_MOVIE,
      payload
    }
  }
  
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

  const trailerPayload = (payload) => {
    return {
      type: FETCH_TRAILER,
      payload
    }
  }

export {
    allMoviePayload,
    moviePayload,
    discoverPayload,
    tvPayload,
    topRatedPayload,
    searchPayload,
    genrePayload,
    detailPayload,
    trailerPayload
}