import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

const AddressMaps = React.lazy(() => import('./Maps'));

const Footer = (props) => {
    const { footerClass, footerTopClass } = props;

    const email = "support@actualhr.am";
    const emailSubject = "Հետադարձ կապ";
    const emailBody = "Բարև Ձեզ, ես ցանկանում եմ տեղեկանալ դասընթացների մասին ավելի մանրամասն։ Կարող եք զանգահարել՝ +374";

    return (
        <footer className={footerClass ? footerClass : 'rs-footer'}>
            <div className={`footer-top ${footerTopClass}`}>
                <div className="info-container">
                    <div className="col-lg-5 footer-widget">
                        <h3 className="widget-title">Հասցե</h3>
                        <ul className="address-widget">
                            <li>
                                <i className="flaticon-location"></i>
                                <div className="desc">Խանջյան 19, Երևան</div>
                            </li>
                            <li>
                                <i className="flaticon-call"></i>
                                <div className="desc"><a href="tel:(+374)44-30-30-28">(+374)44-30-30-28</a></div>
                            </li>
                            <li>
                                <i className="flaticon-email"></i>
                                <div className="desc"><a href={`mailto:${email}?subject=${emailSubject}&body=${encodeURIComponent(emailBody)}`}>{ email }</a></div>
                            </li>
                            <li className='mt-50 sm-mt-0'>
                                <ul className="d-flex gap-20">
                                    <li className="d-flex">
                                        <a target="_blank" href="https://facebook.com/ActualHRagency" className="cursor-pointer">
                                            <i className="fa fa-facebook-f position-static"></i>
                                        </a>
                                    </li>
                                    <li className="d-flex">
                                        <a target="_blank" href="https://www.instagram.com/actual_hrpartner/" className="cursor-pointer">
                                            <i className="fa fa-instagram position-static"></i>
                                        </a>
                                    </li>
                                    <li className="d-flex">
                                        <a target="_blank" href="https://t.me/actual_hragency" className="cursor-pointer">
                                            <i className="fa fa-telegram position-static"></i>
                                        </a>
                                    </li>
                                    <li className="d-flex">
                                        <a target="_blank" href="https://www.youtube.com/@ActualHRAgency">
                                            <i className="fa fa-youtube position-static"></i>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <Suspense fallback={<></>}>
                        <AddressMaps />
                    </Suspense>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row y-middle">
                        <div className='legal-links'>
                            <div className="col-lg-6 text-left">
                                <ul className="copy-right-menu">
                                    <li><Link to="/event">Իվենթներ</Link></li>
                                    <li><Link to="/blog">Բլոգ</Link></li>
                                    <li><Link to="/about">Մեր մասին</Link></li>
                                    <li><Link to="/contact">Կապ</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 md-mb-10 text-end last">
                                <div className="copyright md-mb-0">
                                    <pre className="white-color text-middle text-center">Բոլոր իրավունքները պաշտպանված են  {new Date().getFullYear()}թ.</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;