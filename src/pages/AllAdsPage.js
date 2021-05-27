import React, { useState, useEffect } from 'react';
import AdMiniature from '../components/AdMiniature';
import Footer from '../components/Footer';
import Header from '../components/Header';

import black_car from '../img/black_car.png';
import red_car from '../img/red_car.png';
import yellow_car from '../img/yellow_car.png';
import white_car from '../img/white_car.png';

import '../scss/all_ads_page.css';
import SelectItem from '../components/SelectItem';

const AllAdsPage = () => {
    let arr = [0, 1, 2, 3, 4];

    const [Ads, setAds] = useState([]);
    useEffect(() => {
        setAds([
            { id: 1, name: 'Car1', picture: red_car, price: '30000' },
            { id: 2, name: 'Car2', picture: black_car, price: '25000' },
            { id: 3, name: 'Car3', picture: yellow_car, price: '40000' },
            { id: 4, name: 'Car4', picture: white_car, price: '12000' },
            { id: 5, name: 'Car5', picture: red_car, price: '24000' },
            { id: 6, name: 'Car6', picture: yellow_car, price: '10000' },
        ]);
    }, []);

    return (
        <>
            <Header />
            <hr />
            <div className='all-ads-page'>
                <div className='filters'>
                    <div className='all-ads-select-items'>
                        <SelectItem title='Make' selectItems={arr} />
                        <SelectItem title='Model' selectItems={arr} />
                        <SelectItem title='Transmission' selectItems={arr} />
                        <SelectItem title='Body Color' selectItems={arr} />
                        <SelectItem title='Year Min' selectItems={arr} />
                        <SelectItem title='Year Max' selectItems={arr} />
                        <SelectItem title='Mileage Min' selectItems={arr} />
                        <SelectItem title='Mileage Max' selectItems={arr} />
                        <SelectItem title='Price Min' selectItems={arr} />
                        <SelectItem title='Price Max' selectItems={arr} />
                        <SelectItem title='Condition' selectItems={arr} />
                        <SelectItem title='Bodystyle' selectItems={arr} />
                    </div>
                </div>
                <div className='all-ads-container'>
                    <h2>All ads</h2>
                    <div className='ad-miniatures-wrapper'>
                        {Ads.map((x) => {
                            return (
                                <AdMiniature
                                    id={x.id}
                                    name={x.name}
                                    picture={x.picture}
                                    price={x.price}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};
export default AllAdsPage;
