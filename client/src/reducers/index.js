import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import contentReducer from './contentReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  content: contentReducer
});
