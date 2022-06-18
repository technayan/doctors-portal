import React from 'react';
import { useForm } from "react-hook-form";


const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async data => {
        console.log(data);
    };
    return (
        <div>
            <h4 className='font-bold'>Add Doctor :</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Daisyui with React Hook Form validation */}
                    <div className="form-control w-full mt-5">
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
                        
                        <input type="text" placeholder="Speacialist" className="input input-bordered w-full focus:border-primary focus:outline-none" {...register("specialist", {
                            required: {
                                value: true,
                                message: 'Specialist is required.'
                            }
                        })}/>
                        <label className="label">
                            {errors.specialist?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    <input className='btn bg-primary w-full hover:bg-accent text-white' type="submit" value="ADD" />
                </form>
        </div>
    );
};

export default AddDoctor;