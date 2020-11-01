import axios from 'axios';

// HELLO AUSTEN 

// Intercept and mock all requests if run with with start:mockapi
if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_API) {
  require('../_mockapi/api');
}

axios.defaults.baseURL = 'https://cportfolio.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:64248';

export const AUTH_USER = '/users/authenticate';
export const REGISTER_USER = '/users/register';
export const CURRENT_USER = '/users/current';
export const CONTENT = '/content/';
export const CREATE_CONTENT = '/content/create';
export const CREATE_PROFILE = '/profile/create';
export const PROFILE = '/profile/';
export const ADD_LOGO = '/profile/addLogo';
export const ADD_RESUME = '/profile/addResume';
export const UPDATE_USER = '/users/update';
export const UPLOAD_AVATAR = '/users/avatar';
export const UPLOAD_BACKGROUND = '/users/background';
export const SHARE = '/share/';
export const CREATE_SHARE = '/share/create'; 


export const token = {
  get: () => localStorage.getItem('token'),
  set: _token => localStorage.setItem('token', _token),
  delete: () => localStorage.removeItem('token')
}

// Takes email and password as an object and returns the user's details and token
export const authenticateCredentials = async user => await axios.post(AUTH_USER, user);

// Takes email and password as an object and returns the user's details and token
export const registerUser = async user => await axios.post(REGISTER_USER, user);

// Uses locally-stored token and returns the user's details
export const authenticateToken = async () => await axios.get(CURRENT_USER);

// Uses an existing token if user is logged in and returns all their content (as a list, not an object)
export const getAllContent = async () => await axios.get(CONTENT);

//Gets one post from an id
//const getSingleContent = async id => await axios.get(`${CONTENT}${id}`);

// Takes a content object and authorises with existing token
export const createContent = async content => await axios.post(CREATE_CONTENT, content);

// Takes a content object (that must include the id field) and authorises with existing token
export const editContent = async content => {

  // Handle special case of FormData object being passed
  let id;
  try {
    id = content.get('id');
  } catch {
    id = content.id;
  }

  await axios.put(`${CONTENT}${id}`, content);
}

// Takes just the content id (as a string) and authorises with existing token
export const deleteContent = async id => await axios.delete(`${CONTENT}${id}`);

// Takes profile object and authorises with existing token
export const createProfile = async profile => await axios.post(CREATE_PROFILE, profile);

// Takes a profile object (text only) and id and authorises with existing token
export const editProfile = async profile => await axios.put(`${PROFILE}${profile.id}`, profile);

// Takes a profile id and authorises with existing token
export const deleteProfile = async id => await axios.delete(`${PROFILE}${id}`);

// Takes a profile id and authorises with existing token, returns profile
export const getProfile = async id => await axios.get(`${PROFILE}${id}`);

//Takes a profile id and authorises with existing token
export const addLogo = async logo => await axios.put(ADD_LOGO, logo);

export const addResume = async resume => await axios.put(ADD_RESUME, resume);

export const updateUser = async userParams => await axios.put(UPDATE_USER, userParams);

export const uploadAvatar = async avatar => await axios.put(UPLOAD_AVATAR, avatar);

export const uploadBackground = async background => await axios.put(UPLOAD_BACKGROUND, background);

export const getSharepage = async id => await axios.get(`${SHARE}${id}`);

export const editSharepage = async shareParams => await axios.put(`${SHARE}${shareParams.id}`, shareParams);

export const addSharepage = async () => await axios.post(CREATE_SHARE);

export const deleteSharepage = async id => await axios.delete(`${SHARE}${id}`);
