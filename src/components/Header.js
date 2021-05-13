import React from 'react';
import { Link } from 'react-router-dom';

import header_svg from '../img/header_black_svg.svg';
import insta from '../img/insta.svg';
import facebook from '../img/facebook.svg';
import telegram from '../img/telegram.svg';
import google from '../img/google.svg';
const Header = () => {
    return (
        <div className='header'>
            <div className='links'>
                <div className='logo'>
                    <h1>
                        <Link to='/'>CarZar</Link>
                    </h1>
                </div>
                <div className='black-bg'>
                    <img src={header_svg} alt='header bg' />
                    <div className='icons-social'>
                        <div className='empty'></div>
                        <div className='icons'>
                            <a
                                href='https://web.telegram.org/#/login'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img src={telegram} alt='telegram link' />
                            </a>
                            <a
                                href='https://www.google.com/intl/ru/gmail/about/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img src={google} alt='google link' />
                            </a>
                            <a
                                href='https://www.instagram.com/?hl=ru'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img src={insta} alt='instagram link' />
                            </a>
                            <a
                                href='https://www.facebook.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img src={facebook} alt='facebook link' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='menu-items'>
                <ul className='menu'>
                    <li className='active'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'>New Cars</Link>
                    </li>
                    <li>
                        <Link to='/'>Used Cars</Link>
                    </li>
                    <li>
                        <Link to='/'>Electro Cars</Link>
                    </li>
                </ul>
                <div className='login'>
                    <button className='sell-car-btn red-btn'>
                        <Link to='/new_ad'> Sell a car</Link>
                    </button>
                    <ul>
                        <li>
                            <Link to='/'> Register</Link>
                        </li>
                        <li>
                            <Link to='/'>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
