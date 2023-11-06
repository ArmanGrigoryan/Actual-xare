import React from 'react';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer/Footer';
import Newsletter from 'comp/Common/Newsletter';
import SiteBreadcrumb from 'comp/Common/Breadcumb';
import CourseMain from './CourseMain';
import footerLogo from 'media/logo/logo-light.png';
import bannerbg from 'media/breadcrumbs/inner12.jpg';
import useFade from 'hooks/useFade.js';
import SEO from 'comp/SEO';

const Course = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title='Actual HR Agency | Ակտուալ - Դասընթացներ'
                description='Ակտուալն իր ուսուցման ծառայություններն է առաջարկում բիզնես անգլերենի, մարդկային ռեսուրսների կառավարման, Excel-ի, կադրային գործավարության ոլորտներում, ինչպես սկսնակների, այնպես էլ խորացված մասնագետների համար։ Դարձեք վկայագրված մասնագետ:'
            />
            <Header parentMenu='course' />
            <SiteBreadcrumb
                pageTitle="Course Grid 03"
                pageName="Course"
                breadcrumbsImg={bannerbg}
            />
            <CourseMain />
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

export default Course;