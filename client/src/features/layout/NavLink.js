import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavLink({ label, to, activeOnlyWhenExact, icon }) {

  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return(
    <Nav.Link
      as={Link}
      to={to}
      className={`navlink${match ? ' navlink-active active' : ''}`}>
        {icon && <FontAwesomeIcon className={`navlink-icon${match ? ' navlink-icon-active' : ''}`} icon={icon} size="lg"/>}
        {label}
    </Nav.Link>
  );
}
