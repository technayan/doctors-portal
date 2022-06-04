import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryBtn from '../../Shared/PrimaryBtn';

const Treatment = () => {
    return (
        <section className="hero py-16">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 justify-around ">
            <img src={treatment} className="w-100 lg:max-w-sm rounded-lg lg:ml-auto lg:mx-10" alt='Treatment'/>
            <div className='w-50 lg:mx-10'>
                <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </div>
        </section>
    );
};

export default Treatment;