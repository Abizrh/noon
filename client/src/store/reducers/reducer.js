import { combineReducers } from 'redux'
import movieReducer from './movie-reducer'
import watchListReducers from './watchlist-reducer'

const rootReducer = combineReducers({
    movie: movieReducer,
    watchList: watchListReducers
})

export default rootReducer