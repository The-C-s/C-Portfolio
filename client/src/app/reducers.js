/*
 * Redux takes any reducers we add here and makes them
 * available app-wide.
 */

import { combineReducers } from 'redux';
import appReducer from './appSlice';
import contentReducer from '../features/content/contentSlice';
import userReducer from '../features/user/userSlice';
import profileReducer from '../features/profile/profileSlice';
import searchReducer from '../features/search/searchSlice';
import shareReducer from '../features/share/shareSlice';

export default combineReducers({
  app: appReducer,
  profile: profileReducer,
  content: contentReducer,
  user: userReducer,
  search: searchReducer,
  share: shareReducer
});
