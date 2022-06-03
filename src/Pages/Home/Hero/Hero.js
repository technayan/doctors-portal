import React from 'react';
import heroImg from '../../../assets/images/hero-img.png'

const Hero = () => {
    return (
        <div class="hero min-h-screen lg:bg-hero-pattern hero-section">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img class='lg:w-2/4' src={heroImg} alt='Hero background'/>
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                    <button class="btn bg-gradient-to-r from-secondary to-primary border-0 text-white hover:bg-gradient-to-l">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;