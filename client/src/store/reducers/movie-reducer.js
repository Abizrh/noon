import {
  FETCH_MOVIES,
  MOVIE_DISCOVER,
  MOVIE_TOP_RATED,
  MOVIE_TV,
  SEARCH_MOVIE,
  FETCH_GENRES,
  FETCH_DETAIL,
  FETCH_ALL_MOVIE,
} from "../actions/type";

const initState = {
  movies: [],
  pagination: [],
  tvShow: [],
  topRated: [],
  search: [],
  genres: [],
  detail: {},
  all: [],
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case MOVIE_DISCOVER:
      return {
        ...state,
        pagination: action.payload,
      };
    case MOVIE_TOP_RATED:
      return {
        ...state,
        topRated: action.payload,
      };
    case MOVIE_TV:
      return {
        ...state,
        tvShow: action.payload,
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        search: action.payload,
      };
    case FETCH_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case FETCH_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case FETCH_ALL_MOVIE:
      return {
        ...state,
        all: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
