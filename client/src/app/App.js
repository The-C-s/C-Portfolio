import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import api from '../common/api';
import { setUser } from '../features/user/userSlice';

import Landing from '../features/pages/Landing';
import Dashboard from '../features/dashboard/Dashboard';

import './App.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    // Check if user is already logged in
    const _token = localStorage.getItem('token');

    if (_token !== null) {

      api.setAuthHeader(_token);

      api.getUser()
        .then(res => dispatch(setUser(res)));
    }
  });

  return(
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
