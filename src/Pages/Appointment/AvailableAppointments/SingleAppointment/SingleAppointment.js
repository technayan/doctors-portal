import React from 'react';

const SingleAppointment = ({appointment, setBookAppointment}) => {
    const {name, slots} = appointment;
    return (
        <div className="card lg:w-lg bg-base-100 shadow-md lg:shadow-lg">
        <div className="card-body text-center">
            <h2 className="card-title text-2xl text-primary mx-auto">{name}</h2>
            <p>{
                slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another day!</span>
            }</p>
            <p>{slots.length} {slots.length > 1 ? "slots" : "slot"} available</p>
            <div className="card-actions justify-center mt-5">
                <label disabled ={slots.length < 1} onClick={() => setBookAppointment(appointment)} htmlFor="booking-modal" className="btn bg-gradient-to-r from-primary to-secondary border-0 text-white hover:bg-gradient-to-l">Book Appointment</label>
            </div>
        </div>
        </div>
    );
};

export default SingleAppointment;