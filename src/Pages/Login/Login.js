import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useToken from '../../hooks/useToken';


const Login = () => {
    // React Firebase Hooks
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    // useToken Hook
    const [token] = useToken(user || gUser);

    // React Hook Form
    const { register, formState: { errors }, handleSubmit } = useForm();

    // Location 
    const location = useLocation();

    // Navigate 
    const navigate = useNavigate();

    // From (The page user redirect from)
    const from = location.state?.from?.pathname || '/';

    // Login Handler
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    // Redirect to previous page or homepage
    useEffect(() => {
        // User
        if(token) {
            navigate(from, {replace: true})
        }
    }, [token, from, navigate]);

    // Loading
    if(loading || gLoading) {
        return <Loading />
    }

    // Error
    let signInError;

    if(error || gError) {
        signInError = <small className='block pb-3 text-red-500'>{error?.message || gError?.message}</small>
    }

    
    

    return (
        <div className='h-full flex justify-center items-center py-20 min-h-screen mx-5 lg:mx-0'>
            <div className="card w-96 bg-base-100 shadow-lg">
            <div className="p-5 lg:p-8">
                <h2 className="text-2xl font-bold text-center text-primary">Login</h2>


                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Daisyui with React Hook Form validation */}
                    <div className="form-control w-full mt-5">
                        
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
                    
                    <input className='btn bg-primary w-full hover:bg-accent text-white' type="submit" value="Login" />
                </form>

                <p className='my-5'>New to Doctors Portal? <Link className='text-primary hover:text-secondary' to={'/register'}>Create an account</Link></p>

                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn border-primary w-full text-primary hover:bg-primary hover:border-primary hover:text-white">Continue with google</button>
            </div>
            </div>
        </div>
    );
};

export default Login;