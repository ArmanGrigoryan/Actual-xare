import React from 'react';
import Team from './TeamSection';
import AboutVideo from './VideoSection';
import AboutCounter from './CounterSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from 'comp/Common/ScrollTop';
import AboutText from './AboutTextSection.js';
import AboutTab from './AboutTabSection.js';
import Faq from 'comp/FAQ';

const AboutMain = () => {

    return (
        <React.Fragment>
            <AboutText />
            <AboutVideo />
            <AboutCounter />
            <AboutTab />
            <Team />
            <Testimonial />
            <Faq />
			<ScrollToTop scrollClassName="scrollup orange-color" />
        </React.Fragment>
    )
}

export default AboutMain;