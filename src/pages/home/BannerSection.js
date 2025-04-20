import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

import bannerImg from '../../assets/img/banner/banner-4.png';

const BannerSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);


    return (
        <React.Fragment>

            {/* <!-- banner section start --> */}
            <div className="rs-banner style3 rs-rain-animate modify1"> 
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='HpBb_4hwmhc' onClose={() => { openModal(); }} />               
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 pt-40 pr-140 sm-pr-14"> 
                            <div className="banner-content">
                                {/* <div className="rs-videos hidden-md">
                                    <div className="animate-border white-color style3">
                                        <a className="popup-border popup-videos" onClick={() => { openModal(); }}>
                                            <i className="fa fa-play"></i>
                                        </a>
                                    </div>
                                </div> */}
                                <img src={bannerImg} alt="Banner Floating Image" className='mx-auto mx-md-5 pb-40 px-5 d-md-block d-lg-none'/>
                                <h2 className="title" data-animation="fadeInLeft" data-delay=".3s">Transform Your Business with Cutting-Edge Technology Solutions</h2>
                                <p className="desc" data-animation="fadeInLeft" data-delay=".5s">Empowering businesses worldwide with innovative technology solutions that drive growth, efficiency, and competitive advantage.</p>
                                <ul className="banner-btn">
                                    <li><a className="readon started" href="#contact-form-section">Get Started</a></li>
                                </ul>
                            </div>
                        </div>  
                        <div className='col-lg-5 hidden-md'>
                            <img
                                src={bannerImg}
                                alt="Banner Floating Image"
                            />
                        </div>                          
                    </div>
                    {/* <div className="images-part hidden-md">
                        <img
                            src={bannerImg}
                            alt="Banner Floating Image"
                        />
                    </div> */}
                    <div className="line-inner style2">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
            {/* <!-- banner section end --> */}
            
        </React.Fragment>
    );
}

export default BannerSection;