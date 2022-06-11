import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="pt-16 py-8 px-6 lg:px-20 bg-footer-pattern bg-cover bg-no-repeat bg-center">
            <div className="footer max-w-[1400px] mx-auto">
                <div>
                    <span className="text-xl uppercase font-bold text-accent mb-3">Services</span> 
                    <Link className=' text-base hover:text-primary font-medium' to={'/'}>Emergency Checkup</Link>
                    <Link className=' text-base hover:text-primary font-medium' to={'/'}>Monthly Checkup</Link>
                    <Link className=' text-base hover:text-primary font-medium' to={'/'}>Weekly Checkup</Link>
                    <Link className=' text-base hover:text-primary font-medium' to={'/'}>Deep Checkup</Link>
                </div> 
                <div>
                    <span className="text-xl uppercase font-bold text-accent mb-3">Oral health</span> 
                    <Link className=' text-base hover:text-primary font-medium' to={'/'}>Fluoride Treatment</Link>
                    <Link className=' text-base hover:text-primary font-medium' to={'/'}>Cavity filling</Link>
                    <Link className=' text-base hover:text-primary font-medium' to={'/'}>Teeth whitening</Link>
                </div> 
                <div>
                    <span className="text-xl uppercase font-bold text-accent mb-3">Our address</span> 
                    <p className='text-base text-black font-medium'>Brooklyn, New York 10036, USA</p>
                </div>
            </div>
            <div className=' pt-20 text-center'>
                <p>Copyright © {year} - All right reserved by <Link className='text-secondary hover:text-primary font-medium' to={'/'}>Doctors Portal</Link>.</p>
            </div>
        </footer>
    );
};

export default Footer;