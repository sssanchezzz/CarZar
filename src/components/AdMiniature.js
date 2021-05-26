import React from 'react';
import { Link } from 'react-router-dom';

const AdMiniature = (props) => {
    const { picture, name, price } = props;
    return (
        <Link to='/view-ad-page'>
            <div className='ad-mini'>
                <img src={picture} alt='car' />
                <h4 className='car-name'>{name}</h4>
                <h4 className='price'>{price}$</h4>
            </div>{' '}
        </Link>
    );
};

export default AdMiniature;
