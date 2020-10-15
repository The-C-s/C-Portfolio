import axios from 'axios';

import * as api from '../common/api';

jest.mock('axios');

const apiPaths = {
  AUTH_USER: '/users/authenticate',
  REGISTER_USER: '/users/register',
  CURRENT_USER: '/users/current',
  CONTENT: '/content/',
  CREATE_CONTENT: '/content/create',
  CREATE_PROFILE: '/profile/create',
  PROFILE: '/profile/',
  ADD_LOGO: '/profile/addLogo/',
  ADD_RESUME: '/profile/addResume/',
  UPDATE_USER: '/users/update'
}

const user = {
  email: 'austen@maccas.edu.au',
  password: 'bruhmoment'
}

const token = 'imlovinit';

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
  expect(localStorage.getItem).toHaveBeenCalledWith('token');

  api.token.set('imlovinit');
  expect(localStorage.setItem).toHaveBeenCalledWith('token', 'imlovinit');

  api.token.delete();
  expect(localStorage.removeItem).toHaveBeenCalledWith('token');
});

test('API base URL is set', () => {
  expect(axios.defaults.baseURL).toEqual('https://cportfolio.herokuapp.com');
});

test('Login API call is correct', async () => {
  await api.authenticateCredentials(user);
  return expect(axios.post).toHaveBeenCalledWith(apiPaths.AUTH_USER, user);
});
