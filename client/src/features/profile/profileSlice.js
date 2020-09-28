import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../common/api';

export const createProfile = createAsyncThunk(
    'profile/createProfile',
    api.createProfile
);

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    api.getProfile
);

export const editProfile = createAsyncThunk(
    'profile/updateProfile', 
    api.editProfile
); 

export const deleteProfile = createAsyncThunk(
    'profile/deleteProfile', 
    api.deleteProfile
);

const profile = createSlice({
    name: 'profile',
    initialState: {},
    reducers: {},
    extraReducers: {
        'user/logout': () => { return {}},
        [getProfile.fulfilled]: (state, action) => {      
            return {
              ...action.payload.data
            }
        }
    }
  });

export default profile.reducer;
