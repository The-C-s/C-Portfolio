import React from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../user/userSlice';

import Nav from 'react-bootstrap/Nav';

import NavLink from './NavLink';

export default function SideNavbar() {

  const dispatch = useDispatch();

  return(
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <Nav className="flex-column">
          <Nav.Item>
            <NavLink to="/homepage" label="Homepage"/>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/dashboard" activeOnlyWhenExact={true} label="Dashboard"/>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/profile" label="Profile"/>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/add" label="Add Content"/>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/share" label="Share View"/>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/" label="Sign out" activeOnlyWhenExact={true} onClick={() => dispatch(logout())}/>
          </Nav.Item>
        </Nav>
      </div>
    </Nav>
  );
}
