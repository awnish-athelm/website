import React from 'react';
import BannerSection from './BannerSection';
import Service from './ServiceSection';
import About from './AboutSection';
import OurExpertise from './OurExpertiseSection';
import WhyChooseUs from './WhyChooseUsSection';
import WhyChooseUs2 from './WhyChooseUsSection2';
import Testimonial from './TestimonialSection';
import Blog from './BlogSection';
import BrandSection from './BrandSection';
import Brand from '../../components/Common/Brand';
import Team from './TeamSection';
import ScrollToTop from '../../components/Common/ScrollTop';

const Main = () => {
	return (
		<React.Fragment>
			{/* banner-start */}
			<BannerSection />
			{/* banner-start */}

			{/* About-area-start */}
			<a id="about-us-section"/>
			<About />
			{/* About-area-end */}

			{/* About-area-start */}
			<OurExpertise />
			{/* About-area-end */}

			{/* Service-area-start */}
			<a id="service-section"/>
			<Service />
			{/* Service-area-end */}

			{/* WhyChooseUs-area-start */}
			<WhyChooseUs />
			{/* WhyChooseUs-area-end */}

			{/* WhyChooseUs-area-start */}
			<a id="contact-form-section"/>
			<WhyChooseUs2 />
			{/* WhyChooseUs-area-end */}

			{/* blog-area-start */}
			{/* <Blog /> */}
			{/* blog-area-end */}

			<a id="team-section"/>
			<Team/>

			{/* Testimonial-area-start */}
			<Testimonial />
			{/* Testimonial-area-end */}
			
			{/* brand-area-start */}
			<BrandSection />
			{/* brand-area-end */}

			{/* brand-area-start */}
			<Brand />
			{/* brand-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default Main;