import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProfile } from '../profile/profileSlice';
import { getSingleContent } from '../content/contentSlice'; 
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
  //const [loadProfile, setProfileStatus] = useState(false);
  // Reloading profile 
  useEffect(() => {
    async function fetch() { dispatch(getProfile(user.profile)) }; 
    fetch();
  }, [dispatch, user.profile]);

  //Alternative solution from making a list of API calls 
  //Kinda inefficient? 
  const getProjects = () => {  
    const projects = []; 
    if(isLoaded){
      const contentLength = content.length; 
      const projectLength = profile.projects.length; 
      for(let i = 0; i < projectLength; i++){ 
        const id = profile.projects[i]
        for(let j = 0; j < contentLength; j++){ 
          if(id === content[j].id){ 
            const post = content[j]; 
            projects.push(content[j]); 
            break; 
          }
        }
      }
    }
    return projects; 
  }
  const projectList = getProjects(); 

  /*
  //Given a single post id gets the post 
  async function getPost(id){ 
      const post = await getSingleContent(id); 
      console.log(id); 
      console.log("test");
      console.log(post); 
      return post; 
  }

  const getProjects = async(projects) => { 
    const requests = projects.map((project)=> {getPost(project)})
    console.log("test 2"); 
    console.log(Promise.all(requests)); 
    return Promise.all(requests).then(values => console.log(values)); 
  }
  */
  return(
    <div className="flex-wrap pt-3 pb-2 mb-3">
      <Row>
        <h1 className="h2 ml-5 mt-5">Your Profile</h1>
      </Row>
      {isLoaded && <ProfileItem profile = {profile} projects ={projectList} />}
    </div>
  );
}
 