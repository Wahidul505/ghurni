import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <></>
    }
    if (user) {
        return children;
    } else {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
};

export default RequireAuth;