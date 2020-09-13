import axios from 'axios';

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

//Register User
export const registerUser = (userData, history) => dispatch => {
  axios.post('/users/register', userData)
  .then(res => history.push("/login"))
  .catch(err=> dispatch({
    type:GET_ERRORS,
    payload:err.response.data
  }))
}

//Login
export const loginUser = (userData) => dispatch => {
  axios.post('http://cportfolio.herokuapp.com/users/authenticate', userData)
  .then( res => {
      const { token } = res.data;
      // Set token to localStorage
      localStorage.setItem("token", token);

      dispatch(setCurrentUser(res.data));
   }
  )
  .catch(err=> dispatch({
    type:GET_ERRORS,
    payload:err.data
  }))
}


// Set logged in user
export const setCurrentUser = decoded_data => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded_data
  };
};
 
// Logout user
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("token");
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
