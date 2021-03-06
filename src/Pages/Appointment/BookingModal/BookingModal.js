import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const BookingModal = ({bookAppointment, date, setBookAppointment, refetch}) => {
    const {_id, name, slots, fee} = bookAppointment;

    // React Firebase Hooks
    const [user] = useAuthState(auth);



    // Booking Handler
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const selectedDate = event.target.date.value;

        // Booking Data
        const bookingAppointment = {
            treatmentId: _id,
            treatment: name,
            date: selectedDate,
            slot,
            fee,
            patientName: user.displayName,
            patientEmail: user.email,
            patientPhone: event.target.phone.value
        }

        // Post Booking to Backend
        fetch('https://whispering-coast-97646.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingAppointment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                toast.success(`Successfully booked appointment on ${selectedDate} at ${slot}`);
            } else {
                toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
            }
            refetch();
            setBookAppointment(null);
        })

        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle text-accent hover:text-white hover:bg-accent absolute right-2 top-2">✕</label>
                <p>Booking Appointment for :</p>
                <h3 className="font-bold text-primary text-2xl">{name}</h3>
                <form onSubmit={handleBooking} className='mt-5'>
                    <input type="text" name='date' disabled value={format(date, 'PP')} className="input w-full my-2 bg-gray-100" />
                    <select name='slot' className="select w-full my-2 bg-gray-100 focus:outline-primary focus:outline-offset-0">
                        {
                            slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                        }
                    </select>
                    <input type="text" name='name' disabled value={user?.displayName} className="input w-full my-2 bg-gray-100 focus:outline-primary focus:outline-offset-0" />
                    <input type="text" name='email' disabled value={user?.email} className="input w-full my-2 bg-gray-100 focus:outline-primary focus:outline-offset-0" />
                    <input type="text" name='phone' placeholder="Phone Number" className="input w-full my-2 bg-gray-100 focus:outline-primary focus:outline-offset-0" />
                    <input type="submit" value='SUBMIT' className="btn w-full my-3 bg-gradient-to-r from-primary to-secondary border-0 text-white hover:bg-gradient-to-l font-bold" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;