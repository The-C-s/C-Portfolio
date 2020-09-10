import React from 'react';

import Navbar from '../layout/Navbar';
import SideNavBar from '../layout/SideNavbar';
import Feed from '../dashboard/Feed';

const Dashboard = () => {
  return(
    <React.Fragment>
      <Navbar/>
      <div class="container-fluid">
        <div class="row">
          <SideNavBar/>
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Feed/>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
