import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../layout/Navbar';
import SideNavBar from '../layout/SideNavbar';
import Feed from '../dashboard/Feed';
import AddContent from '../dashboard/AddContent';

export default function Dashboard() {

  // const [view, changeView] = useState(<Feed/>);

  // const viewChangeHandler = navKey => {
  //   switch(navKey) {

  //     case 'dashboard':
  //       changeView(<Feed/>);
      
  //     case 'add-content':
  //       changeView(<AddContent/>);
      
  //     default:
  //       changeView(<Feed/>);
  //   }
  // }

  return(
    <React.Fragment>
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
        <BrowserRouter>
          <SideNavBar/>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            
              <Switch>
                <Route exact path="/dashboard" component={Feed}/>
                <Route exact path="/create" component={AddContent}/>
              </Switch>
            
          </main>
          </BrowserRouter>
        </div>
      </div>
    </React.Fragment>
  );
}
