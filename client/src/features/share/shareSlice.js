import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
    getSharepage as apiGetSharepage
} from '../../common/api';

//API calls
export const getSharepage = createAsyncThunk(
    'share/getSharepage',
    apiGetSharepage
);
//Stores profile in state.profile
const share = createSlice({
    name: 'share',
    initialState: [],
    reducers: {},
    extraReducers: {
        //Resets state on logout (think its necessary)
        'user/logout': () => { return {}},
        //Returns profile data
        [getSharepage.fulfilled]: (_, action) => { console.log("share data"); console.log(action.payload.data); return [...action.payload.data] }
    }
  });

export default share.reducer;
