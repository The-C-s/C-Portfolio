import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

//rich text editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { createContent, getContent } from "../content/contentSlice";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row"; 
export default function AddContent() {
  /*
   * useState is a React hook and unrelated to Redux. Creates a little
   * private state inside the component, in this case is used to just handle
   * what's in the input fields before we send it off to Redux.
   */

  const [content, updateContent] = useState({});
  const [richText, updateRichText] = useState("");
  const [file, updateFile] = useState();

  const [showFile, setShowFile] = useState(false);
  const toggleShowFileOff = () => setShowFile(false);
  const toggleShowFileOn = () => setShowFile(true);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitHandler = (e) => {
    // Prevent 'Submit' from actually doing a traditional submit
    e.preventDefault();

    //convert to FormData so we can send files
    const data = new FormData();
    for (let field in content) {
      data.set(field, content[field]);
    }
    if (showFile && file) {
      data.set("file", file);
    } else if (!showFile) {
      data.set("content", richText);
    }

    // Send API call, then re-fetch content and change dashboard view back to default (currently 'dashboard')
    dispatch(createContent(data))
      .then(() => dispatch(getContent()))
      .then(() => history.push('/dashboard/content'));
  };


  // Input fields are based on state, so typing in them won't work unless we also change the state
  const onChangeHandler = (e) =>
    updateContent({ ...content, [e.target.id]: e.target.value });
  const onContentChangeHandler = (e) => updateRichText(e);
  const onFileChosenHandler = (e) => updateFile(e.target.files[0]);

  const enabledTools = [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ];

  return (
    <React.Fragment>
      <div className="pageheading-rectangle1">
        <h1 className="pageheading-heading">Add Content</h1>
        <div className="pageheading-decoration1" />
        <div className="pageheading-decoration2" />
      </div>
      <Form className="mt-5" onSubmit={onSubmitHandler}>
        <div className="addcontent">
          <div className="title">
            <div className="title-box">
              <div className="title-heading">Title</div>
            </div>
            <Form.Group controlId="title">
              <Form.Control
                className="title-input"
                type="text"
                value={content.title}
                onChange={onChangeHandler}
              />
            </Form.Group>
          </div>
          <div className="description">
            <div className="description-box">
              <div className="description-heading">Description</div>
            </div>
            <Form.Group controlId="description">
              <Form.Control
                as="textarea"
                rows="5"
                value={content.description}
                onChange={onChangeHandler}
              />
            </Form.Group>
          </div>
          <div className="content">
          <Button variant="primary" onClick={toggleShowFileOff}>
            {" "}
            Text</Button>
            <Button variant="primary" onClick={toggleShowFileOn}>
              {" "}
              File{" "}
            </Button>
            <Row>
            <div>{"\n"}{"\n"}</div>
            </Row>
            <div className="content">
            <div className="content-box">
              <div className="content-heading">Content</div>
            </div>
            {!showFile ? (
              <Form.Group controlId="content">
                <ReactQuill
                  modules={{ toolbar: enabledTools }}
                  theme="snow"
                  value={richText}
                  onChange={onContentChangeHandler}
                />
              </Form.Group>
            ) : (
              <Form.Group controlId="file">
                <Form.Label>File</Form.Label>
                <br />
                <input type="file" name="file" onChange={onFileChosenHandler} />
              </Form.Group>
            )}
          </div>
          </div>
          <Button type="submit" variant="info">
            Create
          </Button>
        </div>
      </Form>
    </React.Fragment>
  );
}
