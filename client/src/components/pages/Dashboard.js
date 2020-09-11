import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

import Navbar from '../layout/Navbar';
import SideNavBar from '../layout/SideNavbar';
import Feed from '../dashboard/Feed';
import AddContent from '../dashboard/AddContent';

export default function Dashboard() {

  const history = useHistory();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  useEffect(() => { if (!isAuthenticated) history.push('/') });

  return(
    <React.Fragment>
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <SideNavBar/>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Router>
              <Switch>
                <Route exact path="/dashboard" component={Feed}/>
                <Route exact path="/create" component={AddContent}/>
              </Switch>
            </Router>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}
