import React, { useRef, useState } from "react";

import Image from '../Elements/Image';
import pic1 from '../../assets/img/archive/1.jpg';
import pic2 from '../../assets/img/archive/2.jpg';
import pic3 from '../../assets/img/archive/15.jpeg';
import pic4 from '../../assets/img/archive/6.jpg';
import pic5 from '../../assets/img/archive/4.jpg';
import pic6 from '../../assets/img/archive/12.jpeg';
import pic7 from '../../assets/img/archive/11.jpeg';
import pic8 from '../../assets/img/archive/16.jpeg';
import pic9 from '../../assets/img/archive/3.jpg';
import pic10 from '../../assets/img/archive/8.jpeg';
import pic11 from '../../assets/img/archive/13.jpeg';
import pic12 from '../../assets/img/archive/10.jpeg';
import pic13 from '../../assets/img/archive/20.jpeg';
import pic14 from '../../assets/img/archive/5.jpg';
import pic15 from '../../assets/img/archive/9.jpeg';
import pic16 from '../../assets/img/archive/18.jpeg';
import pic17 from '../../assets/img/archive/19.jpeg';
import pic18 from '../../assets/img/archive/14.jpeg';
import pic19 from '../../assets/img/archive/21.jpeg';
import pic20 from '../../assets/img/archive/17.jpeg';
import PopupImage from "../Layout/ImagePopup/index.js";

export default function Gallery() {
    const [previewElement, setPreviewElement] = useState(null);
    const [isExpandable, setIsExpandable] = useState(false);
    const contentRef = useRef();

    const toggleImages = () => setIsExpandable(prev => !prev);

    return (
        <div className="gallery sec-title">
            <div className="container">
                <h1 className="title">Արխիվ</h1>
            </div>

            <div 
                ref={contentRef} 
                className={`gallery-wrapper ${isExpandable ? "expanded" : ""}`}
            >
                <div className="image-grid-container"> 
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic1} 
                            alt="Picture 1" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                            className="slim" 
                        />
                        <Image 
                            src={pic2} 
                            alt="Picture 2" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                        />
                    </div>
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic3} 
                            alt="Picture 3" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                        />
                        <Image 
                            src={pic4} 
                            alt="Picture 4" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                            className="slim" 
                        />
                    </div>  
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic5} 
                            alt="Picture 5" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                            className="slim" 
                        />
                        <Image 
                            src={pic6} 
                            alt="Picture 6" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                        />
                    </div>
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic7} 
                            alt="Picture 7" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                        />
                        <Image 
                            src={pic8} 
                            alt="Picture 8" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                            className="slim" 
                        />
                    </div>
                </div>

                <div className="divider">
                    <hr className="cut progress" />
                </div>

                <div className="image-grid-container"> 
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic9} 
                            alt="Picture 9" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                        />
                    </div>
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic10} 
                            alt="Picture 10" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                        />
                    </div>  
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic11} 
                            alt="Picture 11" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                        />
                    </div>
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic12} 
                            alt="Picture 12" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                        />
                    </div>
                </div>

                <div className="divider">
                    <hr className="cut progress" />
                </div>

                <div className="image-grid-container"> 
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic13} 
                            alt="Picture 13" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                            className="slim" 
                        />
                        <Image 
                            src={pic14} 
                            alt="Picture 14" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                        />
                    </div>
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic15} 
                            alt="Picture 15" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                        />
                        <Image 
                            src={pic16} 
                            alt="Picture 16" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                            className="slim" 
                        />
                    </div>  
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic17} 
                            alt="Picture 17" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                            className="slim" 
                        />
                        <Image 
                            src={pic18} 
                            alt="Picture 18" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                        />
                    </div>
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic19} 
                            alt="Picture 19" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                        />
                        <Image 
                            src={pic20} 
                            alt="Picture 20" 
                            isZooming={true}
                            onClick={(evt) => setPreviewElement(evt.target)}
                            className="slim" 
                        />
                    </div>
                </div>

                {
                    previewElement ?
                    <PopupImage onClose={() => setPreviewElement(null)}>
                        <Image 
                            src={previewElement.src} 
                            alt={previewElement.alt} 
                            className="radius-12 b-none border-none item" 
                        />
                    </PopupImage> :
                    null
                }
            </div>

            <div className={`more-section ${!isExpandable ? "card-shadow-top" : ""}`}>
                <h1 className="cursor-pointer" onClick={toggleImages}>
                    <span className="let1">ա</span>
                    <span className="let2">վ</span>
                    <span className="let3">ե</span>
                    <span className="let4">լ</span>
                    <span className="let5">ի</span>
                    <span className="let6">ն</span>
                    {
                        isExpandable ?
                        <span className="let7">&uarr;</span> :
                        <span className="let7">&darr;</span>
                    }
                </h1>
            </div>

        </div>
    )
}