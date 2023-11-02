import React, { useState } from "react";

export default function Image({
    src, 
    alt, 
    className, 
    onClick, 
    isZooming = false, 
    textDescriptionComponent = null, 
    isPreviewing = false 
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => setIsExpanded(prev => !prev);

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

            {
                isPreviewing ?
                <div className={`absolute-description ${isExpanded ? "expanded" : ""}`}>
                    {
                        isExpanded ?
                        <span onClick={toggleDescription}>&darr;</span> :
                        <span onClick={toggleDescription}>...</span>
                    }
                    { textDescriptionComponent }
                </div> :
                null
            }

        </div>
    );
}