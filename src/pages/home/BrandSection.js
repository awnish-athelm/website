import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import { Partners } from '../../data/Partners';
import SectionTitle from '../../theme_components/Common/SectionTitle';

const BrandSection = () =>  {

    const options = {
        items: 5,
        nav: false,
        dots: false,
        rewind: false,
        autoplay: false,
        stagePadding: 0,
        margin: 30,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
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
        <div className="rs-partner style2 pt-50 pb-50">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title mb-50"
                    subtitleClass="sub-text style4-bg left testi"
                    subtitle="Partners"
                    titleClass="title pb-20"
                    title="Our Partners"
                    descClass="desc"
                    description="We are proud to partner with these companies to bring you the best products and services."
                />
                <OwlCarousel options={options} >
                    {Partners.map(partner => <div className="partner-item">
                        <div className="logo-img">
                            <a href={partner.url} target='_blank'>
                                <img src={partner.logo} alt={partner.name} style={{height:'60px', objectFit:'contain'}}/>
                            </a>
                        </div>
                    </div>)}
                    
                </OwlCarousel>
            </div>
        </div>
    );
}

export default BrandSection;