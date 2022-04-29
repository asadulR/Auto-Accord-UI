import React from 'react';
import './ChooseUs.css';
import { FaCarCrash } from "react-icons/fa";
import { ImBubbles, ImShrink, ImHappy, ImFilter, ImSleepy} from "react-icons/im";

const ChooseUs = () => {
    return (
        <section className='my-5'>
            <div className="container py-5">
                <p className='gray text-center mb-2'>Because We are ultra creative company</p>
                <h3 className='text-center fw-bold mb-5'>WHY CHOOSE US</h3>
                <div className="row g-4">
                    <div className="col-12 col-md-4 text-center">
                        <h4 className="icon-container"><FaCarCrash className='text-danger icon-style'/></h4>
                        <h5 className='gray fw-bold'>ALL BRANDS</h5>
                        <div className='line-bittom'></div>
                        <p className='mb-0 mt-3 gray'>We are the only one dealer in this city stocking all brands of car.</p>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <h4 className="icon-container"><ImBubbles className='text-primary icon-style'/></h4>
                        <h5 className='gray fw-bold'>FREE SUPPORT</h5>
                        <div className='line-bittom'></div>
                        <p className='mb-0 mt-3 gray'> We provide 24/7 free support to our business partner. Happy journey..</p>
                    </div>
                    <div className="col-12 col-md-4  text-center">
                        <h4 className="icon-container"><ImShrink className='text-danger icon-style'/></h4>
                        <h5 className='gray fw-bold'>OIL CHANGES</h5>
                        <div className='line-bittom'></div>
                        <p className='mb-0 mt-3 gray'> We provide any type of support to our business partner. Happy journey..</p>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <h4 className="icon-container"><ImHappy className='text-success icon-style'/></h4>
                        <h5 className='gray fw-bold'>AFFORDABLE</h5>
                        <div className='line-bittom'></div>
                        <p className='mb-0 mt-3 gray'>We are the only company supplying affordable cars. Best price in the market</p>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <h4 className="icon-container"><ImFilter className='text-info icon-style'/></h4>
                        <h5 className='gray fw-bold'>DEALERSHIP</h5>
                        <div className='line-bittom'></div>
                        <p className='mb-0 mt-3 gray'>You can have a dealership from us with esay conditions.</p>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <h4 className="icon-container"><ImSleepy className='text-success icon-style'/></h4>
                        <h5 className='gray fw-bold'>AUTO ELECTRIC</h5>
                        <div className='line-bittom'></div>
                        <p className='mb-0 mt-3 gray'>We are the only company supplying affordable cars. Best price in the market</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;