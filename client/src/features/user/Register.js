import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { register } from './userSlice';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'

export default function Register() {

    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const [form, updateForm] = useState({ name: '', email: '', password: '', password2: ''});
    const dispatch = useDispatch();
    const history = useHistory();
  
    const onSubmitHandler = e => {
  
      e.preventDefault();
  
      dispatch(register(form, history));
    }
  
    useEffect(() => { if (isAuthenticated) history.push('/dashboard') });
  
    const onChangeHandler = e => updateForm({ ...form, [e.target.id]: e.target.value });
  
    return(
      <div className="form-box">
        <Form className="signup-form" onSubmit={onSubmitHandler}>
        <div><Nav.Link href="/"><i className="fa fa-arrow-circle-left  "></i> Back to Home</Nav.Link></div>
          <h2>Register</h2>
          <hr/>
          <Form.Group>
            <Form.Control
              type="text" 
              id="name"
              placeholder="Name" 
              value={form.name}
              onChange={onChangeHandler}
              className="form-control"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="email" 
              id="email"
              placeholder="Email Address" 
              value={form.email}
              onChange={onChangeHandler}
              className="form-control"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"  
              id="password" 
              placeholder="Password" 
              value={form.password}
              onChange={onChangeHandler}
              className="form-control"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"  
              id="password2" 
              placeholder="Confirm Password" 
              value={form.password2}
              onChange={onChangeHandler}
              className="form-control"
            />
          </Form.Group>
          <Button type="submit" block variant="primary">Sign Up</Button>
          <div className="text-center"> Already have an account? <Nav.Link href="/login">Login here</Nav.Link></div>
        </Form>
      </div>
    );
  }
  