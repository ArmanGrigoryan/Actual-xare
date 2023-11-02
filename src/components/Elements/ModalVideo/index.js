import React from "react";
import useResponsive from 'hooks/useResponsive';
import { DisplaySize } from "helpers";
import Rodal from 'rodal';

const ModalVideo = ({
    isOpen,
    closeHandler,
    videoUrl = "https://www.youtube.com/embed/yb9Qrzx1eMU?autoplay=1&start=0&vq=hd720",
    videoTitle = "Ակտուալի մասին"
}) => {

    const displaySize = useResponsive();

    return (
        <Rodal
            visible={isOpen}
            onClose={closeHandler}
            customStyles={{
                maxWidth: displaySize === DisplaySize.Tablet ? 
                    "95vw" :
                        displaySize === DisplaySize.MobileS || displaySize === DisplaySize.MobileM ? 
                        "100vw" :
                            "80vw",
                maxHeight: "65vh",
                zIndex: 1000,
                background: "transparent",
            }}
            enterAnimation="door"
            leaveAnimation="door"
            showCloseButton={false}
            className='z-index-1000 w-100 h-100'
            width={1920}
            height={1920}
        >
            <iframe
                className='w-100 h-100 radius-20'
                width={"100%"}
                height={"100%"}
                src={isOpen ? videoUrl : ""}
                title={videoTitle}
                allowFullScreen={true}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </Rodal>
    )
}

export default ModalVideo