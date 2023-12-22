import React from 'react';
import TrainingVideo from 'media/video/laura-virabyan-training.mp4';
import VideoPoster from 'media/video/laura.png';

const SliderDefault = () => {

    return (
        <React.Fragment>
            <div className="rs-slider main-home">
                <div className="slider-content slide1">
                    <video poster={VideoPoster} autoPlay muted loop id="slider-bg-video">
                        <source src={TrainingVideo} type="video/mp4" />
                    </video>
                    <div className="container">
                        <div className="content-part position-relative">
                            <h1 className="sl-title">Ամրապնդիր մասնագիտական կարողություններդ</h1>
                            <h2 className='sl-subtitle width-50-100 fade-in-mobile anime white-color mb-30'>Մենք կսովորեցնենք հոգ տանել Ձեր բիզնեսի մասին</h2>
                            <div className="sl-btn">
                                <a 
                                    className="readon orange-btn white-transparent large-scale main-home p-40 cursor-pointer" 
                                    target='_blank' 
                                    href="https://rb.gy/8cbai"
                                >
                                    Գրանցվել
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SliderDefault;