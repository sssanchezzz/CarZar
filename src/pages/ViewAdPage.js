import React from 'react';
import Header from '../components/Header';
import AdCarInfo from '../components/viewadpage/AdCarInfo';
import '../scss/view_ad_page.css';
import lamba from '../img/yellow_car.png';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
const ViewAdPage = (props) => {
    const { src, name } = props;
    const { id } = useParams();
    return (
        <>
            <Header />
            <hr />
            <div className='view-ad-container'>
                <div className='ad-car-img'>
                    <img src={lamba} alt={name} />
                </div>
                <div className='ad-car-info-wrapper'>
                    <h2>Information</h2>
                    <AdCarInfo name='Owner' value='Ivan Ivanov' />
                    <AdCarInfo name='Body Style' value='Lorem' />
                    <AdCarInfo name='Make' value='Lorem' />
                    <AdCarInfo name='Model' value='Lorem' />
                    <AdCarInfo name='Transmission' value='Lorem' />
                    <AdCarInfo name='Year' value='Lorem' />
                    <AdCarInfo name='Mileage' value='Lorem' />
                    <AdCarInfo name='Condition' value='Lorem' />
                    <AdCarInfo name='City' value='Lorem' />
                    <AdCarInfo name='Body Color' value='Lorem' />
                    <AdCarInfo name='Price' value='Lorem' />
                    <div className='ad-info-buttons'>
                        <button className='red-btn favourites-btn'>
                            Add To Favourites
                        </button>
                        <button className='red-btn offer-btn'>
                            Make An Offer
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default ViewAdPage;
