import React from 'react';

const DoctorRow = ({doctor, index, setDeletingDoctor}) => {
    const {name, email, specialty, img} = doctor;

    

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-doctor-modal" className="btn modal-button btn-sm btn-error hover: bg-red-500 text-white">Delete</label>
                
            </td>
        </tr>
    );
};

export default DoctorRow;