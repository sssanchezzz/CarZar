import React from 'react';

const AdMiniature = (props) => {
    const { picture, name, price } = props;
    return (
        <div className='ad-mini'>
            <img src={picture} alt='car' />
            <h4 className='car-name'>{name}</h4>
            <h4 className='price'>{price}$</h4>
        </div>
    );
};

export default AdMiniature;
