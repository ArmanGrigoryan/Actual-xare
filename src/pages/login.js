import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer/Footer';
import Newsletter from '../components/Common/Newsletter';
import ScrollToTop from '../components/Common/ScrollTop';
import SiteBreadcrumb from '../components/Common/Breadcumb';
import footerLogo from '../assets/img/logo/logo-light.png';
import bannerbg from '../assets/img/breadcrumbs/inner12.jpg';
import useFade from '../utils/hooks/useFade.js';
import SEO from '../components/SEO';

const Login = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title='Actual HR Agency | Ակտուալ - Մուտք գործեք'
                description='Մուտք գործեք` Դասընթացներին գրանցվելու, Ակտուալի ամենաթարմ նորությունների, առաջարկությունների մասին տեղեկանալու և հետադարձ կապի պահպանման համար:'
            />
            <Header parentMenu='pages' />
            <SiteBreadcrumb
                pageTitle="Մուտք գործել"
                pageName=""
                breadcrumbsImg={bannerbg}
            />
            <div className="rs-login pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="noticed">
                        <div className="main-part">
                            <div className="method-account">
                                <h2 className="login">Լրացրեք տվյալները</h2>
                                <form>
                                    <input type="email" name="E-mail" placeholder="Էլ. փոստ" required />
                                    <input type="text" name="text" placeholder="Մուտքանուն" required />
                                    <button type="submit" className="readon submit-btn">Մուտք</button>
                                    <div className="last-password">
                                        <p>Չունե՞ք հաշիվ:   <Link className='ml-10 bold' to="/register">Ստեղծել նորը</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-40"
                titleClass="title mb-0 white-color"
            />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
            <ScrollToTop scrollClassName="scrollup orange-color" />
        </div>
    );
}

export default Login;