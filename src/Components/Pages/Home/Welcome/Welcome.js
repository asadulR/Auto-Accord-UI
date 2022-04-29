import React from 'react';
import tesla from '../../../Assets/Images/tesla.jpg';
import './Welcome.css'
const Welcome = () => {
    return (
        <div className='my-5 welcome-container'>
            <div className="container-fluid ">
                <h2 className='text-center fw-bold gray mb-4'>WELCOME TO THE CAR DEALER</h2>
                <div className='red-line-top '></div>
                <div className='red-line-bottom'></div>
                <div className="row mt-3 pt-5 g-4 welcome-row align-items-center">
                    <div className="col-12 col-md-6">
                        <img className='img-fluid' src={tesla} alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h5 className='gray'>Deal with the best car dealer in the city</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;