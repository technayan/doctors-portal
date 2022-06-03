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
        <section class='py-16'>
            <div class="text-center pb-10">
                <h5 class='text-secondary font-bold text-2xl'>Our Services</h5>
                <h2 class='text-4xl my-2'>Services We Provide</h2>
            </div>
            <div class='grid lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;