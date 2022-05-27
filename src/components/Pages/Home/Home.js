import React from 'react';
import Banner from '../../../Shared/Banner/Banner';
import Business from '../../../Shared/Business/Business';
import Services from '../../../Shared/services/Services';
import Cycle from './Cycle/Cycle';
import HomeBlog from './HomeBlog/HomeBlog';
import Summary from './Summary/Summary';
//
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HomeBlog></HomeBlog>
            <Cycle></Cycle>
            <Summary></Summary>
            <Business></Business>
        </div>
    );
};

export default Home;