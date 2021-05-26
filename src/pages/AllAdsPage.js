import React from 'react';
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
                        <AdMiniature
                            name='Lightning MCQUEEN'
                            picture={red_car}
                            price='30000'
                        />
                        <AdMiniature
                            name='Jackson Storm'
                            picture={black_car}
                            price='41000'
                        />
                        <AdMiniature
                            name='Shu Todoroki'
                            picture={white_car}
                            price='25000'
                        />
                        <AdMiniature
                            name='Yelloweee'
                            picture={yellow_car}
                            price='200000'
                        />
                        <AdMiniature
                            name='Yelloweee'
                            picture={yellow_car}
                            price='200000'
                        />
                        <AdMiniature
                            name='Yelloweee'
                            picture={yellow_car}
                            price='200000'
                        />
                        <AdMiniature
                            name='Yelloweee'
                            picture={yellow_car}
                            price='200000'
                        />
                        <AdMiniature
                            name='Yelloweee'
                            picture={yellow_car}
                            price='200000'
                        />
                        <AdMiniature
                            name='Yelloweee'
                            picture={yellow_car}
                            price='200000'
                        />
                        <AdMiniature
                            name='Yelloweee'
                            picture={yellow_car}
                            price='200000'
                        />
                        <AdMiniature
                            name='Yelloweee'
                            picture={yellow_car}
                            price='200000'
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};
export default AllAdsPage;
