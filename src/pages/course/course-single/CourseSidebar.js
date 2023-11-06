import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import videoImg from 'media/about/about-video-bg2.png';

const CourseSidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div className="inner-column">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='OmLNs6zQIHo' onClose={toggleModal} />
            <div className="intro-video media-icon orange-color2">
                <img loading="lazy" className="video-img radius-12 w-100" src={videoImg} alt="Video" />
                <Link to="" className="popup-videos" onClick={toggleModal} >
                    <i className="fa fa-play"></i>
                </Link>
            </div>
            <div className="course-features-info radius-12">
                <ul>
                    <li className="lectures-feature">
                        <i className="fa fa-files-o"></i>
                        <span className="label">Դասախոսություններ</span>
                        <span className="value">3</span>
                    </li>
                    
                    <li className="quizzes-feature">
                        <i className="fa fa-puzzle-piece"></i>
                        <span className="label">Վիկտորինաներ</span>
                        <span className="value">1</span>
                    </li>
                    
                    <li className="duration-feature">
                        <i className="fa fa-clock-o"></i>
                        <span className="label">Տևողություն</span>
                        <span className="value">{`5    շաբաթ`}</span>
                    </li>
                    
                    <li className="students-feature">
                        <i className="fa fa-users"></i>
                        <span className="label">Ուսանողներ</span>
                        <span className="value">21</span>
                    </li>
                    
                    <li className="assessments-feature">
                        <i className="fa fa-check-square-o"></i>
                        <span className="label">Գնահատականներ</span>
                        <span className="value">Այո</span>
                    </li>
                </ul>
            </div>                
            <div className="btn-part radius-12">
                <a className="btn readon orange"><span className='h5 mr-2'>50000</span> ՀՀ դրամ</a>
                <a className="btn readon orange-transparent">Գրանցվել հիմա</a>
            </div>
        </div>
    );
}

export default CourseSidebar;