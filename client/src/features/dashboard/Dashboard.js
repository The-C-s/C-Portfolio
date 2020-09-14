import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import SideNavBar from './SideNavbar';
import Feed from '../../components/dashboard/Feed';
import AddContent from '../../components/dashboard/AddContent';

export default function Dashboard() {

  // React hook for redirection
  const history = useHistory();
  const [view, setView] = useState('dashboard');
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  useEffect(() => { if (!isAuthenticated) history.push('/') });

  /*
   * This is a bad way of doing a dashboard. Simply swaps out whatever component
   * is showing in <main> based on whatever string is set, and changing that
   * string by clicking the links in the navbar. Quick and easy but not nice to
   * maintain.
   */
  const setViewHandler = eventKey => setView(eventKey);

  return(
    <React.Fragment>
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <SideNavBar setView={setViewHandler}/>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {(view === 'dashboard') && <Feed/>}
            {(view === 'add-content') && <AddContent setView={setViewHandler}/>}
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}
