import React from 'react';
import google from '../../../images/google.png';
import facebook from '../../../images/fb.png';

const SocialLogin = () => {
    return (
        <div className='mt-3 text-white'>
            <div className='flex gap-3 items-center mb-3'>
                <div className='bg-white h-1 w-full rounded'></div>
                <p className='text-xl'>or</p>
                <div className='bg-white h-1 w-full rounded'></div>
            </div>
            <button className='flex items-center gap-4 text-xl border border-white w-full justify-center rounded py-2 mb-3'><img className='h-8' src={google} alt="" /> Google Sign in</button>
            <button className='flex items-center gap-4 text-xl border border-white w-full justify-center rounded py-2 mb-3'><img className='h-8' src={facebook} alt="" /> Facebook Login</button>
        </div>
    );
};

export default SocialLogin;