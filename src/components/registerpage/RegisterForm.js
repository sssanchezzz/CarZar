import React from 'react';

const RegisterForm = () => {
    return (
        <div className='register-wrapper'>
            <div className='register-form-wrapper'>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Name:</p>
                    <input type='text' className='register-form-input' />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Surname:</p>
                    <input type='text' className='register-form-input' />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Email:</p>
                    <input type='text' className='register-form-input' />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Birthday:</p>
                    <input type='text' className='register-form-input' />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>City:</p>
                    <input type='text' className='register-form-input' />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Phone:</p>
                    <input type='text' className='register-form-input' />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Password:</p>
                    <input type='text' className='register-form-input' />
                </div>
                <div className='register-form-input-wrapper'>
                    <p className='register-form-text'>Password:</p>
                    <input type='text' className='register-form-input' />
                </div>
            </div>
            <div className='register-button-wrapper'>
                <button className='register-button'>REGISTER</button>
            </div>
        </div>
    );
};

export default RegisterForm;
