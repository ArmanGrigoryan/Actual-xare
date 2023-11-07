import React from 'react';
// import BlogMain from './BlogMain';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer/Footer';
import Newsletter from 'comp/Common/Newsletter';
import ScrollToTop from 'comp/Common/ScrollTop';
import SiteBreadcrumb from 'comp/Common/Breadcumb';
import SEO from 'comp/SEO';
import Gallery from 'comp/Gallery';
import withPreviewPopup from 'comp/HOC/withPreviewPopup';
import footerLogo from 'media/logo/logo-light.png';
import bannerbg from 'media/slider/main-home/homepage-bg.jpg';
import useFade from 'hooks/useFade.js';
import SlideShow from 'pages/about/SlideShow';

const SlideShowWithPreview = withPreviewPopup(SlideShow);

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
                pageTitle="Ակտուալ Բլոգ"
                pageName=""
                breadcrumbsImg={bannerbg}
            />
            <SlideShowWithPreview />
            <Gallery />
            {/* <BlogMain /> */}
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

