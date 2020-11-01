import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"; 
import { useSelector } from "react-redux";
export default function Project({
  projects,
  profile,
  updateProfile,
  updateProjects,
  closeProjectField
}) {

  const content = useSelector((state) => state.content);
  const [_newProject, updateNewProject] = useState(); 

  const addProjectHandler = () => {
    //Selects content object
    const proj = selectProject(_newProject); 
    //Saves and updates the state of projects (for display)
    const tmp = [...projects, proj];
    updateProjects(tmp);

    //Saves and updates the project ids (for profile storage)
    const tmpIds = [];
    for(let i = 0; i < tmp.length; i++){ 
      tmpIds.push(tmp[i].id); 
    } 
    updateProfile({ ...profile, projects: tmpIds });
    closeProjectField(); 
  };

  //Searches content for new project id and returns the content object 
  //Cant save objects in value so this is an alternative 
  const selectProject = (id) => {
    for(let i = 0; i < content.length; i++){ 
      if(content[i].id === id){ 
        return content[i]; 
      }
    }
  }

  return (
    <React.Fragment>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Select Project</Form.Label>
          <Form.Control value = {_newProject} onChange = {(e)=>{updateNewProject(e.target.value);}} as="select" custom>
            {content.map((content) => (
              <option id={content.id} key={content.id} value = {content.id}>{content.title}</option>
            ))}
          </Form.Control>
          <br/>
          <Button onClick={addProjectHandler}> Add </Button>
        </Form.Group>
      </Form>
    </React.Fragment>
  );
}
