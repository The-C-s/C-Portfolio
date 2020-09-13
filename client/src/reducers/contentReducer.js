import { FETCH, DELETE, EDIT, CREATE } from '../actions/types';
import axios from 'axios';

const initialState = [];

export default function(state = initialState, action) {
  switch(action.type) {

    case FETCH:
      return [...action.payload];

    case DELETE:
      return state.filter(content => content.id !== action.payload);

    case EDIT:
      return state.map(content => content.id === action.payload.id ? action.payload : content);
    
    case CREATE:
      return [...state, action.payload];

    default:
      return state;
  }
}
