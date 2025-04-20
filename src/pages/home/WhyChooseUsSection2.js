import SectionTitle from '../../components/Common/SectionTitle';
import AppointmentForm from '../../components/Appointment/Appointment';

// WhyChooseUs Images
import iconOne from '../../assets/img/choose/icons/style2/1.png';
import iconTwo from '../../assets/img/choose/icons/style2/2.png';
import iconThree from '../../assets/img/choose/icons/style2/3.png';
import { PhoneWidget } from '../../data/constants';


const WhyChooseUs2 = () => {
    return (
        <div className="rs-why-choose style2 gray-bg rs-rain-animate pt-120 pb-120 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7 md-mb-30">
                        <SectionTitle
                            sectionClass="sec-title mb-40"
                            subtitleClass="sub-text style4-bg left"
                            subtitle="Connect With Us"
                            titleClass="title pb-20"
                            title="Your Success Journey Starts Here"
                            descClass="desc fixed-width"
                            description="Unlock your business potential through direct access to our industry-leading experts. Let's transform your vision into reality together."
                        />
                        <div className="services-wrap mb-24">
                            <div className="services-icon">
                                <img
                                    src={iconOne}
                                    alt="Email Icon"
                                />
                            </div>
                            <div className="services-text">
                                <h3 className="title"><a href="mailto:contact@athelm.tech">Reach Out</a></h3>
                                <p className="services-txt">contact@athelm.tech</p>
                            </div>
                        </div>
                        <div className="services-wrap mb-24">
                            <div className="services-icon">
                                <img
                                    src={iconTwo}
                                    alt="Phone Icon"
                                />
                            </div>
                            <div className="services-text">
                                <h3 className="title"><PhoneWidget text="Let's Connect"/></h3>
                                <p className="services-txt"><PhoneWidget/></p>
                            </div>
                        </div>
                        <div className="services-wrap">
                            <div className="services-icon">
                                <img
                                    src={iconThree}
                                    alt="Location Icon"
                                />
                            </div>
                            <div className="services-text">
                                <h3 className="title"><a href="#">Visit Us</a></h3>
                                <p className="services-txt">Bengaluru, Karnataka, India</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="rs-contact mod1">   
                            <AppointmentForm 
                                formTitle="Book Your Consultation"
                                formBtnClass="submit-btn orange-btn"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="line-inner">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default WhyChooseUs2;