import React, { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer/Footer';
import ScrollToTop from '../../components/Common/ScrollTop';
import Newsletter from '../../components/Common/Newsletter';
import ContactMain from './ContactMain';
import favIcon from '../../assets/img/fav-orange.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';

const Contact = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <Header parentMenu='contact' />
            <ContactMain />
            <Newsletter
                sectionClass="rs-newsletter style1 orange-color event-bg mb--90 sm-mb-0 sm-pb-80"
                titleClass="title mb-0 white-color"
            />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
        </React.Fragment>
    );
}

export default Contact;