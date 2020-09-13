import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import contentReducer from '../features/content/contentSlice';
import userReducer from '../features/user/userSlice';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  content: contentReducer,
  user: userReducer
});
