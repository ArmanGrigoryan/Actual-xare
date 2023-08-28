import React from 'react';
import FooterBottom from './FooterBottom';

const Footer = (props) => {
    const { footerClass, footerTopClass } = props;
    return (
        <footer className={footerClass ? footerClass : 'rs-footer'}>
            <div className={`footer-top ${footerTopClass}`}>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="col-lg-3 col-6 footer-widget">
                            <h3 className="widget-title">Հասցե</h3>
                            <ul className="address-widget">
                                <li>
                                    <i className="flaticon-location"></i>
                                    <div className="desc">Տերյան 74, Երևան</div>
                                </li>
                                <li>
                                    <i className="flaticon-call"></i>
                                    <div className="desc"><a href="tel:(+374)44-30-30-28">(+374)44-30-30-28</a></div>
                                </li>
                                <li>
                                    <i className="flaticon-email"></i>
                                    <div className="desc"><a href="mailto:support@actual.com">support@actual.com</a></div>
                                </li>
                                <li>
                                    <ul className="d-flex gap-4">
                                        <li className="d-flex">
                                            <a href="#">
                                                <i className="fa fa-facebook-f position-static"></i>
                                            </a>
                                        </li>
                                        <li className="d-flex">
                                            <a href="#">
                                                <i className="fa fa-twitter position-static"></i>
                                            </a>
                                        </li>
                                        <li className="d-flex">
                                            <a href="#">
                                                <i className="fa fa-google-plus position-static"></i>
                                            </a>
                                        </li>
                                        <li className="d-flex">
                                            <a href="#">
                                                <i className="fa fa-instagram position-static"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
}

export default Footer;