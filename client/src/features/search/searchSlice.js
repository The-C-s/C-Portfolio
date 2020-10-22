import { createSlice } from '@reduxjs/toolkit';

const search = createSlice({
  name: 'search',
  initialState: {
    active: false
  },
  reducers: {
    activeSearch: (_, action) => {
      return {
        active: true,
        query: action.payload.query,
        content: action.payload.content
      }
    },
    stopSearch: () => { return { active: false } }
  },
  extraReducers: {
    'user/logout': () => { return { active: false } }
  }
});

export const { activeSearch, stopSearch } = search.actions;

export default search.reducer;
