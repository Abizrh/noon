import { FETCH_MOVIES, MOVIE_DISCOVER, MOVIE_TOP_RATED, MOVIE_TV, SEARCH_MOVIE, FETCH_GENRES, FETCH_DETAIL } from "../actions/type"

const initState = {
    movies: [],
    discover: [],
    tvShow : [],
    topRated: [],
    search: [],
    genres: [],
    detail: {}
}

const movieReducer = (state = initState, action) => {

    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies :     action.payload
            }
        case MOVIE_DISCOVER:
            return {
                ...state,
                discover: action.payload
            }
        case MOVIE_TOP_RATED: 
            return {
                ...state,
                topRated: action.payload
            }
        case MOVIE_TV: 
            return {
                ...state,
                tvShow: action.payload
            }
        case SEARCH_MOVIE:
            return {
                ...state,
                search: action.payload
            }
        case FETCH_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case FETCH_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state
    }
}

export default movieReducer