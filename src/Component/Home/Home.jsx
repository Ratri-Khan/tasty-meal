import React from 'react';
import Banner from '../Banner/Banner';
import ChefInfo from '../ChefInfo/ChefInfo';
import FoodProcess from '../FoodProcessing/FoodProcessing';

const Home = () => {
    return (
        <div className='bg-black'>
            <Banner></Banner>
            <ChefInfo></ChefInfo>
            <FoodProcess></FoodProcess>
        </div>
    );
};

export default Home;