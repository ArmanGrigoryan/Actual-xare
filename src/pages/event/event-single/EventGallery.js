import React from 'react';
import { 
    TheVoiceOfHRGallery,
    TheVoiceOfHRTwoGallery,
    MasterGallery,
    MasterTwoGallery,
    HRManagementGallery,
    ArchiveGallery,
} from 'comp/Gallery';

const EventGallery = (props) => {

    return (
        <div>
            {
                props.type === "master" ?
                <MasterGallery {...props} /> :
                    props.type === "masterTwo" ?
                    <MasterTwoGallery {...props} /> :
                        props.type === "hrManagement" ?
                        <HRManagementGallery {...props} /> :
                            props.type === "theVoiceOfHr" ?
                            <TheVoiceOfHRGallery {...props} /> :
                                props.type === "theVoiceOfHrTwo" ?
                                <TheVoiceOfHRTwoGallery {...props} /> :
                                    props.type === "archive" ?
                                    <ArchiveGallery {...props} /> :
                                        null
            }
        </div>
    );
}

export default EventGallery;