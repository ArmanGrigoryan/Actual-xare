import React from 'react';
import Slider from "react-slick";
import SectionTitle from '../../components/Common/SectionTitle';
import CourseSingleFive from '../../components/Courses/CourseSingleFive';
import courseImg1 from '../../assets/img/courses/1.jpg';
import courseImg2 from '../../assets/img/courses/2.jpg';
import courseImg3 from '../../assets/img/courses/3.jpg';
import authorImg1 from '../../assets/img/courses/4.jpg';

const sliderSettings = {
    dots: true,
    centerMode: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                dots: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
};

const Courses = () => {

    return (
        <div className="rs-featured-courses pt-100 pb-100 md-pt-76 md-pb-100 sm-pb-70">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 text-center"
                    subtitleClass="sub-title uppercase mb-10"
                    subtitle="Top Courses"
                    titleClass="title mb-30"
                    title="Popular Courses"
                />
                
                <Slider {...sliderSettings}>
                    <CourseSingleFive
                        courseClass= "courses-item radius-12"
                        courseImg= {courseImg1}
                        authorImg= {authorImg1}
                        author='Mark Anthony'
                        courseTitle= "Fitness Development Strategy Buildup Laoreet"
                        coursePrice= "$75"
                        categoryClass= "categories bg1"
                        courseCategory= "Web Developer"
                        userCount= "245"
                        userRating= "05"
                        btnText="Get it Now"
                    /> 
                    <CourseSingleFive
                        courseClass= "courses-item radius-12"
                        courseImg= {courseImg2}
                        authorImg= {authorImg1}
                        author='Rose Glory'
                        courseTitle= "Become a PHP Master and Make Money Fast"
                        coursePrice= "$55"
                        categoryClass= "categories bg2"
                        courseCategory= "Web Developer"
                        userCount= "225"
                        userRating= "05"
                        btnText="Get it Now"
                    /> 
                    <CourseSingleFive
                        courseClass= "courses-item radius-12"
                        courseImg= {courseImg3}
                        authorImg= {authorImg1}
                        author='Steve Jones'
                        courseTitle= "The Art of Black and White Photography"
                        coursePrice= "$45"
                        categoryClass= "categories bg3"
                        courseCategory= "Photography"
                        userCount= "185"
                        userRating= "06"
                        btnText="Get it Now"
                    /> 
                    <CourseSingleFive
                        courseClass= "courses-item radius-12"
                        courseImg= {courseImg2}
                        authorImg= {authorImg1}
                        author='Nicky John'
                        courseTitle= "Learn Python – Interactive Python Tutorial"
                        coursePrice= "$60"
                        categoryClass= "categories bg2"
                        courseCategory= "Web Developer"
                        userCount= "145"
                        userRating= "03"
                        btnText="Get it Now"
                    /> 
                </Slider>
            </div>
        </div>
    );
}

export default Courses;