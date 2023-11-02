import React from 'react';
import SliderDefault from '../../components/Slider/SliderDefault';
import Courses from './CoursesSection';
import PopularCourses from './CoursesSection8';
import Cta from './CtaSection';
import FaqSection from './FaqSection';
import Testimonial from './TestimonialSection';
import Blog from './BlogSection';
import Degree from './DegreeSection.js';
import ScrollToTop from '../../components/Common/ScrollTop';
import BrandThree from '../../components/Common/Brand/BrandThree.js';
import Events from './EventsSection.js';
import Videos from './VideoSection.js';
import WithLoveNews from './WithLoveNews';

const HomeMain = () => {

	return (
		<React.Fragment>
			<SliderDefault />
			<Courses />
			<PopularCourses />
			<WithLoveNews />
			<Videos />
			<Cta />
			<Degree />
			<Events />
			<FaqSection />
			<Testimonial />
			<BrandThree brandClass='rs-partner pb-40 pt-60' />
			<Blog />
			<ScrollToTop scrollClassName="scrollup orange-color" />
		</React.Fragment>
	);
}

export default HomeMain;