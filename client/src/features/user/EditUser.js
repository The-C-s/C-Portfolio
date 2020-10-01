import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {editUser, setUser} from './userSlice';
import Modal from 'react-bootstrap/esm/Modal';
import Image from 'react-bootstrap/Image';

export default function EditUser({show, closeHandler, user}) {
    //const user = useSelector(state => state.user);

    const userFromState = useSelector(state => state.user);


    //Initialised with the user fields.

    const [_user, updateDetails] = useState(user);
    const dispatch = useDispatch();

    //useSelector(state => state.user)
    //console.log({user});

    //submits the new user details to the server to update in the database
    const handleEditUser = () => {
        dispatch(editUser(_user))
        .then(closeHandler);
    };

    //const closeEditHandler = () => closeHandler;

    const [showUserEdit, setShowUserEdit] = useState(false);

    //source of truth for the user details, updated alongside the form when editing
    const onChangeHandler = e => updateDetails({ ..._user, [e.target.id]: e.target.value});

    const resetHandler = () => {
      //
      updateDetails(userFromState);
      console.log(_user);
      console.log(userFromState);
    }
    
    //<img src="..." class="rounded mx-auto d-block" alt="...">

    return (
    <React.Fragment>
        <Modal show = {show} onHide = {closeHandler}>
        <Modal.Header><Modal.Title>Edit User Details</Modal.Title></Modal.Header>
        <Modal.Body>
        <Image src = {userFromState.avatar} alt = "Hello Darkness" roundedCircle className = "rounded mx-auto d-block"/>
        <Form>
        <Form.Group controlId = "username">
          <Form.Label>Username</Form.Label>
            <Form.Control as="textarea" rows = "1" value = {_user.username} onChange = {onChangeHandler}/>
        </Form.Group>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control as="textarea" rows="1" value={_user.firstName} onChange={onChangeHandler}/>
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control as="textarea" rows="1" value={_user.lastName} onChange={onChangeHandler}/>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="link" onClick = {resetHandler}>Reset Changes</Button>
            <Button variant="warning" onClick = {handleEditUser}>Save changes</Button>
            <Button variant="link" onClick={closeHandler}>Cancel</Button>
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