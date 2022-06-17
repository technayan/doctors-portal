import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    console.log(user);

    // Loading
    if(loading || adminLoading) {
        return <Loading />
    }

    if(!user || !admin) {
        signOut(auth);
        return <Navigate to={'/login'} state = {{from : '/'}} replace />;
    }
    return children;
};

export default RequireAuth;