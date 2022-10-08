import { FETCH_MOVIES, MOVIE_DISCOVER } from "../actions/type"

const initState = {
    movies: [],
    discover: []
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
        default:
            return state
    }
}

export default movieReducer