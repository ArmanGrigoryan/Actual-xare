import React from 'react';
import Slider from "react-slick";
import SectionTitle from 'comp/Common/SectionTitle';
import pic1 from 'media/archive/1.jpg';
import pic2 from 'media/archive/2.jpg';
import pic3 from 'media/archive/15.jpeg';
import pic4 from 'media/archive/6.jpg';
import pic5 from 'media/archive/4.jpg';
import pic6 from 'media/archive/12.jpeg';
import pic7 from 'media/archive/11.jpeg';
import pic8 from 'media/archive/16.jpeg';
import pic9 from 'media/archive/3.jpg';
import pic10 from 'media/archive/8.jpeg';
import pic11 from 'media/archive/13.jpeg';
import pic12 from 'media/archive/10.jpeg';
import pic13 from 'media/archive/20.jpeg';
import pic14 from 'media/archive/5.jpg';
import pic15 from 'media/archive/9.jpeg';
import pic16 from 'media/archive/18.jpeg';
import pic17 from 'media/archive/19.jpeg';
import pic18 from 'media/archive/14.jpeg';
import pic19 from 'media/archive/21.jpeg';
import pic20 from 'media/archive/17.jpeg';
import Image from 'comp/Elements/Image';

const sliderSettings = {
    dots: false,
    centerMode: true,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slides',
};

const SlideShow = ({ openPreviewHandler }) => {

    return (
        <div className="rs-featured-news pt-50 pb-50 md-pt-30 md-pb-30 sm-pb-30">
            <div className="relative">
                <SectionTitle
                    sectionClass="sec-title2 text-center"
                    subtitleClass="sub-title uppercase mb-10"
                    subtitle=""
                    titleClass="title mb-30"
                    title="Ակտուալի արխիվը"
                />
                <Slider {...sliderSettings}>
                    <Image 
                        src={pic1} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic2} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic3} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic4} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic5} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic6} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic7} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic8} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic9} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic10} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic11} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic12} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic13} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic14} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic15} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic16} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic17} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic18} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic19} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic20} 
                        alt="" 
                        className="block d-block w-100 radius-12 b-none border-none" 
                        clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null)}
                    />
                </Slider>
            </div>
        </div>
    );
}

export default SlideShow;