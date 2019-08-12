import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';

import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const initialState = {};



const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE() : compose
    )
);

export default store;