import React from 'react';
import Marquee from 'react-fast-marquee';

import brand1 from 'media/partners/ANAU.png';
import brand2 from 'media/partners/Ador.png';
import brand3 from 'media/partners/Breavis.png';
import brand4 from 'media/partners/Exterior.png';
import brand5 from 'media/partners/Tsiran.png';
import brand6 from 'media/partners/Eye-Optics.png';
import brand7 from 'media/partners/Mersoft.png';
import brand8 from 'media/partners/PAK.png';
import BrandItem from './Item';

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
            <h2 className='title'>Ակտուալի գործընկերները</h2>

            <Marquee>
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
            </Marquee>
        </div>
    );
}

export default BrandThree;