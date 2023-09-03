import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row y-middle">
                    <div className='legal-links'>
                        <div className="col-lg-6 md-text-left">
                            <ul className="copy-right-menu">
                                <li><Link to="/event">Իրադարձություններ</Link></li>
                                <li><Link to="/blog">Բլոգ</Link></li>
                                <li><Link to="/about">Մեր մասին</Link></li>
                                <li><Link to="/contact">Կապ</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 md-mb-10 text-end last">
                            <div className="copyright md-mb-0">
                                <pre className="white-color text-middle text-center">Բոլոր իրավունքները պաշտպանված են  2023թ.</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;