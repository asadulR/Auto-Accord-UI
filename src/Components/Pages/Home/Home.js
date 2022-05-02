import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import ChooseUs from './ChooseUs/ChooseUs';
import Expert from './Experts/Expert';
import HomeSlider from './HomeSlider/HomeSlider';
import InventoryItems from './InventoryItems/InventoryItems';
import Welcome from './Welcome/Welcome';

const Home = () => {
    return (
        <main>
            <PageTitle title="Home"></PageTitle>
            <HomeSlider/>
            <Expert/>
            <ChooseUs/>
            <Welcome/>
            <InventoryItems/>
        </main>
    );
};

export default Home;