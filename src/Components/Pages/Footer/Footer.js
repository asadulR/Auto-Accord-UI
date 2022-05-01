import React from 'react';
import './Footer.css';
import { BsFacebook, BsGithub,BsLinkedin, BsInstagram, BsTwitter} from "react-icons/bs";
const Footer = () => {

    const thisYear = () => (
        new Date().getFullYear()
    );
    return (
        <div className='footer-container'>
            <div className="container">
                <div className="row g-4">
                    <div className="col-12  col-md-6">
                        <div className="row l-bg p-4 me-md-2 me-sm-0 justify-content-between rounded align-items-center">
                            <div className="col-12 col-md-12 col-lg-8">
                                <h5 className='fw-bold footer-title'>ARE YOU LOOKING FOR A CAR?</h5>
                                <div className="s-line"></div>
                                <p className='gray'>Search Our Inventory With Thousands Of Cars And More Cars Are Adding On Daily Basis</p>
                            </div>
                            <div className="col-12 text-end col-lg-4">
                                <button className='explore-btn'>Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 ">
                        <div className="row l-bg p-4 ms-md-2 ms-sm-0 justify-content-between rounded align-items-center">
                            <div className="col-12 col-md-12 col-lg-8">
                                <h5 className='fw-bold footer-title'>DO YOU WANT TO SELL A CAR?</h5>

                                <div className='s-line'></div>
                                <p className='gray'>Login the website and Add Car To our Inventory Collection. Sell Car With Us, Stay happy with us</p>
                            </div>
                            <div className="col-12 text-end col-lg-4">
                                <button className='explore-btn'>Add Car</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-icon-container text-center my-5 ">
                    <a className='m-md-3 m-2' href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 '/></a>
                    <a className='m-md-3 m-2' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 text-success'/></a>
                    <a className='m-md-3 m-2' href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 text-white'/></a>
                    <a className='m-md-3 m-2' href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsInstagram className='fs-1 text-danger'/></a>
                    <a className='m-md-3 m-2' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsTwitter className='fs-1 text-primary'/></a>
                </div>
                <p className='text-center text-white'>Copyright &copy; {thisYear()} Asadul Rahman, All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;