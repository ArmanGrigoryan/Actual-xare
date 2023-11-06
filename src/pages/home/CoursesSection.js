import React from 'react';
import SectionTitle from 'comp/Common/SectionTitle';
import CourseSingle from 'comp/Courses/CourseSingle';
import image1 from 'media/courses/main-home/1.jpg';
import image2 from 'media/courses/main-home/2.jpg';
import image3 from 'media/courses/2.jpg';
import image4 from 'media/courses/4.jpg';
import image5 from 'media/courses/5.jpg';
import image6 from 'media/courses/6.jpg';

const Courses = () => {

    return (
        <div className="rs-popular-courses main-home event-bg pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-44"
                    subtitleClass="sub-title"
                    subtitle="Select Courses"
                    titleClass="title black-color"
                    title="Explore Popular Courses"
                />
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingle
                            itemClass="courses-item radius-12"
                            image={image1}
                            title="Fitness Development Strategy Buildup Laoreet"
                            pricing="Ակցիա"
                            studentQuantity="25"
                            lessonsQuantity="6"
                            courseLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingle
                            itemClass="courses-item radius-12"
                            image={image2}
                            title="Artificial Intelligence Fundamental Startup Justo"
                            pricing="Ակցիա"
                            studentQuantity="33"
                            lessonsQuantity="4"
                            courseLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <CourseSingle
                            itemClass="courses-item radius-12"
                            image={image3}
                            title="Computer Science Startup Varius et Commodo"
                            pricing="Ակցիա"
                            studentQuantity="21"
                            lessonsQuantity="7"
                            courseLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 md-mb-30">
                        <CourseSingle
                            itemClass="courses-item radius-12"
                            image={image4}
                            title="Testy & Delicious Food Recipes for Lunch Tellus"
                            pricing="Ակցիա"
                            studentQuantity="45"
                            lessonsQuantity="12"
                            courseLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 sm-mb-30">
                        <CourseSingle
                            itemClass="courses-item radius-12"
                            image={image5}
                            title="Lawyer Advance Mental Simulator Handle Nulla"
                            pricing="Ակցիա"
                            studentQuantity="41"
                            lessonsQuantity="14"
                            courseLink="#"
                        />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <CourseSingle
                            itemClass="courses-item radius-12"
                            image={image6}
                            title="Computer Fundamentals Basic Startup Ultricies"
                            pricing="Ակցիա"
                            studentQuantity="23"
                            lessonsQuantity="5"
                            courseLink="#"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;