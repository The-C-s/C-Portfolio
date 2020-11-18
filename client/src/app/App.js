import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { authenticate } from '../features/user/userSlice';
import { getProfile } from '../features/profile/profileSlice';
import { getContent } from '../features/content/contentSlice';
import { token } from '../common/api';
import { publicRoutes, privateRoutes } from '../common/routes';

import '../style.css';

export default function App() {

  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.user.isAuthenticated);

  useEffect(() => {
    async function fetch() {

      if (token.get() !== null) {
        dispatch(authenticate())
          .then(() => dispatch(getProfile()))
          .then(() => dispatch(getContent()))
      }
    }
    fetch();
  });

  return(
    <Router>
      <Switch>
        {publicRoutes.map((route, index) =>
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            children={route.page}
          />
        )}
        {privateRoutes.map((route, index) =>
          <PrivateRoute
            key={index}
            exact={route.exact}
            path={route.path} 
            test={authenticated}
            fallback="/"
            children={route.page}
          />
        )}
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
