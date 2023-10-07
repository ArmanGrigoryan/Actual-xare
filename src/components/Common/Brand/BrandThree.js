import React from 'react';
import Marquee from "react-fast-marquee";

import brand1 from '../../../assets/img/partners/ANAU.png';
import brand2 from '../../../assets/img/partners/Ador.png';
import brand3 from '../../../assets/img/partners/Breavis.png';
import brand4 from '../../../assets/img/partners/Exterior.png';
import brand5 from '../../../assets/img/partners/Tsiran.png';
import brand6 from '../../../assets/img/partners/Eye-Optics.png';
import brand7 from '../../../assets/img/partners/Mersoft.png';
import brand8 from '../../../assets/img/partners/PAK.png';

const BrandThree = (props) => {
    const { brandBg, brandClass } = props;

    const brandBgStyle = {
        backgroundImage: `url(${brandBg ? brandBg : ''})`
    }

    const brandBgDefaultStyle = {
        backgroundColor: 'transparent'
    }

    return (
        <div className={brandClass ? brandClass : 'rs-partner style2 pt-120 md-pt-80'} style={brandBg ? brandBgStyle : brandBgDefaultStyle}>
            <h2 className='text-center mb-40'>Ակտուալի գործընկերները</h2>
            
            <Marquee>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand1} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand2} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand3} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand4} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand5} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand6} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand7} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand8} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand1} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand2} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand3} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand4} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand5} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand6} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand7} alt="" />
                    </div>
                </div>
                <div className="partner-item">
                    <div className="logo-img">
                        <img loading="lazy" src={brand8} alt="" />
                    </div>
                </div>
            </Marquee>
        </div>
    );
}

export default BrandThree;