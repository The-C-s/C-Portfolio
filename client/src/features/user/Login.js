import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login, register } from './userSlice';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login({ onClickHandler }) {

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
        <Button type="submit" block variant="primary">Login</Button>
        <div className="text-center"> Don't have an account? <Button variant="link" onClick={onClickHandler}>Register</Button></div>
      </Form>
    </div>
  );
}