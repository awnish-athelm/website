import React from 'react';
import SiteBreadcrumb from '../../theme_components/Common/Breadcumb';
import SectionTitle from '../../theme_components/Common/SectionTitle';
import ContactForm from '../../theme_components/Contact/ContactForm';
import ContactInfo from '../../theme_components/Contact/ContactInfo';
import ScrollToTop from '../../theme_components/Common/ScrollTop';

import bannerbg from '../../assets/img/breadcrumbs/3.jpg';


const ContactMain = () => {

        return (
            <React.Fragment>

                {/* SiteBreadcrumb */}
                <SiteBreadcrumb
                    pageTitle="Contact"
                    pageName="Contact"
                    breadcrumbsImg={bannerbg}
                />
                {/* SiteBreadcrumb */}

                {/* Contact Section Start */}
                <div className="rs-contact pt-120 md-pt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 md-mb-60">
                                <ContactInfo />
                            </div>
                            <div className="col-lg-8 pl-70 md-pl-14">
                                <div className="contact-widget">
                                    <SectionTitle
                                        sectionClass="sec-title2 mb-40"
                                        subtitleClass="sub-text contact mb-14"
                                        subtitle="Get In Touch"
                                        titleClass="title testi-title"
                                        title="Fill The Form Below"
                                    />

                                    {/* Contact Form */}
                                    <ContactForm />
                                    {/* Contact Form */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="map-canvas pt-120 md-pt-80">
                        <iframe src="https://maps.google.com/maps?q=rstheme&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>

                    {/* scrolltop-start */}
                    <ScrollToTop />
                    {/* scrolltop-end */}
                </div>
                {/* Contact Section End */}
            </React.Fragment>

        );
}


export default ContactMain;