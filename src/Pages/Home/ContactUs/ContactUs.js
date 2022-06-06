import React from 'react';

const ContactUs = () => {
    return (
        <section className='py-16 bg-appointment-pattern bg-cover bg-no-repeat'>
            <div className='text-center lg:mb-10'>
                <h5 className='text-2xl font-bold text-secondary capitalize'>Contact Us</h5>
                <h2 className='text-3xl md:text-4xl text-white capitalize font-medium my-3'>Stay connected with us</h2>
            </div>
            
            <form className='flex flex-col mx-6 lg:w-1/3 lg:mx-auto mt-10 md:mx-20'>
                <input type="email" placeholder="Email Address" className="input w-full my-2.5" />
                <input type="text" placeholder="Subject" className="input w-full my-2.5" />
                <textarea className="textarea my-2.5" placeholder="Your Message"></textarea>
                <input type="submit" className="btn bg-gradient-to-r from-secondary to-primary border-0 w-1/3 my-2.5 mx-auto text-white hover:bg-gradient-to-l" value="Submit" />
                
            </form>
        </section>
        
    );
};

export default ContactUs;