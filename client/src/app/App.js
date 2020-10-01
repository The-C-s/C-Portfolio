import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from '../features/pages/Landing';
import Dashboard from '../features/dashboard/Dashboard';
import Share from '../features/share/Share';

import '../App.css';

export default function App() {
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
