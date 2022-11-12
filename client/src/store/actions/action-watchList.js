import { ADD_MOVIE_TO_WATCH_LIST, REMOVE_MOVIE_FROM_WATCH_LIST } from "./type"

const addMovieToWatchList = (movie) => (dispatch) => {
    dispatch({type: ADD_MOVIE_TO_WATCH_LIST, payload: movie})
}

const removeWatchList = (id) => dispatch => {
    dispatch({type: REMOVE_MOVIE_FROM_WATCH_LIST, payload: id})
}

export {
    addMovieToWatchList,
    removeWatchList
}