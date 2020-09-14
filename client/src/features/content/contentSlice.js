/*
 * The content 'slice' of the state. Centralises all content-related
 * functionality including API calls.
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../common/api';

// Async Thunks required whenever there's an API call
export const getContent = createAsyncThunk(
  'content/getContent',
  api.getAllContent
);

export const createContent = createAsyncThunk(
  'content/createContent',
  api.createContent
);

export const editContent = createAsyncThunk(
  'content/editContent',
  api.editContent
);

export const deleteContent = createAsyncThunk(
  'content/deleteContent',
  api.deleteContent
);

const content = createSlice({
  name: 'content',
  initialState: [], // A list! Not an object, be careful. Caused me a few issues.
  reducers: {},
  extraReducers: {
    'user/logout': () => { return [] }, // Trigger content to reset itself when user logs out
    [getContent.fulfilled]: (_, action) => { return [...action.payload.data] }
  }
});

// For importing to src/app/reducers.js
export default content.reducer;
