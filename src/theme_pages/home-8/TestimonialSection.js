import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import variables from '../../assets/scss/_variables.scss';

import SingleTestimonial from '../../theme_components/Testimonial/SingleTestimonial';

// Testimonial Images
import quote from '../../assets/img/testimonial/quote-white.png';

// Testimonial Avatars
import author1 from '../../assets/img/testimonial/1.jpg';
import author2 from '../../assets/img/testimonial/2.jpg';
import author3 from '../../assets/img/testimonial/3.jpg';
import author4 from '../../assets/img/testimonial/4.jpg';
import author5 from '../../assets/img/testimonial/5.jpg';
import bgImg from '../../assets/img/bg/tech-bg.png';

const Testimonial = () => {

    const testimonialBgStyle = {
        backgroundImage:`url(${bgImg})`,
        backgroundColor: variables.extraDarkColor
    }

    const options = {
        items: 2,
        nav: false,
        dots: false,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        loop: true,
        center: false,
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
                nav: false,
            },
            768: {
                items: 1,
                stagePadding: 0,

            },
            992: {
                items: 1,
                stagePadding: 0,

            },
            1200: {
                items: 2,
                stagePadding: 0,
            },
            1500: {
                items: 2,
                stagePadding: 0,
            }
        }
    };

	return(
        <React.Fragment>
            <div id="rs-team" className="rs-testimonial main-home style2 modify1" style={testimonialBgStyle}>
                <div className="overlayer pt-120 pb-120 md-pt-74 md-pb-80">
                    <div className="container zIndex">
                        <div className="sec-left">
                            <h2 className="title white-color">Testimonial</h2>
                        </div>
                        <OwlCarousel options={options} >
                            <SingleTestimonial
                                itemClass="testi-item"
                                quoteImage={quote}
                                authorImage={author1}
                                Title="David Warner"
                                Designation="Web Developer"
                                Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                            />
                            <SingleTestimonial
                                itemClass="testi-item"
                                quoteImage={quote}
                                authorImage={author2}
                                Title="Mitchel Starc"
                                Designation="App Developer"
                                Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                            />
                            <SingleTestimonial
                                itemClass="testi-item"
                                quoteImage={quote}
                                authorImage={author3}
                                Title="Steve Smith"
                                Designation="Web Designer"
                                Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                            />
                            <SingleTestimonial
                                itemClass="testi-item"
                                quoteImage={quote}
                                authorImage={author4}
                                Title="Bret Lee"
                                Designation="Client Manager"
                                Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                            />
                            <SingleTestimonial
                                itemClass="testi-item"
                                quoteImage={quote}
                                authorImage={author5}
                                Title="Shan Warne"
                                Designation="Digital Marketar"
                                Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                            />
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Testimonial