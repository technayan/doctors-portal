import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';



const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const {data: specialties, isLoading} = useQuery('specialty', () => fetch('http://localhost:5000/appointments').then(res => res.json()));

    if(isLoading) {
        return <Loading />
    }

    const imageStorageKey = '9e87aa793c0283a1b143d52e84c26dfb';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success) {
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                }

                // Send Doctor info to the backend
                fetch('http://localhost:5000/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}` 
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId) {
                        toast.success('Doctor added successfully!');
                        reset();
                    } else {
                        toast.error('Failed to add doctor');
                    }
                });
            };
        })
    };
    return (
        <div>
            <h4 className='font-bold'>Add Doctor :</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Daisyui with React Hook Form validation */}
                    <div className="form-control w-full mt-5">
                        <label className="label">
                            <span className="label-text">Doctor's Name :</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full focus:border-primary focus:outline-none" {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required.'
                            }
                        })}/>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Doctor's Email :</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full focus:border-primary focus:outline-none" {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required.'
                            },
                            pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: 'Provide a valid email.'
                            }
                        })}/>
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Doctor's Specialty :</span>
                        </label>
                        <select className="select select-bordered w-full focus:border-primary focus:outline-none" {...register("specialty")}>
                            {
                                specialties.map(specialty => <option className='font-base' key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control w-full mt-5">
                        <label className="label">
                            <span className="label-text">Doctor's Image :</span>
                        </label>
                        <input type="file" placeholder="Your Name" className="input input-bordered w-full p-1 focus:border-primary focus:outline-none" {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required.'
                            }
                        })}/>
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>
                    <input className='btn bg-primary w-full hover:bg-accent text-white' type="submit" value="ADD" />
                </form>
        </div>
    );
};

export default AddDoctor;