import React from 'react';
import CourseDetailsPart from './CourseDetailsPart';
import ScrollToTop from '../../../components/Common/ScrollTop';

const CourseDetailsMain = () => {

    return (
        <React.Fragment>
            <CourseDetailsPart />
			<ScrollToTop scrollClassName="scrollup orange-color" />
        </React.Fragment>
    )
}

export default CourseDetailsMain;