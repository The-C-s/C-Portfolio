import axios from 'axios';

// Alter based on environment
axios.defaults.baseURL = 'https://cportfolio.herokuapp.com';

const AUTH_USER = '/users/authenticate';
const CONTENT = '/content/';
const CREATE_CONTENT = '/content/create';

const setAuthHeader = (authType, token) => axios.defaults.headers.common['Authorization'] = `${authType} ${token}`;

const authenticateUser = async user => await axios.post(AUTH_USER, user);

const getAllContent = async (authType, token) => await axios.get(CONTENT, { headers: { 'Authorization': `${authType} ${token}` } });

const createContent = async (content, authType, token) => await axios.post(CREATE_CONTENT, content, { headers: { 'Authorization': `${authType} ${token}` } });

const editContent = async (id, content, authType, token) => await axios.put(`${CONTENT}${id}`, content, { headers: { 'Authorization': `${authType} ${token}` } });

const deleteContent = async (id, authType, token) => await axios.delete(`${CONTENT}${id}`, { headers: { 'Authorization': `${authType} ${token}` } });

export default { setAuthHeader, authenticateUser, getAllContent, createContent, editContent, deleteContent };
