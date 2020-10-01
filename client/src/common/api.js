import axios from 'axios';

// API not working locally? This will be why
// TODO: set using env vars instead (will still need to set localhost port)
axios.defaults.baseURL = 'https://cportfolio.herokuapp.com';
//'https://localhost:57693'; 
const AUTH_USER = '/users/authenticate';
const CURRENT_USER = '/users/current';
const CONTENT = '/content/';
const CREATE_CONTENT = '/content/create'; 
const CREATE_PROFILE = '/profile/create'; 
const PROFILE = '/profile/'; 
const ADD_LOGO = '/profile/addLogo';
const ADD_RESUME = '/profile/addResume'; 
const UPDATE_USER = '/users/update';

// Takes email and password as an object and returns the user's details and token
const authenticateUser = async user => await axios.post(AUTH_USER, user);

// Takes a token string and returns the user's details
const getUser = async token => await axios.get(CURRENT_USER, token);

// Uses an existing token if user is logged in and returns all their content (as a list, not an object)
const getAllContent = async () => await axios.get(CONTENT);
// const getAllContent = async () => await axios.get('https://jsonplaceholder.typicode.com/posts');

// Takes a content object and authorises with existing token
const createContent = async content => await axios.post(CREATE_CONTENT, content);

// Takes a content object (that must include the id field) and authorises with existing token
const editContent = async content => await axios.put(`${CONTENT}${content.id}`, content);

// Takes just the content id (as a string) and authorises with existing token
const deleteContent = async id => await axios.delete(`${CONTENT}${id}`);

// Takes profile object and authorises with existing token 
const createProfile = async profile => await axios.post(CREATE_PROFILE, profile); 

// Takes a profile object (text only) and id and authorises with existing token
const editProfile = async profile => await axios.put(`${PROFILE}${profile.id}`, profile); 

// Takes a profile id and authorises with existing token 
const deleteProfile = async id => await axios.delete(`${PROFILE}${id}`); 

// Takes a profile id and authorises with existing token, returns profile
const getProfile = async id => await axios.get(`${PROFILE}${id}`); 

//Takes a profile id and authorises with existing token 
const addLogo = async () => await axios.get(ADD_LOGO);  
const addResume = async () => await axios.get(ADD_RESUME);  

const editUser = async userParams => {
    console.log(userParams);
    await axios.put(UPDATE_USER, userParams);
};

// Make functions available to other components

export default {
  authenticateUser,
  getUser,
  getAllContent,
  createContent,
  editContent,
  deleteContent, 
  createProfile, 
  editProfile, 
  deleteProfile, 
  getProfile, 
  addLogo,
  addResume, 
  editUser
};
