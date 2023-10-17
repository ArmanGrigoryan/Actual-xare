import React from 'react';

import brand1 from '../../../assets/img/partners/ANAU.png';
import brand2 from '../../../assets/img/partners/Ador.png';
import brand3 from '../../../assets/img/partners/Breavis.png';
import brand4 from '../../../assets/img/partners/Exterior.png';
import brand5 from '../../../assets/img/partners/Tsiran.png';
import brand6 from '../../../assets/img/partners/Eye-Optics.png';
import brand7 from '../../../assets/img/partners/Mersoft.png';
import brand8 from '../../../assets/img/partners/PAK.png';
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