import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    console.log(user);

    return (
        <div className='h-full flex justify-center items-center py-20'>
            <div className="card w-96 bg-base-100 shadow-lg">
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center text-secondary">Login</h2>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn border-secondary text-secondary hover:bg-secondary hover:border-secondary hover:text-white">Continue with google</button>
            </div>
            </div>
        </div>
    );
};

export default Login;