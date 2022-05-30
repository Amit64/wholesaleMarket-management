import React from 'react';
import Banner from './Banner';
import FeatureProducts from './FeatureProducts';
import Review from './Review';
import Stat from './Stat';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Stat/>
            <FeatureProducts/>
            <Review/>
        </div>
    );
};

export default Home;