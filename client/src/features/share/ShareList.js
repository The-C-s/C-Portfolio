import React from 'react';
import { useSelector } from 'react-redux';

import Nav from 'react-bootstrap/Nav';
import NavLink from '../layout/NavLink';

export default function Share() {

  const user = useSelector(state => state.user);

  return(
      <>
        <br/>
        <Nav className="flex-column">
        <h1> Sharepages: </h1>
          <>
          {user.sharePages.map((sharepage, index) => (
            <>
            <hr/>
            <Nav.Item>
                <NavLink to={`/share/${sharepage}`} activeOnlyWhenExact={true} label={<>
                    <h4 style={{ textDecorationLine: 'underline' }}> {sharepage} </h4>
                </>}/>
            </Nav.Item>
            </>
          ))}
        </>
        </Nav>
      </>
  );
}
