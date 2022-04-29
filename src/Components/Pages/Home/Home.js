import React from 'react';
import Expert from '../Header/Expert';
import ChooseUs from './ChooseUs/ChooseUs';
import HomeSlider from './HomeSlider/HomeSlider';

const Home = () => {
    return (
        <main>
            <HomeSlider/>
            <Expert/>
            <ChooseUs/>
        </main>
    );
};

export default Home;