import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-lg">
            <figure className="pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-accent">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;