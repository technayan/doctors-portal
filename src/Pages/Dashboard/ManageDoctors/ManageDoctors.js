import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DeleteDoctorModal from './DoctorRow/DeleteDoctorModal/DeleteDoctorModal';
import DoctorRow from './DoctorRow/DoctorRow';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const {data: doctors, isLoading, refetch} = useQuery('doctors', () => 
        fetch('https://whispering-coast-97646.herokuapp.com/doctors', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
    )

    if(isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h4 className='font-bold'>Manage Doctors :</h4>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Doctor</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow key={doctor._id} doctor={doctor} index={index} refetch={refetch} setDeletingDoctor={setDeletingDoctor}/>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <DeleteDoctorModal deletingDoctor={deletingDoctor} refetch={refetch} setDeletingDoctor={setDeletingDoctor}/>
            }
        </div>
    );
};

export default ManageDoctors;