import React from 'react';
import heroImg from '../../../assets/images/hero-img.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentHero = ({date, setDate}) => {
    return (
        <div className="hero py-1 lg:py-5 lg:h-[650px] lg:max-h-[800px] lg:bg-hero-pattern hero-section">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='lg:w-2/4' src={heroImg} alt='Dentist chair'/>
                
                <div>
                <h3 className='text-xl text-center font-bold text-primary my-5 lg:my-0'>Choose your appointment date :</h3>
                    <DayPicker 
                    mode="single"
                    selected={date}
                    onSelect={setDate}/>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHero;