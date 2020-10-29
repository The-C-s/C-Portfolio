import { createSlice } from '@reduxjs/toolkit';

/**
 * Redux slice for state.app, responsible for 'loading' flags and error tracking.
 */
const app = createSlice({
  name: 'app',
  initialState: {
    errors: {},
    loading: {}
  },
  reduers: {},
  extraReducers: {
    'user/login/pending': state => { return startLoading(state, 'login') },
    'user/login/fulfilled': state => { stopLoading(state, 'login') },
    'user/login/rejected': (state, action) => { setError(state, 'login', action.payload) },

    'user/authenticate/pending': state => { return startLoading(state, 'login') },
    'user/authenticate/fulfilled': state => { stopLoading(state, 'login') },
    'user/authenticate/rejected': (state, action) => { setError(state, 'login', action.payload) },

    'user/update/pending': state => { return startLoading(state, 'update') },
    'user/update/fulfilled': state => { stopLoading(state, 'update') },
    'user/update/rejected': (state, action) => { setError(state, 'update', action.payload) },

    'user/register/pending': state => { return startLoading(state, 'register') },
    'user/register/fulfilled': state => { stopLoading(state, 'register') },
    'user/register/rejected': (state, action) => { setError(state, 'register', action.payload) },

    'content/getContent/pending': state => { return startLoading(state, 'getContent') },
    'content/getContent/fulfilled': state => { stopLoading(state, 'getContent') },
    'content/getContent/rejected': (state, action) => { setError(state, 'getContent', action.payload) },

    'content/createContent/pending': state => { return startLoading(state, 'createContent')},
    'content/createContent/fulfilled': state => { stopLoading(state, 'createContent') },
    'content/createContent/rejected': (state, action) => { setError(state, 'createContent', action.payload) },

    'content/editContent/pending': state => { return startLoading(state, 'editContent') },
    'content/editContent/fulfilled': state => { stopLoading(state, 'editContent') },
    'content/editContent/rejected': (state, action) => { setError(state, 'editContent', action.payload) },

    'content/deleteContent/pending': state => { return startLoading(state, 'deleteContent') },
    'content/deleteContent/fulfilled': state => { stopLoading(state, 'deleteContent') },
    'content/deleteContent/rejected': (state, action) => { setError(state, 'deleteContent', action.payload) },

    'share/getSharepage/pending': state => { return startLoading(state, 'getSharepage') },
    'share/getSharepage/fulfilled': state => { stopLoading(state, 'getSharepage') },
    'share/getSharepage/rejected': (state, action) => { setError(state, 'getSharepage', action.payload) }
  }
});

/**
 * Sets state.app.loading.action to true.
 * @param {*} state 
 * @param {*} action - The action name without the feature name, i.e. 'login' for 'user/login'.
 * @return The modified state.
 */
const startLoading = (state, action) => {

  removeError(state, action);

  return {
    ...state,
    loading: {
      ...state.loading,
      [action]: true
    }
  }
};

/**
 * Removes state.app.loading.action from the state.
 * @param {*} state 
 * @param {*} action - The action name without the feature name, i.e. 'login' for 'user/login'.
 */
const stopLoading = (state, action) => delete state.loading[action];

/**
 * Sets state.app.errors.action to the error string and outputs the error to the console.
 * @param {*} state 
 * @param {*} action - The action name without the feature name, i.e. 'login' for 'user/login'.
 * @param {String} error - An associated error code or message.
 * @return The modified state.
 */
const setError = (state, action, error) => {

  console.error(`${action}: ${error}`);

  return {
    ...state,
    errors: {
      ...state.errors,
      [action]: error
    }
  }
};

/**
 * Removes state.app.errors.action from the state.
 * @param {*} state 
 * @param {*} action - The action name without the feature name, i.e. 'login' for 'user/login'.
 */
const removeError = (state, action) => delete state.errors[action];

export default app.reducer;
