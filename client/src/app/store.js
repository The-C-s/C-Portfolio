/*
 * store.js
 * Boilerplate code. Redux store that controls application state.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

//import auth from '../common/api';
import rootReducer from './reducers';

const initialState = {};

// Middleware to force authorisation header on every action
const auth = () => next => action => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  return next(action);
};

// Any middleware included goes here
const middleware = [thunk, auth];
const middlewareEnhancer = applyMiddleware(...middleware);

// Add enhancers (if any)
const enhancers = [middlewareEnhancer];

// Give access to Redux Devtools
const composedEnhancers = composeWithDevTools(...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);
