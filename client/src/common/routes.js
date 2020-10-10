import React from 'react';

import Landing from '../features/pages/Landing';
import Dashboard from '../features/dashboard/Dashboard';
import Feed from '../features/dashboard/Feed';
import Profile from '../features/profile/Profile';
import AddContent from '../features/content/AddContent';
import AddProfile from '../features/profile/AddProfile';
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
    path: "/new",
    exact: true,
    page: <Dashboard/>,
    dashboard: <AddProfile/>
  },
  {
    path: "/share",
    exact: true,
    page: <Share/>
  }
];
