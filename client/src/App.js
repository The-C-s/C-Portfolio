import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Landing from './components/pages/Landing';
import Dashboard from './components/pages/Dashboard';

import './App.css';
import api from './common/api';
import { setUser } from './features/user/userSlice';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    // Check if user is already logged in
    const _token = localStorage.getItem('token');

    if (_token !== null) {

      api.setAuthHeader(_token);

      api.getUser()
        .then(res => dispatch(setUser(res)))
        .catch(err => console.log(err));
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
