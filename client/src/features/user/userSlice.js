import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../common/api';

export const login = createAsyncThunk(
  'user/authenticate',
  user => API.authenticateUser(user)
);

const user = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false
  },
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem('token');

      return { isAuthenticated: false }
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {

      localStorage.setItem('token', action.payload.data.token);

      return {
        ...state,
        ...action.payload.data,
        isAuthenticated: true,
        authType: 'Bearer'
      }
    }
  }
});

export const { logout } = user.actions;

export default user.reducer;
