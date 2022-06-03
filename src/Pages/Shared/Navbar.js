import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const navItem = <>
        <li><Link class='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/'>Home</Link></li>
        <li><Link class='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/about'>About</Link></li>
        <li><Link class='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/appointment'>Appointment</Link></li>
        <li><Link class='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/reviews'>Reviews</Link></li>
        <li><Link class='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/contact'>Contact Us</Link></li>
        <li><Link class='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/login'>Login</Link></li>
    </>
    return (
        <div class="navbar bg-base-100 lg:px-12">
            <div class="navbar-start">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItem}
                </ul>
                </div>
                <Link to={'/'} class="font-medium text-2xl">Doctors Portal</Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;