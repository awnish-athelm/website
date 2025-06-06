import React from 'react';
import BannerHomeSix from '../../theme_components/Banner/BannerHomeSix';
import ServiceFlip from './ServiceSectionFlip';
import About from './AboutSection';
import Technology from '../../theme_components/Technology';
import Project from './ProjectSection';
import Service from './ServiceSection';
import ServiceMain from './ServiceSectionMain';
import Testimonial from './TestimonialSection';
import Blog from './BlogSection';
import Brand from '../../theme_components/Common/Brand'
import ScrollToTop from '../../theme_components/Common/ScrollTop';

const HomeSixMain = () => {

	return (
		<React.Fragment>
			{/* banner-start */}
			<BannerHomeSix />
			{/* banner-start */}

			{/* ServiceFlip-area-start */}
			<ServiceFlip />
			{/* ServiceFlip-area-end */}

			{/* About-area-start */}
			<About />
			{/* About-area-end */}

			{/* Service-area-start */}
			<Service />
			{/* Service-area-end */}

			{/* Technology-area-start */}
			<Technology />
			{/* Technology-area-end */}

			{/* ServiceMain-area-start */}
			<ServiceMain />
			{/* ServiceMain-area-end */}

			{/* project-area-start */}
			<Project />
			{/* project-area-end */}

			{/* blog-area-start */}
			<Blog />
			{/* blog-area-end */}

			{/* Testimonial-area-start */}
			<Testimonial />
			{/* Testimonial-area-end */}

			{/* brand-area-start */}
			<Brand />
			{/* brand-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeSixMain;