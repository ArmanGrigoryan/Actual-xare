
import React from 'react';
import { Helmet } from 'react-helmet-async';
import CheckoutMain from '../../components/Shop/CheckoutMain';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Newsletter from '../../components/Common/Newsletter';
import ScrollToTop from '../../components/Common/ScrollTop';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import footerLogo from '../../assets/img/logo/logo-light.png';
import bannerbg from '../../assets/img/breadcrumbs/inner12.jpg';

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