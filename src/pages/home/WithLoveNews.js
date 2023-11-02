import React, { useState } from 'react';
import SectionTitle from '../../components/Common/SectionTitle';
import Slider from 'react-slick';
import Image from '../../components/Elements/Image';
import image1 from '../../assets/img/with-love-news/1.jpg';
import image2 from '../../assets/img/with-love-news/2.jpg';
import image3 from '../../assets/img/with-love-news/3.jpg';
import withPreviewPopup from '../../components/HOC/withPreviewPopup';

const sliderSettings = {
    dots: false,
    centerMode: true,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slides',
};

const WithLoveNews = ({ openPreviewHandler }) => {

    return (
        <div className="rs-featured-courses pt-50 pb-50 md-pt-30 md-pb-30 sm-pb-30">
            <div className="relative">
                <SectionTitle
                    sectionClass="sec-title2 text-center"
                    subtitleClass="sub-title uppercase mb-10"
                    subtitle=""
                    titleClass="title mb-30"
                    title="Սիրով՝ Ակտուալից"
                />
                <Slider {...sliderSettings}>
                    <Image 
                        src={image1} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        onClick={openPreviewHandler}
                        isZooming
                    />
                    <Image 
                        src={image2} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        onClick={openPreviewHandler}
                        isZooming
                    />
                    <Image 
                        src={image3} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        onClick={openPreviewHandler}
                        isZooming
                    />
                </Slider>
            </div>
        </div>
    );
}

const WithLoveNewsWithPreview = withPreviewPopup(WithLoveNews);

export default WithLoveNewsWithPreview;