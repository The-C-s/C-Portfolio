import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../features/user/userSlice';

import Nav from 'react-bootstrap/Nav';

export default function Navbar() {

  const dispatch = useDispatch();

  return(
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Dashboard</a>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <Nav.Link as={Link} to="/" onClick={() => dispatch(logout)}>Sign out</Nav.Link>
        </li>
      </ul>
    </nav>
  );
}
