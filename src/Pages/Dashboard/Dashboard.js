import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-5">
                {/* <!-- Page content here --> */}
                <div className="md:flex md:justify-between">
                    <h2 className='text-2xl text-center md:text-left font-bold text-primary mb-5'>Dashboard</h2>
                    <div className='my-5 md:my-0'>
                        <p>Welcome!</p>
                        <p><strong className='text-primary'>{user.displayName}</strong></p>
                    </div>
                </div>
                
                <Outlet />
                
            
            </div> 
            <div className="drawer-side ">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-72 text-base-content bg-gray-200 rounded-r-xl">
                {/* <!-- Sidebar content here --> */}
                <li><Link className='focus:bg-primary' to={'/dashboard'}>My Appointments</Link></li>
                <li><Link className='focus:bg-primary' to={'/dashboard/reviews'}>My Reviews</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;