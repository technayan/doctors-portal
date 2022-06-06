import React, { useState } from 'react';
import heroImg from '../../../assets/images/hero-img.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentHero = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div class="hero py-1 lg:py-5 lg:h-[650px] lg:max-h-[800px] lg:bg-hero-pattern hero-section">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='lg:w-2/4' src={heroImg} alt='Dentist chair'/>
                <div>
                    <DayPicker 
                    mode="single"
                    selected={date}
                    onSelect={setDate}/>
                    <p>You have selected : {format(date, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHero;