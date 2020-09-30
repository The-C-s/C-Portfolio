/*
 * Redux takes any reducers we add here and makes them
 * available app-wide.
 */

import { combineReducers } from 'redux';
import contentReducer from '../features/content/contentSlice';
import userReducer from '../features/user/userSlice';
import profileReducer from '../features/profile/profileSlice';
 
export default combineReducers({
  profile: profileReducer,
  content: contentReducer,
  user: userReducer
});
