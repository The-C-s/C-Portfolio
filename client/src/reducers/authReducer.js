import { SET_CURRENT_USER } from "../actions/types";

  const isEmpty = require("is-empty");

  const initialState = {};

  export default function(state = initialState, action) {
    switch (action.type) {

      case SET_CURRENT_USER:
        return {
          ...action.payload,
          isAuthenticated: !isEmpty(action.payload.token),
          authType: 'Bearer'
        };

      default:
        return state;
    }
  }