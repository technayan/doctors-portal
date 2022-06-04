import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service/Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectus voluptatum facilis iusto earum iure quos autem.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectus voluptatum facilis iusto earum iure quos autem.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectus voluptatum facilis iusto earum iure quos autem.',
            img: whitening
        },
    ]
    return (
        <section className='py-10 md:py-14 lg:py-16'>
            <div className="text-center pb-10">
                <h5 className='text-secondary font-bold text-2xl capitalize'>Our services</h5>
                <h2 className='text-3xl md:text-4xl font-medium capitalize text-accent my-2'>Services we provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 mx-5 gap-10'>
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;