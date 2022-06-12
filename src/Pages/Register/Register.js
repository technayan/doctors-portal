import React from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    // React Firebase Hooks
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // Navigate
    const navigate = useNavigate();

    // React Hook Form
    const { register, formState: { errors }, handleSubmit } = useForm();

    // Register Handler
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate('/appointment');
    };

    // Loading
    if(loading || gLoading || updating) {
        return <Loading />
    }

    // Error
    let signInError;

    if(error || gError || updateError) {
        signInError = <small className='block pb-3 text-red-500'>{error?.message || gError?.message || updateError?.message}</small>
    }

    // User
    if(user || gUser) {
        console.log(gUser || user);
    }


    return (
        <div className='h-full flex justify-center items-center min-h-screen py-20 mx-5 lg:mx-0'>
            <div className="card w-96 bg-base-100 shadow-lg">
            <div className="p-5 lg:p-8">
                <h2 className="text-2xl font-bold text-center text-primary">Register</h2>

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
                        
                        <input type="password" placeholder="Password" className="input input-bordered w-full focus:border-primary focus:outline-none" {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required.'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password should have minimum 6 characters'
                            }
                        })}/>
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {signInError}
                    
                    <input className='btn bg-primary w-full hover:bg-accent text-white' type="submit" value="Register" />
                </form>

                <p className='my-5'>Already have an account? <Link className='text-primary hover:text-secondary' to={'/login'}>Login</Link></p>

                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn border-primary w-full text-primary hover:bg-primary hover:border-primary hover:text-white">Continue with google</button>
            </div>
            </div>
        </div>
    );
};

export default Register;