import React, { useState } from 'react';
import bgImg from 'media/video/video2.jpg';
import ModalVideo from 'comp/Elements/ModalVideo';

const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
}

const Videos = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-video-home9" style={bgStyle}>
            <div className={`img-part media-icon yellow-color ${isOpen ? "overlay" : ""}`}>
                <ModalVideo
                    isOpen={isOpen}
                    closeHandler={toggleModal}
                />

                <span className="popup-videos" onClick={toggleModal}>
                    <i className="fa fa-play"></i>
                </span>
            </div>
        </div>
    );
}

export default Videos;