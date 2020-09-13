import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../common/api';

export const getContent = createAsyncThunk(
  'content/getContent',
  api.getAllContent
);

export const createContent = createAsyncThunk(
  'content/createContent',
  api.createContent
);

export const deleteContent = createAsyncThunk(
  'content/deleteContent',
  api.deleteContent
);

const content = createSlice({
  name: 'content',
  initialState: [], // A list! Not an object
  reducers: {},
  extraReducers: {
    'user/logout': () => { return [] }, // Make content reset itself when user logs out
    [getContent.fulfilled]: (_, action) => { return [...action.payload.data] }
  }
});

export default content.reducer;
