import React from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../user/userSlice';

import Nav from 'react-bootstrap/Nav';

import NavLink from './NavLink';

export default function SideNavbar() {

  const dispatch = useDispatch();

  return(
    <Nav className="sidenav flex-column col-sm-3 col-lg-2 d-none d-sm-block">
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
  );
}
