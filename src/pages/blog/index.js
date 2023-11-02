import React from 'react';
import BlogMain from './BlogMain';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Newsletter from '../../components/Common/Newsletter';
import ScrollToTop from '../../components/Common/ScrollTop';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import footerLogo from '../../assets/img/logo/logo-light.png';
import bannerbg from '../../assets/img/breadcrumbs/inner12.jpg';
import useFade from '../../utils/hooks/useFade.js';
import SEO from '../../components/SEO';

const Blog = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title='Actual HR Agency | Ակտուալ - Մեր մասին'
                description='Ծանոթացեք Ակտուալի իրադարձություններին։ Ստացեք տեղեկատվություն նմանը չունեցող Եվ յուրօրինակ The Master-ի, The voice of HR-ի հետ։'
            />
            <Header parentMenu='blog' />
            <SiteBreadcrumb
                pageTitle="Blog"
                pageName="Blog"
                breadcrumbsImg={bannerbg}
            />
            <BlogMain />
            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-80"
                titleClass="title mb-0 white-color"
            />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
        </div>
    );
}

export default Blog;

