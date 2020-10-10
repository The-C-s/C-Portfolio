/*
 * The content 'slice' of the state. Centralises all content-related
 * functionality including API calls.
 */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  getAllContent,
  createContent as apiCreateContent,
  editContent as apiEditContent,
  deleteContent as apiDeleteContent
} from '../../common/api';

// Async Thunks required whenever there's an API call
export const getContent = createAsyncThunk(
  'content/getContent',
  getAllContent
);

export const createContent = createAsyncThunk(
  'content/createContent',
  apiCreateContent,

);

export const editContent = createAsyncThunk(
  'content/editContent',
  apiEditContent
);

export const deleteContent = createAsyncThunk(
  'content/deleteContent',
  apiDeleteContent
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
