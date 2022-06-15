import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyAppointments = () => {
    const [user] = useAuthState(auth);
    const [myAppointments, setMyAppointments] = useState([]);

    

    useEffect(() => {
        if(user) {
            console.log(user.email);
            fetch(`http://localhost:5000/my-bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyAppointments(data)})
        }
        console.log(`http://localhost:5000/my-bookings?email=${user.email}`)
    }, [user]);
    return (
        <div>
            <h2 className='font-bold'>My Appointments:</h2>
            <div className="overflow-x-auto mt-5">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Appointment Slot</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            myAppointments.length ? 
                            myAppointments.map((appointment, index) => 
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{appointment.treatment}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.slot}</td>
                                </tr>
                            ) : <h2 className='mt-10'>You have no appointement to show.</h2>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;