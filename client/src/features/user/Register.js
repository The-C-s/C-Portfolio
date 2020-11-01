import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { FormInput } from 'shards-react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HashLoader from 'react-spinners/HashLoader';
import ReactPasswordStrength from 'react-password-strength';

import { register, login } from './userSlice';
import { createProfile } from '../profile/profileSlice';

export default function Register() {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const registering = useSelector(state => state.app.loading.register);
  const loggingIn = useSelector(state => state.app.loading.login);
  const [form, updateForm] = useState({ name: '', email: '', password: '', confirmPass: ''});
  const [formErrors, setFormErrors] = useState({});
  
  const onSubmitHandler = e => {
    
    e.preventDefault();
    dispatch(register(form))
    .then(dispatch(login(form)))
    .then(dispatch(createProfile({email: form.email})))
    .then(() => history.push('/homepage')); 
    
  }
  
  const onChangeHandler = e => {
    updateForm({ ...form, [e.target.id]: e.target.value });
    validateForm();
  }

  const validateForm = val => {
    console.log(val);
  }
  
  return(
    <div className="form-box">
      <Form className="signup-form" onSubmit={onSubmitHandler}>
        <h2>Register</h2>
        <hr/>
        <Form.Group>
          <FormInput
            type="text" 
            id="username"
            placeholder="Username" 
            value={form.username}
            onChange={onChangeHandler}
            className="form-control"
          />
        </Form.Group>
        <Form.Group>
          <FormInput
            type="email" 
            id="email"
            placeholder="Email Address" 
            value={form.email}
            onChange={onChangeHandler}
            className="form-control"
          />
        </Form.Group>
        <Form.Group>
          <ReactPasswordStrength
            scoreWords={['weak', 'okay', 'good', 'strong', 'very strong']}
            inputProps={{
              id: 'password',
              placeholder: 'Password',
              value: form.password,
              onChange: onChangeHandler,
              className: `form-control${formErrors.passStrength ? ' is-invalid' : ''}`
            }}
          />
          {/* <FormInput
            type="password"  
            id="password" 
            placeholder="Password" 
            value={form.password}
            onChange={onChangeHandler}
            className="form-control"
          /> */}
        </Form.Group>
        <Form.Group>
          <FormInput
            type="password"  
            id="confirmPass" 
            placeholder="Confirm Password" 
            value={form.confirmPass}
            onChange={onChangeHandler}
            className="form-control"
            invalid={true}
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
