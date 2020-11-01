import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {
  editUser,
  uploadUserAvatar,
  uploadUserBackground,
  authenticate,
} from "./userSlice";
import Modal from "react-bootstrap/esm/Modal";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";

export default function EditUser({ show, closeHandler, user }) {
  //const user = useSelector(state => state.user);

  const userFromState = useSelector((state) => state.user);

  //Initialised with the user fields.
  const dispatch = useDispatch();

  const [_user, updateDetails] = useState(user);
  const [_avatar, updateAvatar] = useState();
  const [_background, updateBackground] = useState();
  const [_emails, updateEmails] = useState(user.emails ? user.emails : []);

  //Uploads to redux
  const onAvatarUploadHandler = (e) => updateAvatar(e.target.files[0]);
  const onBackgroundUploadHandler = (e) => updateBackground(e.target.files[0]);

  //Deletes redux states
  const deleteAvatarHandler = () => updateAvatar("undefined");
  const deleteBackgroundHandler = () => updateBackground("undefined");

  //Makes API Calls
  const saveAvatarHandler = () => {
    const _data = new FormData();
    _data.set("file", _avatar);
    _data.set("username", "");
    dispatch(uploadUserAvatar(_data))
      .then(() => dispatch(authenticate()))
      .then(() => closeHandler());
  };

  const saveBackgroundHandler = () => {
    const _data = new FormData();
    _data.set("file", _background);
    _data.set("username", "");
    dispatch(uploadUserBackground(_data))
      .then(() => dispatch(authenticate()))
      .then(() => closeHandler());
  };

  //submits the new user details to the server to update in the database
  const handleEditUser = () => {
    dispatch(editUser(_user))
      .then(() => dispatch(authenticate()))
      .then(closeHandler);
  };

  //source of truth for the user details, updated alongside the form when editing
  const onChangeHandler = (e) =>
    updateDetails({ ..._user, [e.target.id]: e.target.value });

  const resetHandler = () => {
    //
    updateDetails(userFromState);
  };

  const onChangeEmailsHandler = (e) => {
    //Copy and updates tmp array
    const tmp = [..._emails];
    tmp[e.target.id] = e.target.value;
    updateEmails(tmp);
    updateDetails({ ..._user, emails: tmp });
  };

  const addEmailsField = () => {
    const tmp = [..._emails, ""];
    updateEmails(tmp);
    updateDetails({ ..._user, emails: tmp });
  };

  const deleteEmailsField = (id) => {
    const tmp = [..._emails];
    //Removes index
    tmp.splice(id, 1);
    updateEmails(tmp);
    updateDetails({ ..._user, emails: tmp });
  };

  //<img src="..." class="rounded mx-auto d-block" alt="...">

  return (
    <React.Fragment>
      <Modal show={show} onHide={closeHandler}>
        <Modal.Header>
          <Modal.Title>Edit User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Image
              src={userFromState.avatar}
              alt="Hello Darkness"
              roundedCircle
              className="rounded mx-auto d-block"
            />
          </Row>
          <br />
          <Form.Group controlId="avatar">
            <Form.Label>Avatar</Form.Label>
            <br />
            <input
              className="mb-3"
              type="file"
              name="avatar"
              onChange={onAvatarUploadHandler}
            />
            <br />
          </Form.Group>
          <Row>
            <Button className="ml-2" onClick={saveAvatarHandler}>
              Save Avatar
            </Button>
            <Button className="ml-3" onClick={deleteAvatarHandler}>
              Delete Avatar
            </Button>
          </Row>
          <br />
          <Form.Group controlId="background">
            <Form.Label>Background</Form.Label>
            <br />
            <input
              className="mb-3"
              type="file"
              name="background"
              onChange={onBackgroundUploadHandler}
            />
            <br />
          </Form.Group>
          <Row>
            <Button className="ml-2" onClick={saveBackgroundHandler}>
              Save Background
            </Button>
            <Button className="ml-3" onClick={deleteBackgroundHandler}>
              Delete Background
            </Button>
          </Row>
          <br />
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                as="textarea"
                rows="1"
                value={_user.username}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                as="textarea"
                rows="1"
                value={_user.firstName}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                as="textarea"
                rows="1"
                value={_user.lastName}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Main Email</Form.Label>
              <Form.Control
                as="textarea"
                rows="1"
                value={_user.email}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mt-3" controlId="emails">
              <Form.Label>Additional Emails</Form.Label>
            </Form.Group>
            {_emails.map((emails, i) => (
              <Form.Group controlId={i}>
                <InputGroup className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows="1"
                    value={emails}
                    onChange={onChangeEmailsHandler}
                  />
                  <InputGroup.Append>
                    <Button
                      variant="outline-secondary"
                      id={i}
                      onClick={(e) => deleteEmailsField(i)}
                    >
                      Delete
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            ))}
            <Button onClick={addEmailsField}>Add Additional Email</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={resetHandler}>
            Reset Changes
          </Button>
          <Button variant="warning" onClick={handleEditUser}>
            Save changes
          </Button>
          <Button variant="link" onClick={closeHandler}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

/* <Button variant = "link" className = "float-right" onClick = {() => setShowUserEdit(true)}>
            Edit
        </Button>
        <Image src = {user.avatar} alt = "Hello Darkness"/>
        <h1 className="h2 ml-5 mt-5">Username: {user.username}</h1> 
        <h1 className="h2 ml-5 mt-5">First Name: {user.firstName}</h1>
        <h1 className="h2 ml-5 mt-5">Last Name: {user.lastName}</h1> */
