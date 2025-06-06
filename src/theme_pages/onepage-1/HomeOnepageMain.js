import React from 'react';
import About from '../home/AboutSection';
import Service from '../home/ServiceSection';
import CallUs from '../home/CallUsSection';
import Process from '../home/ProcessSection';
import Pricing from '../home/PricingSection';
import Testimonial from '../home/TestimonialSection';
import Team from '../home-3/TeamSection';
import Blog from '../home/BlogSection';
import Project from '../../theme_components/Project';
import Brand from '../../theme_components/Common/Brand';
import ScrollToTop from '../../theme_components/Common/ScrollTop';
import BannerDefault from '../../theme_components/Banner/BannerDefault';
import OnepageContactPart from '../../theme_components/Contact/OnepageContact';

const HomeOnepageMain = () => {

	return (
		<React.Fragment>
			{/* banner-start */}
			<BannerDefault />
			{/* banner-start */}

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

			{/* team-area-start */}
			<Team />
			{/* team-area-end */}

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

export default HomeOnepageMain;