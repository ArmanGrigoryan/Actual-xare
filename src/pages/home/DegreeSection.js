import React from 'react';
import SectionTitle from 'comp/Common/SectionTitle';
import DegreeSingle from 'comp/Degree/DegreeSingle';
import image1 from 'media/degrees/1.jpg'
import image2 from 'media/degrees/2.jpg'
import image3 from 'media/degrees/1.jpg'
import image4 from 'media/degrees/2.jpg'
import image5 from 'media/degrees/1.jpg'

const Degree = () => {

    return (
        <div className="rs-degree style1 modify gray-bg pt-100 pb-70 md-pt-70 md-pb-40">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <SectionTitle
                            sectionClass="sec-title"
                            subtitleClass="sub-title primary"
                            subtitle="Degree categoris"
                            titleClass="title mb-0"
                            title="Successfully Complete A Degree at Educavo University"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <DegreeSingle
                            itemImage={image1}
                            title="Undergraduate"
                            desc="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod"
                            itemLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <DegreeSingle
                            itemImage={image2}
                            title="Postgraduate"
                            desc="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod"
                            itemLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <DegreeSingle
                            itemImage={image3}
                            title="PHD Scholarships"
                            desc="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod"
                            itemLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <DegreeSingle
                            itemImage={image4}
                            title="International Hubs"
                            desc="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod"
                            itemLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <DegreeSingle
                            itemImage={image5}
                            title="PHD Scholarships"
                            desc="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod"
                            itemLink="#"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Degree;