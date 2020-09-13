import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../features/user/userSlice';

export default function Login() {

  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const [form, updateForm] = useState({ email: '', password: '' });

  const onSubmitHandler = e => {

    e.preventDefault();

    dispatch(login(form));
  }

  const onChangeHandler = e => updateForm({ ...form, [e.target.id]: e.target.value });

  useEffect(() => { if (isAuthenticated) history.push('/dashboard') });

        return(
            <div className="form-box">
            <form className="login-form" onSubmit={onSubmitHandler}>
                <h2>Login</h2>
                <hr/>
                <div className="form-group">
                    <input type="email" 
                           id="email"
                           placeholder="Email Address" 
                           value={form.email}
                           onChange={onChangeHandler}
                           className="form-control"
                           />
                </div>
                <div className="form-group">
                    <input type="password"  
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
