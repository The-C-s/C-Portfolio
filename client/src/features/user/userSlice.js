import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../common/api';

export const login = createAsyncThunk(
  'user/authenticate',
  api.authenticateUser
);

const user = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    authType: 'Bearer'
  },
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload.data,
        token: localStorage.getItem('token'),
        isAuthenticated: true
      }
    },
    logout: () => {

      localStorage.removeItem('token');
      api.setAuthHeader('');

      return { isAuthenticated: false }
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {

      // Clear any existing token
      localStorage.removeItem('token');

      // Persist JWT to local storage
      localStorage.setItem('token', action.payload.data.token);

      // Tell axios to send auth token with every future request
      api.setAuthHeader(action.payload.data.token);

      return {
        ...state,
        ...action.payload.data,
        isAuthenticated: true
      }
    }
  }
});

// Explicitly export the non-async reducers
export const { logout, setUser } = user.actions;

export default user.reducer;
