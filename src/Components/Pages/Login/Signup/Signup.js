import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Shared/Auth/Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import '../FormStyle.css';
import SocialLogin from '../SocialLogin/SocialLogin';




import AOS from 'aos';
import 'aos/dist/aos.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
AOS.init();

const Signup = () => {
    // receiving values of input fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let errorElement;
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // console.log(email, password, name);
    const [logedInUser] = useAuthState(auth);
    const handleSingup = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    };

    if (error) {
        if (error?.message.includes('auth/email-already-in-use')) {
            errorElement = <p className='text-danger'>Email already in use.</p>
        }
        if (error?.message.includes('auth/weak-password')) {
            errorElement = <p className='text-danger'>error: Password should be at least 6 characters.</p>
        }
        else {
            errorElement = <p className='text-danger'>Error: {error?.message}</p>
        }
    }

    useEffect(() => {
        if (user) {
            const url = 'https://auto-accord.herokuapp.com/login';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: logedInUser?.email
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem('accessToken', data.token);
                    console.log(logedInUser.email)
                });

            toast.success('Account Created!');
            navigate('/');
        }
    }, [user]);

    if (loading) {
        return <Loading />
    };

    return (
        <div className='my-5 py-5' data-aos="fade-up"
        data-aos-duration="1500">
            <PageTitle title="Signup"></PageTitle>
            <div className="formbg-outer">
                <div className="formbg p-5">
                    <div className="formbg-inner padding-horizontal--48">
                        <span className="padding-bottom--15 title-form mb-4 text-center fw-bold">Sign up</span>
                        <form onSubmit={handleSingup} id="stripe-login">
                            <div className="field mb-3 padding-bottom--24">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id='name' />
                            </div>
                            <div className="field mb-3 padding-bottom--24">
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id='email' required />
                            </div>
                            <div className="field mb-3 padding-bottom--24">
                                <label htmlFor="password">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id='password' required />
                            </div>
                            {errorElement}
                            <div className="field padding-bottom--24">
                                <input type="submit" className='login-btn' name="submit" value="Sign up" />
                            </div>
                        </form>
                    </div>
                    <span className='fs-6 mt-5 text-center'><small>Already have an account? <Link to="/login">Login</Link></small></span>
                </div>
                <div className="footer-link mt-3 padding-top--24">
                    <SocialLogin />
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Signup;