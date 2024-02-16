import React from 'react';
import Slider from "react-slick";

import brandLogo1 from '../../../assets/img/brand/1.png';
import brandLogo2 from '../../../assets/img/brand/2.png';
import brandLogo3 from '../../../assets/img/brand/3.png';
import brandLogo4 from '../../../assets/img/brand/4.png';
import brandLogo5 from '../../../assets/img/brand/5.png';
import brandLogo6 from '../../../assets/img/brand/6.png';

const BrandThree = (props) => {
    const { brandBg, brandClass } = props;

    const brandBgStyle = {
        backgroundImage: `url(${brandBg ? brandBg : ''})`
    }

    const brandBgDefaultStyle = {
        backgroundColor: 'transparent'
    }

    const sliderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

            <div className="marquee">
                <div>
                    <BrandItem src={brand1} />
                    <BrandItem src={brand2} />
                    <BrandItem src={brand3} />
                    <BrandItem src={brand4} />
                    <BrandItem src={brand5} />
                    <BrandItem src={brand6} />
                    <BrandItem src={brand7} />
                    <BrandItem src={brand8} />
                    <BrandItem src={brand1} />
                    <BrandItem src={brand2} />
                    <BrandItem src={brand3} />
                    <BrandItem src={brand4} />
                    <BrandItem src={brand5} />
                    <BrandItem src={brand6} />
                    <BrandItem src={brand7} />
                    <BrandItem src={brand8} />
                    <BrandItem src={brand1} />
                    <BrandItem src={brand2} />
                    <BrandItem src={brand3} />
                    <BrandItem src={brand4} />
                    <BrandItem src={brand5} />
                    <BrandItem src={brand6} />
                    <BrandItem src={brand7} />
                    <BrandItem src={brand8} />
                </div>
            </div>
        </div>
    );
}

export default BrandThree;