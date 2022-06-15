import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-5">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl font-bold text-primary mb-5'>Dashboard</h2>
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