import axios from 'axios';

// API not working locally? This will be why
// TODO: set using env vars instead (will still need to set localhost port)
axios.defaults.baseURL = 'https://cportfolio.herokuapp.com';

const AUTH_USER = '/users/authenticate';
const CURRENT_USER = '/users/current';
const CONTENT = '/content/';
const CREATE_CONTENT = '/content/create';

// Automatically attach current auth token to all API requests
const setAuthHeader = token => axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const authenticateUser = async user => await axios.post(AUTH_USER, user);

const getUser = async token => await axios.get(CURRENT_USER, token);

// const getAllContent = async (authType, token) => await axios.get(CONTENT, { headers: { 'Authorization': `${authType} ${token}` } });
const getAllContent = async () => await axios.get(CONTENT);

const createContent = async (content, authType, token) => await axios.post(CREATE_CONTENT, content, { headers: { 'Authorization': `${authType} ${token}` } });

const editContent = async (id, content, authType, token) => await axios.put(`${CONTENT}${id}`, content, { headers: { 'Authorization': `${authType} ${token}` } });

const deleteContent = async (id, authType, token) => await axios.delete(`${CONTENT}${id}`, { headers: { 'Authorization': `${authType} ${token}` } });

export default {
  setAuthHeader,
  authenticateUser,
  getUser,
  getAllContent,
  createContent,
  editContent,
  deleteContent
};
