import React, { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Newsletter from '../../components/Common/Newsletter';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import AboutMain from './AboutMain';
import footerLogo from '../../assets/img/logo/lite-logo.png';
import bannerbg from '../../assets/img/breadcrumbs/inner12.jpg';
import favIcon from '../../assets/img/fav-orange.png';

const About = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <Header parentMenu='home' />
            <SiteBreadcrumb
                pageTitle="About"
                pageName="About"
                breadcrumbsImg={bannerbg}
            />
            <AboutMain />
            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-70"
                titleClass="title mb-0 white-color"
            />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
        </React.Fragment>
    );
}

export default About;