import React from 'react';
import MainBtn from '../../Shared/MainBtn';
import doctor from '../../../assets/images/doctor.png'
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className=' bg-appointment-pattern bg-cover bg-no-repeat mt-0 lg:mt-16 px-4 py-12 lg:py-0 lg:px-12'>
            <div className='max-w-[1400px] flex items-center mx-auto'>
                <div className='flex-1 hidden lg:block'>
                    <img className='lg:-mt-24 xl:-mt-32 lg:w-full' src={doctor} alt="Doctor" />
                </div>
                <div className='flex-1 my-5'>
                    <h5 className='text-2xl font-bold text-primary capitalize'>Appointment</h5>
                    <h2 className='text-3xl md:text-4xl text-white capitalize font-medium my-3'>Make an appointment today</h2>
                    <p className='text-white mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <Link to={'/appointment'}><MainBtn>Book an Appointmet</MainBtn></Link>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;