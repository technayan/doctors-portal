import React from 'react';
import notFound from '../../../src/assets/images/not-found.svg'

const NotFound = () => {
    return (
        <div className='flex items-center flex-col py-20'>
            <img className='w-1/2 lg:w-1/3' src={notFound} alt="Not found" />
            <h2 className='text-3xl mt-10'>Page not found!</h2>
        </div>
    );
};

export default NotFound;