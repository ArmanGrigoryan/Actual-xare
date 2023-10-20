import React, { useLayoutEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import SectionTitle from '../../components/Common/SectionTitle';

const AboutVideo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoRef = useRef();

    const toggleModal = () => setIsOpen(!isOpen);

    useLayoutEffect(() => {
        console.log(videoRef)
        // videoRef.current.play();
    }, [])

    return (
        <div className="rs-cta style2">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='FMvA5fyZ338' onClose={toggleModal} />
            <div className="partition-bg-wrap inner-page">
                <div className="container">
                    <div className="row y-bottom">
                        <div className="col-lg-6 pb-50 md-pt-150 md-pb-150">
                            <div className="video-wrap">
                                <a className="popup-videos" onClick={toggleModal}><i className="fa fa-play"></i> <h5 className="title mb-0 width-30-100">Կատարեք շրջագայություն Ակտուալում</h5></a>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-150 pt-134 pb-150 md-pl-14 md-pt-0 md-pb-70">
                            <SectionTitle
                                sectionClass="sec-title mb-40"
                                titleClass="title mb-16"
                                title="2024 Ընդունելությունը բաց է"
                                descClass="desc"
                                description="𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ն կօգնի Ձեր բիզնեսին նոր և պրոֆեսիոնալ մասնագետների հավաքագրման և առաջընթացի ապահովման գործում:"
                                detailedDescription="Մեր փորձառու մասնագետներից բաղկացած թիմը մշտապես կլինի Ձեր բիզնեսի կողքին՝ համալրելով Ձեր կազմակերպությունը ոչ միայն որակյալ և մրցունակ մասնագետներով, այլև գրագետ և ճիշտ բրենդավորելով Ձեր ընկերությունն աշխատաշուկայում՝ որպես գործատու"
                            />
                            <div className="btn-part">
                                <Link className="readon orange" to="/courses">Դիմել հիմա</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutVideo;