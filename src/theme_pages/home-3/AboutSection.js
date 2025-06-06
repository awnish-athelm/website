import React from 'react';
import { Link } from 'react-router-dom';

import SectionTitle from '../../theme_components/Common/SectionTitle';

import aboutImg from '../../assets/img/about/about-3.png';
import effectImg1 from '../../assets/img/about/effect-1.png';
import effectImg2 from '../../assets/img/about/dotted-3.png';
import effectImg3 from '../../assets/img/about/shape3.png';

const About = () => {

    return (
        <div id="rs-about" className="rs-about gray-bg pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 md-mb-30">
                        <div className="rs-animation-shape">
                            <div className="images">
                                <img src={aboutImg} alt="" />
                            </div>
                            <div className="middle-image2">
                                <img className="dance" src={effectImg1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-60 md-pl-14">
                        <div className="contact-wrap">
                            {/* Section Title Start */}
                            <SectionTitle
                                sectionClass="sec-title mb-30"
                                subtitleClass="sub-text style-bg"
                                subtitle="About Us"
                                titleClass="title pb-36"
                                title="We Are Increasing Business Success With Technology"
                                descClass="desc pb-34"
                                description="Over 25 years working in IT services developing software applications and mobile apps for clients all over the world."
                                secondDescClass="margin-0 pb-16"
                                secondDescription="We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying."
                            />
                            {/* Section Title End */}
                            <div className="btn-part">
                                <Link className="readon learn-more" to="/contact">Learn-More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-image">
                    <img className="top dance" src={effectImg2} alt="" />
                    <img className="bottom dance" src={effectImg3} alt="" />
                </div>
            </div>
        </div>
    );
}

export default About;