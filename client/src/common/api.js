import axios from 'axios';
const BASE = 'http://cportfolio.herokuapp.com';
//const BASE = 'http://localhost:50156';
const AUTH_USER = `${BASE}/users/authenticate`;
const GET_ALL_CONTENT = `${BASE}/content/`;
const CREATE_CONTENT = `${BASE}/content/create`;
const EDIT_CONTENT = `${BASE}/content`; 
const DELETE_CONTENT = `${BASE}/content`;

const authenticateUser = async user => await axios.post(AUTH_USER, user);

const getAllContent = async (authType, token) => await axios.get(GET_ALL_CONTENT, { headers: { 'Authorization': `${authType} ${token}` } });

const createContent = async (content, authType, token) => await axios.post(CREATE_CONTENT, content, { headers: { 'Authorization': `${authType} ${token}` } });

const editContent = async (id, content, authType, token) => await axios.put(`${EDIT_CONTENT}/${id}`, content, { headers: { 'Authorization': `${authType} ${token}` } });

const deleteContent = async (id, authType, token) => await axios.delete(`${DELETE_CONTENT}/${id}`, { headers: { 'Authorization': `${authType} ${token}` } });

export default { authenticateUser, getAllContent, createContent, editContent, deleteContent };
