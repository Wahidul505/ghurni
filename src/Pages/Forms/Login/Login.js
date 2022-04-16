import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
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
    });
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);
    const handleEmailChange = e => {
        setUserInfo({ ...userInfo, email: e.target.value });
    }
    const handlePasswordChange = e => {
        setUserInfo({ ...userInfo, password: e.target.value });
    }
    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }
    useEffect(() => {
        if (loginError) {
            switch (loginError.code) {
                case "auth/wrong-password":
                    setErrors({ ...errors, general: "Wrong Password" });
                    break;
                case "auth/user-not-found":
                    setErrors({ ...errors, general: "Invalid Email Address" });
                    break;
                default:
                    setErrors({ ...errors, general: "Something went wrong" });
            }
        }
        if (user) {
            setErrors({ emailError: "", passwordError: "", general: "" });
            navigate(from, {replace:true});
        }
    }, [loginError, errors, user, from, navigate]);

    return (
        <div className='w-2/3 md:w-1/3 mx-auto'>
            <h1 className='text-white text-3xl font-semibold mb-6'>Login</h1>
            <form onSubmit={handleLogin} className='flex flex-col gap-4 text-xl'>
                <input onChange={handleEmailChange} className='bg-white py-1 px-2 rounded focus:outline-none' type="email" name="email" id="email" placeholder='Email' />
                <input onChange={handlePasswordChange} className='bg-white py-1 px-2 rounded focus:outline-none' type="password" name="password" id="password" placeholder='Password' />
                {errors?.general && <p className='text-red-400'>{errors?.general}</p>}
                <input className='bg-amber-500 text-white rounded py-1 px-2 cursor-pointer mb-2' type="submit" value="Login" />
            </form>
            <Link to='/register' className='text-white underline'>Create an Account</Link>
            <div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;