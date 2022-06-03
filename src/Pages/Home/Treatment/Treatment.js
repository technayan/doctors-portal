import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryBtn from '../../Shared/PrimaryBtn';

const Treatment = () => {
    return (
        <section class="hero py-16">
        <div class="hero-content grid grid-cols-1 lg:grid-cols-2 justify-around ">
            <img src={treatment} class="w-100 lg:max-w-sm rounded-lg lg:ml-auto lg:mx-10" alt='Treatment'/>
            <div class='w-50 lg:mx-10'>
                <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </div>
        </section>
    );
};

export default Treatment;