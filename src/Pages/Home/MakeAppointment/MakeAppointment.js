import React from 'react';
import PrimaryBtn from '../../Shared/PrimaryBtn';
import doctor from '../../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <section className='flex items-center bg-appointment-pattern bg-cover bg-no-repeat mt-0 lg:mt-16 px-4 py-16 lg:px-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='-mt-32' src={doctor} alt="Doctor" />
            </div>
            <div className='flex-1'>
                <h5 className='text-2xl font-bold text-secondary capitalize'>Appointment</h5>
                <h2 className='text-3xl md:text-4xl text-white capitalize font-medium my-3'>Make an appointment today</h2>
                <p className='text-white mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <PrimaryBtn>Book an Appointmet</PrimaryBtn>
            </div>
        </section>
    );
};

export default MakeAppointment;