import React from 'react';
import SelectItem from '../SelectItem';
import PhotoChooser from '../PhotoChooser';
const CarInfoDescritpion = () => {
    let arr = [1, 2, 3, 4, 5];

    return (
        <div className='info-container'>
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
            <div className='car-decritpion'>
                <h2>Car description</h2>
                <textarea
                    name='car-description'
                    id='description'
                    placeholder='Provide information about your car'
                />
            </div>
            <div className='phone-number'>
                <h2>Your Contacts</h2>
                <div className='phone-input'>
                    <h4>Phone</h4>
                    <input
                        type='tel'
                        name='phone-number'
                        id='phone-number'
                    ></input>
                </div>
            </div>
            <button className='red-btn place-ad-btn'>Place An Ad</button>
        </div>
    );
};

export default CarInfoDescritpion;
