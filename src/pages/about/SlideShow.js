import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';
import courseImg1 from '../../assets/img/courses/1.jpg';

const SlideShow = () => {
    const sliderSettings = {
        dots: false,
        centerMode: true,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'slides'
    };

    return (
        <div className="rs-featured-courses pt-100 pb-150 md-pt-76 md-pb-140 sm-pb-70">
            <div>
                <SectionTitle
                    sectionClass="sec-title2 text-center"
                    subtitleClass="sub-title uppercase mb-10"
                    subtitle=""
                    titleClass="title mb-30"
                    title="Ակտուալի արխիվը"
                />
                <Slider {...sliderSettings}>
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                    <img loading="lazy" src={courseImg1} alt="" className="block d-block w-100 radius-12 b-none border-none" />
                </Slider>
            </div>
        </div>
    );
}

export default SlideShow;