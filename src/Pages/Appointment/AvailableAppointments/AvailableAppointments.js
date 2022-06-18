import React, { useState } from 'react';
import { format } from 'date-fns';
import SingleAppointment from './SingleAppointment/SingleAppointment';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const AvailableAppointments = ({date}) => {
    // const [appointments, setAppointments] = useState([]);
    const [bookAppointment, setBookAppointment] = useState(null);

    const formattedDate = format(date, 'PP');

    // React Query
    const {data: appointments, isLoading, refetch} = useQuery(('available', formattedDate), () => 
        fetch(`https://whispering-coast-97646.herokuapp.com/available-appointments?date=${formattedDate}`)
        .then(res => res.json()))
    if(isLoading) {
        return <Loading />
    }

    return (
        <div className='py-10 md:py-14 lg:py-16 mx-4 md:mx-12 max-w-[1200px] lg:mx-auto'>
            <h4 className='text-center text-primary text-2xl'>Available Appointments for {format(date, 'PP')}</h4>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10  mt-14'>
                {
                    appointments?.map(appointment => <SingleAppointment key={appointment._id} appointment={appointment} setBookAppointment={setBookAppointment} />)
                }
            </div>
            {
                bookAppointment && <BookingModal date={date} bookAppointment={bookAppointment} setBookAppointment={setBookAppointment} refetch={refetch}/>
            }
        </div>
    );
};

export default AvailableAppointments;