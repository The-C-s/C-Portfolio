import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Login from './Login';

import './App.css';

const App = () => {
  return(
    // Provider provides Redux state management
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <Login/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
