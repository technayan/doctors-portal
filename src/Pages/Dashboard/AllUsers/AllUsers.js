import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow/UserRow';

const AllUsers = () => {
    // React Query
    const {data: users, isLoading} = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()));
        
    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='font-bold'>All Users:</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Users</th>
                        <th>Role Action</th>
                        <th>Delete Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow key={user._id} user={user} index={index}/>) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;