import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProfile } from '../profile/profileSlice';

import Row from 'react-bootstrap/Row';

import ProfileItem from '../profile/ProfileItem';

// Contains the user's profile
export default function Profile() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const profile = dispatch(getProfile()); 
  //const profile = useSelector(state => state.profile);
  console.log("profile:" + user.profile);
  console.log("profile:" + profile);

  // Reload content whenever something significant happens
  useEffect(() => {
    async function fetch() { dispatch(getProfile(user.profile)) }
    fetch();
  });

  return(
    <div className="flex-wrap pt-3 pb-2 mb-3">
      <Row>
        <h1 className="h2 ml-5 mt-5">Your Profile</h1>
      </Row>
      {<ProfileItem profile ={profile} />}
    </div>
  );
}
 