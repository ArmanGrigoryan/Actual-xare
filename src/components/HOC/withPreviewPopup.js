import React, { useState } from "react";
import PopupImage from "comp/Layout/ImagePopup";
import Image from "comp/Elements/Image";

export default function withPreviewPopup(Component) {
    return function withPreviewPopupComponent({ ...props }) {
        const [previewElement, setPreviewElement] = useState(null);
        const [isElementPreviewing, setIsElementPreviewing] = useState(false);
        const [activeComponent, setActiveComponent] = useState(null);

        const openPreviewHandler = (evt, comp) => {
            setPreviewElement(evt.target);
            setIsElementPreviewing(true);
            setActiveComponent(comp);
        }

        const closePreviewHandler = () => {
            setPreviewElement(null);
            setIsElementPreviewing(false);
            setActiveComponent(null);
        }

        return (
            <div className="relative">
                <Component {...props} openPreviewHandler={openPreviewHandler} />

                {
                    previewElement ?
                    <PopupImage 
                        onClose={closePreviewHandler}
                    >
                        <Image
                            isPreviewing={isElementPreviewing}
                            textDescriptionComponent={activeComponent}
                            src={previewElement.src} 
                            alt={previewElement.alt} 
                            className="radius-12 b-none border-none item" 
                        />
                    </PopupImage> :
                    null
                }
            </div>
        )
    }
}