import React from 'react';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Newsletter from '../../components/Common/Newsletter';
import HomeMain from './HomeMain';
import footerLogo from '../../assets/img/logo/logo-light.png';
import useFade from '../../utils/hooks/useFade.js';
import SEO from '../../components/SEO';

const HomePage = () =>  {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title='Actual HR Agency | Ակտուալ - Գլխավոր'
                description='Գլխավոր էջ - Այցելեք Ակտուալ` Հայաստանում նմանը չունեցող ուսումնական կենտրոն ծառայությունների ոլորտում: Եթե չունեք փորձ, պարզապես գնեք այն:'
            />
            <Header parentMenu='home' />
            <HomeMain />
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

export default HomePage;