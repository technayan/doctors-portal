import React from 'react';
import { SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

const Slide = ({testimonial}) => {
    return (
        <SwiperSlide>
            <div className="card w-96 bg-base-100 shadow-lg">
            <div className="card-body">
                <p>{testimonial.review}</p>
                
                <div className='flex items-center mt-6'>
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-secondary ring-offset-2">
                            <img src={testimonial.img} alt={testimonial.name} />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title text-accent">{testimonial.name}</h2>
                        <p>{testimonial.location}</p>
                    </div>
                </div>
            </div>
            </div>
        </SwiperSlide>
    );
};

export default Slide;