import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {editUser} from './userSlice';
import Modal from 'react-bootstrap/esm/Modal';
import Image from 'react-bootstrap/Image';

export default function EditUser({show, closeHandler, user}) {
    //const user = useSelector(state => state.user);

    //Initialised with the user fields.
    const [_user, updateDetails] = useState(user);
    const dispatch = useDispatch();

    console.log({user});
    console.log({_user});

    //submits the new user details to the server to update in the database
    const handleEditUser = () => {
        dispatch(editUser(_user))
        .then(closeEditHandler);
    };

    const closeEditHandler = () => setShowUserEdit(false);

    const [showUserEdit, setShowUserEdit] = useState(false);

    //source of truth for the user details, updated alongside the form when editing
    const onChangeHandler = e => updateDetails({ ..._user, [e.target.id]: e.target.value});
    

    return (
    <React.Fragment>
        <Modal show = {show} onHide = {closeHandler}>
        <Modal.Header><Modal.Title>Edit User Details</Modal.Title></Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId = "username">
            <Form.Control as="textarea" rows = "1" value = {_user.username} onChange = {onChangeHandler}/>
        </Form.Group>
          <Form.Group controlId="firstName">
            <Form.Label>firstName</Form.Label>
            <Form.Control as="textarea" rows="1" value={_user.firstName} onChange={onChangeHandler}/>
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>lastName</Form.Label>
            <Form.Control as="textarea" rows="1" value={_user.lastName} onChange={onChangeHandler}/>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="warning" onClick = {handleEditUser}>Save changes</Button>
            <Button variant="link" onClick={closeEditHandler}>Cancel</Button>
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