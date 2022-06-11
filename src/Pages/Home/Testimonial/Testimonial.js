import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import TestimonialSlider from './TestimonialSlider/TestimonialSlider';

const Testimonial = () => {
    return (
        <section className='py-16 px-4 md:px-0'>
            <div className='flex justify-between'>
                <div>
                    <h5 className='text-2xl font-bold text-primary'>Testimonial</h5>
                    <h2 className='text-4xl text-accent font-medium my-3'>What Our Patients Say</h2>
                </div>
                <img className='w-24 lg:w-48' src={quote} alt='Quote' />
            </div>
            
            <TestimonialSlider />
        </section>
    );
};

export default Testimonial;