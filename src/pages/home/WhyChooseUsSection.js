import SectionTitle from '../../theme_components/Common/SectionTitle';

// WhyChooseUs Images
import mainImg from '../../assets/img/choose/2.png';
import animImg1 from '../../assets/img/choose/dotted-1.png';
import animImg2 from '../../assets/img/choose/dotted-2.png';
import iconOne from '../../assets/img/choose/icons/1.png';
import iconTwo from '../../assets/img/choose/icons/2.png';
import iconThree from '../../assets/img/choose/icons/3.png';
import { Metrics } from '../../app/Constants';


const WhyChooseUs = () => {

    return (
        <div className="rs-why-choose pt-120 pb-120 md-pt-74 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 hidden-md">
                        <div className="image-part">
                            <img
                                src={mainImg}
                                alt="Main Image"
                            />
                        </div>
                        <div className="animation style2">
                            <div className="top-shape">
                                <img
                                    className="dance"
                                    src={animImg2}
                                    alt="Animation Two"
                                />
                            </div>
                            <div className="bottom-shape">
                                <img
                                    className="dance2"
                                    src={animImg1}
                                    alt="Animation One"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-60 md-pl-15">
                        <SectionTitle
                            sectionClass="sec-title mb-40"
                            subtitleClass="sub-text style4-bg"
                            subtitle="Why Choose Us"
                            titleClass="title pb-20"
                            title="We Create Result-Oriented Dynamic Applications"
                            descClass="desc"
                            description={`With over ${Metrics.MaxYearsExperience} years of experience in the industry, wes have expertise in building pitch decks, raising investments, developing software applications and mobile apps, building teams and ecosystems for firms globally.`}
                        />
                        <div className="services-wrap mb-24">
                            <div className="services-icon">
                                <img
                                    src={iconOne}
                                    alt="Choose Icon"
                                />
                            </div>
                            <div className="services-text">
                                <h3 className="title"><a href="#">Fast Growing Process</a></h3>
                                <p className="services-txt">  We ensure a streamlined and efficient development process to deliver solutions quickly.</p>
                            </div>
                        </div>
                        <div className="services-wrap mb-24">
                            <div className="services-icon">
                                <img
                                    src={iconTwo}
                                    alt="Choose Icon"
                                />
                            </div>
                            <div className="services-text">
                                <h3 className="title"><a href="#">Clean code</a></h3>
                                <p className="services-txt">  Our expert developers adhere to best practices to create efficient, maintainable, and high-quality code.</p>
                            </div>
                        </div>
                        <div className="services-wrap">
                            <div className="services-icon">
                                <img
                                    src={iconThree}
                                    alt="Choose Icon"
                                />
                            </div>
                            <div className="services-text">
                                <h3 className="title"><a href="#">Well Documentation</a></h3>
                                <p className="services-txt">  We provide thorough and organized documentation to make maintenance and future development easy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;