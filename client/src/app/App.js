// Imports for framework and functionality
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Imports for custom app functionality
import api from '../common/api';
import { setUser } from '../features/user/userSlice';

// Imports for React components
import Landing from '../features/pages/Landing';
import Dashboard from '../features/dashboard/Dashboard';

// For when css is being a b and you need to override some rules
import '../App.css';

// React component is its main function
// Pls don't use classes! Unless there is a *really* good reason
export default function App() {

  // Allow us to dispatch actions to Redux
  const dispatch = useDispatch();

  // React hook, nothing to do with Redux.
  // Gets called whenever there is a change related to the component that it's inside of
  useEffect(() => {
    if (localStorage.getItem('token')) {
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
