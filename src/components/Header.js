import React from 'react';
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
                        <a href='#'>CarZar</a>
                    </h1>
                </div>
                <div className='black-bg'>
                    <img src={header_svg} alt='header bg' />
                    <div className='icons-social'>
                        <div className='empty'></div>
                        <div className='icons'>
                            <a href='#'>
                                <img src={telegram} alt='telegram link' />
                            </a>
                            <a href='#'>
                                <img src={google} alt='google link' />
                            </a>
                            <a href='#'>
                                <img src={insta} alt='instagram link' />
                            </a>
                            <a href='#'>
                                <img src={facebook} alt='facebook link' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='menu-items'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>New Cars</a>
                    </li>
                    <li>
                        <a href='#'>Used Cars</a>
                    </li>
                    <li>
                        <a href='#'>Electro Cars</a>{' '}
                    </li>
                </ul>
                <div className='login'>
                    <button className='sell-car-btn red-btn'>
                        <a href='#'> Sell a car</a>
                    </button>
                    <ul>
                        <li>
                            <a href='#'> Register</a>
                        </li>
                        <li>
                            <a href='#'>Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
