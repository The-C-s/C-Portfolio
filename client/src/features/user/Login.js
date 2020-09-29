import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from './userSlice';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'

export default function Login() {

  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const [form, updateForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitHandler = e => {

    e.preventDefault();

    dispatch(login(form));
  }

  useEffect(() => { if (isAuthenticated) history.push('/dashboard') });

  const onChangeHandler = e => updateForm({ ...form, [e.target.id]: e.target.value });

  return(
    <div className="form-box">
      <Form className="login-form" onSubmit={onSubmitHandler}>
        <h2>Login</h2>
        <hr/>
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
        <Button type="submit" block variant="primary" rounded>Login</Button>
        <div className="text-center"> Don't have an account? <Nav.Link href="/register">Register</Nav.Link></div>
      </Form>
    </div>
  );
}
