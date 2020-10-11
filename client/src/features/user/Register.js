import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HashLoader from 'react-spinners/HashLoader';

import { register, login } from './userSlice';

export default function Register() {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const registering = useSelector(state => state.app.loading.register);
  const loggingIn = useSelector(state => state.app.loading.login);
  const [form, updateForm] = useState({ name: '', email: '', password: '', password2: ''});
  
  const onSubmitHandler = e => {
    
    e.preventDefault();
    
    dispatch(register(form))
      .then(() => dispatch(login(form)))
      .then(() => history.push('/dashboard'));
  }
  
  const onChangeHandler = e => updateForm({ ...form, [e.target.id]: e.target.value });
  
  return(
    <div className="form-box">
      <Form className="signup-form" onSubmit={onSubmitHandler}>
        <h2>Register</h2>
        <hr/>
        <Form.Group>
          <Form.Control
            type="text" 
            id="username"
            placeholder="Username" 
            value={form.username}
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
        <Button type="submit" onClickHandler={onSubmitHandler} variant="primary">
          {registering || loggingIn
              ? <>Signing you up <span className="spinner-login"><HashLoader size={20} color={"#ffffff"} loading={registering}/></span></>
              : "Sign up"}
        </Button>
        <div className="text-center"> Already have an account?<Button as={Link} to="/" variant="link">Login here</Button></div>
      </Form>
    </div>
  );
}
  