import React from 'react';
// import Team from './TeamSection';
import AboutVideo from './VideoSection';
import AboutCounter from './CounterSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from 'comp/Common/ScrollTop';
import AboutText from './AboutTextSection.js';
import AboutTab from './AboutTabSection.js';
import Faq from 'comp/FAQ';

const Team = React.lazy(() => import("./TeamSection"));

const AboutMain = () => {

    return (
        <>
            <AboutText />
            <AboutVideo />
            <AboutCounter />
            <AboutTab />
            <React.Suspense fallback={<div></div>}>
                <Team />
            </React.Suspense>
            <Testimonial />
            <Faq />
			<ScrollToTop scrollClassName="scrollup orange-color" />
        </>
    )
}

export default AboutMain;