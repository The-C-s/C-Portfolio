import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from './userSlice';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login({ onLogin }) {

  const [form, updateForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const onSubmitHandler = e => {

    e.preventDefault();

    dispatch(login(form))
      .then(() => onLogin());
  }

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
        <Button type="submit" variant="primary">Login</Button>
      </Form>
    </div>
  );
}
