import React from 'react';
import Expert from '../Header/Expert';
import ChooseUs from './ChooseUs/ChooseUs';
import HomeSlider from './HomeSlider/HomeSlider';
import Welcome from './Welcome/Welcome';

const Home = () => {
    return (
        <main>
            <HomeSlider/>
            <Expert/>
            <ChooseUs/>
            <Welcome/>
        </main>
    );
};

export default Home;