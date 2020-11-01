import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';

import { FormInput } from 'shards-react';
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
  const [formStatus, setFormStatus] = useState({});

  useEffect(() => {
    if (user.isAuthenticated) history.push('/homepage');
  });

  const onSubmitHandler = e => {

    e.preventDefault();

    if (form.email === '' || form.password === '') {

      setFormStatus({
        ...formStatus,
        emptyEmail: form.email === '',
        emptyPassword: form.password === ''
      });

      return;
    }

    dispatch(login(form))
      .then(unwrapResult)
      .then(() => history.push('/homepage'))
      .catch(() => setFormStatus({
        ...formStatus,
        invalidCredentials: true
      }));
  }

  const onChangeHandler = e => {

    updateForm({
      ...form,
      [e.target.id]: e.target.value
    });

    if (e.target.id === 'email') {
      setFormStatus({
        ...formStatus,
        invalidCredentials: false,
        emptyEmail: false
      });
    } else if (e.target.id === 'password') {
      setFormStatus({
        ...formStatus,
        invalidCredentials: false,
        emptyPassword: false
      });
    }
  }

  return(
    <div className="form-box">
      <Form className="login-form" onSubmit={onSubmitHandler}>
        <h2>Login</h2>
        <hr/>
        {formStatus.invalidCredentials &&
          <small className="form-text text-danger">
            Email address or password does not match any existing accounts
          </small>}
        <Form.Group>
          <FormInput
            type="email"
            id="email"
            placeholder="Email address"
            value={form.email}
            onChange={onChangeHandler}
            className="form-control"
            invalid={formStatus.emptyEmail || formStatus.invalidCredentials}
          />
        </Form.Group>
        <Form.Group>
          <FormInput
            type="password"
            id="password"
            placeholder="Password"
            value={form.password}
            onChange={onChangeHandler}
            className="form-control"
            invalid={formStatus.emptyPassword || formStatus.invalidCredentials}
          />
        </Form.Group>
        <Button className="btn-login" type="submit" variant="primary">
          {loggingIn
            ? <>Pogging in <span className="spinner-login"><HashLoader size={20} color={"#ffffff"} loading={loggingIn}/></span></>
            : "Log in"}
        </Button>
        <div className="text-center"> Don't have an account? <Button as={Link} to="/register" variant="link">Register</Button></div>
      </Form>
    </div>
  );
}