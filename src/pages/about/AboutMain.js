import React from 'react';
import Team from './TeamSection';
import Blog from './BlogSection';
import AboutVideo from './VideoSection';
import AboutCounter from './CounterSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from '../../components/Common/ScrollTop';
import AboutText from './AboutTextSection.js';
import AboutTab from './AboutTabSection.js';
import Faq from '../../components/FAQ';

const AboutMain = () => {

    return (
        <React.Fragment>
            <AboutText />
            <AboutVideo />
            <AboutCounter />
            <AboutTab />
            <Team />
            <Testimonial />
            <Blog />
            <Faq />
			<ScrollToTop scrollClassName="scrollup orange-color" />
        </React.Fragment>
    )
}

export default AboutMain;