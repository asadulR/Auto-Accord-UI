import React from 'react';
import ChooseUs from './ChooseUs/ChooseUs';
import Experts from './Experts/Experts';
import HomeSlider from './HomeSlider/HomeSlider';
import Welcome from './Welcome/Welcome';

const Home = () => {
    return (
        <main>
            <HomeSlider/>
            <Experts/>
            <ChooseUs/>
            <Welcome/>
        </main>
    );
};

export default Home;