import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import SectionTitle from '../../theme_components/Common/SectionTitle';
import SingleTestimonial3 from '../../theme_components/Testimonial/SingleTestimonial3';

// Testimonial Images
import testiMainimg from '../../assets/img/testimonial/testimonial-2.png';
import quote from '../../assets/img/testimonial/quote.png';

// Testimonial Avatars
import author1 from '../../assets/img/testimonial/1.jpg';
import author2 from '../../assets/img/testimonial/2.jpg';
import author3 from '../../assets/img/testimonial/3.jpg';
import author4 from '../../assets/img/testimonial/4.jpg';
import author5 from '../../assets/img/testimonial/5.jpg';
import ashwinGawande from '../../assets/img/testimonial/ashwin-gawande.jpeg';

const Testimonial = () => {

    const options = {
        items: 3,
        nav: false,
        dots: true,
        margin: 30,
        rewind: false,
        autoplay: true,
        stagePadding: 30,
        loop: true,
        center: true,
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
                items: 1,
                stagePadding: 0,
            },
            1500: {
                items: 1,
                stagePadding: 0,
            }
        }
    };

	return(
        <React.Fragment>
            <div className="rs-testimonial main-home rs-rain-animate style4 gray-bg modify1 md-fixing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 md-pb-40">
                            <img
                                src={testiMainimg}
                                alt="Left Big Image"
                            />
                        </div>
                        <div className="col-lg-6 pl-50 md-pl-14">
                            <SectionTitle
                                sectionClass="sec-title mb-50"
                                subtitleClass="sub-text style4-bg left testi"
                                subtitle="Testimonials"
                                titleClass="title pb-20"
                                title="What are Customer Saying"
                                descClass="desc"
                                description="Our customers speak highly of our services and the positive impact it has on their business growth."
                            />
                            <OwlCarousel options={options} >
                                <SingleTestimonial3
                                    itemClass="testi-item"
                                    quoteImage={quote}
                                    authorImage={ashwinGawande}
                                    Title="Ashwin Gawande"
                                    Designation="Business Analyst - FindingPi Inc"
                                    Description="I am extremely impressed with the website and tools that AtHelm built for my client's property rental management service. They were professional, knowledgeable, and responsive throughout the entire process. The website they created is user-friendly and visually appealing, which has helped attract more clients to my business. I would highly recommend AtHelm to anyone looking for a reliable and skilled development partner."
                                />
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <div className="line-inner">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </React.Fragment>
	)
}

export default Testimonial