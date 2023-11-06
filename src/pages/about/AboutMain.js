import React from 'react';
import Team from './TeamSection';
// import Blog from './BlogSection';
import AboutVideo from './VideoSection';
import AboutCounter from './CounterSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from 'comp/Common/ScrollTop';
import AboutText from './AboutTextSection.js';
import AboutTab from './AboutTabSection.js';
import Faq from 'comp/FAQ';
import SlideShow from './SlideShow.js';

const AboutMain = () => {

    return (
        <React.Fragment>
            <AboutText />
            <AboutVideo />
            <AboutCounter />
            <AboutTab />
            <Team />
            <Testimonial />
			<SlideShow />
            {/* <Blog /> */}
            <Faq />
			<ScrollToTop scrollClassName="scrollup orange-color" />
        </React.Fragment>
    )
}

export default AboutMain;