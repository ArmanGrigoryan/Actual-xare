import React, { useContext } from 'react';
import { CourseContext } from 'app/App';
import useFade from 'hooks/useFade';
import HtmlText from 'comp/Elements/HtmlText';

const OverviewPart = () => {
    const { course } = useContext(CourseContext);
    const { refElement: animateRef } = useFade(false);

    return (
        <div className="content white-bg pt-30 bottom-radius-12" ref={animateRef}>
            <div className="course-overview">
                <div className="inner-box">
                    <h4>{ course.title }</h4>

                    <HtmlText html={course.html} />
                </div>
            </div>
        </div>
    );
}

export default OverviewPart;