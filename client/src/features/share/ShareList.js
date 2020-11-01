import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { useHistory } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import NavLink from '../layout/NavLink';
import Button from 'react-bootstrap/Button'

import { addSharepage } from '../share/shareSlice';
import { authenticate } from '../user/userSlice';

export default function Share() {

  const dispatch = useDispatch();
  //const history = useHistory();
  const user = useSelector(state => state.user);
  const gettingUser = useSelector(state => state.app.loading.login);

  const newSharepage = () => {
      console.log(user);
      dispatch(addSharepage())
        .then(() => { console.log(user); dispatch(authenticate()) } );
        //.then(() => { console.log(user); history.replace(`/share/${user.sharePages.slice(-1)[0]}`) } );
    }

  return(
      <>
        <br/>
        <Nav className="flex-column">
        <h1> Sharepages: </h1>
          <>
          {!gettingUser && user.sharePages.map((sharepage, index) => (
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
        <Button onClick={newSharepage} variant="primary"> New Sharepage </Button>
      </>
  );
}
