import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const SliderDefault = () => {
    const videoRef = useRef();

    useLayoutEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <React.Fragment>
            <div className="rs-slider main-home">
                <div className="slider-content slide1">
                    <video ref={videoRef} autoPlay muted loop id="myVideo1">
                        <source src="https://www.shutterstock.com/shutterstock/videos/1062177724/preview/stock-footage-happy-family-people-group-pull-hands-to-the-sun-teamwork-silhouette-people-party-dancing.webm" type="video/mp4" />
                    </video>
                    <div className="container">
                        <div className="content-part position-relative">
                            <div className="sl-sub-title">Սկսիր հենց հիմա</div>
                            <h1 className="sl-title">Ամրապնդիր մասնագիտական կարողություններդ</h1>
                            <div className="sl-btn">
                                <Link 
                                    className="readon orange-btn main-home" 
                                    target='_blank' 
                                    to={{ pathname: "https://shorturl.at/jBEPW" }}
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