import React from 'react';
import { Link } from 'react-router-dom';
import SingleTestimonialTwo from '../../components/Testimonial/SingleTestimonialTwo';
import { Fade } from 'react-reveal';

import donorImg from '../../assets/img/donor/1.jpg';
import avatar1 from '../../assets/img/donor/1.jpg';
import avatar2 from '../../assets/img/donor/1.jpg';

function Testimonial() {

    return (
        <React.Fragment>
            <div className="rs-testimonial style2 pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 pr-90 md-pr-14 md-mb-30">
                            <div className="donation-part">
                                <img
                                    src={donorImg}
                                    alt="Donor"
                                />
                                <h3 className="title mb-10">Donation helps us</h3>
                                <div className="desc mb-38">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua  enims ad minim.</div>
                                <div className="btn-part">
                                    <Link className="readon orange" to="/contact">Become a donor</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 lg-pl-0 ml--14 md-ml-0">
                            <Fade left>
                                <SingleTestimonialTwo
                                    testiImage={avatar1}
                                    name="Լաուրա Վիրաբյան"
                                    designation="Առաջատար մասնագետ"
                                    description="Կրթությունը վաղվա ապագայի անձնագիրն է, պատկանում է նրանց, ովքեր պատրաստվում են դրան այսօր"
                                />
                            </Fade>
                            <Fade right>
                                <SingleTestimonialTwo
                                    testiImage={avatar2}
                                    animateDelay="50"
                                    itemClass="testi-wrap"
                                    name="Լուսինե Կիրակոսյան"
                                    designation="Առաջատար մասնագետ"
                                    description="Կրթությունը վաղվա ապագայի անձնագիրն է, պատկանում է նրանց, ովքեր պատրաստվում են դրան այսօր"
                                />
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Testimonial;