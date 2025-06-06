import React from 'react';
import SliderStyleTwo from '../../theme_components/Elements/Slider/SliderStyleTwo';
import About from './AboutSection';
import Service from './ServiceSection';
import ServiceTwo from './ServiceSectionTwo';
import CallUs from './CallUsSection';
import Process from './ProcessSection';
import Project from '../../theme_components/Project';
import Pricing from './PricingSection';
import Testimonial from './TestimonialSection';
import Blog from './BlogSection';
import Brand from '../../theme_components/Common/Brand'
import ScrollToTop from '../../theme_components/Common/ScrollTop';


const HomeTwoMain = () => {
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

			{/* testmonial-area-start */}
			<Testimonial />
			{/* testmonial-area-end */}

			{/* blog-area-start */}
			<Blog />
			{/* blog-area-end */}

			{/* brand-area-start */}
			<Brand />
			{/* brand-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeTwoMain;