import axios from 'axios';

// API not working locally? This will be why
// TODO: set using env vars instead (will still need to set localhost port)
axios.defaults.baseURL = 'https://cportfolio.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:50000';

const AUTH_USER = '/users/authenticate';
const REGISTER_USER = '/users/register';
const CURRENT_USER = '/users/current';
const CONTENT = '/content/';
const CREATE_CONTENT = '/content/create'; 
const CREATE_PROFILE = '/profile/create'; 
const PROFILE = '/profile/'; 
const ADD_LOGO = '/profile/addLogo/';
const ADD_RESUME = '/profile/addResume/'; 
const UPDATE_USER = '/users/update';

export const token = {
  get: () => localStorage.getItem('token'),
  set: _token => localStorage.setItem('token', _token),
  delete: () => localStorage.removeItem('token')
}

// Takes email and password as an object and returns the user's details and token
export const authenticateCredentials = async user => await axios.post(AUTH_USER, user);

// Takes email and password as an object and returns the user's details and token
const registerUser = async user => await axios.post(REGISTER_USER, user);

// Uses locally-stored token and returns the user's details
export const authenticateToken = async () => await axios.get(CURRENT_USER);

// Uses an existing token if user is logged in and returns all their content (as a list, not an object)
export const getAllContent = async () => await axios.get(CONTENT);

//Gets one post from an id 
//const getSingleContent = async id => await axios.get(`${CONTENT}${id}`); 

// Takes a content object and authorises with existing token
export const createContent = async content => await axios.post(CREATE_CONTENT, content);

// Takes a content object (that must include the id field) and authorises with existing token
export const editContent = async content => await axios.put(`${CONTENT}${content.get('id')}`, content);

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
export const addLogo = async (id, logo) => await axios.post(`${ADD_LOGO}${id}`, logo);  

export const addResume = async (id, resume) => await axios.post(`${ADD_RESUME}${id}`, resume);  

export const updateUser = async userParams => await axios.put(UPDATE_USER, userParams);


