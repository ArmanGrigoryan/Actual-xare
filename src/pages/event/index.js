import React, { useLayoutEffect} from 'react';
import { Helmet } from 'react-helmet';
import SingleEventThree from '../../components/Events/SingleEventThree';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Newsletter from '../../components/Common/Newsletter';
import ScrollToTop from '../../components/Common/ScrollTop';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import favIcon from '../../assets/img/fav-orange.png';
import footerLogo from '../../assets/img/logo/lite-logo.png';
import bannerbg from '../../assets/img/breadcrumbs/inner12.jpg';
import eventImg1 from '../../assets/img/event/style3/1.jpg';
import eventImg2 from '../../assets/img/event/style3/2.jpg';
import eventImg3 from '../../assets/img/event/style3/1.jpg';
import eventImg4 from '../../assets/img/event/style3/2.jpg';
import eventImg5 from '../../assets/img/event/style3/1.jpg';
import eventImg6 from '../../assets/img/event/style3/2.jpg';

const Event = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <link rel="icon" href={favIcon} />
            </Helmet>
            <Header parentMenu='pages' />
            <SiteBreadcrumb
                pageTitle="Event Three"
                pageName="Event"
                breadcrumbsImg={bannerbg}
            />

            <div className="rs-event modify2 orange-style pt-100 pb-100 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-30">
                            <SingleEventThree
                                eventClass='event-item'
                                eventImg={eventImg1}
                                eventLocation='New Margania'
                                eventDate='July 24, 2021'
                                eventSchedule='11:00 AM - 03:00 AM'
                                eventTitle="Spicy Quince And Cranberry Chutney"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <SingleEventThree
                                eventClass='event-item'
                                eventImg={eventImg2}
                                eventLocation='New Margania'
                                eventDate='July 24, 2021'
                                eventSchedule='11:00 AM - 03:00 AM'
                                eventTitle="Persim, Pomegran, And Massag Kale Salad"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            <SingleEventThree
                                eventClass='event-item'
                                eventImg={eventImg3}
                                eventLocation='New Margania'
                                eventDate='July 24, 2021'
                                eventSchedule='11:00 AM - 03:00 AM'
                                eventTitle="Essential Fall Fruits That Aren’t Apples"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <SingleEventThree
                                eventClass='event-item'
                                eventImg={eventImg4}
                                eventLocation='New Margania'
                                eventDate='July 24, 2021'
                                eventSchedule='11:00 AM - 03:00 AM'
                                eventTitle="Seekers From Overcoming Failure"
                            />
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <SingleEventThree
                                eventClass='event-item'
                                eventImg={eventImg5}
                                eventLocation='New Margania'
                                eventDate='July 24, 2021'
                                eventSchedule='11:00 AM - 03:00 AM'
                                eventTitle="Best Technology Graduation Ceremony."
                            />
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <SingleEventThree
                                eventClass='event-item'
                                eventImg={eventImg6}
                                eventLocation='New Margania'
                                eventDate='July 24, 2021'
                                eventSchedule='11:00 AM - 03:00 AM'
                                eventTitle="Educational Technology and Mobile Learning"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Newsletter
                sectionClass="rs-newsletter style1 orange-color mb--90 sm-mb-0 sm-pb-80"
                titleClass="title mb-0 white-color"
            />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
        </React.Fragment>
    );
}

export default Event;