import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row y-middle">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className="col-lg-6 md-text-left">
                            <ul className="copy-right-menu">
                                <li><Link to="/events" as="/events">Իրադարձություններ</Link></li>
                                <li><Link to="/blog" as="/blog">Բլոգ</Link></li>
                                <li><Link to="/about">Մեր մասին</Link></li>
                                <li><Link to="/contact" as="/contact">Կապ</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 md-mb-10 text-end">
                            <div className="copyright md-mb-0">
                                <p>© 2023  Բոլոր իրավունքները պաշտպանված են.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;