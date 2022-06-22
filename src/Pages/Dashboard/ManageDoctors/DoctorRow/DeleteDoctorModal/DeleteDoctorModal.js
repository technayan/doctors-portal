import React from 'react';
import { toast } from 'react-toastify';

const DeleteDoctorModal = ({deletingDoctor, refetch, setDeletingDoctor}) => {
    const {name,email} = deletingDoctor;

    // Delete Doctor handler
    const deleteDoctor = () => {
        fetch(`https://whispering-coast-97646.herokuapp.com/doctors/${email}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                toast.success(`${name} is deleted successfully!`);
                refetch();
            } else {
                toast.error(`${name} is not deleted!`);
            }
        })
        setDeletingDoctor(null);
    }
    return (
        <div>
            <input type="checkbox" id="delete-doctor-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-red-500">Are you sure to delete {name}?</h3>
                <p className="py-4">The doctor profile will be vanished after accepting.</p>
                <div className="modal-action">
                    <button onClick={deleteDoctor} className="btn btn-error hover: bg-red-500 text-white">Delete</button>
                    <label  htmlFor="delete-doctor-modal" className="btn">Cancel</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DeleteDoctorModal;