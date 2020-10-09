import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { authenticate } from '../features/user/userSlice';
import { token } from '../common/api';
import { routes } from '../common/routes';

import '../App.css';

export default function App() {

  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.user.isAuthenticated);
  const publicRoutes = routes.filter(route => route.private === null);
  const privateRoutes = routes.filter(route => route.private !== null);

  useEffect(() => {
    
    async function fetch() { if (token.get() !== null) dispatch(authenticate()) }
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
            children={<route.page/>}
          />
        )}
        {privateRoutes.map((route, index) =>
          <PrivateRoute
            key={index}
            exact={route.exact}
            path={route.path}
            test={authenticated}
            fallback="/"
            children={<route.page/>}
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
