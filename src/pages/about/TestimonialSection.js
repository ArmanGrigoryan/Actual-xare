import React from 'react';
import SingleTestimonialTwo from 'comp/Testimonial/SingleTestimonialTwo';
import { Fade } from 'react-reveal';
import avatar1 from 'media/donor/books.jpg';
import avatar2 from 'media/donor/key.jpeg';

function Testimonial() {

    return (
        <div className="rs-testimonial style2 pt-50 pb-50 md-pt-30 md-pb-30">
            <div className="container">
                <div className="row">
                    <div>
                        <Fade left>
                            <SingleTestimonialTwo
                                testiImage={avatar1}
                                name="Նելսոն Մանդելա"
                                designation=""
                                description="Կրթությունն ամենահզոր զենքն է, որը կարող ես օգտագործել աշխարհը փոխելու համար:"
                            />
                        </Fade>
                        <Fade right>
                            <SingleTestimonialTwo
                                testiImage={avatar2}
                                animateDelay="50"
                                itemClass="testi-wrap"
                                name="Մարտին Լյութեր Քինգ կրտսեր"
                                designation=""
                                description="Հետախուզություն գումարած բնավորություն, դա իսկական կրթության նպատակն է:"
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;