import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {editUser} from './userSlice';
import Modal from 'react-bootstrap/esm/Modal';

export default function EditUser() {
    const user = useSelector(state => state.user);

    //Initialised with the user fields.
    const [_details, updateDetails] = useState(user);
    const dispatch = useDispatch();


    //submits the new user details to the server to update in the database
    const handleEditUser = () => {
        dispatch(editUser(_details))
        .then(closeEditHandler);
    };

    const closeEditHandler = () => setShowUserEdit(false);

    const [showUserEdit, setShowUserEdit] = useState(false);

    //source of truth for the user details, updated alongside the form when editing
    const onChangeHandler = e => updateDetails({ ..._details, [e.target.id]: e.target.value});
    

    return (
    <React.Fragment>
        <Modal show = {showUserEdit} onHide = {closeEditHandler}>
        <Modal.Header><Modal.Title>Edit User Details</Modal.Title></Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId = "username">
            <Form.Control as="textarea" rows = "1" value = {_details.username} onChange = {onChangeHandler}/>
        </Form.Group>
          <Form.Group controlId="firstName">
            <Form.Label>firstName</Form.Label>
            <Form.Control as="textarea" rows="1" value={_details.firstName} onChange={onChangeHandler}/>
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>lastName</Form.Label>
            <Form.Control as="textarea" rows="1" value={_details.lastName} onChange={onChangeHandler}/>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="warning" onClick = {handleEditUser}>Save changes</Button>
            <Button variant="link" onClick={closeEditHandler}>Cancel</Button>
        </Modal.Footer>
        </Modal>
        <Button variant = "link" className = "float-right" onClick = {() => setShowUserEdit(true)}>
            Edit
        </Button>
        <img src = "https://icon-library.com/images/default-user-icon/default-user-icon-6.jpg" alt = "profile image"></img>
        <h1 className="h2 ml-5 mt-5">Username: {user.username}</h1> 
        <h1 className="h2 ml-5 mt-5">First Name: {user.firstName}</h1>
        <h1 className="h2 ml-5 mt-5">Last Name: {user.lastName}</h1>
    </React.Fragment>
    );
}