import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from './userSlice';

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
      <form className="login-form" onSubmit={onSubmitHandler}>
        <h2>Login</h2>
        <hr/>
        <div className="form-group">
          <input
            type="email" 
            id="email"
            placeholder="Email Address" 
            value={form.email}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"  
            id="password" 
            placeholder="Password" 
            value={form.password}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block btn-lg">Login</button>
        </div>
      </form>
    </div>
  );
}
