import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow/UserRow';

const AllUsers = () => {
    // React Query
    const {data: users, isLoading, refetch} = useQuery('users', () => 
    fetch('https://whispering-coast-97646.herokuapp.com/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json()));
        
    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h4 className='font-bold'>All Users :</h4>
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
                            users.map((user, index) => <UserRow key={user._id} user={user} index={index} refetch={refetch}/>) 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;