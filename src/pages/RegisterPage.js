import React from 'react';
import Header from '../components/Header';

import '../scss/register_page.css';

import Footer from '../components/Footer';
import PhotoChange from '../components/registerpage/PhotoChange';
import RegisterForm from '../components/registerpage/RegisterForm';

const RegisterPage = () => {
    return (
        <>
            <Header />
            <div className='register-page-wrapper'>
                <div className='register-page'>
                    <PhotoChange />
                    <RegisterForm />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RegisterPage;
