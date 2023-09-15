import React, {   useLayoutEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import SectionTitle from '../../components/Common/SectionTitle';

const AboutVideo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoRef = useRef();

    const openModal = () => setIsOpen(!isOpen);

    useLayoutEffect(() => {
        console.log(videoRef)
        // videoRef.current.play();
    }, [])

    return (
        <div className="rs-cta style2">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='FMvA5fyZ338' onClose={() => { openModal(); }} />
            <div className="partition-bg-wrap inner-page">
                {/* <video id="background-video" autoPlay loop muted ref={videoRef}>
                    <source src="https://www.pexels.com/video/wood-sea-landscape-nature-3971351/" type="video/mp4" />
                </video> */}
                <div className="container">
                    <div className="row y-bottom">
                        <div className="col-lg-6 pb-50 md-pt-150 md-pb-150">
                            <div className="video-wrap">
                                <a className="popup-videos" onClick={() => { openModal(); }}><i className="fa fa-play"></i> <h4 className="title mb-0 width-30-100">Կատարեք տեսաշրջագայություն Ակտուալ-ում</h4></a>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-62 pt-134 pb-150 md-pl-14 md-pt-0 md-pb-70">
                            <SectionTitle
                                sectionClass="sec-title mb-40"
                                titleClass="title mb-16"
                                title="2023 Ընդունելությունը բաց է"
                                descClass="desc"
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis."
                            />
                            <div className="btn-part">
                                <Link className="readon orange" to="/contact">Դիմել հիմա</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutVideo;