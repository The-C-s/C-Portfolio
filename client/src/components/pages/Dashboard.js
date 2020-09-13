import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Navbar from '../layout/Navbar';
import SideNavBar from '../layout/SideNavbar';
import Feed from '../dashboard/Feed';
import AddContent from '../dashboard/AddContent';

export default function Dashboard() {

  const history = useHistory();
  const [view, setView] = useState('dashboard');
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  useEffect(() => { if (!isAuthenticated) history.push('/') });

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
