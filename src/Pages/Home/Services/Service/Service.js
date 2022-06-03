import React from 'react';

const Service = ({service}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-lg">
            <figure class="pt-10">
                <img src={service.img} alt="Shoes" class="rounded-xl w-[100px] h-[100px]" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;