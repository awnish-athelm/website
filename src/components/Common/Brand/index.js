import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

import variables from '../../../assets/scss/_variables.scss';

import brandNormalLogo1 from '../../../assets/img/brand/1.png';
import brandNormalLogo2 from '../../../assets/img/brand/2.png';
import brandNormalLogo3 from '../../../assets/img/brand/3.png';
import brandNormalLogo4 from '../../../assets/img/brand/4.png';
import brandNormalLogo5 from '../../../assets/img/brand/5.png';
import brandNormalLogo6 from '../../../assets/img/brand/6.png';


import brandHoverLogo1 from '../../../assets/img/brand/1.png';
import brandHoverLogo2 from '../../../assets/img/brand/2.png';
import brandHoverLogo3 from '../../../assets/img/brand/3.png';
import brandHoverLogo4 from '../../../assets/img/brand/4.png';
import brandHoverLogo5 from '../../../assets/img/brand/5.png';
import brandHoverLogo6 from '../../../assets/img/brand/6.png';
import { PortfolioList } from '../../../data/Portfolio';

const Brand = (props) =>  {
    const { brandBg, brandClass } = props;

    const brandBgStyle = {
        backgroundImage:`url(${brandBg ? brandBg : ''})`
    }

    const brandBgDefaultStyle = {
        backgroundColor: variables.extraDarkColor
    }

    const options = {
        items: 5,
        nav: false,
        dots: false,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        margin: 30,
        loop: true,
        center: false,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
                stagePadding: 0,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
            1500: {
                items: 5,
            }
        }
    };

    return (
        <div className={ brandClass ? brandClass : 'rs-partner pt-80 pb-70'}  style={brandBg ? brandBgStyle : brandBgDefaultStyle}>
            <div className="container">
                <OwlCarousel options={options} >
                    {PortfolioList.map(item => <div className="partner-item">
                        <div className="logo-img">
                            <a href="#" style={{width: '100%'}}>
                                <img className="hover-logo" src={item.logo} alt={item.name} style={{height:'80px', objectFit:'contain'}} />
                                <img className="main-logo" src={item.logo}  alt={item.name} style={{height:'80px', objectFit:'contain'}} />
                            </a>
                        </div>
                    </div>)}
                    
                </OwlCarousel>
            </div>
        </div>
    );
}

export default Brand;