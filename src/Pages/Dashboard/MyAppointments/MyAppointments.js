import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyAppointments = () => {
    const [user] = useAuthState(auth);
    const [myAppointments, setMyAppointments] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            fetch(`https://whispering-coast-97646.herokuapp.com/my-bookings?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if(res.status === 401 || res.status === 403) {
                    localStorage.removeItem('accessToken');
                    signOut(auth);
                    navigate('/');
                } else {
                    return res.json()
                }
            })
            .then(data => {
                setMyAppointments(data)})
        }
    }, [user, navigate]);
    return (
        <div>
            <h4 className='font-bold'>My Appointments :</h4>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
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
                            myAppointments.map((appointment, index) => 
                                <tr key={appointment._id}>
                                    <td>{index + 1}</td>
                                    <td>{appointment.treatment}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.slot}</td>
                                </tr>
                            ) 
                        }
                    </tbody>
                </table>
                {myAppointments.length ? <></> : <h2 className='mt-10'>You have no appointement to show.</h2>}
            </div>
        </div>
    );
};

export default MyAppointments;