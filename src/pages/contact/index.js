import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer/Footer';
import ScrollToTop from '../../components/Common/ScrollTop';
import Newsletter from '../../components/Common/Newsletter';
import ContactMain from './ContactMain';
import footerLogo from '../../assets/img/logo/logo-light.png';
import useFade from '../../utils/hooks/useFade.js';
import SEO from '../../components/SEO';

const Contact = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title='Actual HR Agency | Ակտուալ - Մեր մասին'
                description='Կապ մեզ հետ - Բաժանորդագրվեք Ակտուալի ալիքին հետադարձ կապի համար կամ այցելեք մեզ՝ ք. Երևան, Խանջյան 19, (+374)44-30-30-28։'
            />
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
        </div>
    );
}

export default Contact;