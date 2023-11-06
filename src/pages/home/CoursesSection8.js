import React from 'react';
import Slider from "react-slick";
import SectionTitle from 'comp/Common/SectionTitle';
import CourseSingleFive from 'comp/Courses/CourseSingleFive';
import courseImg1 from 'media/courses/1.jpg';
import courseImg2 from 'media/courses/2.jpg';
import courseImg3 from 'media/courses/3.jpg';
import authorImg1 from 'media/courses/4.jpg';

import withPreviewPopup from 'comp/HOC/withPreviewPopup';
import Image from 'comp/Elements/Image';
import image1 from 'media/with-love-news/1.jpg';
import image2 from 'media/with-love-news/2.jpg';
import image3 from 'media/with-love-news/3.jpg';

const sliderSettings = {
    dots: true,
    centerMode: false,
    infinite: true,
    arrows: false,
    loop: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                dots: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
};

const Courses = ({ openPreviewHandler }) => {

    return (
        <div className="rs-featured-news pt-100 pb-100 md-pt-76 md-pb-100 sm-pb-70">
            <div className="container-fluid">
                <SectionTitle
                    sectionClass="sec-title2 text-center"
                    subtitleClass="sub-title uppercase mb-10"
                    subtitle=""
                    titleClass="title mb-40"
                    title="Սիրով՝ Ակտուալից"
                />

                <Slider {...sliderSettings}>
                    <Image
                        src={image1} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={openPreviewHandler}
                        isZooming={true}
                    />

                    <Image
                        src={image2} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={openPreviewHandler}
                        isZooming={true}
                    />

                    <Image
                        src={image3} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={openPreviewHandler}
                        isZooming={true}
                    />

                    <Image
                        src={image1} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={openPreviewHandler}
                        isZooming={true}
                    />

                    <Image
                        src={image2} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={openPreviewHandler}
                        isZooming={true}
                    />
                </Slider>
            </div>
        </div>
    );
}

const WithLoveNewsWithPreview = withPreviewPopup(Courses);

export default WithLoveNewsWithPreview;