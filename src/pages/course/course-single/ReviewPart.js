import Slider from "react-slick";
import SectionTitle from "comp/Common/SectionTitle";
import withPreviewPopup from "comp/HOC/withPreviewPopup";
import Image from "comp/Elements/Image";
import HtmlText from 'comp/Elements/HtmlText';
import { useQuery } from 'react-query';
import { getReviews } from 'api';

const sliderSettings = {
    dots: true,
    centerMode: false,
    infinite: true,
    arrows: true,
    lazyLoad: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                dots: false,
            }
        }
    ]
};

const CourseReviews = ({ openPreviewHandler }) => {
    const { data, isFetched } = useQuery("reviews", getReviews);

    return (
        <div className="content white-bg">
            <div className="rs-course-reviews rs-featured-news pt-30 pb-70 md-pt-30 md-pb-30">
                <div className="container-fluid">
                    <SectionTitle
                        sectionClass="sec-title2 text-center"
                        subtitleClass="sub-title uppercase mb-10"
                        subtitle=""
                        titleClass="title mb-30"
                        title="Ակտուալ Հաղորդակցություն"
                    />

                    <Slider {...sliderSettings}>
                        {
                            isFetched ?
                            data.map(({ id, logo, alt, html }) => {
                                const textDescriptionComponent = <HtmlText html={html} />;

                                return (
                                    <Image
                                        key={id}
                                        src={logo} 
                                        alt={alt} 
                                        className="block d-block w-100 radius-12 b-none border-none coverable" 
                                        clickHandler={evt => openPreviewHandler(evt, textDescriptionComponent)}
                                        textDescriptionComponent={textDescriptionComponent}
                                        isZooming={true}
                                    />
                                )
                            }) :
                            null
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

const ReviewPart = withPreviewPopup(CourseReviews);

export default ReviewPart;