import { SET_CURRENT_USER } from "../actions/types";

  const isEmpty = require("is-empty");

  const initialState = {
    //token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjVhMTUxMmI2YmE4ODFhN2NkMzAwYWUiLCJpYXQiOjE1OTk3ODc2MTMsImV4cCI6MTYwMDM5MjQxM30.lZvL2p4H--qoshtZ-FEQjMo95PrflloF64qAKtpBR1o',
    isAuthenticated: false,
    user: {},
  };

  export default function(state = initialState, action) {
    switch (action.type) {

      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        };

      default:
        return state;
    }
  }