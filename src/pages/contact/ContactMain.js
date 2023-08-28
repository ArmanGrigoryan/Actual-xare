import React from 'react';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import SectionTitle from '../../components/Common/SectionTitle';
import ContactForm from '../../components/Contact/ContactForm';
import ContactInfo from '../../components/Contact/ContactInfo';
import bannerbg from '../../assets/img/breadcrumbs/inner12.jpg';

const ContactMain = () => {

    return (
        <React.Fragment>
            <SiteBreadcrumb
                pageTitle="Կապ մեզ հետ"
                pageName="Կապվեք մեզ հետ"
                breadcrumbsImg={bannerbg}
            />
            <div className="rs-contact style1 event-bg pt-110 md-pt-80 pb-100 md-pb-80">
                <div className="container pb-66 md-pb-46">
                    <div className="row gutter-35">
                        <div className="col-md-4">
                            <ContactInfo
                                boxClass="sm-mb-30"
                                title="Հասցե"
                                iconClass="flaticon-location"
                                address="Տերյան 74, Երևան"
                            />
                        </div>
                        <div className="col-md-4">
                            <ContactInfo
                                boxClass="sm-mb-30"
                                title="Էլ. հասցե"
                                iconClass="flaticon-email"
                                email="contact@educavo.com"
                            />
                        </div>
                        <div className="col-md-4">
                            <ContactInfo
                                boxClass=""
                                title="Հեռախոսահամար"
                                iconClass="flaticon-phone"
                                phone="(+374)44-30-30-28"
                            />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row y-top">
                        <div className="col-lg-6 md-mb-30">
                            <div class="mapouter">
                                <div class="gmap_canvas">
                                    <iframe
                                        className="gmap_iframe" 
                                        width="100%" 
                                        frameborder="0" 
                                        scrolling="no" 
                                        marginheight="0" 
                                        marginwidth="0" 
                                        src="https://maps.google.com/maps?width=530&amp;height=530&amp;hl=en&amp;q=Teryan 74&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-60 md-pl-14">
                            <div className="contact-widget">
                                <SectionTitle
                                    sectionClass="sec-title2 mb-36"
                                    titleClass="title black-color mb-14"
                                    title="Կապ հաստատել"
                                    descClass="new-desc"
                                    description="Թողեք ձեր հաղորդագրությունը և մենք շուտով կպատասխանենք"
                                />
                                <ContactForm
                                    submitBtnClass="btn-send"
                                    btnText="Ուղարկել"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}


export default ContactMain;