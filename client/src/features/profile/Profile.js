import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProfile } from '../profile/profileSlice';
//import { getSingleContent } from '../content/contentSlice'; 
import Row from 'react-bootstrap/Row';

import ProfileItem from '../profile/ProfileItem';

// Contains the user's profile
export default function Profile() {

  const dispatch = useDispatch();
  //Getting the user and profile details 
  const user = useSelector(state => state.user);
  const profile = useSelector(state => state.profile);
  const content = useSelector(state => state.content); 
  // Reloading profile 
  useEffect(() => {
    async function fetch() { dispatch(getProfile(user.profile)) }
    fetch();
  });

  /*
  async function getPost(id){ 
      const post = await getSingleContent(id); 
      console.log(post); 
      return post; 
  }*/

  return(
    <div className="flex-wrap pt-3 pb-2 mb-3">
      <Row>
        <h1 className="h2 ml-5 mt-5">Your Profile</h1>
      </Row>
      {<ProfileItem profile = {profile} projects ={content} />}
    </div>
  );
}
 