import React from 'react';
import './Page404.css'
import left from '../../Assets/images/404/404_two.png'
import middle from '../../Assets/images/404/404_three.png'
import right from '../../Assets/images/404/404_one.png'
import { ArrowLeftIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }
    return (
        <div className='my-5 py-5'>
            <div className='container'>
                <div className="row notFoundbg row-cols-3">
                    <div className="col text-end"><img className='img-fluid ' src={left} alt="" /></div>
                    <div className="col text-center"> <img className='img-fluid' src={middle} alt="" /></div>
                    <div className="col text-start"><img className='img-fluid ' src={right} alt="" /></div>
                </div>

                <h2 className='fs-1 fw-bolder text-center'>Error. We can’t find the page you’re looking for.</h2>

               <div className='w-75 mx-auto text-center mt-5'> <button onClick={navigateHome} className='btn btn-outline-primary fw-bold py-2 px-4' > <ArrowLeftIcon className='icon-recize'></ArrowLeftIcon> Go To Home Page</button></div>
            </div>
        </div>
    );
};

export default Page404;