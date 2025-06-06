import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../theme_components/Common/SectionTitle';
import SingleTestimonial7 from '../../theme_components/Testimonial/SingleTestimonial7';

// Testimonial Images
import quote from '../../assets/img/testimonial/rating.png';

// Testimonial Avatars
import author1 from '../../assets/img/testimonial/1.jpg';
import author2 from '../../assets/img/testimonial/2.jpg';
import author3 from '../../assets/img/testimonial/3.jpg';
import author4 from '../../assets/img/testimonial/4.jpg';

import bgImg from '../../assets/img/bg/testi12-bg.jpg';

const bgStyle = {
    backgroundImage:`url(${bgImg})`,
    'background-repeat': 'no-repeat',
    'background-position': 'center center',
    'background-size': 'cover'
}

const Testimonial = () => {

    const options = {
        items: 3,
        nav: false,
        dots: true,
        margin: 30,
        rewind: false,
        autoplay: false,
        stagePadding: 30,
        loop: true,
        center: false,
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
                dots: false,
            },
            768: {
                items: 1,
                stagePadding: 0,
                dots: false,
            },
            992: {
                items: 2,
                stagePadding: 0,
                dots: false,
            },
            1200: {
                items: 3,
                stagePadding: 0,
                dots: true,
            },
            1500: {
                items: 3,
                stagePadding: 0,
            }
        }
    };

	return(
        <React.Fragment>
            <div id="rs-team" className="rs-testimonial style8 pt-120 pb-120 md-pt-80 md-pb-80" style={bgStyle}>
                <div className="container">
                    <SectionTitle
                        sectionClass="sec-title6 mb-50 text-center"
                        subtitleClass="sub-text new-text"
                        subtitle="Testimonials"
                        titleClass="title"
                        title="What Customer Saying"
                    />
                    <OwlCarousel options={options} >
                        <SingleTestimonial7
                            itemClass="testi-item"
                            ratingImage={quote}
                            authorImage={author1}
                            Title="David Warner"
                            Designation="Web Developer"
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial7
                            itemClass="testi-item"
                            ratingImage={quote}
                            authorImage={author2}
                            Title="Mitchel Starc"
                            Designation="App Developer"
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial7
                            itemClass="testi-item"
                            ratingImage={quote}
                            authorImage={author3}
                            Title="Steve Smith"
                            Designation="Web Designer"
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                        <SingleTestimonial7
                            itemClass="testi-item"
                            ratingImage={quote}
                            authorImage={author4}
                            Title="Bret Lee"
                            Designation="Client Manager"
                            Description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
                        />
                    </OwlCarousel>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Testimonial