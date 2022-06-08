import React, { useState } from 'react';
import AppointmentHero from './AppointmentHero/AppointmentHero';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';


const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentHero date={date} setDate={setDate}/>
            <AvailableAppointments date={date}/>
        </div>
    );
};

export default Appointment;