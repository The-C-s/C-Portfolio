import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  authenticateCredentials,
  authenticateToken,
  updateUser,
  registerUser,
  token
} from '../../common/api';

export const login = createAsyncThunk(
  'user/login',
  authenticateCredentials
);

export const authenticate = createAsyncThunk(
  'user/authenticate',
  authenticateToken
);

export const editUser = createAsyncThunk(
  'user/update',
  updateUser
);

export const register = createAsyncThunk(
  'user/register',
  registerUser
);

const user = createSlice({
  name: 'user',
  initialState: { isAuthenticated: token.get() !== null },
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload.data,
        token: token.get(),
        isAuthenticated: true
      }
    },
    logout: () => {
      token.delete();
      return { isAuthenticated: false }
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {

      // Persist JWT to local storage
      token.set(action.payload.data.token);

      return {
        ...state,
        ...action.payload.data,
        isAuthenticated: true
      }
    },
    // [register.fulfilled]: (state, action) => {

    //   // Persist JWT to local storage
    //   localStorage.setItem('token', action.payload.data.token);

    //   return {
    //     ...state,
    //     ...action.payload.data,
    //     isAuthenticated: true
    //   }
    // },
    [authenticate.fulfilled]: (state, action) => {
      return {
        ...state,
        ...action.payload.data,
        isAuthenticated: true
      }
    },
    [authenticate.rejected]: () => {
      token.delete();
      return { isAuthenticated: false } 
    }
  }
});

// Explicitly export the non-async reducers
export const { logout, setUser } = user.actions;

export default user.reducer;
