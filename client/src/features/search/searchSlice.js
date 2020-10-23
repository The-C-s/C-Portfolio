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
        content: searchContent(action.payload.query, action.payload.content)
      }
    },
    stopSearch: () => { return { active: false } }
  },
  extraReducers: {
    'user/logout': () => { return { active: false } }
  }
});

const searchContent = (query, content) => {
  
  query = query.toLowerCase();
  let results = new Set();
  
  content.forEach(_content => {
    
    if (_content.title.toLowerCase().includes(query)) results.add(_content);
    
    _content.tags.forEach(tag => {
      if (tag.toLowerCase().includes(query)) results.add(_content);
    });
  });
  
  return [...results];
}

export const { activeSearch, stopSearch } = search.actions;

export default search.reducer;
