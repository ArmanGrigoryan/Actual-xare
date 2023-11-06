import React from 'react';
import CoursePart from './CourseSection';
import ScrollToTop from 'comp/Common/ScrollTop';
import CourseReviewsWithPreview from './CourseReviews';

const CourseMain = () => {

    return (
        <React.Fragment>
            <CoursePart />
            <CourseReviewsWithPreview />
			<ScrollToTop
				scrollClassName="scrollup orange-color"
			/>
        </React.Fragment>
    )
}

export default CourseMain;