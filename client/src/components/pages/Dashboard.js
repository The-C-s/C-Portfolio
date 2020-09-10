import React from 'react';

import Navbar from '../layout/Navbar';
import SideNavBar from '../layout/SideNavbar';
import Feed from '../dashboard/Feed';

export default function Dashboard() {
  return(
    <React.Fragment>
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <SideNavBar/>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Feed/>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}
