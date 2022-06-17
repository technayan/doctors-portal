import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
    const email = user.email;
    // Make Admin function
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            refetch();
            toast.success(`${user.email} is now an Admin.`);
        })
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{user.email}</td>
            <td>{(user.role !== 'admin') && <button onClick={makeAdmin} className="btn btn-sm btn-primary text-white">Make Admin</button>}</td>
            <td><button className="btn btn-sm btn-error hover:bg-red-500 text-white">Delete User</button></td>
        </tr>
    );
};

export default UserRow;