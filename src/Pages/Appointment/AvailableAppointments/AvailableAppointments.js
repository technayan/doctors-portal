import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import SingleAppointment from './SingleAppointment/SingleAppointment';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({date}) => {
    const [appointments, setAppointments] = useState([]);
    const [bookAppointment, setBookAppointment] = useState(null);

    useEffect(() => {
        fetch('appointments.json')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, []);

    return (
        <div className='py-10 md:py-14 lg:py-16 mx-4 md:mx-12 max-w-[1200px] lg:mx-auto'>
            <h4 className='text-center text-secondary text-2xl'>Available Appointments for {format(date, 'PP')}</h4>
            <div className='grid lg:grid-cols-3 gap-7 lg:gap-10  mt-14'>
                {
                    appointments.map(appointment => <SingleAppointment key={appointment._id} appointment={appointment} setBookAppointment={setBookAppointment} />)
                }
            </div>
            {
                bookAppointment && <BookingModal date={date} bookAppointment={bookAppointment} setBookAppointment={setBookAppointment}/>
            }
        </div>
    );
};

export default AvailableAppointments;