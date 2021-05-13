import React from 'react';
import SelectItem from './SelectItem';
import PhotoChooser from './PhotoChooser';
const CarInfoDescritpion = () => {
    let arr = [1, 2, 3, 4, 5];

    return (
        <div className='info-container'>
            <hr />
            <PhotoChooser title='PLEASE CHOOSE CAR PHOTOS' />
            <hr />
            <div className='basic-info'>
                <h2>Basic Information</h2>
                <SelectItem title='Bodystyle' selectItems={arr} />
                <SelectItem title='Make' selectItems={arr} />
                <SelectItem title='Model' selectItems={arr} />
                <SelectItem title='Transmission' selectItems={arr} />
                <SelectItem title='Year' selectItems={arr} />
                <SelectItem title='Mileage' selectItems={arr} />
                <SelectItem title='Condition' selectItems={arr} />
                <SelectItem title='City' selectItems={arr} />
                <SelectItem title='Body Color' selectItems={arr} />
                <SelectItem title='Price' selectItems={arr} />
            </div>
            <hr />
            <div className='car-decritpion'>
                <h2>Car description</h2>
                <input
                    type='text'
                    name='car-description'
                    id='description'
                    placeholder='Provide information about your car'
                />
            </div>
            <hr />
            <div className='phone-number'>
                <h2>Your Contacts</h2>
                <h4>Phone</h4>
                <input type='text' name='phone-number' id='phone-number' />
            </div>
            <hr />
            <button>Place An Ad</button>
        </div>
    );
};

export default CarInfoDescritpion;
