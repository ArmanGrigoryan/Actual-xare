import React, { useState } from "react";

export default function Image({
    src, 
    alt, 
    loading = "lazy",
    className = "", 
    clickHandler, 
    isZooming = false, 
    isPreviewing = false,
    hasDarkCloseIcon = false,
    textDescriptionComponent = null, 
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => setIsExpanded(prev => !prev);

    return (
        <div className={`relative max-height-inherit cursor-pointer ${hasDarkCloseIcon ? "darker" : ""}`} onClick={expandHandler}>
            {
                textDescriptionComponent && isPreviewing ?
                    <div 
                        ref={descriptionElementRef}
                        className={`absolute-description ${isExpanded ? "expanded card-shadow-absolute-description" : "card-shadow-absolute-description-closed"}`}
                    >
                        {
                            isExpanded ?
                            ( <span onClick={closeHandler}>&darr;</span> ) :
                            ( <span onClick={expandHandler}>...</span> )
                        }
                        { textDescriptionComponent }
                    </div> :
                        textDescriptionComponent && !isPreviewing ?
                        (
                            <div className={`absolute-description`}>
                                <span>...</span>
                            </div>
                        ) :
                            null
            }

            <img
                src={src}
                alt={alt}
                className={`${isZooming ? className + " hoverable" : className}`}
                onClick={clickHandler}
                loading={loading}
                decoding="async" 
            />
        </div>
    );
}