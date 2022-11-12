import { useEffect } from "react";
import { ADD_MOVIE_TO_WATCH_LIST, REMOVE_MOVIE_FROM_WATCH_LIST } from "../actions/type";

const initState = {
    watchList: localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')) : [],
    watched: []
}





const watchListReducers = (state = initState, action) => {

    switch (action.type) {
        case ADD_MOVIE_TO_WATCH_LIST:
            return{
                ...state,
                watchList: [action.payload, ...state.watchList]
            }    
        case REMOVE_MOVIE_FROM_WATCH_LIST:
            return {
                ...state,
                watchList: state.watchList.filter((movie) => movie.id !== action.payload) 
            }
        default:
            return state;
    }

}

export default watchListReducers;