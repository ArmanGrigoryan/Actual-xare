import React from 'react';
import SingleTestimonialTwo from '../../components/Testimonial/SingleTestimonialTwo';
import { Fade } from 'react-reveal';

import avatar1 from '../../assets/img/donor/1.jpg';
import avatar2 from '../../assets/img/donor/1.jpg';

function Testimonial() {

    return (
        <React.Fragment>
            <div className="rs-testimonial style2 pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="row">
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