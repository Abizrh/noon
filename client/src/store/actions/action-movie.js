import { FETCH_MOVIES, MOVIE_DISCOVER } from "./type";

const moviePayload = (payload) => {
    return {
        type: FETCH_MOVIES,
        payload
    }
}

const discoverPayload = (payload) => {
    return {
        type: MOVIE_DISCOVER,
        payload
    }
}

// https://imdb-api.com/API/MostPopularMovies/k_40r463mr

const fetchMovie = () => (dispatch) => {

    return fetch('https://api.themoviedb.org/3/trending/all/week?api_key=e41e10a70ecb26587607640ae2112868&language=en-US')
     .then(res => {
        if(!res.ok) throw new Error(`Http error Status: ${res.status}`)
        return res.json()
     })
     .then((res) => {
        dispatch(moviePayload(res))
     })
}

const fetchDiscover = () => (dispatch) => {

    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=e41e10a70ecb26587607640ae2112868&with_network=123&language=en-US')
     .then((res) => {
        if(!res.ok) throw new Error('HTTP Error Status: ' + res.status)
        return res.json()
     })
     .then((res) => {
        dispatch(discoverPayload(res))
     })
}

export {
    fetchMovie,
    fetchDiscover
}