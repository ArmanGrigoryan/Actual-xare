import React from 'react';
import Slider from "react-slick";
import SectionTitle from 'comp/Common/SectionTitle';
import Image from 'comp/Elements/Image';

const sliderSettings = {
    dots: false,
    centerMode: true,
    infinite: true,
    arrows: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slides',
};

const SlideShow = ({ 
    images = [],
    openPreviewHandler
}) => {

    return (
        <div className="rs-featured-news pt-50 pb-50 md-pt-30 md-pb-30 sm-pb-20">
            <div className="relative">
                <SectionTitle
                    sectionClass="sec-title2 text-center"
                    subtitleClass="sub-title uppercase mb-10"
                    subtitle=""
                    titleClass="title mb-30"
                    title="Ակտուալի արխիվը"
                />
                {
                    images.length > 0 ?
                    (
                        <Slider {...sliderSettings}>
                            {
                                images.map(url => (
                                    <Image 
                                        key={url}
                                        src={url} 
                                        alt="" 
                                        className="block d-block w-100 radius-12 b-none border-none" 
                                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                                    />
                                ))
                            }
                        </Slider>
                    ) :
                    null
                }
            </div>
        </div>
    );
}

export default SlideShow;