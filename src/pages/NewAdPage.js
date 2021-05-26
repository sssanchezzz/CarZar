import React from 'react';
import Header from '../components/Header';
import PhotoChooser from '../components/PhotoChooser';
import CarInfoDescritpion from '../components/newadpage/CarInfoDescription';
import Footer from '../components/Footer';
import '../scss/new_ad_page.css';

const NewAdPage = () => {
    return (
        <>
            <Header />
            <hr />
            <div className='info-body-container'>
                <PhotoChooser title='PLEASE CHOOSE CAR PHOTOS' />
                <CarInfoDescritpion />
            </div>
            <Footer />
        </>
    );
};
export default NewAdPage;
