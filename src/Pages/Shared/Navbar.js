import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';
import './Navbar.css'

const Navbar = () => {
    // React Firebase Hooks 
    const [user, loading] = useAuthState(auth);

    // Loading
    if(loading) {
        return <Loading />
    }

    // Logout Handler
    const logout = () => {
        signOut(auth);
    }

    const navItem = <>
        <li><Link className='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/'>Home</Link></li>
        <li><Link className='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/about'>About</Link></li>
        <li><Link className='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/appointment'>Appointment</Link></li>
        <li><Link className='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/reviews'>Reviews</Link></li>
        <li><Link className='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/contact'>Contact</Link></li>
        <>{
            user ? <button onClick={logout} className='nav-link hover:bg-accent rounded-btn hover:text-base-100 px-4'>Logout</button> : 
            <>
            <li><Link className='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/login'>Login</Link></li>
            <li><Link className='nav-link hover:bg-accent rounded-btn hover:text-base-100' to='/register'>Register</Link></li>
            </>
        }
        </>
        
    </>
    return (
        <div className="navbar bg-base-100 lg:px-12 md:px-12 max-w-[1400px] mx-auto">
            <div className="flex w-full">
                <Link to={'/'} className="font-bold flex-1 text-2xl">Doctors Portal</Link>
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu w-screen -right-2 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
                        {navItem}
                    </ul>
                </div>
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