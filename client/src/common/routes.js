import React from 'react';

import Landing from '../features/pages/Landing';
import Login from '../features/user/Login';
import Register from '../features/user/Register';
import Homepage from '../features/pages/Homepage';
import Dashboard from '../features/dashboard/Dashboard';
import Feed from '../features/dashboard/Feed';
import Profile from '../features/profile/Profile';
import AddContent from '../features/content/AddContent';
import Share from '../features/share/Share';
import ShareList from '../features/share/ShareList';
import AddShare from '../features/share/AddShare';

export const publicRoutes = [
  {
    path: "/",
    exact: true,
    page: <Landing/>,
    landing: <Login/>
  },
  {
    path: "/register",
    exact: true,
    page: <Landing/>,
    landing: <Register/>
  },
  {
    path: "/share",
    exact: false,
    page: <Share/>
  }
];

export const privateRoutes = [
  {
    path: "/homepage",
    exact: true,
    page: <Homepage/>
  },
  {
    path: "/dashboard",
    exact: false,
    page: <Dashboard/>
  },
  {
    path: "/dashboard/content",
    exact: true,
    dashboard: <Feed/>
  },
  {
    path: "/dashboard/content/addFile",
    exact: true,
    dashboard: <AddContent isFile={true}/>
  },
  {
    path: "/dashboard/content/addContent",
    exact: true,
    dashboard: <AddContent isFile={false}/>
  },
  {
    path: "/dashboard/profile",
    exact: true,
    page: <Dashboard/>,
    dashboard: <Profile/>
  },
  {
    path: "/dashboard/sharepages",
    exact: true,
    page: <Dashboard/>,
    dashboard: <ShareList/>
  },
  {
    path: "/dashboard/sharepages/add",
    exact: true,
    page: <Dashboard/>,
    dashboard: <AddShare/>
  }
];
