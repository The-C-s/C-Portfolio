import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
    getSharepage as apiGetSharepage,
    editSharepage as apiEditSharepage,
    addSharepage as apiAddSharepage,
    deleteSharepage as apiDeleteSharepage
} from '../../common/api';

//API calls
export const getSharepage = createAsyncThunk(
    'share/getSharepage',
    apiGetSharepage
);

export const editSharepage = createAsyncThunk(
    'share/editSharepage',
    apiEditSharepage
);

export const addSharepage = createAsyncThunk(
    'share/addSharepage',
    apiAddSharepage
);

export const deleteSharepage = createAsyncThunk(
    'share/deleteSharepage',
    apiDeleteSharepage
);

//Stores profile in state.profile
const share = createSlice({
    name: 'share',
    initialState: { content: [], education: [], experience: [] },
    reducers: {},
    extraReducers: {
        //Resets state on logout (think its necessary)
        'user/logout': () => { return {}},
        //Returns share data
        [getSharepage.fulfilled]: (state, action) => {
            return {
                ...state,
                ...action.payload.data
            }
        }
    }
  });

export default share.reducer;
