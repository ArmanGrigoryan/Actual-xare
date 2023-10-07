import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer/Footer';
import Newsletter from '../../../components/Common/Newsletter';
import SiteBreadcrumb from '../../../components/Common/Breadcumb';
import CourseDetailsMain from './CourseDetailsMain';
import footerLogo from '../../../assets/img/logo/logo-light.png';
import bannerbg from '../../../assets/img/breadcrumbs/inner12.jpg';
import useFade from '../../../utils/hooks/useFade.js';

const CourseSingle = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <Helmet>
                <meta name="description" content="Actual HR Agency, Actual training center" />
            </Helmet>
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