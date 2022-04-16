import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const handleLogout = () => {
        signOut(auth);
    }
    const [user] = useAuthState(auth);
    return (
        <div className='fixed top-0 right-0 left-0 flex justify-between px-6 py-3 items-center'>
            <Link to='/' className='text-white font-mono text-3xl'>Ghurni</Link>
            <div className='flex gap-6 text-xl text-white'>
                <NavLink to='/booking'>Booking</NavLink>
                {
                    user ?
                        <button onClick={handleLogout} className='bg-amber-500 text-white text-lg px-3 py-1 rounded'>Logout</button>
                        :
                        <>
                            <NavLink to='/register'>Register</NavLink>
                            <NavLink className='bg-amber-500 rounded py-1 px-3 text-lg' to='/login'>Login</NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;