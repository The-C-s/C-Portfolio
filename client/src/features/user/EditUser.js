import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
//import {editUser} from './userSlice';
import apiFunctions from '../../common/api';

//const dispatch = useDispatch();


export default function EditUser() {
    const user = useSelector(state => state.user);
    const [showTest, setShowTest] = useState("World");
    const handleEditUser = () => {
        console.log("Reached Handle User");
        apiFunctions.editUser({"username" : "changedUser"});
    };

    return (
    <React.Fragment>
        <h1 className="h2 ml-5 mt-5">Username: {user.username}</h1> 
        <Button variant = "link" className = "float-right" onClick = {() => handleEditUser()}>
            Toggle
        </Button>
        <h1 className="h2 ml-5 mt-5">Created Date: {user.createdDate}</h1>
        <h1 className="h2 ml-5 mt-5">First Name: {user.firstName}</h1>
        <h1 className="h2 ml-5 mt-5">Last Name: {user.lastName}</h1>
        <h1 className="h2 ml-5 mt-5">Avatar: {user.avatar}</h1>
    </React.Fragment>
    //return <h1>Hello, world!</h1>
    //onClick = {() => editUser(user.id, {"username" : "changedUser"})
    );
}