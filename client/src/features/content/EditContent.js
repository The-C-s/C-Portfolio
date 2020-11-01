import React, { useState } from "react";
import { useDispatch } from "react-redux";

//rich text editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { editContent, getContent } from "./contentSlice";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import {FormRadio } from "shards-react";
import { parseISO } from "date-fns";

export default function EditContent({ content, show, closeHandler }) {
  //console.log(content);
  const [_content, updateContent] = useState(content);
  //set richtext to blank if the content is a cloudinary link, the content otherwise
  const [_richText, updateRichText] = useState(
    !content.content || content.content.includes("res.cloudinary.com")
      ? ""
      : content.content
  );
  const [_file, updateFile] = useState();
  const [_tags, updateTags] = useState(content.tags);
  const [_date, updateDate] = useState(parseISO(_content.displayDate));

  const [showFile, setShowFile] = useState(false);

  const toggleContentType = () => setShowFile(!showFile);


  const dispatch = useDispatch();
  const editClickHandler = () => {
    console.log(_content);

    //convert to FormData so we can send files
    const _data = new FormData();
    for (let field in _content) {
      _data.set(field, _content[field]);
    }
    if (showFile && _file) {
      _data.set("file", _file);
      _data.delete("content");
    } else if (!showFile) {
      _data.set("content", _richText);
    }

    dispatch(editContent(_data))
      .then(() => dispatch(getContent()))
      .then(() => closeHandler());
  };

  const deleteFileAndCloseHandler = (e) => {
    updateFile("undefined");
    closeHandler();
  };

  const onDateChangeHandler = (date) => {
    updateDate(date);
    const isoDate = new Date(date).toISOString();
    updateContent({ ...content, displayDate: isoDate });
  };

  // Input fields are based on state, so typing in them won't work unless we also change the state
  const onChangeHandler = (e) =>
    updateContent({ ..._content, [e.target.id]: e.target.value });
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

  const onChangeTagField = (e) => {
    //Copy and updates tmp array
    const tmp = [..._tags];
    tmp[e.target.id] = e.target.value;
    //Updates education array and profile in react state
    updateTags(tmp);
    updateContent({ ...content, tags: tmp });
  };

  //Adds an empty tag field
  const addTagField = () => {
    const tmp = [..._tags, ""];
    updateTags(tmp);
    updateContent({ ...content, tags: tmp });
  };

  //Deletes a tag field
  const deleteTagField = (id) => {
    const tmp = [..._tags];
    //Removes index
    tmp.splice(id, 1);
    updateTags(tmp);
    updateContent({ ...content, tags: tmp });
  };

  return (
    <Modal size="lg" show={show} onHide={closeHandler}>
      <Modal.Header>
        <Modal.Title>Edit Content</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={_content.title}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={_content.description}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <div className="content">
            <FormRadio
              inline
              name="contenttype"
              checked={!showFile}
              onChange={toggleContentType}
            >
              Text
            </FormRadio>
            <FormRadio
              inline
              name="filetype"
              checked={showFile}
              onChange={toggleContentType}
            >
              File
            </FormRadio>
            </div>
          {!showFile ? (
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <ReactQuill
                modules={{ toolbar: enabledTools }}
                theme="snow"
                value={_richText}
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
          <Form.Group className="mt-3" controlId="tags">
            <Form.Label>Tags</Form.Label>
          </Form.Group>
          {_tags.map((tag, i) => (
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
          <div className="mb-3">
            <Form.Label>Date</Form.Label>
            <br />
            <DatePicker
              selected={_date}
              onSelect={(date) => onDateChangeHandler(date)}
            />
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={deleteFileAndCloseHandler}>
          Cancel
        </Button>
        <Button variant="warning" onClick={editClickHandler}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
