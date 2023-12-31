import React, { useRef, useState } from "react";

export default function Image({
    src, 
    alt, 
    className, 
    clickHandler, 
    isZooming = false, 
    textDescriptionComponent = null, 
    isPreviewing = false 
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const descriptionElementRef = useRef();

    const closeHandler = (evt) => {
        evt.stopPropagation();

        descriptionElementRef.current.scrollTo(0, 0);
        setIsExpanded(false);
    }

    const expandHandler = () => setIsExpanded(true);

    return (
        <div className="relative max-height-inherit cursor-pointer" onClick={expandHandler}>

            {
                textDescriptionComponent && isPreviewing ?
                    <div 
                        ref={descriptionElementRef}
                        className={`absolute-description ${isExpanded ? "expanded card-shadow-absolute-description" : "card-shadow-absolute-description-closed"}`}
                    >
                        {
                            isExpanded ?
                            <span onClick={closeHandler}>&darr;</span> :
                            <span onClick={expandHandler}>...</span>
                        }
                        { textDescriptionComponent }
                    </div> :
                textDescriptionComponent && !isPreviewing ?
                    <div className={`absolute-description`}>
                        <span>...</span>
                    </div> :
                    null
            }
            <img
                src={src}
                alt={alt}
                className={isZooming ? className + " hoverable" : className}
                onClick={clickHandler}
                decoding="async" 
                loading="lazy"
            />

        </div>
    );
}