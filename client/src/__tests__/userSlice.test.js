// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import axios from 'axios';

import * as userSlice from '../features/user/userSlice';

// jest.mock('axios');
// const mockAPI = jest.mock('api');

// const mockStore = configureMockStore([thunk]);

describe('User functions', () => {

  test('User action types are accurate', () => {

    // const user = mockAPI.user;
    // const form = { email: 'austen@maccas.edu.au', password: 'bruhmoment' }
    // axios.get.mockResolvedValue(user);
  
    expect(userSlice.login.fulfilled.type).toEqual('user/login/fulfilled');
    expect(userSlice.login.pending.type).toEqual('user/login/pending');
    expect(userSlice.login.rejected.type).toEqual('user/login/rejected');
  
    expect(userSlice.authenticate.fulfilled.type).toEqual('user/authenticate/fulfilled');
    expect(userSlice.authenticate.pending.type).toEqual('user/authenticate/pending');
    expect(userSlice.authenticate.rejected.type).toEqual('user/authenticate/rejected');
  
    expect(userSlice.editUser.fulfilled.type).toEqual('user/update/fulfilled');
    expect(userSlice.editUser.pending.type).toEqual('user/update/pending');
    expect(userSlice.editUser.rejected.type).toEqual('user/update/rejected');
  
    expect(userSlice.register.fulfilled.type).toEqual('user/register/fulfilled');
    expect(userSlice.register.pending.type).toEqual('user/register/pending');
    expect(userSlice.register.rejected.type).toEqual('user/register/rejected');
  });
});
