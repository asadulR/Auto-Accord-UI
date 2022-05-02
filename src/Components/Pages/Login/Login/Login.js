
import { useEffect, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Shared/Auth/Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import '../FormStyle.css';
import SocialLogin from '../SocialLogin/SocialLogin';




import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);





    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    const [logedinUser] = useAuthState(auth);

    if (error) {
        if (error?.message.includes('auth/user-not-found')) {
            errorElement = <p className='text-danger'>error: user not found</p>
        }
        if (error?.message.includes('auth/wrong-password')) {
            errorElement = <p className='text-danger'>error: wrong password</p>
        }
        else {
            // errorElement = <p className='text-danger'>Error: {error?.message}</p>
        }
    }

    
   useEffect( () => {
    if (user) {
        //  generating a tocken for the backend 
        const url = 'https://auto-accord.herokuapp.com/login';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
               email: logedinUser?.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('accessToken', data.token);


                navigate(from, { replace: true });
            });


        // console.log(logedinUser?.email)
    }
   },[logedinUser])



    if (loading || sending) {
        return <Loading />
    }

    const resetPassword = async () => {
        errorElement = ''
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email');
        }
        else {
            errorElement = <p className='text-danger'>Error: Please provide your email</p>
            toast.error('please enter your email address');
        }
    }
    return (
        <div className='my-5 py-5'>
            {/* <Helmet>
                <title>Login - Money Max</title>
            </Helmet> */}
            <div className="formbg-outer" data-aos="fade-up"
                        data-aos-duration="1500">
                <div className="formbg p-5">
                    <div className="formbg-inner padding-horizontal--48">
                        <span className="padding-bottom--15 title-form mb-4 text-center fw-bold">Login</span>
                        <form onSubmit={handleLogin} id="stripe-login">
                            <div className="field mb-3 padding-bottom--24">
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id='email' required />
                            </div>
                            <div className="field mb-3 padding-bottom--24">
                                <div className="grid--50-50">
                                    <label htmlFor="password">Password</label>
                                    <div className="reset-pass">
                                        <p onClick={resetPassword} className='pointer'>Forgot your password?</p>
                                    </div>
                                </div>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id='password' required />
                            </div>
                            {errorElement}
                            <div className="field padding-bottom--24">
                                <input type="submit" className='login-btn' name="submit" value="Continue" />
                            </div>
                        </form>
                    </div>
                    <span className='fs-6 mt-5 text-center'><small>Don't have an account? <Link to="/signup">Signup</Link></small></span>
                </div>
                <div className="footer-link mt-3 padding-top--24">
                    <SocialLogin />
                    <Toaster />
                </div>
            </div>

        </div>
    );
};

export default Login;