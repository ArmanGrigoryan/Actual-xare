import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import SectionTitle from 'comp/Common/SectionTitle';

const AboutVideo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-cta style2">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='FMvA5fyZ338' onClose={toggleModal} />
            <div className="partition-bg-wrap inner-page">
                <div className="container">
                    <div className="row y-bottom">
                        <div className="col-lg-6 pb-50 md-pt-30 md-pb-30 d-flex align-items-center min-height-400">
                            <div className="video-wrap w-100">
                                <a className="popup-videos w-100" onClick={toggleModal}>
                                    <i className="fa fa-play"></i> 
                                    <h5 className="title mb-0 ml-20 mobile-fade-full-width width-30-100">Կատարեք շրջագայություն Ակտուալում</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 ml-25 pl-120 pt-50 pb-50 md-pl-10 md-pt-0 md-pb-30">
                            <SectionTitle
                                sectionClass="sec-title mb-40"
                                titleClass="title mb-16"
                                title="2024 Ընդունելությունը բաց է"
                                descClass="desc"
                                description="𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ն կօգնի Ձեր բիզնեսին նոր և պրոֆեսիոնալ մասնագետների հավաքագրման և առաջընթացի ապահովման գործում:"
                                detailedDescription="Մեր փորձառու մասնագետներից բաղկացած թիմը մշտապես կլինի Ձեր բիզնեսի կողքին՝ համալրելով Ձեր կազմակերպությունը ոչ միայն որակյալ և մրցունակ մասնագետներով, այլև գրագետ և ճիշտ բրենդավորելով Ձեր ընկերությունն աշխատաշուկայում՝ որպես գործատու"
                            />
                            <div className="btn-part">
                                <Link className="readon orange" to="/course">Դիմել հիմա</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutVideo;