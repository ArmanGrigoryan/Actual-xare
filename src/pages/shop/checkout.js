
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CheckoutMain from 'comp/Shop/CheckoutMain';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer/Footer';
import Newsletter from 'comp/Common/Newsletter';
import ScrollToTop from 'comp/Common/ScrollTop';
import SiteBreadcrumb from 'comp/Common/Breadcumb';
import footerLogo from 'media/logo/logo-light.png';
import bannerbg from 'media/slider/main-home/homepage-bg.jpg';

const Checkout = () => {

    return (
        <React.Fragment>
            <Helmet>
                <meta name="description" content="Actual HR Agency, Actual training center" />
            </Helmet>
            <Header parentMenu='pages' />
            <SiteBreadcrumb
                pageTitle="Checkout"
                pageName="Shop"
                breadcrumbsImg={bannerbg}
            />
            <CheckoutMain />
            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-40"
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

export default Checkout;