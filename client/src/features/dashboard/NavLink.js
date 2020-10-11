import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

export default function NavLink({ label, to, activeOnlyWhenExact }) {

  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return(
    <Nav.Link
      as={Link}
      to={to}
      className={match ? "active" : ""}>
        {label}
    </Nav.Link>
  );
}
