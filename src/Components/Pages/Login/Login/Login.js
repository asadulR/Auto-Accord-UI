
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../FormStyle.css';
// import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // useEffect(() => {
    //     if (user) {
    //         navigate(from, { replace: true });
    //     }
    // }, [user])
    return (
        <div className='my-5 py-5'>
            {/* <Helmet>
                <title>Login - Money Max</title>
            </Helmet> */}
            <div className="formbg-outer">
                <div className="formbg p-5">
                    <div className="formbg-inner padding-horizontal--48">
                        <span className="padding-bottom--15 title-form mb-4 text-center fw-bold">Login</span>
                        <form id="stripe-login">
                            <div className="field mb-3 padding-bottom--24">
                                <label htmlFor="email">Email</label>
                                <input  type="email" name="email" id='email' required />
                            </div>
                            <div className="field mb-3 padding-bottom--24">
                                <div className="grid--50-50">
                                    <label htmlFor="password">Password</label>
                                    <div className="reset-pass">
                                        <p  className='pointer'>Forgot your password?</p>
                                    </div>
                                </div>
                                <input  type="password" name="password" id='password' required />
                            </div>

                            <div className="field padding-bottom--24">
                                <input type="submit" className='login-btn' name="submit" value="Continue" />
                            </div>
                        </form>
                    </div>
                    <span className='fs-6 mt-5 text-center'><small>Don't have an account? <Link to="/signup">Signup</Link></small></span>
                </div>
                <div className="footer-link mt-3 padding-top--24">
                    {/* <SocialLogin /> */}
                </div>
            </div>

        </div>
    );
};

export default Login;