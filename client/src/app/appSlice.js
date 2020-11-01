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
    'user/login/rejected': (state, action) => { return setError(state, 'login', action.error) },

    'user/authenticate/pending': state => { return startLoading(state, 'login') },
    'user/authenticate/fulfilled': state => { stopLoading(state, 'login') },
    'user/authenticate/rejected': (state, action) => { return setError(state, 'login', action.error) },

    'user/update/pending': state => { return startLoading(state, 'update') },
    'user/update/fulfilled': state => { stopLoading(state, 'update') },
    'user/update/rejected': (state, action) => { return setError(state, 'update', action.error) },

    'user/register/pending': state => { return startLoading(state, 'register') },
    'user/register/fulfilled': state => { stopLoading(state, 'register') },
    'user/register/rejected': (state, action) => { return setError(state, 'register', action.error) },

    'content/getContent/pending': state => { return startLoading(state, 'getContent') },
    'content/getContent/fulfilled': state => { stopLoading(state, 'getContent') },
    'content/getContent/rejected': (state, action) => { return setError(state, 'getContent', action.error) },

    'content/createContent/pending': state => { return startLoading(state, 'createContent')},
    'content/createContent/fulfilled': state => { stopLoading(state, 'createContent') },
    'content/createContent/rejected': (state, action) => { return setError(state, 'createContent', action.error) },

    'content/editContent/pending': state => { return startLoading(state, 'editContent') },
    'content/editContent/fulfilled': state => { stopLoading(state, 'editContent') },
    'content/editContent/rejected': (state, action) => { return setError(state, 'editContent', action.error) },

    'content/deleteContent/pending': state => { return startLoading(state, 'deleteContent') },
    'content/deleteContent/fulfilled': state => { stopLoading(state, 'deleteContent') },
    'content/deleteContent/rejected': (state, action) => { setError(state, 'deleteContent', action.payload) },

    'share/getSharepage/pending': state => { return startLoading(state, 'getSharepage') },
    'share/getSharepage/fulfilled': state => { stopLoading(state, 'getSharepage') },
    'share/getSharepage/rejected': (state, action) => { setError(state, 'getSharepage', action.payload) },

    'share/addSharepage/pending': state => { return startLoading(state, 'addSharepage') },
    'share/addSharepage/fulfilled': state => { stopLoading(state, 'addSharepage') },
    'share/addSharepage/rejected': (state, action) => { setError(state, 'addSharepage', action.payload) }
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

  console.error(`${action}: ${error.message}`);

  return {
    ...state,
    errors: {
      ...state.errors,
      [action]: error.message
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
