import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import comicReducer from './comics';
import favReducer from './favorites';

const store = createStore(
    combineReducers({comics: comicReducer, favorites: favReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

// store.subscribe(() => console.log(store.getState()));

export default store;