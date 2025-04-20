import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/img/logo/logo.svg';

const TopHeader = () => {

    return (
        <div className="topbar-area hidden-md">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo-part">
                            <Link to="/"><img src={Logo} alt="Logo" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-10 text-right">
                        <ul className="rs-contact-info">
                            <li className="contact-part">
                                <i className="flaticon-location"></i>
                                <span className="contact-info">
                                    <span>Address</span>
                                    05 kandi BR. New York
                                </span>
                            </li>
                            <li className="contact-part">
                                <i className="flaticon-email"></i>
                                <span className="contact-info">
                                    <span>E-mail</span>
                                    <a href="mailto:support@rstheme.com"> support@rstheme.com</a>
                                </span>
                            </li>
                            <li className="contact-part">
                                <i className="flaticon-call"></i>
                                <span className="contact-info">
                                    <span>Phone</span>
                                    +019988772
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;