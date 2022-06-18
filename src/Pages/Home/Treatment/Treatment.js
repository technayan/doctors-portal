import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../../assets/images/treatment.png'
import MainBtn from '../../Shared/MainBtn';

const Treatment = () => {
    return (
        <section className="hero py-10 md:py-14 lg:py-16">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 justify-around ">
            <img src={treatment} className="w-full lg:max-w-sm rounded-lg lg:ml-auto lg:mx-10" alt='Treatment'/>
            <div className='w-50 lg:mx-10 mt-3 lg:mt-0'>
                <h1 className="text-3xl md:text-4xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <Link to={'/appointment'}><MainBtn>Get Started</MainBtn></Link>
            </div>
        </div>
        </section>
    );
};

export default Treatment;