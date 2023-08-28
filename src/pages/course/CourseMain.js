import React from 'react';
import CoursePart from './CourseSection';
import ScrollToTop from '../../components/Common/ScrollTop';

const CourseMain = () => {

    return (
        <React.Fragment>
            <CoursePart />
			<ScrollToTop
				scrollClassName="scrollup orange-color"
			/>
        </React.Fragment>
    )
}

export default CourseMain;