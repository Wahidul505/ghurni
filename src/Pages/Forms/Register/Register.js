import React, { useEffect, useState } from 'react';
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
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        general: "",
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
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, emailError: "" })
        } else {
            setUserInfo({ ...userInfo, email: "" });
            setErrors({ ...errors, emailError: "Please, Give a valid Email Address" });
        }

    }
    const handlePasswordChange = e => {
        const passwordRegex = /.{8,}$/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, passwordError: "" });
        } else {
            setUserInfo({ ...userInfo, password: "" });
            setErrors({ ...errors, passwordError: "Password is too short" })
        }
    }
    const handleConfirmPasswordChange = e => {
        setUserInfo({ ...userInfo, confirmPassword: e.target.value });
    }
    const handleRegister = e => {
        e.preventDefault();
        if (userInfo.password !== userInfo.confirmPassword) {
            setErrors({ ...errors, passwordError: "Password Didn't matched" });
            return;
        }
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    }
    useEffect(() => {
        if (creatUserError) {
            switch (creatUserError.code) {
                case "auth/email-already-in-use":
                    setErrors({ ...errors, general: "Email Already Exist" });
                    break;
                default:
                    setErrors({ ...errors, general: "Something went wrong" });
            }
        }
        if(user){
            setErrors({emailError: "", passwordError: "", general:""});
        }
    }, [creatUserError, errors, user]);
    return (
        <div className='w-2/3 md:w-1/3 mx-auto -mt-8'>
            <h1 className='text-white text-3xl font-semibold mb-6'>Create an Account</h1>
            <form onSubmit={handleRegister} className='flex flex-col gap-4 text-xl'>
                <input onChange={handleNameChange} className='bg-white py-1 px-2 rounded focus:outline-none' type="text" name="name" id="name" placeholder='Name' />
                <input onChange={handleEmailChange} className='bg-white py-1 px-2 rounded focus:outline-none' type="email" name="email" id="email" placeholder='Email' />
                {errors?.emailError && <p className='text-red-400'>{errors?.emailError}</p>}
                <input onChange={handlePasswordChange} className='bg-white py-1 px-2 rounded focus:outline-none' type="password" name="password" id="password" placeholder='Password' />
                {errors?.passwordError && <p className='text-red-400'>{errors?.passwordError}</p>}
                <input onChange={handleConfirmPasswordChange} className='bg-white py-1 px-2 rounded focus:outline-none' type="password" name="confirm_password" id="confirm_password" placeholder='Confirm Password' />
                {errors?.general && <p className='text-red-400'>{errors?.general}</p>}
                <input className='bg-amber-500 text-white rounded py-1 px-2 cursor-pointer' type="submit" value="Create Account" />
            </form>
            <div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;