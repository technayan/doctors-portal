import React from 'react';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Hero />
            <div className='md:px-12'>
                <Info />
                <Services />
                <Treatment />
            </div>
            <MakeAppointment />
            <div className='md:px-12'>
                <Testimonial />
            </div>
            
        </div>
    );
};

export default Home;