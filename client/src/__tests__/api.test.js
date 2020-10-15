import axios from 'axios';

import * as api from '../common/api';

jest.mock('axios');

test('API base URL is set', () => {
  expect(axios.defaults.baseURL).toEqual('https://cportfolio.herokuapp.com');
});

test('Login API call is correct', async () => {

  const AUTH_USER = '/users/authenticate';
  const user = { email: 'austen@maccas.edu.au', password: 'bruhmoment' }

  await api.authenticateCredentials(user);
  return expect(axios.post).toHaveBeenCalledWith(AUTH_USER, user);
});
