import React from 'react';
import './Page404';
import { BsArrowLeft } from "react-icons/bs";
import img from '../../Assets/Images/404-error.png';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Page404 = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }
    return (
        <div className='my-5 py-5'>
            <Helmet>
                <title>404: not found</title>
            </Helmet>
            <div className='container'>
                <h1 className='text-danger fw-bolder'>OOOPPS...  404 ERROR</h1>
                <div>
                    <img className='img-fluid' src={img} alt="" />
                </div>

                <h4 className=' fw-bolder text-center'>Error. The Page you were looking for, couldn't be found..</h4>
               <div className='w-75 mx-auto text-center mt-5'> <button onClick={navigateHome} className='btn btn-outline-primary fw-bold py-2 px-4' > <BsArrowLeft className='icon-recize'/> Go To Home Page</button></div>
            </div>
        </div>
    );
};

export default Page404;