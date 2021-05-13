import React from 'react';
import empty_img from '../img/car_img_empty.png';
const PhotoChooser = (props) => {
    const { title } = props;
    return (
        <div className='form-file'>
            <h2>{title}</h2>
            <img src={empty_img} alt='your image' />
            <label for='car-img'>Choose file to upload</label>
            <input
                id='car-img'
                type='file'
                accept='image/gif, image/jpeg, image/png'
                // style={{ display: 'none' }}
            />
        </div>
    );
};
export default PhotoChooser;
