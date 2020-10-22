import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavButton({ icon }) {
  return(
    <FontAwesomeIcon className="navbutton" icon={icon} size="lg"/>
  );
}
