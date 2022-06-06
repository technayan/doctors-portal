import React from 'react';
import ContactUs from './ContactUs/ContactUs';
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
            <div className='md:px-12 max-w-[1400px] mx-auto'>
                <Info />
                <Services />
                <Treatment />
            </div>
            <MakeAppointment />
            <div className='md:px-12 max-w-[1400px] mx-auto'>
                <Testimonial />
            </div>
            <ContactUs />
        </div>
    );
};

export default Home;