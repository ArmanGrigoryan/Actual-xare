import React from "react";

export default function Image(props) {
    const { src, alt, className, onClick, isZooming = false } = props;

    return (
        <div className="relative max-height-inherit">
            <img
                src={src}
                alt={alt}
                className={isZooming ? className + " hoverable" : className}
                onClick={onClick}
                decoding="async" 
                loading="lazy"
            />

            {/* {
                isZooming ?
                <span className="zoom-icon-absolute">
                    <i className="fa fa-search-plus"></i>
                </span> :
                null
            } */}
        </div>
    );
}