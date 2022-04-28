// import React, { useEffect } from 'react';
// import '../FormStyle.css';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

// // import google from '../../../Assets/images/login/google.png'
// // import github from '../../../Assets/images/login/github.png'
// import auth from '../../Auth/Firebase.init';
// import Loading from '../../Shared/Loading/Loading';
// import { useLocation, useNavigate } from 'react-router-dom';

// const SocialLogin = () => {
//     let loginError;
//     const [signInWithGoogle, user, loading, googleError] = useSignInWithGoogle(auth);
//     const navigate = useNavigate();
//     let location = useLocation();
//     let from = location.state?.from?.pathname || "/";

//     useEffect(() => {
//         if (user) {
//             navigate(from, { replace: true });
//         }
//     }, [user])

//     if (googleError) {
//         loginError = <p className='text-danger'>{googleError?.message}</p>
//     }
//     if (loading) {
//         return <Loading />;
//     }
//     return (
//         <div>
//             <div className='d-flex w-90 mx-auto align-items-center'>
//                 <div className='left-hr'></div>
//                 <p className='my-0 mx-3'>Or</p>
//                 <div className='right-hr'></div>
//             </div>

//             <div className='w-75 mx-auto'>
//                 {loginError}
//                 {/* <button onClick={() => signInWithGoogle()} className='w-100 btn another-signin-btn my-2 btn-white'> <img className='me-3' src={google} alt="" />Log in with Google</button>
//                 <button className='w-100 btn another-signin-btn my-2 btn-white'> <img className='me-3' src={github} alt="" />Log in with Github</button> */}
//             </div>
//         </div>
//     );
// };

// export default SocialLogin;