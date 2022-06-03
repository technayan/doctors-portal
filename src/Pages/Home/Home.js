import React from 'react';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Hero />
            <div class='md:px-12'>
                <Info />
                <Services />
                <Treatment />
            </div>
            
        </div>
    );
};

export default Home;