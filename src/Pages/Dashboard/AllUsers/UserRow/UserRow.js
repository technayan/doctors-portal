import React from 'react';

const UserRow = ({user, index}) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{user.email}</td>
            <td><button class="btn btn-sm btn-primary text-white">Make Admin</button></td>
            <td><button class="btn btn-sm btn-error hover:bg-red-500 text-white">Delete User</button></td>
        </tr>
    );
};

export default UserRow;