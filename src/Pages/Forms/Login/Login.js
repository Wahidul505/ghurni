import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='w-2/3 md:w-1/3 mx-auto'>
            <h1 className='text-white text-3xl font-semibold mb-6'>Login</h1>
            <form className='flex flex-col gap-4 text-xl'>
                <input className='bg-white py-1 px-2 rounded focus:outline-none' type="email" name="email" id="email" placeholder='Email' />
                <input className='bg-white py-1 px-2 rounded focus:outline-none' type="password" name="password" id="password" placeholder='Password' />
                <input className='bg-amber-500 text-white rounded py-1 px-2' type="submit" value="Login" />
            </form>
            <div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;