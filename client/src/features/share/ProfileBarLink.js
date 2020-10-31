import React from 'react';

import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProfileBarLink({
  label,
  icon,
  iconSize,
  active
 }) {

  return(
    <Nav.Link className={`profilebarlink${active ? ' profilebarlink-active' : ''}`}>
      {icon &&
        <FontAwesomeIcon
          className={`profilebarlink-icon${active ? ' profilebarlink-icon-active' : ''}`}
          icon={icon}
          size={iconSize ? iconSize : "lg"}
        />}
          {label}
    </Nav.Link>
  );
}
