import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Experts.css';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
const Expert = () => {

    return (
        <div className='experts-slider'>
            <p className='text-center gray mb-2'>List of people who matter in our Company</p>
            <h2 className='text-center fw-bold'>OUR EXPERT TEAM</h2>

            <div className='line-top'></div>
            <div className='line-bottom'></div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={1000}
                centerMode={false}
                className="container"
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={.2}
                swipeable
            >
                <div className='img-container'>
                    <img className='img-fluid' src='https://i.ibb.co/nLfkrgw/team-img01.jpg' alt="" />
                    <h4 className='text-center gray mt-3 fw-bold'>Doue Sara</h4>
                    <p className='text-center mt-2 gray'>Content Manager</p>
                    <div className="overlay">
                        <a href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>
                    </div>
                </div>
                <div className='img-container'>
                    <img className='img-fluid' src='https://i.ibb.co/G9QczWP/team-img02.jpg' alt="" />
                    <h4 className='text-center gray mt-3 fw-bold'>Limha Granda</h4>
                    <p className='text-center mt-2 gray'>Exicutive Officer</p>
                    <div className='overlay'>
                        <a href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>
                    </div>
                </div>
                <div className='img-container'>
                    <img className='img-fluid' src='https://i.ibb.co/JpMGnKK/team-img03.jpg' alt="" />
                    <h4 className='text-center gray mt-3 fw-bold'>Sara Powel</h4>
                    <p className='text-center mt-2 gray'>Ass. Manager</p>
                    <div className='overlay'>
                        <a href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>

                    </div>
                </div>
                <div className='img-container'>
                    <img className='img-fluid' src='https://i.ibb.co/VLphfM7/team-img04.jpg' alt="" />
                    <h4 className='text-center gray mt-3 fw-bold'>Adam Smith</h4>
                    <p className='text-center mt-2 gray'>Car Dealer</p>
                    <div className='overlay'>
                        <a href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>
                    </div>
                </div>
                <div className='img-container'>
                    <img className='img-fluid' src='https://i.ibb.co/kQcNQ5Q/team-img05.jpg' alt="" />
                    <h4 className='text-center gray mt-3 fw-bold'>Jemmy Lee</h4>
                    <p className='text-center mt-2 gray'>Car Dealer</p>
                    <div className='overlay'>
                        <a href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>
                    </div>
                </div>
                <div className='img-container'>
                    <img className='img-fluid' src="https://i.ibb.co/s1LgMzP/team-img06.jpg" alt="" />
                    <h4 className='text-center gray mt-3 fw-bold'>Luccy R.</h4>
                    <p className='text-center mt-2 gray'>BMW Dealer</p>
                    <div className='overlay'>
                        <a href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>
                    </div>
                </div>
                <div className='img-container'>
                    <img className='img-fluid' src="https://i.ibb.co/gShzSHd/team-img07.jpg" alt="" />
                    <h4 className='text-center gray mt-3 fw-bold'>Krish Jhonson</h4>
                    <p className='text-center mt-2 gray'>Manager</p>
                    <div className='overlay'>
                        <a href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>
                    </div>
                </div>
                <div className='img-container'>
                    <img className='img-fluid' src="https://i.ibb.co/8XgVCQ0/team-img08.jpg" alt="" />
                    <h4 className='text-center gray mt-3 fw-bold'>Samantha Paul</h4>
                    <p className='text-center mt-2 gray'>Auto Dealer</p>
                    <div className='overlay'>
                        <a href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>
                    </div>
                </div>
            </Carousel>

        </div>
    );
};

export default Expert;