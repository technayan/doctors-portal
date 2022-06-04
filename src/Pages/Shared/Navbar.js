import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navItem = <>
        <li><Link className='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/'>Home</Link></li>
        <li><Link className='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/about'>About</Link></li>
        <li><Link className='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/appointment'>Appointment</Link></li>
        <li><Link className='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/reviews'>Reviews</Link></li>
        <li><Link className='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/contact'>Contact Us</Link></li>
        <li><Link className='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/login'>Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 lg:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItem}
                </ul>
                </div>
                <Link to={'/'} className="font-medium text-2xl">Doctors Portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;