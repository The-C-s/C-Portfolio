import { FETCH, DELETE, EDIT, CREATE } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  switch(action.type) {

    case FETCH:
      return action.payload;

    case DELETE:
      return state.filter(content => content.id !== action.payload);

    default:
      return state;
  }
}
