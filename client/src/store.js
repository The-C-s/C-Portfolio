/*
 * store.js
 * Boilerplate code. Redux store that controls application state.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'; // reducers/index.js

const initialState = {};

// Any middleware included goes here
const middleware = [thunk];
const middlewareEnhancer = applyMiddleware(...middleware);

// Add enhancers (if any)
const enhancers = [middlewareEnhancer];

// Give access to Redux Devtools
const composedEnhancers = composeWithDevTools(...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);
