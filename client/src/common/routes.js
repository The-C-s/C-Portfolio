import React from 'react';

import Landing from '../features/pages/Landing';
import Homepage from '../features/pages/Homepage';
import Dashboard from '../features/dashboard/Dashboard';
import Feed from '../features/dashboard/Feed';
import Profile from '../features/profile/Profile';
import AddContent from '../features/content/AddContent';
import Share from '../features/share/Share';

export const publicRoutes = [
  {
    path: "/",
    exact: true,
    page: <Landing/>
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
    exact: true,
    page: <Dashboard/>,
    dashboard: <Feed/>
  },
  {
    path: "/profile",
    exact: true,
    page: <Dashboard/>,
    dashboard: <Profile/>
  },
  {
    path: "/add",
    exact: true,
    page: <Dashboard/>,
    dashboard: <AddContent/>
  },
  {
    path: "/share",
    exact: true,
    page: <Share/>
  }
];
