import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';



const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const {data: specialties, isLoading} = useQuery('specialty', () => fetch('http://localhost:5000/appointments').then(res => res.json()));

    if(isLoading) {
        return <Loading />
    }

    const onSubmit = async data => {
        console.log(data);
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
                        <select className="select select-bordered w-full focus:border-primary focus:outline-none mb-4" {...register("speciality")}>
                            {
                                specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                            }
                        </select>
                    </div>
                    <input className='btn bg-primary w-full hover:bg-accent text-white' type="submit" value="ADD" />
                </form>
        </div>
    );
};

export default AddDoctor;