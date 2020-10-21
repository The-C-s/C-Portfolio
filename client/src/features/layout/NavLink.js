import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function NavLink({
  label,
  to,
  activeOnlyWhenExact,
  icon,
  dropdown,
  expanded,
  sub
 }) {

  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  }) || expanded;

  return(
    <Nav.Link
      as={Link}
      to={to}
      className={
        `navlink${
          match ? ' navlink-active active' : ''
        }${
          dropdown ? ' navlink-dropdown' : ''
        }${
          sub ? ' navlink-sub' : ''
        }`
      }
    >
        {icon &&
        <FontAwesomeIcon
          className={`navlink-icon${match ? ' navlink-icon-active' : ''}`}
          icon={icon}
          size="lg"
        />}
        {label}
        {dropdown &&
        <FontAwesomeIcon
          className={`navlink-chevron ${expanded ? 'fa-rotate-180' : ''}`}
          icon={faChevronDown}
          size="lg"
        />}
    </Nav.Link>
  );
}
