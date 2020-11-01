import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';

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
  const creatingProfile = useSelector(state => state.app.loading.createProfile);
  const loggingIn = useSelector(state => state.app.loading.login);
  const [form, updateForm] = useState({ username: '', email: '', password: '', confirmPass: ''});
  const [formStatus, setFormStatus] = useState({});
  
  const onSubmitHandler = e => {
    
    e.preventDefault();

    if (
      !formStatus.isPassValid ||
      !formStatus.doesPassMatch ||
      !form.username ||
      !form.email ||
      !form.password ||
      !form.confirmPass
      ) {

      setFormStatus({
        ...formStatus,
        userError: true,
        userComment: 'Please fix the errors in the form before submitting',
        emptyUsername: !form.username,
        emptyEmail: !form.email
      });

      return;
    }

    dispatch(register(form))
      .then(unwrapResult)
      .then(() => dispatch(login(form)))
      .then(() => dispatch(createProfile({ email: form.email })))
      .then(() => history.push('/homepage'))
      .catch(() => setFormStatus({
        ...formStatus,
        userExists: true,
        userComment: 'This username or email address already exists'
      }));
  }
  
  const onChangeHandler = e => {

    updateForm({
      ...form,
      [e.target.id]: e.target.value
    });

    setFormStatus({
      ...formStatus,
      userError: false
    });

    if (e.target.id === 'confirmPass') {
      setFormStatus({
        ...formStatus,
        doesPassMatch: e.target.value === form.password,
        confirmClasses: e.target.value === form.password ? 'is-valid' : 'is-invalid'
      });
    } else if (e.target.id === 'username') {
      setFormStatus({
        ...formStatus,
        userExists: false,
        emptyUsername: false
      });
    } else if (e.target.id === 'email') {
      setFormStatus({
        ...formStatus,
        userExists: false,
        emptyEmail: false
      });
    }
  }

  const handlePassChange = passState => {

    updateForm({
      ...form,
      password: passState.password
    });

    const comment = {
      0: 'Too short',
      1: 'Weak',
      2: 'Okay',
      3: 'Good',
      4: 'Strong'
    }

    setFormStatus({
      ...formStatus,
      isPassValid: passState.isValid,
      passClasses: passState.isValid ? 'is-valid' : 'is-invalid',
      passComment: comment[passState.score]
    });
  }
  
  return(
    <div className="register form-box">
      <Form className="signup-form" onSubmit={onSubmitHandler}>
        <h2>Register</h2>
        <hr/>
        <Form.Group>
          {(formStatus.userExists || formStatus.userError) &&
              <small className="form-text text-danger">
                {formStatus.userComment}
              </small>}
          <FormInput
            type="text" 
            id="username"
            placeholder="Username" 
            value={form.username}
            onChange={onChangeHandler}
            className="form-control"
            invalid={formStatus.userExists || formStatus.emptyUsername}
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
            invalid={formStatus.userExists || formStatus.emptyEmail}
          />
        </Form.Group>
        <Form.Group className="register-password">
          <ReactPasswordStrength
            changeCallback={handlePassChange}
            inputProps={{
              id: 'password',
              placeholder: 'Password',
              value: form.password,
              onChange: onChangeHandler,
              className: `form-control ${formStatus.passClasses}`
            }}
          />
          {formStatus.isPassValid !== undefined &&
            <small className={`form-text${!formStatus.isPassValid ? ' text-danger' : ''}`}>
              {formStatus.passComment}
            </small>}
        </Form.Group>
        <Form.Group>
          <FormInput
            type="password"  
            id="confirmPass" 
            placeholder="Confirm Password" 
            value={form.confirmPass}
            onChange={onChangeHandler}
            className={`form-control ${formStatus.confirmClasses}`}
          />
          {formStatus.doesPassMatch !== undefined && !formStatus.doesPassMatch &&
            <small className="form-text text-danger">
              Passwords don't match
            </small>}
        </Form.Group>
        <Button type="submit" onClick={onSubmitHandler} variant="primary">
        {registering || loggingIn || creatingProfile
          ? <>
              {creatingProfile ? 'Creating your profile' : loggingIn ? 'Logging you in' : 'Signing you up'}
              <span className="spinner-login"><HashLoader size={20} color={"#ffffff"} loading={registering || loggingIn || creatingProfile}/></span>
            </>
          : "Sign up"}
        </Button>
        <div className="text-center"> Already have an account?<Button as={Link} to="/" variant="link">Login here</Button></div>
      </Form>
    </div>
  );
}
