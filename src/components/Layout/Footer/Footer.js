import React from 'react';
import FooterBottom from './FooterBottom';

const Footer = (props) => {
    const { footerClass, footerTopClass } = props;

    const email = "actualhrarmenia@gmail.com";
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
                                <div className="desc"><a href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}>{ email }</a></div>
                            </li>
                            <li className='mt-60'>
                                <ul className="d-flex gap-4">
                                    <li className="d-flex">
                                        <a href="https://facebook.com/ActualHRagency" className="cursor-pointer">
                                            <i className="fa fa-facebook-f position-static"></i>
                                        </a>
                                    </li>
                                    <li className="d-flex">
                                        <a target="_top" href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}>
                                            <i className="fa fa-google-plus position-static"></i>
                                        </a>
                                    </li>
                                    <li className="d-flex">
                                        <a href="https://www.instagram.com/actualtrainingcenter/" className="cursor-pointer">
                                            <i className="fa fa-instagram position-static"></i>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-5 footer-widget">
                        <div>
                            <iframe
                                title="Map"
                                className="radius-12" 
                                width="100%" 
                                height={250}
                                frameBorder="0" 
                                scrolling="no" 
                                src="https://maps.google.com/maps?width=530&amp;height=530&amp;hl=en&amp;q=Khanjyan 19&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
}

export default Footer;