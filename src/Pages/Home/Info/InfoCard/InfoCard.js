import React from 'react';

const InfoCard = ({img,cardTitle, cardInfo, cardBg}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-lg text-white px-6 ${cardBg}`}>
            <figure><img className='lg:w-4/5' src={img} alt="icon"/></figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardInfo}</p>
            </div>
        </div>
    );
};

export default InfoCard;