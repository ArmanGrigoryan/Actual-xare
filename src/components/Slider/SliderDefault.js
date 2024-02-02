import React, { useEffect, useRef } from 'react';
import TrainingVideo from 'media/video/laura-virabyan-training.mp4';
import VideoPoster from 'media/video/laura.png';
import { Link } from 'react-router-dom';

const SliderDefault = () => {
    const videoRef = useRef();

    useEffect(() => {
        videoRef.current && videoRef.current.play();
        document.getElementById('slider-bg-video').play();
    }, []);

    return (
        <React.Fragment>
            <div className="rs-slider main-home">
                <div className="slider-content slide1">
                    <video ref={videoRef} poster={VideoPoster} autoPlay muted loop id="slider-bg-video">
                        <source src={TrainingVideo} type="video/mp4" />
                    </video>

                    <div className="container">
                        <div className="content-part position-relative">
                            <h1 className="sl-title">Ակտուալ Ձեր բիզնեսի համար</h1>
                            <h2 className='sl-subtitle width-50-100 fade-in-mobile anime white-color mb-30 sm-mb-10'>Սովորեք, ամրապնդեք, զարգացրեք Ձեր բիզնեսը</h2>

                            <div className="sl-btn">
                                <Link
                                    className="readon white-transparent large-scale orange-btn main-home mt-20 p-40 cursor-pointer" 
                                    to="/course"
                                >
                                    Գրանցվել
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SliderDefault;