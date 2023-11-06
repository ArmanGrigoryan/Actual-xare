import React from 'react';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer/Footer';
import Newsletter from 'comp/Common/Newsletter';
import SiteBreadcrumb from 'comp/Common/Breadcumb';
import CourseDetailsMain from './CourseDetailsMain';
import footerLogo from 'media/logo/logo-light.png';
import bannerbg from 'media/breadcrumbs/inner12.jpg';
import useFade from 'hooks/useFade.js';
import SEO from 'comp/SEO';

const CourseSingle = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title='Actual HR Agency | Ակտուալ - Դասընթացներ'
                description='Ծանոթացեք դասընթացի բնութագրին, ստացեք տեղեկատվություն դասընթացավարի, անցկացման ժամերի մասին Եվ գրանցվեք։'
            />
            <Header parentMenu='course' />
            <SiteBreadcrumb
                pageTitle="Ընդհանուր բնութագիր"
                pageName=""
                breadcrumbsImg={bannerbg}
            />
            <CourseDetailsMain />
            <Newsletter
                sectionClass="rs-newsletter style1 gray-bg orange-color mb--90 sm-mb-0 sm-pb-70"
                titleClass="title mb-0 white-color"
            />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />            
        </div>
    );
}

export default CourseSingle;