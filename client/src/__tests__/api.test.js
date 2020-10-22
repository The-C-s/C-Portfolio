import axios from 'axios';

import * as api from '../common/api';

jest.mock('axios');

/* Test constants */

const apiPaths = {
  AUTH_USER: '/users/authenticate',
  REGISTER_USER: '/users/register',
  CURRENT_USER: '/users/current',
  CONTENT: '/content/',
  CREATE_CONTENT: '/content/create',
  CREATE_PROFILE: '/profile/create',
  PROFILE: '/profile/',
  ADD_LOGO: '/profile/addLogo',
  ADD_RESUME: '/profile/addResume',
  UPDATE_USER: '/users/update'
}

/* Mock data */

const user = {
  email: 'austen@maccas.edu.au',
  password: 'bruhmoment'
}

const content = {
  id: '5f5a1acf925e4b1e8c2dd951',
  tags: ['rusty','rust enthusiast'],
  title: 'Rust - The element',
  description: 'Rust is an iron oxide, a usually reddish brown oxide formed by the reaction of iron and oxygen in the presence of water or air moisture. Several forms of rust are distinguishable both visually and by spectroscopy, and form under different circumstances.[1] Rust consists of hydrated iron(III) oxides Fe2O3·nH2O and iron(III) oxide-hydroxide (FeO(OH), Fe(OH)3).',
  content: '<p><strong>Rust </strong>is an iron oxide, a <s>usually reddish brown oxide formed</s> by the reaction of iron and oxygen in the presence of water or air moisture. Several forms of rust are distinguishable both visually and by spectroscopy, and form under different <em>circumstances</em>.[1] Rust consists of hydrated iron(III) oxides Fe2O3·nH2O and iron(III) oxide-hydroxide (FeO(OH), Fe(OH)3).</p>',
  displayDate: '1599740623821',
  createdDate: '1599740623821',
  user: 'austen@maccas.edu.au'
}

const profile = {
  id: '5f69f55dc9ba431048112e50',
  experience: ['Maccas CEO', 'McOverlord', 'McManaging my McMinions and McMaking them build a mCportfolio'],
  education: ['University of Maccas', 'McRonald McDonald High ', 'Burger Preschool'],
  projects: ['5f710be3e642630037cfe64e'],
  email: 'austen@maccas.edu.au',
  logo: 'https://res.cloudinary.com/dlh0pcycr/image/upload/v1602642387/CPortfolio/pnqjoyx5lvoab2gt7djf.png',
  resume:'https://res.cloudinary.com/dlh0pcycr/image/upload/v1602642336/CPortfolio/fe7xyf8oyxnpogj4bs9t.pdf'
}

/* API settings tests */

test('All API endpoints are defined', () => {
  expect(api.AUTH_USER).toEqual(apiPaths.AUTH_USER);
  expect(api.REGISTER_USER).toEqual(apiPaths.REGISTER_USER);
  expect(api.CURRENT_USER).toEqual(apiPaths.CURRENT_USER);
  expect(api.CONTENT).toEqual(apiPaths.CONTENT);
  expect(api.CREATE_CONTENT).toEqual(apiPaths.CREATE_CONTENT);
  expect(api.CREATE_PROFILE).toEqual(apiPaths.CREATE_PROFILE);
  expect(api.PROFILE).toEqual(apiPaths.PROFILE);
  expect(api.ADD_LOGO).toEqual(apiPaths.ADD_LOGO);
  expect(api.ADD_RESUME).toEqual(apiPaths.ADD_RESUME);
  expect(api.UPDATE_USER).toEqual(apiPaths.UPDATE_USER);
});

test('API handles localStorage token', () => {

  jest.spyOn(window.localStorage.__proto__, 'getItem');
  jest.spyOn(window.localStorage.__proto__, 'setItem');
  jest.spyOn(window.localStorage.__proto__, 'removeItem');

  api.token.get();
  expect(localStorage.getItem).toHaveBeenLastCalledWith('token');

  api.token.set('imlovinit');
  expect(localStorage.setItem).toHaveBeenLastCalledWith('token', 'imlovinit');

  api.token.delete();
  expect(localStorage.removeItem).toHaveBeenLastCalledWith('token');
});

test('API base URL is set', () => {
  expect(axios.defaults.baseURL).toEqual('https://cportfolio.herokuapp.com');
});

/* User calls */

test('Login API call is correct', async () => {
  await api.authenticateCredentials(user);
  return expect(axios.post).toHaveBeenLastCalledWith(apiPaths.AUTH_USER, user);
});

test('Get User API call is correct', async () => {
  await api.authenticateToken();
  return expect(axios.get).toHaveBeenLastCalledWith(apiPaths.CURRENT_USER);
});

test('Register User API call is correct', async () => {
  await api.registerUser(user);
  return expect(axios.post).toHaveBeenLastCalledWith(apiPaths.REGISTER_USER, user);
});

test('Update User API call is correct', async () => {
  await api.updateUser(user);
  return expect(axios.put).toHaveBeenLastCalledWith(apiPaths.UPDATE_USER, user);
});

/* Content calls */

test('Get Content API call is correct', async () => {
  await api.getAllContent();
  return expect(axios.get).toHaveBeenLastCalledWith(apiPaths.CONTENT);
});

test('Create Content API call is correct', async () => {
  await api.createContent(content);
  return expect(axios.post).toHaveBeenLastCalledWith(apiPaths.CREATE_CONTENT, content);
});

test('Edit Content API call is correct', async () => {
  await api.editContent(content);
  return expect(axios.put).toHaveBeenLastCalledWith(`${apiPaths.CONTENT}${content.id}`, content);
});

test('Delete Content API call is correct', async () => {
  await api.deleteContent(content.id);
  return expect(axios.delete).toHaveBeenLastCalledWith(`${apiPaths.CONTENT}${content.id}`);
});

/* Profile calls */

test('Create Profile API call is correct', async () => {
  await api.createProfile(profile);
  return expect(axios.post).toHaveBeenLastCalledWith(apiPaths.CREATE_PROFILE, profile);
});

test('Edit Profile API call is correct', async () => {
  await api.editProfile(profile);
  return expect(axios.put).toHaveBeenLastCalledWith(`${apiPaths.PROFILE}${profile.id}`, profile);
});

test('Delete Profile API call is correct', async () => {
  await api.deleteProfile(profile.id);
  return expect(axios.delete).toHaveBeenLastCalledWith(`${apiPaths.PROFILE}${profile.id}`);
});

test('Get Profile API call is correct', async () => {
  await api.getProfile(profile.id);
  return expect(axios.get).toHaveBeenLastCalledWith(`${apiPaths.PROFILE}${profile.id}`);
});

test('Upload Logo API call is correct', async () => {
  await api.addLogo(profile.logo);
  return expect(axios.post).toHaveBeenLastCalledWith(apiPaths.ADD_LOGO, profile.logo);
});

test('Upload Resume API call is correct', async () => {
  await api.addResume(profile.resume);
  return expect(axios.post).toHaveBeenLastCalledWith(apiPaths.ADD_RESUME, profile.resume);
});
