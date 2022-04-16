import React, { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState({

    })
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        creatUserError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleNameChange = e => {
        setUserInfo({ ...userInfo, name: e.target.value });
    }
    const handleEmailChange = e => {
        setUserInfo({ ...userInfo, email: e.target.value });
    }
    const handlePasswordChange = e => {
        setUserInfo({ ...userInfo, password: e.target.value });
    }
    const handleConfirmPasswordChange = e => {
        setUserInfo({ ...userInfo, confirmPassword: e.target.value });
    }
    const handleRegister = e => {
        e.preventDefault();
        if (userInfo.password !== userInfo.confirmPassword) {
            return;
        }
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    }
    return (
        <div className='w-2/3 md:w-1/3 mx-auto'>
            <h1 className='text-white text-3xl font-semibold mb-6'>Create an Account</h1>
            <form onSubmit={handleRegister} className='flex flex-col gap-4 text-xl'>
                <input onChange={handleNameChange} className='bg-white py-1 px-2 rounded focus:outline-none' type="text" name="name" id="name" placeholder='Name' />
                <input onChange={handleEmailChange} className='bg-white py-1 px-2 rounded focus:outline-none' type="email" name="email" id="email" placeholder='Email' />
                <input onChange={handlePasswordChange} className='bg-white py-1 px-2 rounded focus:outline-none' type="password" name="password" id="password" placeholder='Password' />
                <input onChange={handleConfirmPasswordChange} className='bg-white py-1 px-2 rounded focus:outline-none' type="password" name="confirm_password" id="confirm_password" placeholder='Confirm Password' />
                <input className='bg-amber-500 text-white rounded py-1 px-2 cursor-pointer' type="submit" value="Create Account" />
            </form>
            <div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;