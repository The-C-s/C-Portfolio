import React from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
//import Dropdown from "react-bootstrap/Dropdown";
//import DropdownButton from "react-bootstrap/DropdownButton";
import { useSelector } from "react-redux";
export default function Project({
  projects,
  profile,
  updateProfile,
  updateProjects,
}) {
  const content = useSelector((state) => state.content);
  /*
  const addProjectHandler = (e) => {
    const tmp = [...projects, e.target.id];
    console.log(tmp);
    updateProjects(tmp);
    updateProfile({ ...profile, projects: tmp });
  };
*/

  return (
    <React.Fragment>
      <Row>
        <Form.Label className="ml-3">Select Project</Form.Label>
      </Row>
      <select name="projects" id="projects">
        {content.map((content, i) => (
          <option value={i}>{content.title}</option>
        ))}
      </select>
      <div>
        <br></br>
      </div>
      {/* doing this the long way bc brodie destroyed the dropdown button default :))) 
      <DropdownButton id="dropdown-basic-button" title="Select Project">
        {content.map((content, i) => (
          <Dropdown.Item >{content.title}</Dropdown.Item>
        ))}
      </DropdownButton>
      */}
    </React.Fragment>
  );
}
