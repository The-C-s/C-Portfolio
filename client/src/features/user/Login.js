import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HashLoader from 'react-spinners/HashLoader';

import { login } from './userSlice';

export default function Login({ onLogin }) {

  const dispatch = useDispatch();
  const history = useHistory();
  const loggingIn = useSelector(state => state.app.loading.login);
  const user = useSelector(state => state.user);
  const [form, updateForm] = useState({ email: '', password: '' });

  useEffect(() => {
    if (user.isAuthenticated) history.push('/homepage');
  });

  const onSubmitHandler = e => {

    e.preventDefault();

    dispatch(login(form))
      .then(() => history.push('/homepage'));
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
        <Button className="btn-login" type="submit" variant="primary">
          {loggingIn
            ? <>Logging in <span className="spinner-login"><HashLoader size={20} color={"#ffffff"} loading={loggingIn}/></span></>
            : "Log in"}
        </Button>
        <div className="text-center"> Don't have an account? <Button as={Link} to="/register" variant="link">Register</Button></div>
      </Form>
    </div>
  );
}