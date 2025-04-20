import React from 'react';
import Team from '../home-2/TeamSection';
import Blog from '../home-2/BlogSection';
import About from '../home-2/AboutSection';
import CallUs from '../home-2/CallUsSection';
import Process from '../home-2/ProcessSection';
import Pricing from '../home-2/PricingSection';
import Service from '../home-2/ServiceSection';
import ServiceTwo from '../home-2/ServiceSectionTwo';
import Testimonial from '../home-2/TestimonialSection';
import Project from '../../theme_components/Project';
import Brand from '../../theme_components/Common/Brand'
import ScrollToTop from '../../theme_components/Common/ScrollTop';
import OnepageContactPart from '../../theme_components/Contact/OnepageContact';
import SliderStyleTwo from '../../theme_components/Elements/Slider/SliderStyleTwo';

const HomeTwoOnepageMain = () => {
	return (
		<React.Fragment>
			{/* slider-start */}
			<SliderStyleTwo />
			{/* slider-start */}

			{/* ServiceTwo-area-start */}
			<ServiceTwo />
			{/* ServiceTwo-area-end */}

			{/* about-area-start */}
			<About />
			{/* about-area-end */}

			{/* services-area-start */}
			<Service />
			{/* services-area-end */}

			{/* call us section start */}
			<CallUs />
			{/* call us section end */}

			{/* process-area-start */}
			<Process />
			{/* process-area-end */}

			{/* project-area-start */}
			<Project />
			{/* project-area-end */}

			{/* price table start */}
			<Pricing />
			{/* price table end */}

			{/* Team-area-start */}
			<Team />
			{/* Team-area-end */}

			{/* testmonial-area-start */}
			<Testimonial />
			{/* testmonial-area-end */}

			{/* blog-area-start */}
			<Blog />
			{/* blog-area-end */}

			{/* Contact-area-start */}
			<OnepageContactPart 
				contactSectionClass="rs-contact gray-bg pt-120 md-pt-80"
			/>
			{/* Contact-area-end */}

			{/* brand-area-start */}
			<Brand />
			{/* brand-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeTwoOnepageMain;