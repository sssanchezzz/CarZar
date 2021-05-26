import React from 'react';
import { Link } from 'react-router-dom';
const LoginForm = () => {
    return (
        <div className='login-form'>
            <div className='login-form-wrapper'>
                <h4>Email</h4>
                <input type='email' name='email' id='email'></input>
            </div>
            <div className='login-form-wrapper'>
                <h4>Password</h4>
                <input type='password' name='password' id='password'></input>
            </div>
            <Link className='login-link' to='/my-profile'>
                <button className='red-btn login-btn'>Login</button>
            </Link>
        </div>
    );
};
export default LoginForm;
