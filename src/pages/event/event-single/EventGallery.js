import React from 'react';
import MasterGallery from 'comp/Gallery/Master';
import MasterTwoGallery from 'comp/Gallery/MasterTwo';
import TheVoiceOfHRGallery from 'comp/Gallery/TheVoiceOfHR';
import TheVoiceOfHRTwoGallery from 'comp/Gallery/TheVoiceOfHRTwo';
import HRManagementGallery from 'comp/Gallery/HRManagement';
import ArchiveGallery from 'comp/Gallery/Archive';
  
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