import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

//import Nav from 'react-bootstrap/Nav';
//import NavLink from '../layout/NavLink';

import { addSharepage } from '../share/shareSlice';
import { authenticate } from '../user/userSlice';

export default function Share() {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user);
  const [requestSent, setRequestSent] = useState(false);

  const newSharepage = () => {
      dispatch(addSharepage())
        .then(() => dispatch(authenticate()))
        .then(() => history.replace(`/share/${user.sharePages.slice(-1)[0]}`));
    }
  if(!requestSent) {
      setRequestSent(true);
      newSharepage();
  }

  return(
      <> {"Creating..."} </>
  );
}
