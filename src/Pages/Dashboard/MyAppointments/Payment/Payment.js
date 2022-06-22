import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm/CheckoutForm';

// Stripe API key
const stripePromise = loadStripe('pk_test_51LDCCcIEh0IjzcDapo1saLUS2nwXYU6NaXv7HRD0PInYKqzGwKKH10kX5AVKd3pjK4LlQgwOwBVU17VvCk2w8Uhw00PCViog0j');


const Payment = () => {
    const [appointment, setAppointment] = useState([]);
    const {id} = useParams();
    const url = `https://whispering-coast-97646.herokuapp.com/bookings/${id}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [id])


    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>Hello, {appointment.patientName},</p>
                    <h4 className='font-bold'>Payment for : {appointment.treatment}</h4>
                    <p>Your appointment is on {appointment.date} at {appointment.slot}</p>
                    <p>Pay ${appointment.fee}</p>
                </div>
            </div>
            
            <div className="card w-full bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment} />
                </Elements>
                </div>
            </div>
            
            
        </div>
    );
};

export default Payment;