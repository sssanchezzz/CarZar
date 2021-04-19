import React from 'react';
import Header from '../components/Header';
import Benefits from '../components/Benefits';
import Search from '../components/Search';
import NewArrivals from '../components/NewArrivals';
import '../scss/home_page.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <Benefits />
            <Search />
            <NewArrivals />
            <Footer />
        </>
    );
};

export default HomePage;
