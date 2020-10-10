import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
    createProfile as apiCreateProfile,
    getProfile as apiGetProfile,
    editProfile as apiEditProfile,
    deleteProfile as apiDeleteProfile
} from '../../common/api';

//API calls 
export const createProfile = createAsyncThunk(
    'profile/createProfile',
    apiCreateProfile
);

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    apiGetProfile
);

export const editProfile = createAsyncThunk(
    'profile/updateProfile', 
    apiEditProfile
); 

export const deleteProfile = createAsyncThunk(
    'profile/deleteProfile', 
    apiDeleteProfile
);

//Stores profile in state.profile 
const profile = createSlice({
    name: 'profile',
    //Added default arrays, as the state takes 2 seconds to actually get the data
    initialState: {education:[], experience: [], projects: []},
    reducers: {},
    extraReducers: {
        //Resets state on logout (think its necessary)
        'user/logout': () => { return {}},
        //Returns profile data 
        [getProfile.fulfilled]: (_, action) => {  return {...action.payload.data}}
    }
  });

export default profile.reducer;
