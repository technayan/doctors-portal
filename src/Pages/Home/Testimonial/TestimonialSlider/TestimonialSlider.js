import React from "react";
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import './TestimonialSlider.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";
import Slide from "./Slide/Slide";

const TestimonialSlider = () => {

    const testimonials = [
        {
            _id: 1,
            name: 'Willson Harry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
            location: 'New York',
            img: people1
        },
        {
            _id: 2,
            name: 'Kate Bishop',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content.',
            location: 'Manhattan',
            img: people2
        },
        {
            _id: 3,
            name: 'Himary Sakura',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute.',
            location: 'Flemington',
            img: people3
        },
        {
            _id: 4,
            name: 'Willson Harry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.',
            location: 'New York',
            img: people1
        },
        {
            _id: 5,
            name: 'Kate Bishop',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content.',
            location: 'Manhattan',
            img: people2
        },
        {
            _id: 6,
            name: 'Himary Sakura',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute.',
            location: 'Flemington',
            img: people3
        },
    ]

    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                style={{padding: '20px 15px 60px'}}
                className="mySwiper"
            >
                {
                    testimonials.map(testimonial => <SwiperSlide key={testimonial._id}><Slide testimonial={testimonial}></Slide></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;