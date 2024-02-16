import React, { useState, useRef } from "react";
import PopupImage from "comp/Layout/ImagePopup";
import Image from "comp/Elements/Image";
import { AnimationInterval, FadeAnimationItemsReversed, ForwardAnimationParams } from "helpers";

export default function withPreviewPopup(Component) {
    return function withPreviewPopupComponent({ ...props }) {
        const [previewElement, setPreviewElement] = useState(null);
        const [isElementPreviewing, setIsElementPreviewing] = useState(false);
        const [activeComponent, setActiveComponent] = useState(null);
        const [hasDarkCloseIcon, setHasDarkCloseIcon] = useState(null);

        const ElementRef = useRef();

        const openPreviewHandler = (evt, comp, darkIcon) => {
            setPreviewElement(evt.target);
            setIsElementPreviewing(true);
            setActiveComponent(comp);
            setHasDarkCloseIcon(darkIcon);
        }

        const closePreviewHandler = () => {
            Promise.resolve(ElementRef.current.animate(FadeAnimationItemsReversed, ForwardAnimationParams))
            .then(res => {
                if (res.finished) setTimeout(() => {
                    setPreviewElement(null);
                    setIsElementPreviewing(false);
                    setActiveComponent(null);
                }, AnimationInterval)
            });
        }

        return (
            <div className="relative">
                <Component {...props} openPreviewHandler={openPreviewHandler} />

                {
                    previewElement ?
                    <PopupImage 
                        ref={ElementRef}
                        onClose={closePreviewHandler}
                    >
                        <Image
                            isPreviewing={isElementPreviewing}
                            textDescriptionComponent={<>
                                <p>𝐀𝐜𝐭𝐮𝐚𝐥 𝐭𝐫𝐚𝐢𝐧𝐢𝐧𝐠 𝐜𝐞𝐧𝐭𝐞𝐫-ում, թե՛ սկսնակները, թե՛ մասնագետները հնարավորություն ունեն ստանալու մարդկային ռեսուրսների կառավարման պրակտիկ գիտելիքներ, որը միանշանակ նպաստելու է մասնագետի կայացմանը և բիզնեսի զարգացմանը 🙌📈</p>
                                <p>Մեր նոր՝ ես՝ մարդկային ռեսուրսների կառավարիչ ամենապահանջված դասընթացին գրանցվելու համար կարող եք գրանցվել հղումով bit.ly/3EW02m9 կամ գրել մեզ 🙌</p>
                                <hr />
                                <p className="mb-0">📞 Հեռ․ համար՝ 044 303 028</p>
                                <p className="mb-0">🌐 Մեր հասցեն՝ Տերյան 74</p>
                            </>}
                            src={previewElement.src} 
                            alt={previewElement.alt} 
                            hasDarkCloseIcon={hasDarkCloseIcon}
                            className="radius-12 b-none border-none item" 
                        />
                    </PopupImage> :
                    null
                }
            </div>
        )
    }
}