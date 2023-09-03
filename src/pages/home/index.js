import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Newsletter from '../../components/Common/Newsletter';
import HomeMain from './HomeMain';
import footerLogo from '../../assets/img/logo/logo-light.png';
import useFade from '../../utils/hooks/useFade.js';

const HomePage = () =>  {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <Helmet>
                <meta name="description" content="Actual HR Agency, Actual training center" />
            </Helmet>
            <Header parentMenu='home' />
            <HomeMain />
            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-70"
                titleClass="title mb-0 white-color"
            />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
        </div>
    );
}

export default HomePage;