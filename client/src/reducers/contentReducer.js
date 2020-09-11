import { FETCH, DELETE, EDIT, CREATE } from '../actions/types';
import axios from 'axios';

const initialState = [];

export default function(state = initialState, action) {
  switch(action.type) {

    case FETCH:
      return action.payload;

    case DELETE:
      axios.delete(`http://cportfolio.herokuapp.com/content/${action.payload}`, { headers: { 'Authorization': `Bearer ${token}` } })
      return state.filter(content => content.id !== action.payload);

    case EDIT:
      return state.map(content => content.id === action.payload.id ? action.payload : content);
    
    case CREATE:
      return [action.payload, ...state];

    default:
      return state;
  }
}
