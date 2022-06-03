import React from 'react';
import Banner from './Banner';
import FeatureProducts from './FeatureProducts';
import Reviews from './Review/Reviews';


import Stat from './Stat';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Stat/>
            <FeatureProducts/>
            <Reviews/>
        </div>
    );
};

export default Home;