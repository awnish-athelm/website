import React from 'react';
import BannerHomeTen from '../../theme_components/Banner/BannerHomeTen';
import Feature from './FeatureSection';
import Testimonial from './TestimonialSection';
import Service from './ServiceSection';
import Project from './ProjectSection';
import Counter from './CounterSection';
import CTA from './CTASection'
import ScrollToTop from '../../theme_components/Common/ScrollTop';

const HomeTenMain = () => {	
	return (
		<React.Fragment>
			{/* Slider-start */}
			<BannerHomeTen />
			{/* Slider-start */}

			{/* Feature-area-start */}
			<Feature />
			{/* Feature-area-end */}

			{/* Counter-start */}
			<Counter />
			{/* Counter-end */}

			{/* Service-start */}
			<Service />
			{/* Service-end */}

			{/* Project-start */}
			<Project />
			{/* Project-end */}

			{/* Testimonial-start */}
			<Testimonial />
			{/* Testimonial-end */}

			{/* CTA-area-start */}
			<CTA />
			{/* CTA-area-end */}

			{/* scrolltop-start */}
			<ScrollToTop />
			{/* scrolltop-end */}
		</React.Fragment>
	);
}

export default HomeTenMain;