import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='fixed top-0 right-0 left-0 flex justify-between px-6 py-3 items-center'>
            <Link to='/' className='text-white font-mono text-3xl'>Ghurni</Link>
            <div className='flex gap-6 text-xl text-white'>
                <NavLink to='bookings'>Bookings</NavLink>
                <NavLink to='register'>Register</NavLink>
                <NavLink className='bg-amber-500 rounded py-1 px-3 text-lg' to='login'>Login</NavLink>

            </div>
        </div>
    );
};

export default Header;