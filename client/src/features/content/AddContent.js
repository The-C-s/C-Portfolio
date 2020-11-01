import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//rich text editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { createContent, getContent } from "../content/contentSlice";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { FormRadio, Modal, ModalBody } from "shards-react";
import HashLoader from "react-spinners/HashLoader";
import InputGroup from "react-bootstrap/InputGroup";
import DatePicker from "react-datepicker";

export default function AddContent() {
  const dispatch = useDispatch();

  const uploading = useSelector((state) => state.app.loading.createContent);

  const [content, updateContent] = useState({});
  const [tags, updateTags] = useState([]);
  const [richText, updateRichText] = useState("");
  const [file, updateFile] = useState();
  const [contentIsFile, setContentIsFile] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onSubmitHandler = (e) => {
    // Prevent 'Submit' from actually doing a traditional submit
    e.preventDefault();

    //convert to FormData so we can send files
    const data = new FormData();
    for (let field in content) {
      data.set(field, content[field]);
    }
    if (contentIsFile && file) {
      data.set("file", file);
    } else if (!contentIsFile) {
      data.set("content", richText);
    }

    // Send API call, then re-fetch content and change dashboard view back to default (currently 'dashboard')
    dispatch(createContent(data)).then(() => {
      resetForm();
      toggleConfirmation();
      dispatch(getContent());
    });
  };

  const toggleContentType = () => setContentIsFile(!contentIsFile);

  const onChangeHandler = (e) =>
    updateContent({ ...content, [e.target.id]: e.target.value });
  const onDateChangeHandler = (date) =>
    updateContent({ ...content, displayDate: date });

  const resetForm = () => {
    updateContent({ title: "", description: "" });
    updateRichText("");
  };

  const onContentChangeHandler = (e) => updateRichText(e);

  const onFileChosenHandler = (e) => updateFile(e.target.files[0]);

  const toggleConfirmation = () => setShowConfirmation(!showConfirmation);

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

  //Adds an empty tag field
  const addTagField = () => {
    const tmp = [...tags, ""];
    updateTags(tmp);
    updateContent({ ...content, tags: tmp });
  };

  //Deletes a tag field
  const deleteTagField = (id) => {
    const tmp = [...tags];
    //Removes index
    tmp.splice(id, 1);
    updateTags(tmp);
    updateContent({ ...content, tags: tmp });
  };

  const onChangeTagField = (e) => {
    //Copy and updates tmp array
    const tmp = [...tags];
    tmp[e.target.id] = e.target.value;
    //Updates education array and profile in react state
    updateTags(tmp);
    updateContent({ ...content, tags: tmp });
  };

  return (
    <>
      <Modal open={showConfirmation} toggle={toggleConfirmation} size="sm">
        <ModalBody className="addcontent-confirmation-modal">
          <div className="addcontent-confirmation-modal">
            Success!
            <Link className="addcontent-next-btn" to="/dashboard/content">
              <strong>See content</strong> →
            </Link>
          </div>
        </ModalBody>
      </Modal>
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
            <FormRadio
              inline
              name="contenttype"
              checked={!contentIsFile}
              onChange={toggleContentType}
            >
              Text
            </FormRadio>
            <FormRadio
              inline
              name="contenttype"
              checked={contentIsFile}
              onChange={toggleContentType}
            >
              File
            </FormRadio>
            <Row>
              <div>
                {"\n"}
                {"\n"}
              </div>
            </Row>
            <div className="content">
              <div className="content-box">
                <div className="content-heading">Content</div>
              </div>
              {!contentIsFile ? (
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
                  <input
                    type="file"
                    name="file"
                    onChange={onFileChosenHandler}
                  />
                </Form.Group>
              )}
            </div>
            <div className="tags">
              <div className="tags-box">
                <div className="content-heading">Tags</div>
              </div>
            </div>
            {tags.map((tag, i) => (
              <Form.Group controlId={i}>
                <InputGroup className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows="1"
                    value={tag}
                    onChange={onChangeTagField}
                  />
                  <InputGroup.Append>
                    <Button
                      variant="outline-secondary"
                      id={i}
                      onClick={(e) => deleteTagField(i)}
                    >
                      Delete
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            ))}
            <Row className="ml-1 mb-3">
              <div>
                <Button onClick={addTagField}>Add Tag</Button>
                <br />
              </div>
            </Row>
          </div>
          <div className="time">
            <div className="time-box">
              <div className="time-heading">Date</div>
            </div>
          </div>
          <div className="mb-3">
            <DatePicker
              selected={content.displayDate}
              onSelect={(date) => onDateChangeHandler(date)}
            />
          </div>
          <Button type="submit" variant="info">
            {uploading ? (
              <>
                Uploading{" "}
                <span className="spinner-login">
                  <HashLoader size={20} color={"#ffffff"} loading={uploading} />
                </span>
              </>
            ) : (
              "Create"
            )}
          </Button>
        </div>
      </Form>
    </>
  );
}
