import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import api from '../common/api';
import { setUser } from '../features/user/userSlice';

import Landing from '../features/pages/Landing';
import Dashboard from '../features/dashboard/Dashboard';
import Share from '../features/share/Share';

import '../App.css';

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      api.getUser()
        .then(res => dispatch(setUser(res)));
    }
  });

  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/share">
          <Share/>
        </Route>
      </Switch>
    </Router>
  );
}
