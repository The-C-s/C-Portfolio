import React from 'react';
import { useDispatch } from 'react-redux';

import Nav from 'react-bootstrap/Nav';

import { faAddressCard, faPray, faFolderPlus, faSignOutAlt, faStream, faHotTub } from '@fortawesome/free-solid-svg-icons';

import NavLink from './NavLink';

import { logout } from '../user/userSlice';

export default function SideNavbar() {

  const dispatch = useDispatch();

  return(
    <Nav className="sidenav flex-column col-sm-3 col-lg-2 d-none d-sm-block">
      <Nav.Item className="sidenav-item">
        <NavLink to="/homepage" label="Homepage" icon={faHotTub}/>
      </Nav.Item>
      <Nav.Item className="sidenav-item">
        <NavLink to="/dashboard" label="Dashboard" icon={faStream} activeOnlyWhenExact={true}/>
      </Nav.Item>
      <Nav.Item className="sidenav-item">
        <NavLink to="/profile" label="Profile" icon={faAddressCard}/>
      </Nav.Item>
      <Nav.Item className="sidenav-item">
        <NavLink to="/add" label="Add Content" icon={faFolderPlus}/>
      </Nav.Item>
      <Nav.Item className="sidenav-item">
        <NavLink to="/share" label="Share View" icon={faPray}/>
      </Nav.Item>
      <Nav.Item className="sidenav-item">
        <NavLink to="/" label="Sign out" icon={faSignOutAlt} activeOnlyWhenExact={true} onClick={() => dispatch(logout())}/>
      </Nav.Item>
    </Nav>
  );
}
