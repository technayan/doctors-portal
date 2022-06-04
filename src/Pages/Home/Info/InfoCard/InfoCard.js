import React from 'react';

const InfoCard = ({img,cardTitle, cardInfo, cardBg}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-lg text-white p-6 md:px-0 lg:px-6 ${cardBg}`}>
            <figure><img className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-4/5' src={img} alt="icon"/></figure>
            <div className="card-body pb-2 lg:pb-8">
                <h2 className="card-title mx-auto lg:mx-0">{cardTitle}</h2>
                <p className='text-center lg:text-left'>{cardInfo}</p>
            </div>
        </div>
    );
};

export default InfoCard;