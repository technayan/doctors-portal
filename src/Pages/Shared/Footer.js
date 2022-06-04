import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer class="py-16 px-20 bg-footer-pattern bg-cover bg-no-repeat bg-center">
            <div className="footer">
                <div>
                    <span class="text-xl uppercase font-bold text-accent mb-3">Services</span> 
                    <Link className='hover:text-secondary font-medium' to={'/'}>Emergency Checkup</Link>
                    <Link className='hover:text-secondary font-medium' to={'/'}>Monthly Checkup</Link>
                    <Link className='hover:text-secondary font-medium' to={'/'}>Weekly Checkup</Link>
                    <Link className='hover:text-secondary font-medium' to={'/'}>Deep Checkup</Link>
                </div> 
                <div>
                    <span class="text-xl uppercase font-bold text-accent mb-3">Oral health</span> 
                    <Link className='hover:text-secondary font-medium' to={'/'}>Fluoride Treatment</Link>
                    <Link className='hover:text-secondary font-medium' to={'/'}>Cavity filling</Link>
                    <Link className='hover:text-secondary font-medium' to={'/'}>Teeth whitening</Link>
                </div> 
                <div>
                    <span class="text-xl uppercase font-bold text-accent mb-3">Our address</span> 
                    <p className='text-black font-medium'>Brooklyn, New York 10036, USA</p>
                </div>
            </div>
            <div className='pt-28 text-center'>
                <p>Copyright © {year} - All right reserved by <Link className='text-primary hover:text-secondary font-medium' to={'/'}>Doctors Portal</Link>.</p>
            </div>
        </footer>
    );
};

export default Footer;