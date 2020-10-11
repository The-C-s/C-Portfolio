import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
    createProfile as apiCreateProfile,
    getProfile as apiGetProfile,
    editProfile as apiEditProfile,
    deleteProfile as apiDeleteProfile,
    addLogo as apiAddLogo, 
    addResume as apiAddResume
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

export const addLogo = createAsyncThunk(
    'profile/addLogo', 
    apiAddLogo
);

export const addResume = createAsyncThunk(
    'profile/addResume', 
    apiAddResume
);

//Stores profile in state.profile 
const profile = createSlice({
    name: 'profile',
    //Added default arrays, as the state takes 2 seconds to actually get the data
    initialState: {isLoaded: false, education:[], experience: [], projects: []},
    reducers: {},
    extraReducers: {
        //Resets state on logout (think its necessary)
        'user/logout': () => { return {}},
        //Returns profile data 
        [getProfile.fulfilled]: (state, action) => {  
            return {
                ...state,
                ...action.payload.data, 
                isLoaded: true 
            }
        }
    }
  });

export default profile.reducer;
