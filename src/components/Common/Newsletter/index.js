import React from 'react';
import SubscribeForm from 'comp/Elements/Subscribe/SubscribeForm.js';
import newsletterIcon from 'media/about/newsletter.png';

const Newsletter = (props) => {
    const { sectionClass, wrapperClass, titleClass, iconPath } = props;

    return (
        <div className={sectionClass ? sectionClass : 'rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-20'}>
            <div className="container md-pl-0 md-pr-0 pr-30 pl-30">
                <div className={wrapperClass ? wrapperClass : 'newsletter-wrap'}>
                    <div className="row y-middle">
                        <div className="col-lg-6 col-md-12 md-mb-30">
                            <div className="content-part">
                                <div className="sec-title">
                                    <div className="title-icon md-mb-14">
                                        <img loading="lazy" src={iconPath ? iconPath : newsletterIcon} alt="icon" />
                                    </div>
                                    <h3 className={titleClass ? titleClass : 'title mb-0 white-color'}>Բաժանորդագրվիր մեր ալիքին</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="newsletter-form">
                                <SubscribeForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;