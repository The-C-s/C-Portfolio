import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProfile } from '../profile/profileSlice';
import Row from 'react-bootstrap/Row';

import ProfileItem from '../profile/ProfileItem';

// Contains the user's profile
export default function Profile() {

  const dispatch = useDispatch();
  //Getting the user and profile details 
  const user = useSelector(state => state.user);
  const profile = useSelector(state => state.profile);
  const content = useSelector(state => state.content); 
  const isLoaded = useSelector(state => state.profile.isLoaded);

  // Reloading profile 
  useEffect(() => {
    async function fetch() { dispatch(getProfile(user.profile)) }; 
    fetch();
  }, [dispatch, user.profile]);

  //Alternative solution from making a list of API calls 
  //For each project in the profile, searchs through the content list for a matching id 
  //Adds to array if project is found (otherwise currently does nothing)
  const getProjects = () => {  
    const projects = []; 
    if(isLoaded){
      const contentLength = content.length; 
      const projectLength = profile.projects.length; 
      for(let i = 0; i < projectLength; i++){ 
        const id = profile.projects[i]
        for(let j = 0; j < contentLength; j++){ 
          if(id === content[j].id){ 
            projects.push(content[j]); 
            break; 
          }
        }
      }
    }
    return projects; 
  }

  //Calls the getProjects function to get a list of projects 
  const projectList = getProjects(); 

  //Will only load the profile if its completely loaded 
  return(
    <div className="flex-wrap pt-3 pb-2 mb-3">
      <Row>
        <h1 className="h2 ml-5 mt-5">Your Profile</h1>
      </Row>
      {isLoaded && <ProfileItem profile = {profile} projects ={projectList} />}
    </div>
  );
}
 