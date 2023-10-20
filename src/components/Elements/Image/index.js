import React from "react";

export default function Image(props) {
    const { src, alt, className, onClick } = props;

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onClick={onClick}
            decoding="async" 
            loading="lazy"
        />
    );
}