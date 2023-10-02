import { combineReducers, createStore } from "redux";
import { movieReducer } from "./reducers/Project-movies/reducer";

const rootReducer = combineReducers({
    movieReducer,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENTION__ &&
    window.__REDUX_DEVTOOLS_EXTENTION__()
    
)