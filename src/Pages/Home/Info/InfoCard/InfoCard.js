import React from 'react';

const InfoCard = ({img,cardTitle, cardInfo, cardBg}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-lg text-white px-6 ${cardBg}`}>
            <figure><img class='lg:w-4/5' src={img} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{cardInfo}</p>
            </div>
        </div>
    );
};

export default InfoCard;