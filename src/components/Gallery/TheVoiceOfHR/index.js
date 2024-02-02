import React, { useRef, useState } from "react";
import Image from 'comp/Elements/Image';
import pic1 from 'media/The_Voice_Of_HR/1.jpg';
import pic2 from 'media/The_Voice_Of_HR/2.jpg';
import pic3 from 'media/The_Voice_Of_HR/3.jpg';
import pic4 from 'media/The_Voice_Of_HR/4.jpg';
import pic5 from 'media/The_Voice_Of_HR/5.jpg';
import pic6 from 'media/The_Voice_Of_HR/6.jpg';
import pic7 from 'media/The_Voice_Of_HR/7.jpg';
import pic8 from 'media/The_Voice_Of_HR/8.jpg';
import pic9 from 'media/The_Voice_Of_HR/9.jpg';
import pic10 from 'media/The_Voice_Of_HR/10.jpg';
import pic11 from 'media/The_Voice_Of_HR/11.jpg';
import pic12 from 'media/The_Voice_Of_HR/12.jpg';

export default function TheVoiceOfHRGallery({ openPreviewHandler }) {
    const [isExpandable, setIsExpandable] = useState(false);
    const contentRef = useRef();

    const toggleImages = () => setIsExpandable(prev => !prev);

    return (
        <div className="gallery sec-title">
            <div className="container">
                <h3 className="sub-title orange">Դարձիր Ակտուալի մի մասը</h3>
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
                            clickHandler={evt => openPreviewHandler(evt, null)}
                        />
                        <Image 
                            src={pic2} 
                            alt="Picture 2" 
                            isZooming={true}
                            clickHandler={evt => openPreviewHandler(evt, null)}
                        />
                    </div>
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic3} 
                            alt="Picture 3" 
                            isZooming={true}
                            clickHandler={evt => openPreviewHandler(evt, null)}
                        />
                        <Image 
                            src={pic4} 
                            alt="Picture 4" 
                            isZooming={true}
                            clickHandler={evt => openPreviewHandler(evt, null)}
                        />
                    </div>  
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic7} 
                            alt="Picture 7" 
                            isZooming={true}
                            clickHandler={evt => openPreviewHandler(evt, null)}
                        />
                        <Image 
                            src={pic6} 
                            alt="Picture 6" 
                            isZooming={true}
                            clickHandler={evt => openPreviewHandler(evt, null)}
                        />
                    </div>
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic5} 
                            alt="Picture 5" 
                            isZooming={true}
                            clickHandler={evt => openPreviewHandler(evt, null)}
                        />
                        <Image 
                            src={pic8} 
                            alt="Picture 8" 
                            isZooming={true}
                            clickHandler={evt => openPreviewHandler(evt, null)}
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
                            clickHandler={evt => openPreviewHandler(evt, null)}
                        />
                    </div>
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic10} 
                            alt="Picture 10" 
                            isZooming={true}
                            clickHandler={evt => openPreviewHandler(evt, null)}
                        />
                    </div>  
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic11} 
                            alt="Picture 11" 
                            isZooming={true}
                            clickHandler={evt => openPreviewHandler(evt, null)}
                        />
                    </div>
                    <div className="image-grid-container-column">
                        <Image 
                            src={pic12} 
                            alt="Picture 12" 
                            isZooming={true}
                            clickHandler={evt => openPreviewHandler(evt, null)}
                        />
                    </div>
                </div>
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