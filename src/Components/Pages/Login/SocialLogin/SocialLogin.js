import React, { useEffect, useState } from 'react';
import '../FormStyle.css';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import google from '../../../Assets/Images/icon/google.png'
// import github from '../../../Assets/images/login/github.png'
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Shared/Auth/Firebase.init';

const provider = new GoogleAuthProvider();

const SocialLogin = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [error, setError] = useState('');



    const googleAuth = () => {
        signInWithPopup(auth , provider)
        .then((result) => {
            const user = result.user;
            navigate(from, { replace: true });
            // console.log(user)
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            // console.log(error.message)
        });
    }



    return (
        <div>
            <div className='d-flex w-90 mx-auto align-items-center'>
                <div className='left-hr'></div>
                <p className='my-0 mx-3'>Or</p>
                <div className='right-hr'></div>
            </div>

            <div className='w-75 mx-auto'>
                <p className='mb-1 text-danger'>{error}</p>
                <button onClick={googleAuth} className='w-100 btn another-signin-btn my-2 btn-white'> <img className='me-3 social-icon' src={google} alt="" />Log in with Google</button>
                {/* <button className='w-100 btn another-signin-btn my-2 btn-white'> <img className='me-3' src={github} alt="" />Log in with Github</button> */}
            </div>
        </div>
    );
};

export default SocialLogin;