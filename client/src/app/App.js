import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Landing from '../features/pages/Landing';
import Dashboard from '../features/dashboard/Dashboard';
import Share from '../features/share/Share';

import { authenticate } from '../features/user/userSlice';
import { token } from '../common/api';

import '../App.css';

export default function App() {

  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.user.isAuthenticated);

  useEffect(() => {
    
    async function fetch() {
      if (token.get() !== null) dispatch(authenticate());
    }
    fetch();
  });

  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing/>
        </Route>
        <PrivateRoute exact path="/dashboard" test={authenticated} fallback="/">
          <Dashboard/>
        </PrivateRoute>
        <Route path="/share">
          <Share/>
        </Route>
      </Switch>
    </Router>
  );
}

const PrivateRoute = ({ _props, children, test, fallback }) => {
  return(
    <Route {..._props} render={() =>
      test ? children : <Redirect to={{ pathname: fallback }}/>
    }/>
  );
}
