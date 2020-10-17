import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as data from './data';

const mock = new MockAdapter(axios);

const paths = {
  AUTH_USER: '/users/authenticate',
  REGISTER_USER: '/users/register',
  CURRENT_USER: '/users/current',
  CONTENT: /^\/content\//,
  PROFILE: /^\/profile\//
}

mock.onPost(paths.AUTH_USER).reply(200, data.user);
mock.onPost(paths.REGISTER_USER).reply(200, {});
mock.onGet(paths.CURRENT_USER).reply(200, data.user);
mock.onGet(paths.CONTENT).reply(200, data.content);
mock.onPost(paths.CONTENT).reply(200);
mock.onPut(paths.CONTENT).reply(200);
mock.onDelete(paths.CONTENT).reply(200);
mock.onGet(paths.PROFILE).reply(200, data.profile);
mock.onPost(paths.PROFILE).reply(200);
mock.onPut(paths.PROFILE).reply(200);
