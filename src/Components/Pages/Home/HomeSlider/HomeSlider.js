import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeSlider.css'
import slider1 from '../../../Assets/Images/top slider/1.jpg'
import slider2 from '../../../Assets/Images/top slider/2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const HomeSlider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='slide-caption' data-aos="fade-up"
                        data-aos-duration="3000">
                        <h2 className='text-primary'>YOUR VEHICLE IS SAFE WITH US</h2>
                        <p className='text-primary w-50 mx-auto'>Number one car dealer in the city. We provide the best solution for your car needs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='slide-caption' data-aos="fade-up"
                        data-aos-duration="3000">
                        <h2>IMPROVE YOUR BOSINESS WITH US</h2>
                        <p className='w-50 mx-auto'>Number one car dealer in the city. We provide the best solution for your car needs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeSlider;