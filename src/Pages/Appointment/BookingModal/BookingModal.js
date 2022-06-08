import React from 'react';

const BookingModal = ({bookAppointment}) => {
    const {name, slots} = bookAppointment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <label htmlFor="booking-modal" class="btn btn-sm btn-circle text-accent hover:text-white hover:bg-accent absolute right-2 top-2">✕</label>
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                <label htmlFor="booking-modal" className="btn bg-accent text-white">Submit</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;