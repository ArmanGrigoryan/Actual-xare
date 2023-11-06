import React from "react";
import useAnimateOnMount from "hooks/useAnimateOnMount";

export default function PopupImage(props) {
    const { refElement: animateRef } = useAnimateOnMount();
    const { children, onClose } = props;

    return (
        <>
            <div className="image-preview-modal" ref={animateRef}>
                <div className="image-preview-modal-container">
                    { children }

                    <button className='close-icon' onClick={onClose}>
                        <i className='fa fa-close close-icon'></i>
                    </button>
                </div>
            </div>
        </>
    );
}