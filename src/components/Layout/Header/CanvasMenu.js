import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import canvasLogo from '../../../assets/img/logo/logo.svg';
import { URLs } from '../../../app/Constants';
import { PhoneWidget } from '../../../data/constants';

const CanvasMenu = () => {

    const canvasMenuRemove = () => {
        document.body.classList.remove('nav-expanded');
    };

    return (
        <React.Fragment>
            <nav className="right_menu_togle hidden-md">
                <div className="close-btn">
                    <div className="nav-link">
                        <a onClick={canvasMenuRemove} id="nav-close" className="humburger nav-expander" href="#">
                            <span className="dot1"></span>
                            <span className="dot2"></span>
                            <span className="dot3"></span>
                            <span className="dot4"></span>
                            <span className="dot5"></span>
                            <span className="dot6"></span>
                            <span className="dot7"></span>
                            <span className="dot8"></span>
                            <span className="dot9"></span>
                        </a>
                    </div>
                </div>
                <div className="canvas-logo">
                    <Link to="/"><img src={canvasLogo} alt="logo" /></Link>
                </div>
                <div className="offcanvas-text">
                    <p>Embrace technology for your next big idea. Work with world's leading experts to grow your business.</p>
                </div>
                <div className="canvas-contact">
                    <div className="address-area">
                        <div className="address-list">
                            <div className="info-icon">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <div className="info-content">
                                <h4 className="title">Address</h4>
                                <em>Bengaluru, Karnataka, India</em>
                            </div>
                        </div>
                        <div className="address-list">
                            <div className="info-icon">
                                <i className="fa fa-envelope-open"></i>
                            </div>
                            <div className="info-content">
                                <h4 className="title">Email</h4>
                                <em><a href="mailto:contact@athelm.tech">contact@athelm.tech</a></em>
                            </div>
                        </div>
                        <div className="address-list">
                            <div className="info-icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="info-content">
                                <h4 className="title">Phone</h4>
                                <em><PhoneWidget/></em>
                            </div>
                        </div>
                    </div>
                    <ul className="social">
                        <li>
                            <a href={URLs.Facebook} target='_blank'><i className="fa fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href={URLs.Twitter} target='_blank'><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href={URLs.Pintrest} target='_blank'><i className="fa fa-pinterest"></i></a>
                        </li>
                        <li>
                            <a href={URLs.Instagram} target='_blank'><i className="fa fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default CanvasMenu;