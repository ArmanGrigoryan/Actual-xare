
import React, { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import BlogMain from './BlogMain';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Newsletter from '../../components/Common/Newsletter';
import ScrollToTop from '../../components/Common/ScrollTop';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import favIcon from '../../assets/img/fav-orange.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';
import bannerbg from '../../assets/img/breadcrumbs/inner12.jpg';

const Blog = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <Header parentMenu='blog' />
            <SiteBreadcrumb
                pageTitle="Blog"
                pageName="Blog"
                breadcrumbsImg={bannerbg}
            />
            <BlogMain />
            <Newsletter
                sectionClass="rs-newsletter style1 orange-style mb--90 sm-mb-0 sm-pb-80"
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

export default Blog;

