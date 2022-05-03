import React from 'react';
import './Contact.css';
import { BsFillGeoAltFill, BsFillTelephoneForwardFill, BsFileEarmarkZipFill, BsEnvelopeFill } from "react-icons/bs";


import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';
import PageTitle from '../Shared/PageTitle/PageTitle';

AOS.init();
const Contact = () => {



    const handleContactForm = (event) => {
        event.preventDefault();

        toast.success('Thanks for reaching out us.')

        event.target.reset();
    }
    return (
        <div className='contact-container' data-aos="fade-up"
        data-aos-duration="1500">
            <PageTitle title='Contact'></PageTitle>
            <div className="container">
                <div className="contact-info pt-5">
                    <p className='text-white mb-1 text-center'>We’d Love to Hear From You</p>
                    <h2 className='text-primary  fw-bold text-center'>LET'S GET IN TOUCH!</h2>
                    <div className="l-top"></div>
                    <div className="l-bottom"></div>

                </div>
                <div className="iconic-info mb-5" >
                    <div className="row g-3">
                        <div className=" col-md-6 p-3 col-lg-3">
                            <div className="c-info-bg">
                                <BsFillGeoAltFill className='contact-icon' />
                                <h4>ADDRESS</h4>

                                <p className='gray mb-0'>Mirpur 1, Dhaka</p>
                            </div>
                        </div>
                        <div className=" col-md-6 p-3 col-lg-3">
                            <div className="c-info-bg">
                                <BsFillTelephoneForwardFill className='contact-icon' />
                                <h4>PHONE</h4>

                                <p className='gray mb-0'>(007) 123 456 7890</p>
                            </div>
                        </div>
                        <div className=" col-md-6 p-3 col-lg-3">
                            <div className="c-info-bg">
                                <BsEnvelopeFill className='contact-icon' />
                                <h4>EMAIL</h4>
                                <p className='gray mb-0'>support@autoaccord.com</p>
                            </div>
                        </div>
                        <div className=" col-md-6 p-3 col-lg-3">
                            <div className="c-info-bg">
                                <BsFileEarmarkZipFill className='contact-icon' />
                                <h4>FAX</h4>
                                <p className='gray mb-0'>(007) 123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form-container">
                    <form onSubmit={handleContactForm} className="contact-form row g-4" >
                        <div className="col-md-6">
                            <input type="email" required name='email' className="form-control" id="inputEmail4 " placeholder='Email *' />
                        </div>
                        <div className="col-md-6">
                            <input type="text" required name='name' placeholder='Your name *' className="form-control" id="inputname " />
                        </div>
                        <div className="col-md-6">
                            <input type="text" required name='nameCompany' placeholder='Company name *' className="form-control" id="inputCompanyName " />
                        </div>

                        <div className="col-md-6">
                            <input type="number" name='phone' className="form-control" required id="inputItemCode" placeholder="Phone number *" />
                        </div>

                        <div className="col-12">
                            <textarea className="form-control" required id="exampleFormControlTextarea1" name='comment' placeholder='Comment *' rows="5"></textarea>
                        </div>

                        <div className="col-12 text-center">
                            <input type="submit" className="btn mt-4 add-item-btn" value='Send' />
                        </div>
                    </form>
                    <Toaster />
                </div>
            </div>
        </div>
    );
};

export default Contact;