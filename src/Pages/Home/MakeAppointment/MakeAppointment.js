import React from 'react';
import PrimaryBtn from '../../Shared/PrimaryBtn';
import doctor from '../../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <secton class='flex items-center bg-appointment-pattern my-16 px-12'>
            <div class='flex-1 hidden lg:block'>
                <img class='mt-[-8rem]' src={doctor} alt="Doctor" />
            </div>
            <div class='flex-1'>
                <h5 class='text-2xl font-bold text-secondary'>Appointment</h5>
                <h2 class='text-4xl text-white font-medium my-3'>Make an appointment Today</h2>
                <p class='text-white mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <PrimaryBtn>Book an Appointmet</PrimaryBtn>
            </div>
        </secton>
    );
};

export default MakeAppointment;