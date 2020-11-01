import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProfile } from '../profile/profileSlice';
import Row from 'react-bootstrap/Row';
import Skeleton from 'react-loading-skeleton';

import ProfileItem from '../profile/ProfileItem';

// Contains the user's profile
export default function Profile() {

  const dispatch = useDispatch();
  //Getting the user and profile details 
  const user = useSelector(state => state.user);
  const profile = useSelector(state => state.profile);
  const content = useSelector(state => state.content); 
  const isLoaded = useSelector(state => state.profile.isLoaded);

  console.log(profile);
  console.log(user); 
  // Reloading profile
  useEffect(() => {

    async function fetch() { dispatch(getProfile(user.profile)) }

    // Skip loading if already in state
    if (user.profile && user.profile !== profile.id) fetch();
  }, [dispatch, user, profile]);

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
    <div>
      <div>
      <Row>
        <div className ="pageheading-rectangle1" ><h1 className="pageheading-heading">Your Profile</h1></div>        <div className = "pageheading-rectangleMash"></div>
        <div className = "pageheading-decoration1"/>
        <div className = "pageheading-decoration2"/>
      </Row>
      </div>
      <Row>
      <div className = "mt-2">
      {isLoaded ? <ProfileItem profile = {profile} projects ={projectList} />: <><h1><Skeleton/></h1><p><Skeleton count={3}/></p></>}
      </div>
      </Row>
    </div>
  );
}
 