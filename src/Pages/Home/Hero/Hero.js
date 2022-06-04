import React from 'react';
import heroImg from '../../../assets/images/hero-img.png'
import PrimaryBtn from '../../Shared/PrimaryBtn';

const Hero = () => {
    return (
        <div className="hero py-1 lg:py-5 lg:min-h-screen lg:bg-hero-pattern hero-section">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='lg:w-2/4' src={heroImg} alt='Hero background'/>
                <div>
                    <h1 className="text-4xl mt-4 lg:mt-0 lg:text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Hero;