import React from 'react';
import tesla from '../../../Assets/Images/tesla.jpg';
import './Welcome.css'
import { FaCarCrash } from "react-icons/fa";
import { BsSuitHeartFill, BsFillEmojiHeartEyesFill, BsAwardFill} from "react-icons/bs";

const Welcome = () => {
    return (
        <div className='my-5 welcome-container'>
            <div className="container-fluid ">
                <h2 className='text-center fw-bold gray mb-4'>WELCOME TO THE CAR DEALER</h2>
                <div className='red-line-top '></div>
                <div className='red-line-bottom'></div>
                <div className="row mt-3 pt-5 g-4 welcome-row align-items-center">
                    <div className="col-12 col-md-6">
                        <img className='img-fluid rounded welcome-img' src={tesla} alt="" />
                    </div>
                    <div className="col-12 px-5 col-md-6">
                        <h5 className='gray'>Deal with the best car dealer in the town.</h5>
                        <p className='mb-5'>Search Our Inventory With Thousands Of Cars And More Cars Are Adding On Daily Basis</p>
                        <div className="row g-3 reviews">
                            <div className="col-6">
                                <div className="d-flex">
                                    <div>
                                        <FaCarCrash className='text-success me-2 icon-style-w' />
                                    </div>
                                    <div>
                                        <p className='mb-0'><small className='fw-bold gray'>VEHICLES IN STOCK</small></p>
                                        <h2>3968</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex">
                                    <div>
                                        <BsSuitHeartFill className='icon-style-w text-danger me-2'/>
                                    </div>
                                    <div>
                                        <p className='mb-0'><small className='fw-bold gray'>DEALER REVIEWS</small></p>
                                        <h2>1500</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex">
                                    <div>
                                        <BsFillEmojiHeartEyesFill className='icon-style-w me-2 text-primary'/>
                                    </div>
                                    <div>
                                        <p className='mb-0'><small className='fw-bold gray'>HAPPY CUSTOMERS</small></p>
                                        <h2>2000</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex">
                                    <div>
                                        <BsAwardFill className="me-2 icon-style-w text-success"/>
                                    </div>
                                    <div>
                                        <p className='mb-0'><small className='fw-bold gray'>AWARDS</small></p>
                                        <h2>450</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;