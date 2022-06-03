import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div class='grid grid-cols-1 md:grid-cols-3 gap-5 px-4 md:px-12'>
            <InfoCard img={clock} cardTitle='Opening Hours' cardInfo='Open 24 hours' cardBg='bg-gradient-to-r from-secondary to-primary'/>
            <InfoCard img={marker} cardTitle='Our Location' cardInfo='Brooklyn, NY 10036, USA' cardBg='bg-accent'/>
            <InfoCard img={phone} cardTitle='Contact Us' cardInfo='+8801944516122' cardBg='bg-gradient-to-r from-secondary to-primary'/>
        </div>
    );
};

export default Info;