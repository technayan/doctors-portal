import React from 'react';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Hero />
            <div class='md:px-12'>
                <Info />
                <Services />
            </div>
            
        </div>
    );
};

export default Home;