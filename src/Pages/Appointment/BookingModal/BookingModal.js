import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({bookAppointment, date, setBookAppointment}) => {
    const {_id, name, slots} = bookAppointment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const selectedDate = event.target.date.value;
        console.log(_id, name,selectedDate, slot);
        setBookAppointment(null);
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
                            slots.map(slot => <option key={slot} value={slot}>{slot}</option>)
                        }
                    </select>
                    <input type="text" name='name' placeholder="Full Name" className="input w-full my-2 bg-gray-100 focus:outline-primary focus:outline-offset-0" />
                    <input type="text" name='phone' placeholder="Phone Number" className="input w-full my-2 bg-gray-100 focus:outline-primary focus:outline-offset-0" />
                    <input type="text" name='email' placeholder="Email Address" className="input w-full my-2 bg-gray-100 focus:outline-primary focus:outline-offset-0" />
                    <input type="submit" value='SUBMIT' className="btn w-full my-3 bg-gradient-to-r from-primary to-secondary border-0 text-white hover:bg-gradient-to-l font-bold" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;