import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import FooterBottom from './FooterBottom';
import {URLs} from '../../../app/Constants';
import Newsletter from '../../Common/Newsletter';
import footerLogo1 from '../../../assets/img/logo/logo.svg';
import { ServiceList } from '../../../data/Services';
import { PhoneWidget } from '../../../data/constants';

const Footer = (props) => {
    const { footerLogo, footerClass } = props;
    return (
        <footer className={footerClass ? footerClass : 'rs-footer'}>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="footer-logo">
                                <Link to="/" ><img src={footerLogo ? footerLogo : footerLogo1} alt="Logo" /></Link>
                            </div>
                            <div className="textwidget pb-30">
                                <p>Transform your vision into reality with cutting-edge technology solutions. Partner with our global team of industry experts to accelerate your business growth and stay ahead of the competition.</p>
                            </div>
                            <ul className="footer-social md-mb-30">
                                <li>
                                    <a href={URLs.Facebook} target='_blank' rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href={URLs.Twitter} target='_blank' rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href={URLs.Pintrest} target='_blank' rel="noopener noreferrer"><i className="fa fa-pinterest"></i></a>
                                </li>
                                <li>
                                    <a href={URLs.Instagram} target='_blank' rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 pl-44 md-pl-14 md-mb-30">
                            <h3 className="widget-title">Our Solutions</h3>
                            <ul className="site-map">
                                {ServiceList.map((service, index) => (
                                    <li key={index}>
                                        <Link to="/#service-section">{service.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 md-mb-30">
                            <h3 className="widget-title">Get in Touch</h3>
                            <ul className="address-widget">
                                <li>
                                    <i className="flaticon-location"></i>
                                    <div className="desc">Bengaluru, Karnataka, India</div>
                                </li>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="desc">
                                        <PhoneWidget/>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-email"></i>
                                    <div className="desc">
                                        <a href="mailto:contact@athelm.tech">contact@athelm.tech</a>
                                    </div>
                                </li>
                                <li>
                                    <i className="flaticon-clock"></i>
                                    <div className="desc">
                                        Monday - Friday: 10:00 - 19:00 IST
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <h3 className="widget-title">Stay Updated</h3>
                            <p className="widget-desc">Subscribe to our newsletter for the latest insights, updates, and technology trends.</p>
                            <p>
                                <Newsletter />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
}

export default Footer;