import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../common/api';

export const login = createAsyncThunk(
  'user/authenticate',
  api.authenticateUser
);

export const editUser = createAsyncThunk(
  'users/update',
  async () => {
    console.log("Reached userSlice");
    api.editUser();
  }
);

const user = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: (localStorage.getItem('token') !== null),
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

      return { isAuthenticated: false }
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {

      // Persist JWT to local storage
      localStorage.setItem('token', action.payload.data.token);

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
